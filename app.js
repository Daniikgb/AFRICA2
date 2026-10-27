/* Atlas sin dependencias: los datos, las banderas y la geometría son locales. */
(() => {
  'use strict';
  const countries = [...(window.COUNTRIES_A || []), ...(window.COUNTRIES_B || [])].sort((a, b) => a.name.localeCompare(b.name, 'es'));
  const byId = new Map(countries.map(country => [country.id, country]));
  const features = window.AFRICA_GEO?.features || [];
  const featureById = new Map(features.map(feature => [feature.properties.id, feature]));
  const colors = {Norte: '#e3be78', Oeste: '#c8a16d', Centro: '#91a78c', Este: '#c48465', Sur: '#658a78'};
  const regionTitles = {all: 'África, país a país', Norte: 'África del Norte', Oeste: 'África del Oeste', Centro: 'África Central', Este: 'África del Este', Sur: 'África Austral'};
  const $ = selector => document.querySelector(selector);
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = $('#africa-map');
  const stage = $('#map-stage');
  const panel = $('#country-panel');
  const welcome = $('#welcome-panel');
  const search = $('#country-search');
  const results = $('#search-results');
  const tooltip = $('#map-tooltip');
  const scene = $('#map-scene');
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const flags = id => `assets/flags/${id.toLowerCase()}.svg`;
  const point = ([lon, lat]) => [(lon + 27) * 10.7 + 20, (39 - lat) * 10.7 + 18];
  let selected = null;
  let region = 'all';
  let zoom = 1;
  let offset = {x: 0, y: 0};
  let drag = null;
  let didDrag = false;
  let searchIndex = -1;
  let searchMatches = [];
  let lastTrigger = null;
  let announceTimer;

  function announce(message) {
    clearTimeout(announceTimer);
    $('#announcement').textContent = '';
    announceTimer = setTimeout(() => { $('#announcement').textContent = message; }, 40);
  }

  function svgElement(tag, attributes = {}) {
    const element = document.createElementNS(svgNS, tag);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  }

  function geometryPath(geometry) {
    const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
    return polygons.map(polygon => polygon.map(ring => ring.map((coordinate, index) => `${index ? 'L' : 'M'}${point(coordinate).map(value => value.toFixed(2)).join(',')}`).join('') + 'Z').join('')).join('');
  }

  const labelLines = {
    BF: ['Burkina', 'Faso'], CI: ['Costa de', 'Marfil'], CD: ['R. D. del', 'Congo'], CG: ['R. del', 'Congo'], CF: ['República', 'Centroafricana'], SS: ['Sudán', 'del Sur'], EH: ['Sáhara Occidental', '(disputado)'], GQ: ['Guinea', 'Ecuatorial'], GW: ['Guinea-Bisáu']
  };
  const minorLabels = new Set(['BJ', 'TG', 'GM', 'GW', 'SL', 'LR', 'GQ', 'RW', 'BI', 'DJ', 'SZ', 'LS', 'MW']);
  const customLabelPoints = {MA: [-7.5, 31.5], TN: [9.4, 34.8], CM: [12.9, 5.2], CG: [15.7, -0.2], CD: [23.5, -2.1], MZ: [38.5, -17.3], MG: [46.8, -19.7], UG: [32.5, 2], SO: [46.7, 6], NG: [8.1, 9.5], CI: [-5.5, 7.4], BF: [-1.5, 12.6]};
  const compactLabels = new Set(['BF', 'GN', 'GH', 'CG', 'GA', 'TN', 'ER', 'UG', 'CF', 'CI', 'SN', 'CM', 'SS', 'ZW', 'BW', 'MZ']);
  const islands = {
    CV: {center: [-24.1, 16.0], radius: 23, text: [-23.4, 12.4], anchor: 'middle'},
    ST: {center: [6.7, 0.7], radius: 18, text: [2.5, -3.5], anchor: 'middle'},
    KM: {center: [43.65, -11.7], radius: 18, text: [48.4, -10.0], anchor: 'start'},
    SC: {center: [55.5, -4.6], radius: 19, text: [55.4, -1.0], anchor: 'middle'},
    MU: {center: [57.5, -20.2], radius: 18, text: [57.5, -24.0], anchor: 'middle'}
  };

  function buildMap() {
    features.forEach(feature => {
      const {id, name} = feature.properties;
      const country = byId.get(id);
      const path = svgElement('path', {d: geometryPath(feature.geometry), class: 'country-shape', id: `map-${id}`, 'data-country': id, fill: id === 'EH' ? 'url(#disputed-pattern)' : (colors[country?.region] || '#a2b391'), role: 'button', tabindex: '0', 'aria-label': `${country?.name || name}${id === 'EH' ? ', territorio disputado' : ''}`, 'aria-pressed': 'false', 'fill-rule': 'evenodd'});
      const title = svgElement('title');
      title.textContent = `${country?.name || name}${id === 'EH' ? ' — territorio disputado' : ''}`;
      path.append(title);
      $('#country-shapes').append(path);
      if (islands[id]) return;
      const lines = labelLines[id] || [country?.name || name];
      const [x, y] = point(customLabelPoints[id] || feature.properties.label);
      const text = svgElement('text', {x, y: y - (lines.length - 1) * 5.5, class: `country-label ${minorLabels.has(id) ? 'minor micro' : ''} ${compactLabels.has(id) ? 'compact-label' : ''}`, 'data-label': id});
      lines.forEach((line, index) => {
        const span = svgElement('tspan', {x, dy: index ? '12' : '0'});
        span.textContent = line;
        text.append(span);
      });
      $('#country-labels').append(text);
    });
    Object.entries(islands).forEach(([id, item]) => {
      const [cx, cy] = point(item.center);
      const [tx, ty] = point(item.text);
      const line = svgElement('line', {x1: cx, y1: cy, x2: tx, y2: ty + (ty < cy ? 8 : -8), class: 'island-line'});
      const hit = svgElement('circle', {cx, cy, r: item.radius, class: 'island-hit', 'data-country': id, role: 'button', tabindex: '-1', 'aria-label': `${byId.get(id)?.name || id}, país insular`, 'aria-pressed': 'false'});
      const text = svgElement('text', {x: tx, y: ty, class: 'island-text', 'text-anchor': item.anchor, 'data-label': id});
      const name = byId.get(id)?.name || id;
      if (id === 'ST') {
        ['Santo Tomé', 'y Príncipe'].forEach((part, index) => {
          const span = svgElement('tspan', {x: tx, dy: index ? 12 : 0});
          span.textContent = part;
          text.append(span);
        });
      } else text.textContent = name;
      $('#island-markers').append(line, hit, text);
    });
  }

  function updateMapState() {
    document.querySelectorAll('[data-country]').forEach(element => {
      const id = element.dataset.country;
      element.classList.toggle('selected', id === selected);
      element.classList.toggle('dimmed', region !== 'all' && byId.get(id)?.region !== region && id !== selected);
      element.setAttribute('aria-pressed', String(id === selected));
    });
    document.querySelectorAll('[data-label]').forEach(element => {
      element.classList.toggle('selected', element.dataset.label === selected);
      element.classList.toggle('dimmed', region !== 'all' && byId.get(element.dataset.label)?.region !== region && element.dataset.label !== selected);
    });
    $('#selection-note').textContent = selected ? `${byId.get(selected)?.name || 'Sáhara Occidental'} · ${selected === 'EH' ? 'Territorio disputado' : 'País seleccionado'}` : '54 países. Un mundo por descubrir.';
  }

  function languageTags(languages, className = '') {
    if (!languages.length) return '<p class="language-status">Consulta la nota sobre el marco lingüístico.</p>';
    return `<div class="language-tags ${className}">${languages.map(language => `<span class="language-tag">${escape(language)}</span>`).join('')}</div>`;
  }

  function countryHTML(country) {
    return `<div class="panel-topline"><span><i></i>África · ${escape(country.region)}</span><button class="close-panel" aria-label="Cerrar ficha de ${escape(country.name)}">×</button></div>
      <div class="country-name-row"><img class="country-flag" src="${flags(country.id)}" alt="Bandera de ${escape(country.name)}"><h2 id="country-title">${escape(country.name)}</h2></div>
      <p class="country-subtitle"><strong>Capital${country.id === 'ZA' || country.id === 'SZ' ? 'es' : ''}:</strong> ${escape(country.capital)}</p>
      <section class="info-card"><div class="card-title"><span aria-hidden="true">Aa</span><h3>Idiomas</h3></div><h4>Oficiales / marco lingüístico</h4>${languageTags(country.officialLanguages)}<h4>También se hablan</h4>${languageTags(country.spokenLanguages, 'spoken')}<p class="context-note">${escape(country.languageNote)}</p></section>
      <section class="info-card"><div class="card-title"><span aria-hidden="true">☼</span><h3>Religiones y creencias</h3></div><p>${escape(country.religion.summary)}</p><div class="largest-religion"><strong>Presencia y estimaciones</strong>${escape(country.religion.largest)}</div><p class="context-note">${escape(country.religion.note)}</p></section>
      <section class="info-card"><div class="card-title"><span aria-hidden="true">✺</span><h3>Cultura y expresiones</h3></div>${country.culture.map(item => `<div class="culture-item"><h4>${escape(item.title)}</h4><p>${escape(item.text)}</p></div>`).join('')}<p class="context-note">Estos ejemplos pertenecen a comunidades y lugares concretos; no describen a todas las personas del país.</p></section>
      <details class="sources-details"><summary>Fuentes para seguir aprendiendo (${country.sources.length})</summary><ul>${country.sources.map(source => `<li><a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.label)} ↗</a></li>`).join('')}</ul></details><button class="panel-reset">↖ Volver al mapa completo</button>`;
  }

  function disputedHTML() {
    return `<div class="panel-topline"><span>África del Norte</span><button class="close-panel" aria-label="Cerrar ficha del Sáhara Occidental">×</button></div><div class="country-name-row"><h2 id="country-title">Sáhara Occidental</h2></div><div class="disputed-notice"><strong>Territorio disputado</strong><br>No forma parte del conteo de 54 países soberanos de este atlas.</div><section class="info-card"><div class="card-title"><h3>Un estatus sin resolver</h3></div><p>La ONU incluye al Sáhara Occidental en su lista de territorios no autónomos. Su estatus definitivo sigue sin resolverse.</p><p>El tramado del mapa distingue este territorio de los países vecinos. La representación no expresa una postura sobre su soberanía.</p></section><details class="sources-details" open><summary>Fuentes de consulta</summary><ul><li><a href="https://www.un.org/dppa/decolonization/es/nsgt/western-sahara" target="_blank" rel="noopener noreferrer">ONU — Sáhara Occidental ↗</a></li><li><a href="https://minurso.unmissions.org/en/background" target="_blank" rel="noopener noreferrer">MINURSO — Contexto de la misión ↗</a></li></ul></details><button class="panel-reset">↖ Volver al mapa completo</button>`;
  }

  function selectCountry(id, trigger = null) {
    if (!byId.has(id) && id !== 'EH') return;
    selected = id;
    lastTrigger = trigger || document.activeElement;
    panel.style.setProperty('--region-color', colors[byId.get(id)?.region] || '#b49b6a');
    panel.innerHTML = id === 'EH' ? disputedHTML() : countryHTML(byId.get(id));
    welcome.hidden = true;
    panel.hidden = false;
    panel.scrollTop = 0;
    tooltip.hidden = true;
    closeSearch();
    search.value = '';
    updateMapState();
    panel.querySelector('.close-panel').addEventListener('click', () => closePanel(true));
    panel.querySelector('.panel-reset').addEventListener('click', resetMap);
    try { history.replaceState(null, '', `#${id}`); } catch { /* File preview can restrict history. */ }
    announce(id === 'EH' ? 'Sáhara Occidental seleccionado. Ficha de territorio disputado.' : `${byId.get(id).name} seleccionado. Ficha disponible con idiomas, religiones y cultura.`);
    if (matchMedia('(max-width: 850px)').matches) {
      panel.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start'});
    }
    panel.focus({preventScroll: true});
  }

  function closePanel(restoreFocus = false) {
    selected = null;
    panel.hidden = true;
    welcome.hidden = false;
    updateMapState();
    try { history.replaceState(null, '', location.pathname + location.search); } catch { /* optional URL enhancement */ }
    announce('Ficha cerrada. Explora otro país en el mapa.');
    if (restoreFocus && (lastTrigger instanceof HTMLElement || lastTrigger instanceof SVGElement)) lastTrigger.focus({preventScroll: true});
    if (restoreFocus && matchMedia('(max-width: 850px)').matches) $('#explorador').scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  function setRegion(nextRegion, notify = true) {
    region = nextRegion;
    document.querySelectorAll('.region-button').forEach(button => {
      button.classList.toggle('active', button.dataset.region === region);
      button.setAttribute('aria-pressed', String(button.dataset.region === region));
    });
    $('#map-region-title').textContent = regionTitles[region];
    updateMapState();
    if (notify) announce(region === 'all' ? 'Se muestran todas las regiones.' : `${regionTitles[region]} resaltada. Los demás países siguen disponibles.`);
  }

  function updateTransform() {
    offset.x = Math.min(0, Math.max(1020 * (1 - zoom), offset.x));
    offset.y = Math.min(0, Math.max(870 * (1 - zoom), offset.y));
    scene.setAttribute('transform', `translate(${offset.x} ${offset.y}) scale(${zoom})`);
    stage.classList.toggle('is-zoomed', zoom >= 1.65);
    stage.style.touchAction = zoom > 1 ? 'none' : 'pan-y';
    stage.style.cursor = zoom > 1 ? 'grab' : '';
    $('#zoom-in').disabled = zoom >= 3.8;
    $('#zoom-out').disabled = zoom <= 1;
    tooltip.hidden = true;
  }

  function changeZoom(factor) {
    const previousZoom = zoom;
    zoom = Math.max(1, Math.min(3.8, zoom * factor));
    const ratio = zoom / previousZoom;
    offset.x = 510 - (510 - offset.x) * ratio;
    offset.y = 435 - (435 - offset.y) * ratio;
    updateTransform();
    announce(`Ampliación del mapa: ${Math.round(zoom * 100)} %. ${zoom >= 1.65 ? 'Se muestran también los nombres de países pequeños.' : ''}`);
  }

  function resetMap() {
    zoom = 1;
    offset = {x: 0, y: 0};
    updateTransform();
    setRegion('all', false);
    closePanel();
    closeSearch();
    search.value = '';
    $('#reset-map').focus({preventScroll: true});
    if (matchMedia('(max-width: 850px)').matches) $('#explorador').scrollIntoView({behavior: 'smooth', block: 'start'});
    announce('Vista completa del mapa de África.');
  }

  const aliases = {CD: 'congo kinshasa republica democratica', CG: 'congo brazzaville republica', CI: 'costa marfil cote ivoire', SZ: 'suazilandia swaziland eswatini', GM: 'gambia', GQ: 'guinea ecuatorial', GW: 'guinea bisau bissau', CV: 'cabo verde cape', ST: 'santo tome principe sao', CF: 'centroafricana republica', ZA: 'sudafrica surafrica africa sur', DJ: 'yibuti djibouti', MW: 'malaui malawi', ZW: 'zimbabue zimbabwe'};
  const searchable = [...countries, {id: 'EH', name: 'Sáhara Occidental', region: 'Disputado'}];
  search.setAttribute('role', 'combobox');
  search.setAttribute('aria-autocomplete', 'list');

  function renderSearch() {
    const query = normalize(search.value.trim());
    searchMatches = searchable.filter(country => normalize(`${country.name} ${aliases[country.id] || ''}`).includes(query));
    searchIndex = -1;
    search.removeAttribute('aria-activedescendant');
    results.innerHTML = searchMatches.length ? searchMatches.map(country => `<button class="search-result" role="option" aria-selected="false" id="result-${country.id}" data-result="${country.id}" tabindex="-1">${country.id !== 'EH' ? `<img src="${flags(country.id)}" alt="" width="26" height="19">` : '<span class="disputed-key" aria-hidden="true" style="flex:0 0 26px;height:19px"></span>'}<span>${escape(country.name)}</span><small>${escape(country.region)}</small></button>`).join('') : '<div class="search-empty">No encontramos ese país. Prueba otro nombre, por ejemplo «Kenia» o «Cabo Verde».</div>';
    results.hidden = false;
    search.setAttribute('aria-expanded', 'true');
    results.querySelectorAll('[data-result]').forEach(button => button.addEventListener('click', () => selectCountry(button.dataset.result, search)));
    announce(`${searchMatches.length} ${searchMatches.length === 1 ? 'resultado' : 'resultados'}. Usa las flechas y Enter para elegir.`);
  }

  function closeSearch() {
    results.hidden = true;
    search.setAttribute('aria-expanded', 'false');
    search.removeAttribute('aria-activedescendant');
    searchIndex = -1;
  }

  search.addEventListener('input', renderSearch);
  search.addEventListener('focus', renderSearch);
  search.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (results.hidden) renderSearch();
      if (!searchMatches.length) return;
      searchIndex = searchIndex < 0
        ? (event.key === 'ArrowDown' ? 0 : searchMatches.length - 1)
        : (searchIndex + (event.key === 'ArrowDown' ? 1 : -1) + searchMatches.length) % searchMatches.length;
      results.querySelectorAll('[role="option"]').forEach((option, index) => option.setAttribute('aria-selected', String(index === searchIndex)));
      const active = $(`#result-${searchMatches[searchIndex].id}`);
      search.setAttribute('aria-activedescendant', active.id);
      active.scrollIntoView({block: 'nearest'});
    } else if (event.key === 'Enter' && !results.hidden && searchMatches.length) {
      event.preventDefault();
      selectCountry(searchMatches[Math.max(0, searchIndex)].id, search);
    } else if (event.key === 'Escape') {
      if (!results.hidden) { event.stopPropagation(); closeSearch(); }
    } else if (event.key === 'Tab') closeSearch();
  });
  document.addEventListener('pointerdown', event => { if (!event.target.closest('.search-wrap')) closeSearch(); });

  svg.addEventListener('click', event => {
    const target = event.target.closest('[data-country]');
    if (target && !didDrag) selectCountry(target.dataset.country, target);
    didDrag = false;
  });
  svg.addEventListener('keydown', event => {
    const target = event.target.closest('[data-country]');
    if (target && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); selectCountry(target.dataset.country, target); }
  });
  svg.addEventListener('pointermove', event => {
    if (drag) {
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (Math.hypot(dx, dy) > 5) {
        didDrag = true;
        if (!svg.hasPointerCapture(event.pointerId)) svg.setPointerCapture(event.pointerId);
        const scale = svg.getBoundingClientRect();
        // preserveAspectRatio="xMidYMid meet": use the actual scale of the viewBox.
        const unit = Math.max(1020 / scale.width, 870 / scale.height);
        offset = {x: drag.offset.x + dx * unit, y: drag.offset.y + dy * unit};
        updateTransform();
        stage.style.cursor = 'grabbing';
      }
      return;
    }
    const target = event.target.closest('[data-country]');
    if (!target || event.pointerType === 'touch') { tooltip.hidden = true; return; }
    tooltip.textContent = byId.get(target.dataset.country)?.name || 'Sáhara Occidental · territorio disputado';
    tooltip.hidden = false;
    const rect = stage.getBoundingClientRect();
    tooltip.style.left = `${Math.max(8, Math.min(event.clientX - rect.left + 14, rect.width - tooltip.offsetWidth - 10))}px`;
    tooltip.style.top = `${Math.max(4, event.clientY - rect.top - 39)}px`;
  });
  svg.addEventListener('pointerleave', () => { tooltip.hidden = true; if (!didDrag) drag = null; });
  svg.addEventListener('pointerdown', event => {
    didDrag = false;
    if (event.button !== 0 || zoom <= 1) return;
    drag = {x: event.clientX, y: event.clientY, offset: {...offset}};
  });
  function endDrag(event) {
    if (svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
    drag = null;
    stage.style.cursor = zoom > 1 ? 'grab' : '';
    // Keep didDrag until the following click so a pan never opens a ficha.
  }
  svg.addEventListener('pointerup', endDrag);
  svg.addEventListener('pointercancel', event => { endDrag(event); didDrag = false; });
  $('#zoom-in').addEventListener('click', () => changeZoom(1.4));
  $('#zoom-out').addEventListener('click', () => changeZoom(1 / 1.4));
  $('#reset-map').addEventListener('click', resetMap);
  $('#labels-toggle').addEventListener('change', event => stage.classList.toggle('hide-labels', !event.target.checked));
  document.querySelectorAll('[data-region]').forEach(button => button.addEventListener('click', () => setRegion(button.dataset.region)));
  document.querySelectorAll('[data-open-country]').forEach(button => button.addEventListener('click', () => selectCountry(button.dataset.openCountry, button)));
  const dialog = $('#about-dialog');
  $('#about-button').addEventListener('click', () => dialog.showModal());
  $('#sources-button').addEventListener('click', () => dialog.showModal());
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) && !dialog.open) { event.preventDefault(); search.focus(); }
    if (event.key === 'Escape' && !dialog.open && selected) closePanel(true);
  });

  if (countries.length !== 54 || features.length !== 55) {
    console.error('El atlas requiere 54 fichas y 55 geometrías; comprueba los archivos de data/.');
    $('#selection-note').textContent = 'No se pudieron cargar todos los datos. Revisa la carpeta data/.';
  }
  buildMap();
  updateTransform();
  if (featureById.has(location.hash.slice(1).toUpperCase())) selectCountry(location.hash.slice(1).toUpperCase());
})();
