import fs from 'node:fs';
import vm from 'node:vm';
const c={window:{}};
vm.runInNewContext(fs.readFileSync('data/africa-geo.js','utf8'),c);
const g=c.window.AFRICA_GEO;
const ids=g.features.map(f=>f.properties.id);
let points=0;
function visit(x){
 if(Array.isArray(x)){
   if(typeof x[0]==='number'){
     if(x.length!==2||!x.every(Number.isFinite)) throw Error('invalid coordinate');
     points++;
   }else x.forEach(visit);
 }
}
g.features.forEach(f=>visit(f.geometry.coordinates));
if(g.features.length!==55||new Set(ids).size!==55)throw Error('count');
const flags=fs.readdirSync('assets/flags').filter(f=>f.endsWith('.svg'));
if(flags.length!==54)throw Error('flags count');
for(const flag of flags){
 const s=fs.readFileSync('assets/flags/'+flag,'utf8');
 if(!s.includes('<svg')||/<script|https?:\/\//i.test(s.replace(/xmlns(?::\w+)?="[^"]*"/g,'')))throw Error('nonlocal '+flag);
}
console.log(JSON.stringify({countries:54,disputed:1,flags:flags.length,coordinatePairs:points,bytes:fs.statSync('data/africa-geo.js').size,ids}));
