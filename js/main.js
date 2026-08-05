/* ============================================================
   THE WINNING EDGE — shared behaviors (all pages)
   Guarded by element existence so one file serves every page.
   ============================================================ */
gsap.registerPlugin(ScrollTrigger);
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const desk = matchMedia('(min-width: 1061px)').matches;

/* ---------- Lenis smooth scroll ---------- */
let lenis = null;
if (!reduced && typeof Lenis !== 'undefined') {
  lenis = new Lenis({ duration: 1.05, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  window.lenis = lenis;
}

/* ---------- CONTENT RENDERER — builds sections from js/content.js ----------
   Add/remove courses & photos by editing js/content.js only. */
(() => {
  const C = window.WEDA_CONTENT;
  if (!C) return;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const courseList = document.getElementById('courseList');
  if (courseList && C.courses) {
    courseList.innerHTML = C.courses.map((c, i) => `
      <article class="course-row glass glass--hov" data-a>
        <div class="course-row__media pframe" data-plx>
          <img src="${esc(c.image)}" alt="${esc(c.title)} — The Winning Edge Defence Academy" loading="lazy">
          <span class="pframe__cap"><b>//</b> ${esc(c.label)}</span>
        </div>
        <div>
          <span class="course-row__no">PROGRAM ${String(i + 1).padStart(2, '0')}</span>
          <h2>${esc(c.title)}</h2>
          <p>${esc(c.desc)}</p>
          <div class="course-row__tags">${(c.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          <a href="${esc(c.link || 'contact.html')}" class="btn${c.accent ? '' : ' btn--glass'}"${c.external ? ' target="_blank" rel="noopener"' : ''}>${esc(c.button)} ⟶</a>
        </div>
      </article>`).join('');
  }

  const polaroid = (p, i, prefix) => `
    <div class="polaroid${p.hold === 'tape' ? ' polaroid--tape' : ''}" data-a data-d="${(i * 0.07).toFixed(2)}">
      ${p.hold === 'tape' ? '' : '<span class="polaroid__pin"></span>'}
      <img src="${esc(p.image)}" alt="${esc(p.caption)} — WEDA" loading="lazy">
      <span class="polaroid__cap"><span>${esc(p.caption)}</span><b>${prefix} ${String(i + 1).padStart(2, '0')}</b></span>
    </div>`;

  const reconGrid = document.getElementById('reconGrid');
  if (reconGrid && C.gallery) reconGrid.innerHTML = C.gallery.map((p, i) => polaroid(p, i, 'EX.')).join('');

  const awall = document.getElementById('awall');
  if (awall && C.achievers) awall.innerHTML = C.achievers.map((p, i) => polaroid(p, i, '★')).join('');

  const strip = document.getElementById('stripRow');
  if (strip && C.filmstrip) {
    const imgs = C.filmstrip.map(src => `<div class="pframe"><img src="${esc(src)}" alt="WEDA academy" loading="lazy"></div>`).join('');
    strip.innerHTML = imgs + imgs; /* doubled for the seamless loop */
  }
})();

/* ---------- page wipe: exit on load, enter on internal nav ---------- */
const wipe = document.getElementById('wipe');
function wipeOut(){
  if (reduced) { wipe.classList.add('is-done'); return; }
  gsap.timeline({ onComplete: () => wipe.classList.add('is-done') })
    .to('.wipe__logo', { opacity: 0, y: -22, duration: 0.4, ease: 'power2.in' }, 0.12)
    .to('.wipe__p--1', { scaleY: 0, duration: 0.75, ease: 'power4.inOut' }, 0.22)
    .to('.wipe__p--2', { scaleY: 0, duration: 0.75, ease: 'power4.inOut' }, 0.34);
}
function wipeIn(href){
  if (reduced) { location.href = href; return; }
  wipe.classList.remove('is-done');
  gsap.set(['.wipe__p--1', '.wipe__p--2'], { scaleY: 0, transformOrigin: 'bottom' });
  gsap.set('.wipe__logo', { opacity: 0, y: 22 });
  gsap.timeline({ onComplete: () => location.href = href })
    .to('.wipe__p--2', { scaleY: 1, duration: 0.55, ease: 'power4.inOut' }, 0)
    .to('.wipe__p--1', { scaleY: 1, duration: 0.55, ease: 'power4.inOut' }, 0.1)
    .to('.wipe__logo', { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, 0.4);
}
document.querySelectorAll('a[href$=".html"], a[href="index.html"]').forEach(a => {
  const href = a.getAttribute('href');
  if (/^https?:/i.test(href)) return;
  a.addEventListener('click', e => {
    e.preventDefault();
    if (href.split('#')[0] === location.pathname.split('/').pop()) return;
    wipeIn(href);
  });
});
window.addEventListener('pageshow', e => { if (e.persisted) wipeOut(); });
wipeOut();

/* ---------- active nav link ---------- */
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a, .mnav a').forEach(a => {
  if (a.getAttribute('href') === here) a.classList.add('on');
});

/* ---------- same-page anchors via lenis ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: -90, duration: 1.2 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---------- custom cursor ---------- */
const dot = document.getElementById('curDot'), ring = document.getElementById('curRing');
if (dot && desk) {
  const dx = gsap.quickTo(dot, 'x', { duration: 0.08 }), dy = gsap.quickTo(dot, 'y', { duration: 0.08 });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.32, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: 0.32, ease: 'power3' });
  window.addEventListener('pointermove', e => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); });
  document.querySelectorAll('a, button, .glass--hov, .pframe').forEach(el => {
    el.addEventListener('pointerenter', () => document.body.classList.add('cur-hover'));
    el.addEventListener('pointerleave', () => document.body.classList.remove('cur-hover'));
  });
} else if (dot) { dot.remove(); ring.remove(); }

/* ---------- nav hide on scroll down ---------- */
const nav = document.getElementById('nav');
let lastY = 0;
ScrollTrigger.create({
  onUpdate(self){
    const y = self.scroll();
    nav.classList.toggle('hidden', y > 420 && y > lastY);
    lastY = y;
  }
});

/* ---------- mobile menu ---------- */
const mnav = document.getElementById('mnav');
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => mnav.classList.add('open'));
  document.getElementById('mnavX').addEventListener('click', () => mnav.classList.remove('open'));
  mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mnav.classList.remove('open')));
}

/* ---------- generic reveals ---------- */
document.querySelectorAll('[data-a]').forEach(el => {
  gsap.to(el, {
    y: 0, opacity: 1, duration: 0.95, ease: 'power3.out',
    delay: parseFloat(el.dataset.d || 0),
    scrollTrigger: { trigger: el, start: 'top 90%', once: true }
  });
});
document.querySelectorAll('.lines').forEach(block => {
  gsap.to(block.querySelectorAll('.ln > span'), {
    y: 0, duration: 1.05, ease: 'power4.out', stagger: 0.1,
    scrollTrigger: { trigger: block, start: 'top 88%', once: true }
  });
});

/* ---------- counters ---------- */
function counter(el){
  const t = parseFloat(el.dataset.count), dec = !!el.dataset.decimal, o = { v: 0 };
  gsap.to(o, { v: t, duration: 1.7, ease: 'power2.out', onUpdate(){
    el.textContent = dec ? (o.v / 10).toFixed(1) : Math.round(o.v).toLocaleString('en-IN');
  }});
}
document.querySelectorAll('[data-count]').forEach(el => {
  ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => counter(el) });
});

/* ---------- hero intro (home only) ---------- */
if (document.querySelector('.hero__title')) {
  gsap.set('.hero__title .row > span', { y: '112%' });
  gsap.set('.hero__badge, .hero__sub, .hero__ctas, .hero__cue, .hero__rails', { opacity: 0 });
  gsap.set('.shard', { opacity: 0, y: 46 });
  gsap.timeline({ delay: reduced ? 0 : 0.65 })
    .to('.hero__title .row > span', { y: 0, duration: 1.1, ease: 'power4.out', stagger: 0.1 }, 0)
    .to('.hero__badge, .hero__sub, .hero__ctas', { opacity: 1, duration: 0.9, ease: 'power2.out', stagger: 0.12 }, 0.45)
    .to('.shard', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 }, 0.6)
    .to('.hero__cue, .hero__rails', { opacity: 1, duration: 0.8 }, 1);
  // gentle float
  if (!reduced) document.querySelectorAll('.shard').forEach((s, i) => {
    gsap.to(s, { y: '+=13', duration: 2.5 + i * 0.4, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: i * 0.35 });
  });
  // mouse parallax on shards + orbs
  if (desk && !reduced) {
    window.addEventListener('pointermove', e => {
      const cx = e.clientX / innerWidth - 0.5, cy = e.clientY / innerHeight - 0.5;
      document.querySelectorAll('.shard').forEach((s, i) => {
        gsap.to(s, { x: cx * (16 + i * 7), duration: 1, ease: 'power2.out', overwrite: 'auto' });
      });
      gsap.to('.orb--r1', { x: cx * -34, y: cy * -22, duration: 1.4, ease: 'power2.out', overwrite: 'auto' });
      gsap.to('.orb--w',  { x: cx * 26,  y: cy * 20,  duration: 1.4, ease: 'power2.out', overwrite: 'auto' });
    });
  }
  // hero exit parallax
  if (!reduced) {
    gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.4 } })
      .to('.hero__center', { yPercent: -22, opacity: 0.1, ease: 'none' }, 0)
      .to('.shard', { yPercent: 34, opacity: 0, ease: 'none' }, 0);
  }
}

/* ---------- orbs drift with scroll (all pages) ---------- */
if (!reduced) {
  gsap.to('.orb--r1', { yPercent: 26, ease: 'none', scrollTrigger: { scrub: 1.2 } });
  gsap.to('.orb--r2', { yPercent: -20, ease: 'none', scrollTrigger: { scrub: 1.2 } });
}

/* ---------- word-by-word manifesto (about) ---------- */
const mani = document.querySelector('[data-words]');
if (mani) {
  const walk = node => {
    [...node.childNodes].forEach(ch => {
      if (ch.nodeType === 3) {
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(tok => {
          if (/^\s*$/.test(tok)) frag.appendChild(document.createTextNode(tok));
          else { const s = document.createElement('span'); s.className = 'wd'; s.textContent = tok; frag.appendChild(s); }
        });
        node.replaceChild(frag, ch);
      } else if (ch.nodeType === 1) walk(ch);
    });
  };
  walk(mani);
  gsap.to(mani.querySelectorAll('.wd'), {
    opacity: 1, stagger: 0.045, ease: 'none',
    scrollTrigger: { trigger: mani, start: 'top 80%', end: 'bottom 48%', scrub: 0.4 }
  });
}

/* ---------- timeline bar (about) ---------- */
const tbar = document.querySelector('.tline__bar');
if (tbar) gsap.to(tbar, { scaleX: 1, duration: 1.5, ease: 'power3.inOut',
  scrollTrigger: { trigger: '.tline', start: 'top 75%', once: true } });

/* ---------- media parallax inside frames ---------- */
if (!reduced) document.querySelectorAll('[data-plx] img').forEach(img => {
  gsap.fromTo(img, { yPercent: -7 }, { yPercent: 7, ease: 'none',
    scrollTrigger: { trigger: img.closest('[data-plx]'), start: 'top bottom', end: 'bottom top', scrub: true } });
});

/* ---------- drift rows (results) ---------- */
document.querySelectorAll('[data-drift]').forEach(row => {
  const dir = +row.dataset.drift, half = row.scrollWidth / 2;
  gsap.set(row, { x: dir === 1 ? -half : 0 });
  gsap.to(row, { x: dir === 1 ? 0 : -half, duration: 46, ease: 'none', repeat: -1 });
});

/* ---------- footer big word ---------- */
const fw = document.querySelector('.foot__word');
if (fw && !reduced) gsap.fromTo(fw, { yPercent: 46 }, { yPercent: 0, ease: 'none',
  scrollTrigger: { trigger: '.foot', start: 'top 96%', end: 'top 50%', scrub: true } });

/* ---------- 3D tilt on [data-tilt] glass cards ---------- */
if (desk && !reduced) document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    gsap.to(card, {
      rotateX: ((e.clientY - r.top) / r.height - 0.5) * -6,
      rotateY: ((e.clientX - r.left) / r.width - 0.5) * 8,
      transformPerspective: 900, duration: 0.5, ease: 'power2.out'
    });
  });
  card.addEventListener('pointerleave', () => gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'elastic.out(1,0.5)' }));
});

/* ---------- ARMOURED DIVISION: tank SVG, convoys, footer patrol ---------- */
const TANK_SVG = `
<svg class="tank-svg" viewBox="0 0 128 58" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g class="hullg">
    <circle class="smoke" cx="14" cy="30" r="5" fill="#9a9aa2"/>
    <rect x="70" y="16" width="46" height="4.5" rx="2" fill="#2e2e36" stroke="rgba(255,255,255,.22)" stroke-width=".6"/>
    <rect x="112" y="14.4" width="7" height="7.6" rx="1.6" fill="#2e2e36" stroke="rgba(255,255,255,.22)" stroke-width=".6"/>
    <g class="flash">
      <polygon points="121,18 128,14.6 124.4,18 128,21.4" fill="#ff3546"/>
      <circle cx="121.5" cy="18" r="2.6" fill="#ffb199"/>
    </g>
    <path d="M42 8h26c4 0 7 3 7 7v9H37v-11c0-3 2-5 5-5z" fill="#26262e" stroke="rgba(255,255,255,.25)" stroke-width=".7"/>
    <rect x="49" y="3.5" width="10" height="6" rx="2" fill="#2e2e36" stroke="rgba(255,255,255,.2)" stroke-width=".6"/>
    <path d="M52.6 15.4l2.6-2.4 2.6 2.4-1 3-3.2 0z" fill="#e11d2e"/>
    <path d="M24 24h76c3.5 0 6 2.6 6 6l-4 8H20l-2-8c0-3.4 2.6-6 6-6z" fill="#1d1d24" stroke="rgba(255,255,255,.25)" stroke-width=".7"/>
    <image href="assets/logo-mark.png" x="72" y="26" width="14" height="11" opacity=".95"/>
  </g>
  <rect x="16" y="36" width="94" height="19" rx="9.5" fill="#101014" stroke="rgba(255,255,255,.3)" stroke-width=".8"/>
  <g stroke="rgba(255,255,255,.4)" stroke-width=".7" fill="#1a1a20">
    <circle class="wheel" cx="30" cy="45.5" r="5.4" stroke-dasharray="3 2.6"/>
    <circle class="wheel" cx="47" cy="45.5" r="5.4" stroke-dasharray="3 2.6"/>
    <circle class="wheel" cx="64" cy="45.5" r="5.4" stroke-dasharray="3 2.6"/>
    <circle class="wheel" cx="81" cy="45.5" r="5.4" stroke-dasharray="3 2.6"/>
    <circle class="wheel" cx="97" cy="45.5" r="5.4" stroke-dasharray="3 2.6"/>
  </g>
</svg>`;
document.querySelectorAll('.convoy__tank').forEach(el => el.innerHTML = TANK_SVG);
/* footer patrol tank on every page — drives across the footer line as you scroll the page */
const foot = document.querySelector('.foot');
if (foot) {
  foot.insertAdjacentHTML('afterbegin', `<div class="foot__tankline"><div class="foot__tank">${TANK_SVG}</div></div>`);
  if (!reduced) {
    const ft = foot.querySelector('.foot__tank');
    gsap.to(ft, {
      x: () => Math.max(0, document.documentElement.clientWidth - 220),
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true }
    });
  }
}
/* footer full-logo swap (keeps HTML DRY across pages) */
const fLogo = document.querySelector('.foot__about .nav__logo');
if (fLogo) fLogo.outerHTML = '<a href="index.html" class="foot-logo"><img src="assets/logo.png" alt="WEDA — The Winning Edge Defence Academy"></a>';

/* ---------- form toast ---------- */
const form = document.getElementById('regForm');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const t = document.getElementById('toast');
  t.classList.add('show'); e.target.reset();
  setTimeout(() => t.classList.remove('show'), 4200);
});
