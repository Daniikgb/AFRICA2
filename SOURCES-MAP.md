# Fuentes del mapa y de las banderas

Preparación de los archivos locales: 27 de octubre de 2026.

## Límites geográficos

- **Natural Earth**, Admin 0 – Countries, escala 1:50 millones, versión 5.1.1. [Página del conjunto de datos](https://www.naturalearthdata.com/downloads/50m-cultural-vectors/).
- [GeoJSON original en el repositorio oficial](https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_50m_admin_0_countries.geojson).
- [Condiciones de uso: dominio público](https://www.naturalearthdata.com/about/terms-of-use/).

`data/africa-geo.js` contiene exclusivamente los 54 Estados soberanos de África y el Sáhara Occidental. Las coordenadas geográficas se redondearon a cuatro decimales para reducir el tamaño. Las islas de Cabo Verde, Comoras, Mauricio, Seychelles y Santo Tomé y Príncipe están incluidas. No se incluyen territorios de países de otros continentes.

Natural Earth representa límites administrativos según su política cartográfica de control de facto. Para esta aplicación, la geometría de Somalilandia se unió a la de Somalia, eliminando su frontera interior compartida; no se cuenta como un Estado adicional. El Sáhara Occidental se conserva por separado, con `disputed: true`, para que la interfaz indique que es un territorio disputado, no uno de los 54 Estados. La representación es educativa y no expresa una posición sobre soberanía, fronteras o reconocimiento internacional. La escala simplifica costas e islas pequeñas; no sirve para navegación ni para delimitar fronteras jurídicas.

## Banderas

- **flag-icons**, de Panayiotis Lipiridis. [Repositorio original](https://github.com/lipis/flag-icons).
- Archivos SVG descargados de `flags/4x3/`, incluidos localmente en `assets/flags/`.
- [Licencia MIT original](https://github.com/lipis/flag-icons/blob/main/LICENSE); copia completa en `assets/flags/LICENSE.txt`.

Las banderas corresponden a los 54 países. No se asignó una bandera al Sáhara Occidental, para evitar presentar una reclamación de soberanía como un hecho resuelto.

## Reconstrucción

`scripts/build-map.mjs` es una herramienta de preparación para desarrolladores. Descarga temporalmente el GeoJSON del enlace original, genera el archivo local del mapa y descarga las banderas. Requiere Node.js y conexión únicamente para reconstruir los recursos. El archivo temporal mundial se elimina al terminar. La página final no ejecuta esta herramienta ni descarga datos al abrirse. `node scripts/validate-map.mjs` verifica el recuento, las coordenadas y los recursos locales.
