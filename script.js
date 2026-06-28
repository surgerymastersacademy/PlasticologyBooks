// script.js — Plasticology 2nd Edition 2026

// ── PDF.js setup ────────────────────────────────────────────────────────────
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// ── Helpers ─────────────────────────────────────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Order URL ────────────────────────────────────────────────────────────────
const orderUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(buildOrderMessage());
document.getElementById('hero-order-btn').href = orderUrl;
document.getElementById('nav-order-btn').href  = orderUrl;
document.getElementById('cta-order-btn').href  = orderUrl;
document.getElementById('series-intro-link').href = SERIES_INTRO_URL;

// ── Hero covers fan ──────────────────────────────────────────────────────────
(function renderHeroCovers() {
  const container = document.getElementById('hero-covers');
  const offsets = [
    { rotate: '-10deg', tx: '-48px', z: 10 },
    { rotate: '0deg',   tx: '0px',   z: 20 },
    { rotate: '10deg',  tx: '48px',  z: 10 },
  ];
  BOOKS.forEach((book, i) => {
    const o = offsets[i];
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position:absolute;top:0;left:50%;
      transform:translateX(calc(-50% + ${o.tx})) rotate(${o.rotate});
      z-index:${o.z};transition:transform .5s,z-index .5s;
    `;
    wrapper.innerHTML = `
      <div class="book-float-${i}">
        <img src="${book.cover}" alt="${esc(book.title)}"
             style="height:288px;object-fit:contain;border-radius:8px;box-shadow:0 20px 40px ${book.color}50;"
             loading="lazy">
      </div>
    `;
    wrapper.addEventListener('mouseenter', () => { wrapper.style.zIndex = 30; wrapper.style.transform = `translateX(calc(-50% + ${o.tx})) rotate(${o.rotate}) scale(1.05)`; });
    wrapper.addEventListener('mouseleave', () => { wrapper.style.zIndex = o.z; wrapper.style.transform = `translateX(calc(-50% + ${o.tx})) rotate(${o.rotate})`; });
    container.appendChild(wrapper);
  });
})();

// ── Volume cards ─────────────────────────────────────────────────────────────
(function renderVolumes() {
  const grid = document.getElementById('volumes-grid');
  BOOKS.forEach(book => {
    const card = document.createElement('div');
    card.className = 'vol-card';
    card.innerHTML = `
      <div class="vol-card-cover relative flex items-center justify-center py-6 px-8 overflow-hidden" style="background:${book.color}12">
        <div class="absolute inset-0 opacity-30" style="background:radial-gradient(ellipse at center,${book.color}40 0%,transparent 70%)"></div>
        <img src="${book.cover}" alt="${esc(book.title)}"
             class="relative z-10 rounded-lg"
             style="height:208px;object-fit:contain;filter:drop-shadow(0 16px 32px ${book.color}50)"
             loading="lazy">
        <div class="absolute top-3 left-3 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full" style="background:${book.color}">
          ${esc(book.title)}
        </div>
      </div>
      <div class="flex flex-col flex-1 p-5">
        <h3 class="font-black text-slate-900 text-sm leading-snug mb-1">${esc(book.subtitle)}</h3>
        <p class="text-xs text-slate-400 mb-4">${book.chapters.length} chapters · Sample pages &amp; Index available</p>

        <!-- 3 action buttons -->
        <div class="grid grid-cols-3 gap-2 mb-4">
          <button class="action-btn" style="border-color:${book.color};color:${book.color}"
                  onclick="openViewer('${book.id}','intro')">
            📄<span>Intro</span>
          </button>
          <button class="action-btn" style="border-color:${book.color};color:${book.color}"
                  onclick="openViewer('${book.id}','samples')">
            👁<span>Samples</span>
          </button>
          <button class="action-btn" style="border-color:${book.color};color:${book.color}"
                  onclick="openViewer('${book.id}','index')">
            ☰<span>Index</span>
          </button>
        </div>

        <!-- Chapter accordion -->
        <button class="flex items-center justify-between w-full text-xs font-bold text-slate-400 hover:text-slate-700 transition py-2 border-t border-slate-100 mt-auto chapter-toggle" data-id="${book.id}">
          <span>View all ${book.chapters.length} chapters</span>
          <svg class="chev w-3.5 h-3.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="chapter-list hidden mt-2" data-id="${book.id}">
          ${book.chapters.map((ch, j) => `
            <div class="chapter-row">
              <span class="font-black shrink-0 text-[10px] mt-0.5" style="color:${book.color}">${String(j+1).padStart(2,'0')}</span>
              <span>${esc(ch)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Chapter accordion toggle
  document.querySelectorAll('.chapter-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const id   = btn.dataset.id;
      const list = document.querySelector(`.chapter-list[data-id="${id}"]`);
      const chev = btn.querySelector('.chev');
      const open = !list.classList.contains('hidden');
      list.classList.toggle('hidden', open);
      chev.style.transform = open ? '' : 'rotate(180deg)';
      btn.querySelector('span').textContent = open
        ? 'View all ' + BOOKS.find(b => b.id === id).chapters.length + ' chapters'
        : 'Hide chapters';
    });
  });
})();

// ── Platform features ─────────────────────────────────────────────────────────
(function renderFeatures() {
  const grid = document.getElementById('features-grid');
  PLATFORM_FEATURES.forEach(feat => {
    const el = document.createElement('div');
    el.className = 'feat-card cursor-default';
    el.innerHTML = `
      <p class="text-2xl mb-3">${feat.icon}</p>
      <h3 class="font-black text-white text-sm mb-1">${esc(feat.title)}</h3>
      <p class="text-xs leading-relaxed" style="color:#64748b">${esc(feat.en)}</p>
    `;
    grid.appendChild(el);
  });
})();

// ── Curriculum ───────────────────────────────────────────────────────────────
(function renderCurriculum() {
  const grid = document.getElementById('curriculum-grid');
  const volColors = { 1: '#7c3aed', 2: '#0891b2', 3: '#db2777' };
  const volLabels = { 1: 'Volume 1', 2: 'Volume 2', 3: 'Volume 3' };
  CURRICULUM.forEach(item => {
    const color = item.comingSoon ? '#94a3b8' : volColors[item.vol];
    const el = document.createElement('div');
    el.className = 'curr-row' + (item.comingSoon ? ' coming' : '');
    el.innerHTML = `
      <div class="rounded-full shrink-0" style="width:8px;height:40px;background:${color}"></div>
      <div class="flex-1 min-w-0">
        <p class="font-bold text-slate-800 text-sm truncate">${esc(item.name)}</p>
        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">${volLabels[item.vol]}${item.comingSoon ? ' · Coming Soon' : ''}</p>
      </div>
      ${item.hours > 0 ? `<span class="shrink-0 text-[10px] font-black text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">${item.hours}h</span>` : ''}
    `;
    grid.appendChild(el);
  });
})();

// ── Reviews ──────────────────────────────────────────────────────────────────
function renderReviewCard(r) {
  const el = document.createElement('div');
  el.className = 'review-card mb-4';
  const initials = r.initials || r.name || '?';
  const country  = r.country || '';
  const title    = r.title || r.credential || '';
  const quote    = r.quote || r.text || '';
  el.innerHTML = `
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black shrink-0"
           style="background:#ede9fe;color:#6d28d9">
        ${esc(initials.slice(0,2))}
      </div>
      <div>
        <div class="font-bold text-slate-800 text-sm">${esc(initials)}</div>
        <div class="text-xs text-slate-500 flex items-center gap-1">
          ${country ? `<img src="https://flagcdn.com/w20/${esc(country.toLowerCase())}.png" class="w-4 h-3 rounded-sm object-cover" loading="lazy">` : ''}
          ${esc(title)}
        </div>
      </div>
    </div>
    <p class="text-slate-600 text-sm leading-relaxed" dir="auto">"${esc(quote)}"</p>
  `;
  return el;
}

(function loadReviews() {
  const grid   = document.getElementById('reviews-grid');
  const status = document.getElementById('reviews-status');
  status.textContent = 'Loading reviews…';

  fetch(REVIEWS_API_URL)
    .then(r => r.json())
    .then(data => {
      const list = Array.isArray(data) ? data : (data.reviews || data.data || []);
      if (!list.length) throw new Error('empty');
      grid.innerHTML = '';
      list.forEach(r => grid.appendChild(renderReviewCard(r)));
      status.textContent = list.length + ' verified reviews';
    })
    .catch(() => {
      grid.innerHTML = '';
      TESTIMONIALS_FALLBACK.forEach(r => grid.appendChild(renderReviewCard(r)));
      status.textContent = TESTIMONIALS_FALLBACK.length + ' verified reviews';
    });
})();

// ── FAQ ──────────────────────────────────────────────────────────────────────
(function renderFAQ() {
  const list = document.getElementById('faq-list');
  FAQ_DATA.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'faq-item' + (item.highlight ? ' border-2 border-amber-300' : '');
    el.innerHTML = `
      <button class="faq-trigger" data-i="${i}">
        <div class="flex-1 min-w-0">
          <p class="font-bold text-slate-800 text-sm">${esc(item.q)}</p>
          ${item.ar_q ? `<p class="text-xs text-slate-400 mt-0.5" dir="rtl">${esc(item.ar_q)}</p>` : ''}
        </div>
        <svg class="faq-chevron w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="faq-body" data-i="${i}">
        <p class="text-slate-600 text-sm leading-relaxed pt-4">${esc(item.a)}</p>
        ${item.ar_a ? `<p class="text-slate-500 text-sm leading-relaxed mt-3 pt-3 border-t border-slate-100" dir="rtl">${esc(item.ar_a)}</p>` : ''}
      </div>
    `;
    list.appendChild(el);
  });

  list.addEventListener('click', e => {
    const btn = e.target.closest('.faq-trigger');
    if (!btn) return;
    const i    = btn.dataset.i;
    const body = list.querySelector(`.faq-body[data-i="${i}"]`);
    const chev = btn.querySelector('.faq-chevron');
    const open = body.classList.contains('open');
    body.classList.toggle('open', !open);
    chev.classList.toggle('open', !open);
  });
})();

// ── Community ────────────────────────────────────────────────────────────────
(function renderCommunity() {
  const grid = document.getElementById('community-grid');
  COMMUNITY.forEach(link => {
    const el = document.createElement('a');
    el.href = link.url;
    el.target = '_blank';
    el.rel = 'noreferrer';
    el.className = 'comm-link';
    el.innerHTML = `
      <span class="text-2xl">${link.icon}</span>
      <span class="text-xs font-bold text-slate-600 leading-tight">${esc(link.label)}</span>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    `;
    grid.appendChild(el);
  });
})();

// ── PDF Viewer ───────────────────────────────────────────────────────────────
const viewer    = document.getElementById('pdf-viewer');
const canvas    = document.getElementById('pdf-canvas');
const ctx       = canvas.getContext('2d');
const loading   = document.getElementById('pdf-loading');
const errBox    = document.getElementById('pdf-error');
const prevBtn   = document.getElementById('prev-page');
const nextBtn   = document.getElementById('next-page');
const counter   = document.getElementById('page-counter');
const zoomLabel = document.getElementById('zoom-label');

let pdfDoc     = null;
let pageNum    = 1;
let scale      = 1;
let rendering  = false;
let pendingPage = null;
let currentBook = null;
let currentTab  = 'samples';

const TAB_KEYS = { intro: 'introUrl', samples: 'samplesUrl', index: 'indexUrl' };

function showLoading(show) {
  loading.style.display = show ? 'flex' : 'none';
  canvas.style.display  = show ? 'none' : 'block';
  errBox.style.display  = 'none';
}
function showError() {
  loading.style.display = 'none';
  canvas.style.display  = 'none';
  errBox.style.display  = 'flex';
}

function renderPage(num) {
  if (!pdfDoc) return;
  rendering = true;
  showLoading(true);
  pdfDoc.getPage(num).then(page => {
    const viewport = page.getViewport({ scale });
    canvas.width  = viewport.width;
    canvas.height = viewport.height;
    return page.render({ canvasContext: ctx, viewport }).promise;
  }).then(() => {
    rendering = false;
    showLoading(false);
    counter.textContent = pageNum + ' / ' + pdfDoc.numPages;
    prevBtn.disabled = pageNum <= 1;
    nextBtn.disabled = pageNum >= pdfDoc.numPages;
    if (pendingPage) {
      pageNum = pendingPage;
      pendingPage = null;
      renderPage(pageNum);
    }
  }).catch(showError);
}

function loadPDF(url) {
  pdfDoc  = null;
  pageNum = 1;
  counter.textContent = '— / —';
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  showLoading(true);
  pdfjsLib.getDocument(url).promise
    .then(doc => {
      pdfDoc = doc;
      renderPage(1);
    })
    .catch(showError);
}

function switchTab(key) {
  currentTab = key;
  document.querySelectorAll('.viewer-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === key));
  if (currentBook) loadPDF(currentBook[TAB_KEYS[key]]);
}

window.openViewer = function(bookId, type) {
  const book = BOOKS.find(b => b.id === bookId);
  if (!book) return;
  currentBook = book;

  // Update header
  document.getElementById('viewer-color-bar').style.background = book.color;
  document.getElementById('viewer-title').textContent    = book.title;
  document.getElementById('viewer-subtitle').textContent = book.subtitle;

  viewer.classList.add('open');
  document.body.style.overflow = 'hidden';

  switchTab(type || 'samples');
};

document.getElementById('close-viewer').addEventListener('click', () => {
  viewer.classList.remove('open');
  document.body.style.overflow = '';
  pdfDoc = null;
});

document.querySelectorAll('.viewer-tab').forEach(tab => {
  tab.addEventListener('click', () => switchTab(tab.dataset.tab));
});

prevBtn.addEventListener('click', () => {
  if (pageNum <= 1) return;
  pageNum--;
  if (rendering) { pendingPage = pageNum; return; }
  renderPage(pageNum);
});
nextBtn.addEventListener('click', () => {
  if (!pdfDoc || pageNum >= pdfDoc.numPages) return;
  pageNum++;
  if (rendering) { pendingPage = pageNum; return; }
  renderPage(pageNum);
});

// Zoom
const ZOOM_STEP = 0.25, ZOOM_MIN = 0.5, ZOOM_MAX = 3;
function applyZoom(newScale) {
  scale = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, newScale));
  zoomLabel.textContent = Math.round(scale * 100) + '%';
  document.getElementById('zoom-out').disabled = scale <= ZOOM_MIN;
  document.getElementById('zoom-in').disabled  = scale >= ZOOM_MAX;
  if (pdfDoc) renderPage(pageNum);
}
document.getElementById('zoom-in').addEventListener('click',  () => applyZoom(+(scale + ZOOM_STEP).toFixed(2)));
document.getElementById('zoom-out').addEventListener('click', () => applyZoom(+(scale - ZOOM_STEP).toFixed(2)));
applyZoom(1);

// Keyboard
document.addEventListener('keydown', e => {
  if (!viewer.classList.contains('open')) return;
  if (e.key === 'Escape')      document.getElementById('close-viewer').click();
  if (e.key === 'ArrowRight')  nextBtn.click();
  if (e.key === 'ArrowLeft')   prevBtn.click();
  if (e.key === '+')           document.getElementById('zoom-in').click();
  if (e.key === '-')           document.getElementById('zoom-out').click();
});

// ── Back to top ──────────────────────────────────────────────────────────────
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn.classList.toggle('visible', window.scrollY > 300);
});
backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
