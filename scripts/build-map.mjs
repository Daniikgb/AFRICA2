import fs from 'node:fs/promises';
import path from 'node:path';
import https from 'node:https';

// Development-time asset preparation only. The delivered application has no network dependency.
const root = path.resolve(import.meta.dirname, '..');
const ids = 'DZ AO BJ BW BF BI CV CM TD KM CG CD CI DJ EG GQ ER SZ ET GA GM GH GN GW KE LS LR LY MG MW ML MA MU MR MZ NA NE NG UG CF RW ST SN SC SL SO ZA SS SD TZ TG TN ZM ZW'.split(' ');
const sourcePath=path.join(root,'data/world-source.tmp.json');
try { await fs.access(sourcePath); }
catch { await download('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson',sourcePath); }
const raw = JSON.parse(await fs.readFile(sourcePath, 'utf8'));
const override = {SZ:'Esuatini',CV:'Cabo Verde',CI:'Costa de Marfil',CG:'República del Congo',CD:'República Democrática del Congo',CF:'República Centroafricana',ST:'Santo Tomé y Príncipe',EH:'Sáhara Occidental'};
const rounded = v => Array.isArray(v) ? v.map(rounded) : Math.round(v * 10000) / 10000;
const pointKey = p => p.join(',');

// Natural Earth separates Somaliland for its de facto map policy. Dissolve its shared
// boundary into Somalia so the educational map displays the 54 sovereign states.
function joinAdjacent(first, second) {
  const rings = [...(first.type === 'Polygon' ? [first.coordinates] : first.coordinates), ...(second.type === 'Polygon' ? [second.coordinates] : second.coordinates)];
  const edges = new Map();
  for (const polygon of rings) for (const ring of polygon) for(let i=0;i<ring.length-1;i++) {
    const a = ring[i], b = ring[i+1];
    const key = pointKey(a)+'|'+pointKey(b), reverse = pointKey(b)+'|'+pointKey(a);
    if (edges.has(reverse)) edges.delete(reverse); else edges.set(key,[a,b]);
  }
  const start = new Map();
  for(const [key,edge] of edges) start.set(pointKey(edge[0]),key);
  const output=[];
  while(edges.size) {
    const [key,[a,b]] = edges.entries().next().value;
    const ring=[a,b]; edges.delete(key); let end=b;
    while(pointKey(end)!==pointKey(a)) {
      const nextKey=start.get(pointKey(end));
      if(!nextKey || !edges.has(nextKey)) throw new Error('Unable to dissolve Somalia boundary');
      const next=edges.get(nextKey); edges.delete(nextKey); end=next[1]; ring.push(end);
    }
    output.push([ring]);
  }
  return output.length===1 ? {type:'Polygon',coordinates:output[0]} : {type:'MultiPolygon',coordinates:output};
}
const features = [...ids,'EH'].map(id => {
  const f=raw.features.find(f=>f.properties.ISO_A2===id);
  if(!f) throw new Error('Missing '+id);
  let geometry = structuredClone(f.geometry);
  if(id==='SO') geometry=joinAdjacent(geometry,raw.features.find(f=>f.properties.ADMIN==='Somaliland').geometry);
  geometry.coordinates=rounded(geometry.coordinates);
  return {type:'Feature',properties:{id,name:override[id]||f.properties.NAME_ES,label:[f.properties.LABEL_X,f.properties.LABEL_Y],disputed:id==='EH'},geometry};
});
const output={type:'FeatureCollection',source:'Natural Earth 1:50m Admin 0 Countries, public domain',features};
await fs.writeFile(path.join(root,'data/africa-geo.js'),'/* Natural Earth 1:50m; public domain. See SOURCES-MAP.md. */\nwindow.AFRICA_GEO = '+JSON.stringify(output)+';\n');

function download(url,dest){
 return new Promise((resolve,reject)=>{
   https.get(url,response=>{
     if(response.statusCode>=300 && response.statusCode<400) return download(response.headers.location,dest).then(resolve,reject);
     if(response.statusCode!==200) return reject(new Error(url+' HTTP '+response.statusCode));
     const chunks=[];response.on('data',chunk=>chunks.push(chunk));response.on('end',()=>fs.writeFile(dest,Buffer.concat(chunks)).then(resolve,reject));response.on('error',reject);
   }).on('error',reject);
 });
}
await fs.mkdir(path.join(root,'assets/flags'),{recursive:true});
const queue=[...ids];
await Promise.all(Array.from({length:8},async()=>{
  while(queue.length){
    const id=queue.shift().toLowerCase();
    await download('https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/'+id+'.svg',path.join(root,'assets/flags',id+'.svg'));
  }
}));
await download('https://raw.githubusercontent.com/lipis/flag-icons/main/LICENSE',path.join(root,'assets/flags/LICENSE.txt'));
await fs.unlink(sourcePath);
console.log('Prepared '+features.length+' geographic features and '+ids.length+' local SVG flags.');
