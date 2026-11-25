// Builds three self-contained redesign iterations into docs/design/gemini/<slug>.html
// Usage: /opt/homebrew/bin/node docs/design/gemini/build.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const tilesDir = join(here, '../tiles');
const postsDir = join(here, '../../../_posts');
const src = (f) => readFileSync(join(here, 'src', f), 'utf8');
const fonts = JSON.parse(readFileSync(join(tilesDir, 'fonts/fonts.json'), 'utf8'));

// Parse all real posts from _posts
const unq = (v) => (v || '').trim().replace(/^(['"])(.*)\1$/, '$2');
const POSTS = readdirSync(postsDir)
  .map((f) => [f, f.match(/^(\d{4})-(\d{1,2})-(\d{1,2})-(.+)\.(md|markdown|html)$/)])
  .filter(([, m]) => m)
  .map(([f, m]) => {
    const fm = (readFileSync(join(postsDir, f), 'utf8').match(/^---\n([\s\S]*?)\n---/) || [, ''])[1];
    const get = (k) => unq((fm.match(new RegExp('^' + k + ':(.*)$', 'm')) || [, ''])[1]);
    const [y, mo, d, slug] = [m[1], m[2].padStart(2, '0'), m[3].padStart(2, '0'), m[4]];
    return {
      file: f.replace(/\.[^.]+$/, ''),
      year: Number(y),
      date: `${y}-${mo}-${d}`,
      title: get('title') || slug,
      subtitle: get('subtitle'),
      url: `/${y}/${mo}/${d}/${slug}/`,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

// Year histogram 2012..2026
const yearMap = new Map();
for (let y = 2012; y <= 2026; y++) yearMap.set(y, 0);
for (const p of POSTS) {
  if (yearMap.has(p.year)) yearMap.set(p.year, yearMap.get(p.year) + 1);
}
const YEAR_COUNTS = [...yearMap.entries()];

const TOP_FILES = [
  '2019-04-04-the-strategic-independent',
  '2018-02-23-small-b-blogging',
  '2018-10-29-ways-of-seeing',
  '2020-02-20-narrative-strategy',
  '2019-05-17-blogpunk',
  '2020-07-23-thinking-in-public',
];
const TOP = TOP_FILES.map((f) => {
  const p = POSTS.find((x) => x.file === f);
  if (!p) throw new Error('Missing top post: ' + f);
  return p;
});

const PROJECTS = [
  { name: 'The Strategic Independent', desc: 'A book about sustainable indie consulting', domain: 'tomcritchlow.com/strategy/' },
  { name: 'Quotebacks', desc: 'A quoting tool for bloggers and readers', domain: 'quotebacks.net' },
  { name: 'The SEO MBA', desc: 'Professional development for SEO leaders', domain: 'seomba.com' },
  { name: 'Fiercely Curious', desc: 'A Brooklyn art collective & pop-up gallery', domain: 'fiercelycurious.com' },
];

const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Hex -> WCAG relative luminance
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
}
const lum = (hex) => {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const la = lum(a), lb = lum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};

const BASE_LIGHT = {
  bg: '#f7faf7',
  panel: '#ffffff',
  fg: '#121c15',
  muted: '#4d5d52',
  rule: '#d8e3da',
  brand: '#02ad28',
  field: '#02ad28',
  'on-field': '#041f0a',
  'green-ink': '#036b1a',
  wash: '#e5f6e8',
  hl: '#bbf2c6',
};

const BASE_DARK = {
  bg: '#0b110d',
  panel: '#121b15',
  fg: '#eaf2ec',
  muted: '#9bb0a1',
  rule: '#243429',
  brand: '#24d14a',
  field: '#074e1a',
  'on-field': '#ecfff0',
  'green-ink': '#6ee888',
  wash: '#162d1d',
  hl: '#184b26',
};

const PRESS_LIGHT = {
  ...BASE_LIGHT,
  bg: '#f9faf6',
  panel: '#ffffff',
  fg: '#161b17',
  muted: '#525c54',
  rule: '#dde3d8',
  wash: '#e7f5e8',
  hl: '#c0f2c9',
};

const PRESS_DARK = {
  ...BASE_DARK,
  bg: '#0d110e',
  panel: '#151c17',
  fg: '#eef3ed',
  muted: '#a2b0a4',
  rule: '#28332a',
  field: '#08521c',
  'on-field': '#f1fff3',
};

const PAIRS = [
  ['fg', 'bg'],
  ['fg', 'panel'],
  ['muted', 'bg'],
  ['muted', 'panel'],
  ['green-ink', 'bg'],
  ['green-ink', 'panel'],
  ['on-field', 'field'],
  ['fg', 'wash'],
  ['fg', 'hl'],
];

const DIRECTIONS = [
  {
    slug: 'field-margin',
    letter: 'K',
    name: 'Field & Margin',
    thesis: 'Green Stacks rebuilt at Retina craft: a crisp Canvas glyph-matrix headline, a switchable Bayer 8x8 / Contour / Strata shoreline dissolve, and an essay page anchored by a 6px green architectural spine, hand-drawn annotations, and authentic Quotebacks.',
    not: 'Replaces jagged monospace <pre> blocks with sub-pixel Canvas precision. Electric dark mode keeps the emerald alive instead of turning muddy olive.',
    fonts: { display: 'Bricolage Grotesque', body: 'Hanken Grotesk', label: 'Hanken Grotesk', mono: 'JetBrains Mono' },
    embed: ['Bricolage Grotesque', 'Hanken Grotesk', 'JetBrains Mono'],
    light: BASE_LIGHT,
    dark: BASE_DARK,
    css: 'k.css',
    html: 'k.html',
    js: 'k.js',
    specimens: [
      ["Hey, I'm Tom.", 'font:800 52px/.94 var(--font-display);letter-spacing:-.04em', 'Canvas glyph-matrix cut from Bricolage Grotesque 800'],
      ['Of Termites & Tokens', 'font:700 34px/1.04 var(--font-display);letter-spacing:-.03em', 'Essay titles · Bricolage Grotesque 700'],
      ['Maybe the future of work is... termites? Let me explain.', 'font:400 17.5px/1.7 var(--font-body)', 'Essay prose · Hanken Grotesk 400 · 65ch'],
      ['2026-06-08 · Bayer · Contour · Strata · Search /', 'font:500 12.5px/1.4 var(--font-mono);color:var(--muted)', 'Apparatus · JetBrains Mono'],
    ],
    stance: {
      Dissolve: 'Retina 8x8 Bayer ordered dither with live interactive toggle to Contour rings or Strata columns, parting under the pointer.',
      'Essay link': '6px continuous green architectural spine on the left + 42px miniature Bayer fringe under the header + inverted Bayer green footer.',
      Annotations: 'Neat-annotations SVG circle and animated underline paired with crisp right-margin notes and styled Quoteback cards.',
      'Dark mode': 'Deep obsidian-pine ground (#0b110d) with luminous emerald accents (#24d14a) and rich high-contrast forest hero (#074e1a).',
    },
  },
  {
    slug: 'green-press',
    letter: 'L',
    name: 'Green Press',
    thesis: 'A literary Brooklyn indie press: full-bleed #02AD28 cover pairing bold grotesque + italic serif with an interactive ASCII Koi Pond, dissolving through a sculptural Risograph halftone dot gradient into a warm Literata serif essay with hand-drawn marginal braces.',
    not: 'Refuses sterile SaaS sans everywhere. Brings genuine literary warmth and Tom’s ASCII koi reference into one coherent print-meets-web voice.',
    fonts: { display: 'Bricolage Grotesque', body: 'Literata', label: 'Hanken Grotesk', mono: 'JetBrains Mono' },
    embed: ['Bricolage Grotesque', 'Literata', 'Hanken Grotesk', 'JetBrains Mono'],
    light: PRESS_LIGHT,
    dark: PRESS_DARK,
    css: 'l.css',
    html: 'l.html',
    js: 'l.js',
    specimens: [
      ["Hey, I'm Tom.", 'font:800 54px/.92 var(--font-display);letter-spacing:-.045em', 'Cover lockup · Bricolage Grotesque 800 + Literata Italic'],
      ['Of Termites & Tokens', 'font:800 36px/.98 var(--font-display);letter-spacing:-.035em', 'Chapter frontispiece · set on full-bleed green'],
      ['Maybe the future of work is... termites? Let me explain.', 'font:400 19px/1.72 var(--font-body)', 'Long-form reading · Literata 400 · 63ch'],
      ['ASCII Koi Pond · Essay No. 223 · Search /', 'font:500 12.5px/1.4 var(--font-mono);color:var(--muted)', 'Colophon & metadata · JetBrains Mono'],
    ],
    stance: {
      Dissolve: 'Sculptural variable-radius Risograph halftone dots that breathe gently and ripple under the pointer.',
      'Interactive piece': 'ASCII Koi Pond tucked into the green cover: three koi swim through character water, react to the cursor, and spawn ripples on click.',
      'Essay link': 'Full-bleed green Chapter Frontispiece carrying the title & subtitle, dissolving via halftone straight into warm book paper.',
      Annotations: 'Hand-drawn SVG curly marginal braces connecting passages to italic margin notes, plus brush-stroke highlights and circled terms.',
    },
  },
  {
    slug: 'living-garden',
    letter: 'M',
    name: 'Living Garden',
    thesis: 'What if the pixelated fade IS the 14-year archive? A bold green hero woven with Tom’s real essay titles meets a data-driven 2012–2026 pixel skyline (hover any ridge to inspect a year, click to search it), paired with pure Stacks Swiss-technical essays.',
    not: 'No arbitrary noise wave: every ridge in the green dissolve is real publishing history from _posts/. Zero clutter on essays, yet sections stay one glance away.',
    fonts: { display: 'Bricolage Grotesque', body: 'Hanken Grotesk', label: 'Hanken Grotesk', mono: 'JetBrains Mono' },
    embed: ['Bricolage Grotesque', 'Hanken Grotesk', 'JetBrains Mono'],
    light: BASE_LIGHT,
    dark: BASE_DARK,
    css: 'm.css',
    html: 'm.html',
    js: 'm.js',
    specimens: [
      ["Hey, I'm Tom.", 'font:800 54px/.9 var(--font-display);letter-spacing:-.045em', 'Hero cut cleanly over a subtle mono weave of all 223 titles'],
      ['01 Termites and Tokens', 'font:700 26px/1.15 var(--font-body);letter-spacing:-.02em', 'Numbered Swiss-technical section headers'],
      ['Maybe the future of work is... termites? Let me explain.', 'font:400 17.5px/1.7 var(--font-body)', 'Essay prose · Hanken Grotesk 400 · 65ch'],
      ['2020 · 41 essays (peak year) · click to search', 'font:500 12.5px/1.4 var(--font-mono);color:var(--muted)', 'Interactive skyline readout · JetBrains Mono'],
    ],
    stance: {
      Dissolve: 'Data-driven 2012–2026 Archive Pixel Skyline built from actual post counts per year; hover inspects, click opens Search filtered to that year.',
      'Essay link': 'Sticky top navigation with a live pixel-dither scroll-progress seam that grows green pixels as you read, plus an inverted pixel-horizon footer.',
      Wayfinding: 'Whisper-quiet floating left "On this page" rail restores quick jumping without bringing back a heavy sidebar.',
      Annotations: 'Crisp bordered margin callout cards with a 3px green anchor bar and subtle inline highlights.',
    },
  },
];

const fontFaces = (families) =>
  fonts
    .filter((f) => families.includes(f.family))
    .map((f) => {
      const b64 = readFileSync(join(tilesDir, 'fonts', f.file)).toString('base64');
      return `@font-face{font-family:'${f.family}';font-style:${f.style};font-weight:${f.weight};font-display:swap;src:url(data:font/woff2;base64,${b64}) format('woff2')}`;
    })
    .join('\n');

const lightDarkVars = (light, dark) =>
  Object.keys(light)
    .map((k) => `--${k}:light-dark(${light[k]},${dark[k]})`)
    .join(';');

const stack = (f) => `'${f}',system-ui,-apple-system,sans-serif`;

// Content builders per direction
const topK = () =>
  `<a class="k-lead" href="#"><time>${TOP[0].date}</time><b>${esc(TOP[0].title)}</b><i>${esc(TOP[0].subtitle)}</i><u>Read the essay &rarr;</u></a>` +
  `<ol class="k-toplist">${TOP.slice(1).map((p) => `<li><a href="#"><span><b>${esc(p.title)}</b><i>${esc(p.subtitle)}</i></span><time>${p.date.slice(0, 4)}</time></a></li>`).join('')}</ol>`;
const latestK = () =>
  POSTS.slice(0, 8).map((p) => `<li><a href="#"><time>${p.date}</time><span><b>${esc(p.title)}</b>${p.subtitle ? `<i>${esc(p.subtitle)}</i>` : ''}</span><span class="arr" aria-hidden="true">&rarr;</span></a></li>`).join('');
const projectsK = () =>
  PROJECTS.map((pr) => `<a class="k-pcard" href="#"><div><b>${esc(pr.name)}</b><p>${esc(pr.desc)}</p></div><span>${esc(pr.domain)} &nearr;</span></a>`).join('');
const nextK = () =>
  POSTS.slice(1, 4).map((p) => `<li><a href="#"><span><b>${esc(p.title)}</b><i>${esc(p.subtitle)}</i></span><time>${p.date.slice(0, 4)}</time></a></li>`).join('');

const topL = () =>
  `<a class="l-lead" href="#"><time>${TOP[0].date}</time><b>${esc(TOP[0].title)}</b><i>${esc(TOP[0].subtitle)}</i><u>Read the essay &rarr;</u></a>` +
  `<ol class="l-toplist">${TOP.slice(1).map((p) => `<li><a href="#"><span><b>${esc(p.title)}</b><i>${esc(p.subtitle)}</i></span><time>${p.date.slice(0, 4)}</time></a></li>`).join('')}</ol>`;
const latestL = () =>
  POSTS.slice(0, 8).map((p) => `<li><a href="#"><time>${p.date}</time><span><b>${esc(p.title)}</b>${p.subtitle ? `<i>${esc(p.subtitle)}</i>` : ''}</span></a></li>`).join('');
const projectsL = () =>
  PROJECTS.map((pr) => `<a class="l-pitem" href="#"><div><b>${esc(pr.name)}</b><small>${esc(pr.desc)}</small></div><span>${esc(pr.domain)}</span></a>`).join('');
const nextL = () =>
  POSTS.slice(1, 4).map((p) => `<li><a href="#"><span><b>${esc(p.title)}</b><i>${esc(p.subtitle)}</i></span><time>${p.date.slice(0, 4)}</time></a></li>`).join('');

const topM = () =>
  TOP.map((p, idx) => `<a class="m-tcard${idx === 0 ? ' lead' : ''}" href="#"><div><time>${p.date}</time><b>${esc(p.title)}</b><i>${esc(p.subtitle)}</i></div>${idx === 0 ? '<span class="m-lead-cta">Read the essay &rarr;</span>' : ''}</a>`).join('');
const latestM = () =>
  POSTS.slice(0, 8).map((p) => `<li><a href="#"><time>${p.date}</time><span><b>${esc(p.title)}</b>${p.subtitle ? `<i>${esc(p.subtitle)}</i>` : ''}</span></a></li>`).join('');
const projectsM = () =>
  PROJECTS.map((pr) => `<a href="#"><b>${esc(pr.name)}</b><small>${esc(pr.desc)}</small><span>${esc(pr.domain)} &nearr;</span></a>`).join('');
const nextM = () =>
  POSTS.slice(1, 4).map((p) => `<a class="m-tcard" href="#"><div><time>${p.date}</time><b>${esc(p.title)}</b><i>${esc(p.subtitle)}</i></div></a>`).join('');

let failed = false;
for (const d of DIRECTIONS) {
  for (const mode of ['light', 'dark']) {
    for (const [fg, bg] of PAIRS) {
      const r = contrast(d[mode][fg], d[mode][bg]);
      if (r < 4.5) {
        failed = true;
        console.error(`CONTRAST FAIL ${d.slug} ${mode} ${fg}(${d[mode][fg]}) on ${bg}(${d[mode][bg]}): ${r.toFixed(2)}`);
      }
    }
  }

  const sw = (mode) =>
    `<div><h3>${mode === 'light' ? 'Light' : 'Dark'}</h3>${Object.entries(d[mode])
      .map(([k, v]) => `<div class="sw"><i style="background:${v}"></i><div><b>${k}</b><code>${v}</code></div></div>`)
      .join('')}</div>`;

  const spec = `<section class="spec"><div class="spec-grid">
    <div><h2>Type</h2><div class="specimen">${d.specimens
      .map(([text, style, note]) => `<div><div style="${style}">${esc(text)}</div><small>${esc(note)}</small></div>`)
      .join('')}</div></div>
    <div><h2>Colour, both modes (WCAG AA verified)</h2><div class="swatches">${sw('light')}${sw('dark')}</div></div>
    <div style="grid-column:1/-1"><h2>Design Stance</h2><dl class="stance">${Object.entries(d.stance)
      .map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`)
      .join('')}</dl></div>
  </div></section>`;

  const bodyHtml = src(d.html)
    .replace('<!--TOP_K-->', topK())
    .replace('<!--LATEST_K-->', latestK())
    .replace('<!--PROJECTS_K-->', projectsK())
    .replace('<!--NEXT_K-->', nextK())
    .replace('<!--TOP_L-->', topL())
    .replace('<!--LATEST_L-->', latestL())
    .replace('<!--PROJECTS_L-->', projectsL())
    .replace('<!--NEXT_L-->', nextL())
    .replace('<!--TOP_M-->', topM())
    .replace('<!--LATEST_M-->', latestM())
    .replace('<!--PROJECTS_M-->', projectsM())
    .replace('<!--NEXT_M-->', nextM());

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<script>try{var s=localStorage.getItem('tc-color-scheme');if(s==='light'||s==='dark')document.querySelector('meta[name="color-scheme"]').content=s;}catch(e){}</script>
<title>${d.letter} · ${d.name} · tomcritchlow.com redesign iteration</title>
<style>
${fontFaces(d.embed)}
:root{
  ${lightDarkVars(d.light, d.dark)};
  --font-display:${stack(d.fonts.display)};
  --font-body:${d.fonts.body === 'Literata' ? "'Literata',Georgia,serif" : stack(d.fonts.body)};
  --font-label:${stack(d.fonts.label)};
  --font-mono:'${d.fonts.mono}',ui-monospace,SFMono-Regular,Menlo,monospace;
}
${src('shared.css')}
${src(d.css)}
</style>
<script>window.POSTS=${JSON.stringify(POSTS.map((p) => [p.date, p.title, p.subtitle, p.url])).replace(/</g, '\\u003c')};window.YEAR_COUNTS=${JSON.stringify(YEAR_COUNTS)};</script>
<script>${src('shared.js')}</script>
</head>
<body>
<div class="scroll-progress" aria-hidden="true"></div>
<div class="tilebar">
  <div class="name">${d.letter} · ${d.name}<small><a href="index.html">&larr; All iterations</a></small></div>
  <div class="thesis"><p>${esc(d.thesis)}</p><p class="not">${esc(d.not)}</p></div>
  <div class="tilebar-actions"><button id="themebtn" type="button">Switch to dark</button></div>
</div>
${bodyHtml}
${spec}
<script>${src(d.js)}</script>
</body>
</html>
`;

  writeFileSync(join(here, d.slug + '.html'), html);
  console.log(`Built ${d.slug}.html (${(html.length / 1024).toFixed(0)} KB) — WCAG AA PASS`);
}

if (failed) process.exit(1);
console.log(`Indexed ${POSTS.length} real posts across ${YEAR_COUNTS.length} years.`);
