# África — Atlas interactivo y galería de banderas

Página educativa en español para explorar los **54 países soberanos de África**. Cada ficha presenta idiomas oficiales y de uso extendido, religiones y ejemplos culturales concretos, con enlaces de consulta. El Sáhara Occidental aparece identificado como territorio disputado y no cuenta entre los 54 países.

## Abrir la página

**Haz doble clic en `flags.html` para abrir la galería de las 54 banderas**, o en **`index.html` para explorar el mapa interactivo**. Puedes cambiar entre ambas páginas desde la navegación. El mapa original se conserva.

Las páginas se abren en tu navegador. No necesitas instalar paquetes, crear una cuenta, usar una clave de API ni mantener una conexión a internet.

El mapa, los textos, las banderas y los estilos están incluidos en el proyecto. Los enlaces a las fuentes requieren internet. Conserva las carpetas junto a `index.html` si mueves o compartes el proyecto.

Como alternativa, con Node.js instalado puedes abrir un servidor local desde esta carpeta:

```powershell
node scripts/serve.mjs
```

Abre la dirección que indique la terminal, normalmente `http://localhost:4173`, y usa `/flags.html` para acceder directamente a la galería. Detén el servidor con `Ctrl+C`.

## Explorar las banderas

La galería muestra una tarjeta con la bandera y el nombre en español de cada uno de los 54 países. Selecciona una tarjeta para consultar la ficha del país, con idiomas, religiones, ejemplos culturales y fuentes. Las fichas de ambas páginas comparten los mismos archivos de datos para mantener la información coherente.

Las banderas son archivos SVG locales, con detalles nítidos al ampliar la pantalla. La galería se adapta a computadoras y celulares y funciona sin conexión. Los controles de búsqueda permiten encontrar un país rápidamente.

## Usar el atlas

- Haz clic en un país para resaltarlo y abrir su ficha.
- Busca un país por su nombre en español. La búsqueda admite nombres con o sin tildes.
- Selecciona una región para destacarla y usa el interruptor **Nombres** para mostrar u ocultar etiquetas.
- Usa **+**, **−** y el botón de vista completa para ajustar el mapa; también puedes arrastrarlo.
- Cierra la ficha con su botón de cierre o con `Escape`.
- Con el teclado, recorre los controles y países con `Tab`; selecciona con `Enter` o la barra espaciadora.
- Los países insulares pequeños tienen marcadores ampliados para facilitar la selección.

La interfaz adapta el mapa y las fichas a pantallas de computadora y celular.

## Archivos

```text
index.html                 Mapa interactivo
styles.css                 Diseño adaptable
app.js                     Mapa, buscador y fichas
flags.html                 Galería de las 54 banderas
flags.css                  Diseño adaptable de la galería
flags.js                   Tarjetas, búsqueda y fichas de la galería
data/countries-a.js         Primer grupo de 27 países
data/countries-b.js         Segundo grupo de 27 países
data/africa-geo.js          Límites geográficos locales
assets/flags/              Banderas SVG y licencia
SOURCES-MAP.md             Fuentes y criterios cartográficos
scripts/check.mjs          Revisión de integridad del proyecto
scripts/serve.mjs          Servidor local opcional
scripts/build-map.mjs      Reconstrucción de recursos cartográficos
scripts/validate-map.mjs   Revisión específica del mapa y banderas
```

## Corregir o ampliar una ficha

Edita el país correspondiente en `data/countries-a.js` o `data/countries-b.js`. Son archivos JavaScript de datos, cargados directamente para permitir abrir la página sin un servidor. Mantén los nombres `window.COUNTRIES_A` y `window.COUNTRIES_B` y sus arreglos de objetos.

Cada país tiene estos campos:

```javascript
{
  id: 'XX',                      // Código ISO de dos letras; debe coincidir con el mapa
  name: 'Nombre en español',
  region: 'Oeste',                // Norte, Oeste, Centro, Este o Sur
  capital: 'Capital',
  officialLanguages: ['Lengua'],  // Puede estar vacío si no hay una lengua oficial general
  spokenLanguages: ['Lengua'],
  languageNote: 'Contexto sobre el uso de las lenguas.',
  religion: {
    summary: 'Diversidad religiosa del país.',
    largest: 'Grupo de mayor presencia o aclaración de incertidumbre.',
    note: 'Matices regionales, fecha o limitaciones de las estimaciones.'
  },
  culture: [
    {title: 'Ejemplo concreto', text: 'Descripción y comunidad o región.'},
    {title: 'Otro ejemplo', text: 'Descripción y comunidad o región.'}
  ],
  sources: [
    {label: 'Fuente sobre este país', url: 'https://...'},
    {label: 'Otra fuente', url: 'https://...'}
  ]
}
```

Usa textos breves en español, identifica los pueblos o las zonas cuando corresponda y conserva fuentes verificables. Los idiomas oficiales pueden cambiar por reformas legales; los usos cotidianos no siempre coinciden con las categorías oficiales. La población de un país no comparte necesariamente una sola religión y algunas prácticas se combinan. Si una fuente no permite establecer una mayoría, explica esa limitación.

Después de editar, recarga la página y, si tienes Node.js, ejecuta:

```powershell
node scripts/check.mjs
```

La revisión comprueba los 54 países, la estructura de las fichas, las fuentes HTTPS, las banderas, los límites y las referencias a recursos locales de ambas páginas, además de la sintaxis de `app.js` y `flags.js`. No verifica que los enlaces remotos sigan disponibles ni sustituye la revisión del contenido y del diseño.

## Fuentes y límites

Cada ficha incluye sus propias fuentes. El botón **Fuentes y criterios del atlas** explica los criterios generales. Las fichas son una introducción para tareas escolares: no describen todas las comunidades ni todas las prácticas de cada país.

La cartografía procede de Natural Earth, escala 1:50 millones, de dominio público. Las banderas proceden de flag-icons, con licencia MIT incluida. Consulta los detalles y enlaces en [SOURCES-MAP.md](SOURCES-MAP.md).

Las fronteras y costas están simplificadas para una visualización educativa. No sirven para navegación ni para delimitar fronteras jurídicas. Las regiones se emplean como guía geográfica. El mapa señala la disputa del Sáhara Occidental y no expresa una posición sobre soberanía o reconocimiento internacional.
