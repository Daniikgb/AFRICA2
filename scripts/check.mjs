import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root=path.resolve(import.meta.dirname,'..');
const failures=[];
let checks=0;
const check=(condition,message)=>{checks++;if(!condition)failures.push(message);};
const text=value=>typeof value==='string'&&value.trim().length>0;
const context=vm.createContext({window:{}});
const expected='DZ AO BJ BW BF BI CV CM TD KM CG CD CI DJ EG GQ ER SZ ET GA GM GH GN GW KE LS LR LY MG MW ML MA MU MR MZ NA NE NG UG CF RW ST SN SC SL SO ZA SS SD TZ TG TN ZM ZW'.split(' ').sort();
for(const file of ['data/countries-a.js','data/countries-b.js','data/africa-geo.js']){
  const absolute=path.join(root,file);
  check(fs.existsSync(absolute),`Falta el archivo ${file}.`);
  if(fs.existsSync(absolute)){
    try{vm.runInContext(fs.readFileSync(absolute,'utf8'),context,{filename:file,timeout:3000});}
    catch(error){failures.push(`${file}: ${error.message}`);}
  }
}
const countries=[...(context.window.COUNTRIES_A||[]),...(context.window.COUNTRIES_B||[])];
const ids=countries.map(country=>country.id);
check(countries.length===54,`Se esperaban 54 fichas; hay ${countries.length}.`);
check(new Set(ids).size===54,'Hay identificadores de país duplicados o faltantes.');
check(JSON.stringify([...ids].sort())===JSON.stringify(expected),'Las fichas deben corresponder exactamente a los 54 países soberanos de África.');
const names=countries.map(country=>country.name);
check(new Set(names).size===54,'Los nombres de país deben ser únicos.');
const regions=['Norte','Oeste','Centro','Este','Sur'];
for(const country of countries){
 const prefix=country.id||'(sin ID)';
 for(const field of ['id','name','region','capital','languageNote'])check(text(country[field]),`${prefix}: ${field} debe tener texto.`);
 check(regions.includes(country.region),`${prefix}: región desconocida.`);
 check(Array.isArray(country.officialLanguages)&&country.officialLanguages.every(text),`${prefix}: officialLanguages debe ser un arreglo de textos.`);
 check(Array.isArray(country.spokenLanguages)&&country.spokenLanguages.length>0&&country.spokenLanguages.every(text),`${prefix}: spokenLanguages debe contener lenguas de uso extendido.`);
 check(Boolean(country.religion)&&['summary','largest','note'].every(field=>text(country.religion[field])),`${prefix}: falta información o contexto de religión.`);
 check(Array.isArray(country.culture)&&country.culture.length>=2,`${prefix}: se requieren al menos dos ejemplos culturales.`);
 if(Array.isArray(country.culture)){
   for(const example of country.culture)check(text(example.title)&&text(example.text),`${prefix}: ejemplo cultural incompleto.`);
   check(new Set(country.culture.map(example=>example.title)).size===country.culture.length,`${prefix}: ejemplos culturales repetidos.`);
 }
 check(Array.isArray(country.sources)&&country.sources.length>=2,`${prefix}: se requieren al menos dos fuentes.`);
 if(Array.isArray(country.sources))for(const source of country.sources){
   check(text(source.label),`${prefix}: fuente sin título.`);
   let valid=false;
   try{const url=new URL(source.url);valid=url.protocol==='https:'&&Boolean(url.hostname);}catch{}
   check(valid,`${prefix}: fuente sin URL HTTPS válida.`);
 }
 check(fs.existsSync(path.join(root,`assets/flags/${String(country.id).toLowerCase()}.svg`)),`${prefix}: falta su bandera local.`);
}
check(new Set(countries.map(country=>country.culture?.map(example=>example.text).join('|'))).size===54,'Las fichas culturales deben ser diferentes entre países.');

const geo=context.window.AFRICA_GEO;
check(geo?.type==='FeatureCollection'&&Array.isArray(geo.features),'El mapa debe ser un FeatureCollection.');
if(Array.isArray(geo?.features)){
 const mapIds=geo.features.map(feature=>feature.properties?.id);
 check(geo.features.length===55&&new Set(mapIds).size===55,'Se requieren 54 países y un territorio disputado en el mapa.');
 check(JSON.stringify(mapIds.filter(id=>id!=='EH').sort())===JSON.stringify(expected),'Mapa y fichas no coinciden.');
 check(geo.features.find(feature=>feature.properties?.id==='EH')?.properties.disputed===true,'El Sáhara Occidental debe estar marcado como disputado.');
 let coordinates=0;
 function inspect(value){
   if(!Array.isArray(value)){check(false,'Estructura de coordenadas inválida.');return;}
   if(typeof value[0]==='number'){
     coordinates++;
     check(value.length===2&&value.every(Number.isFinite)&&Math.abs(value[0])<=180&&Math.abs(value[1])<=90,'Coordenada geográfica inválida.');
   }else value.forEach(inspect);
 }
 for(const feature of geo.features){
   check(['Polygon','MultiPolygon'].includes(feature.geometry?.type),`${feature.properties?.id}: geometría no válida.`);
   if(feature.geometry?.coordinates)inspect(feature.geometry.coordinates);
 }
 check(coordinates>1000,'El mapa no contiene suficientes coordenadas para representar los límites reales.');
}

for(const file of ['index.html','flags.html'])check(fs.existsSync(path.join(root,file)),`Falta ${file}.`);
const pages=fs.readdirSync(root).filter(file=>file.endsWith('.html'));
for(const page of pages){
 const htmlPath=path.join(root,page);
 const html=fs.readFileSync(htmlPath,'utf8');
 check(/<html\b[^>]*lang=["']es["']/i.test(html),`${page}: el documento debe declarar el idioma español.`);
 const assets=[...html.matchAll(/<(?:script|link|img)\b[^>]*(?:src|href)=["']([^"']+)["']/gi)].map(match=>match[1]);
 check(assets.length>=5,`${page}: no se detectaron los archivos locales esperados.`);
 for(const asset of assets){
   check(!/^(?:https?:)?\/\//i.test(asset),`${page}: recurso externo en tiempo de ejecución: ${asset}.`);
   if(!/^(?:data:|#)/i.test(asset)){
     const target=path.resolve(path.dirname(htmlPath),asset.split(/[?#]/)[0]);
     check(target.startsWith(root+path.sep)&&fs.existsSync(target),`${page}: recurso local inexistente o fuera del proyecto: ${asset}.`);
   }
 }
 const localLinks=[...html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)].map(match=>match[1]).filter(href=>!/^([a-z]+:|#|\/\/)/i.test(href));
 for(const link of localLinks){
   const target=path.resolve(path.dirname(htmlPath),link.split(/[?#]/)[0]);
   check(target.startsWith(root+path.sep)&&fs.existsSync(target),`${page}: enlace local inexistente o fuera del proyecto: ${link}.`);
 }
}
for(const file of ['app.js','styles.css','flags.js','flags.css']){
 const absolute=path.join(root,file);
 check(fs.existsSync(absolute),`Falta ${file}.`);
 if(!fs.existsSync(absolute))continue;
 const content=fs.readFileSync(absolute,'utf8');
 if(file.endsWith('.js')){
   try{new vm.Script(content,{filename:file});check(true,'');}catch(error){failures.push(`Sintaxis ${file}: ${error.message}`);}
   check(!/\bfetch\s*\(|\bXMLHttpRequest\b|\bWebSocket\s*\(/.test(content),`${file}: los datos deben estar incluidos localmente, sin llamadas de red.`);
 }
 check(!/@import\s+(?:url\()?\s*["']?https?:|url\(\s*["']?(?:https?:)?\/\//i.test(content),`${file}: contiene estilos, fuentes o imágenes remotos.`);
}
if(failures.length){
 console.error(`No se aprobó la revisión (${failures.length} problemas):\n- ${failures.join('\n- ')}`);
 process.exitCode=1;
}else{
 console.log(`Revisión aprobada: ${checks} comprobaciones; ${pages.length} páginas, 54 fichas, 54 banderas, 55 geometrías y recursos locales completos.`);
 console.log('La revisión comprueba integridad y sintaxis. No sustituye la revisión visual ni la verificación editorial de las fuentes.');
}
