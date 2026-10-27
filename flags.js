/* Galería de banderas: datos y SVG locales, sin solicitudes a servicios externos. */
(() => {
  'use strict';
  const countries = [...window.COUNTRIES_A, ...window.COUNTRIES_B].sort((a, b) => a.name.localeCompare(b.name, 'es'));
  const byId = new Map(countries.map(country => [country.id, country]));
  const colors = {Norte: '#d9ad62', Oeste: '#b78a56', Centro: '#90a584', Este: '#c38465', Sur: '#658a78'};
  const backgrounds = {Norte: '#f4efe2', Oeste: '#f2ede3', Centro: '#edf1e6', Este: '#f4ede5', Sur: '#eaf0e8'};
  const $ = selector => document.querySelector(selector);
  const grid = $('#flags-grid');
  const search = $('#flag-search');
  const dialog = $('#flag-detail-dialog');
  const panel = $('#flag-country-panel');
  const about = $('#flags-about-dialog');
  let region = 'all';
  let lastCard = null;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const flags = id => `assets/flags/${id.toLowerCase()}.svg`;
  const aliases = {CD: 'congo kinshasa', CG: 'congo brazzaville', SZ: 'suazilandia eswatini swaziland', CI: 'costa marfil cote ivoire', DJ: 'djibouti', CV: 'cape verde', ST: 'sao tome', MW: 'malawi', ZW: 'zimbabwe', GW: 'bissau bisau', ZA: 'surafrica africa sur'};

  function render() {
    const query = normalize(search.value.trim());
    const filtered = countries.filter(country => (region === 'all' || country.region === region) && normalize(`${country.name} ${aliases[country.id] || ''}`).includes(query));
    grid.innerHTML = filtered.map(country => `<button class="flag-card" data-id="${country.id}" aria-label="Conocer ${escape(country.name)}" style="--flag-background:${backgrounds[country.region]};--flag-accent:${colors[country.region]}"><span class="flag-art"><img src="${flags(country.id)}" alt="Bandera de ${escape(country.name)}" width="160" height="120" loading="lazy" decoding="async"></span><span class="flag-card-copy"><span><strong>${escape(country.name)}</strong><small><i aria-hidden="true"></i>África · ${escape(country.region)}</small></span><i class="flag-arrow" aria-hidden="true">↗</i></span></button>`).join('');
    $('#flags-count').textContent = `${filtered.length} ${filtered.length === 1 ? 'país por descubrir' : 'países por descubrir'}${region === 'all' ? '' : ` · Región ${region}`}`;
    $('#flags-empty').hidden = filtered.length > 0;
    grid.hidden = filtered.length === 0;
    document.querySelectorAll('.flag-filter').forEach(button => {
      button.classList.toggle('active', button.dataset.region === region);
      button.setAttribute('aria-pressed', String(button.dataset.region === region));
    });
  }

  function languages(values, className = '') {
    return values.length ? `<div class="language-tags ${className}">${values.map(value => `<span class="language-tag">${escape(value)}</span>`).join('')}</div>` : '<p class="language-status">Consulta la nota sobre el marco lingüístico.</p>';
  }

  function selectCountry(id, card = null) {
    const country = byId.get(id);
    if (!country) return;
    lastCard = card || document.activeElement;
    panel.style.setProperty('--region-color', colors[country.region]);
    panel.innerHTML = `<div class="panel-topline"><span><i></i>África · ${escape(country.region)}</span><button class="close-panel" aria-label="Cerrar ficha de ${escape(country.name)}">×</button></div><div class="country-name-row"><img class="country-flag" src="${flags(country.id)}" alt="Bandera de ${escape(country.name)}"><h2 id="country-title">${escape(country.name)}</h2></div><p class="country-subtitle"><strong>Capital${['ZA', 'SZ'].includes(country.id) ? 'es' : ''}:</strong> ${escape(country.capital)}</p>
      <section class="info-card"><div class="card-title"><span aria-hidden="true">Aa</span><h3>Idiomas y voces</h3></div><h4>Oficiales / marco lingüístico</h4>${languages(country.officialLanguages)}<h4>También se hablan</h4>${languages(country.spokenLanguages, 'spoken')}<p class="context-note">${escape(country.languageNote)}</p></section>
      <section class="info-card"><div class="card-title"><span aria-hidden="true">☼</span><h3>Religiones y creencias</h3></div><p>${escape(country.religion.summary)}</p><div class="largest-religion"><strong>Presencia y estimaciones</strong>${escape(country.religion.largest)}</div><p class="context-note">${escape(country.religion.note)}</p></section>
      <section class="info-card"><div class="card-title"><span aria-hidden="true">✺</span><h3>Cultura y expresiones</h3></div>${country.culture.map(item => `<div class="culture-item"><h4>${escape(item.title)}</h4><p>${escape(item.text)}</p></div>`).join('')}<p class="context-note">Estos ejemplos pertenecen a comunidades y lugares concretos; no describen a todas las personas del país.</p></section>
      <details class="sources-details"><summary>Fuentes para seguir aprendiendo (${country.sources.length})</summary><ul>${country.sources.map(source => `<li><a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.label)} ↗</a></li>`).join('')}</ul></details><button class="panel-reset">Volver a las banderas <span aria-hidden="true">↗</span></button>`;
    panel.querySelector('.close-panel').addEventListener('click', () => dialog.close());
    panel.querySelector('.panel-reset').addEventListener('click', () => dialog.close());
    if (!dialog.open) dialog.showModal();
    panel.scrollTop = 0;
    try { history.replaceState(null, '', `#${id}`); } catch { /* Mejora opcional en vistas de archivos. */ }
  }

  dialog.addEventListener('close', () => {
    try { history.replaceState(null, '', location.pathname + location.search); } catch { /* Mejora opcional. */ }
    if (lastCard?.isConnected) lastCard.focus({preventScroll: true});
  });
  [dialog, about].forEach(modal => modal.addEventListener('click', event => {
    if (event.target !== modal) return;
    const rect = modal.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) modal.close();
  }));
  grid.addEventListener('click', event => { const card = event.target.closest('[data-id]'); if (card) selectCountry(card.dataset.id, card); });
  search.addEventListener('input', render);
  document.querySelectorAll('.flag-filter').forEach(button => button.addEventListener('click', () => { region = button.dataset.region; render(); }));
  $('#clear-filters').addEventListener('click', () => { region = 'all'; search.value = ''; render(); search.focus(); });
  $('#flags-about').addEventListener('click', () => about.showModal());
  $('#flags-sources').addEventListener('click', () => about.showModal());
  $('#flags-about-dialog .dialog-close').addEventListener('click', () => about.close());
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) && !dialog.open && !about.open) { event.preventDefault(); search.focus(); }
  });
  render();
  if (byId.has(location.hash.slice(1).toUpperCase())) selectCountry(location.hash.slice(1).toUpperCase());
})();
