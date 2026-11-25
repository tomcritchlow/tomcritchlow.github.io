// Builds the homepage explorations into docs/design/home/<slug>.html (self-contained).
// They reuse the live site's own stylesheet, script and built homepage fragments, so run a
// Jekyll build first:  mise exec -- bundle exec jekyll build && node docs/design/home/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url)), root = join(here, '../../..');
const read = (p) => readFileSync(join(root, p), 'utf8');
const src = (f) => readFileSync(join(here, 'src', f), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const b64 = (p) => readFileSync(join(root, p)).toString('base64');
const css = read('css/site.css').replace(/url\(\/fonts\/([a-z-]+\.woff2)\)/g, (m, f) => `url(data:font/woff2;base64,${b64('fonts/' + f)})`);
const posts = JSON.parse(read('_site/posts.json'));
const js = read('js/site.js').replace("fetch('/posts.json').then(function (r) { return r.json(); })", 'Promise.resolve(window.__POSTS)');
if (!js.includes('window.__POSTS')) throw new Error('could not point site.js at the inline post index');
const home = read('_site/index.html');
const cut = (re, what) => { const m = home.match(re); if (!m) throw new Error('could not find ' + what + ' in the built homepage'); return m[0]; };
const NAV = cut(/<div class="nav pad">[\s\S]*?<\/nav><\/div><\/div>/, 'nav');
const INTRO = cut(/<div class="pad"><div class="wrap intro2">[\s\S]*?<\/div><\/div>\s*<\/div><\/div>/, 'intro');
const TOP = cut(/<div class="pad"><div class="wrap"><div class="tops">[\s\S]*?<\/div>\s*<\/div><\/div><\/div>/, 'top posts');
const LATEST_MAIN = cut(/<main class="latestC pad"[\s\S]*?<\/main>/, 'latest');
const FOOTER = cut(/<canvas class="fade" data-h="36"[\s\S]*?<\/footer>/, 'footer');
const LATEST = LATEST_MAIN + FOOTER;
const YEARS = [...new Set(posts.map((p) => p.d.slice(0, 4)))].map((y) => `<button type="button" data-year="${y}">${y}</button>`).join('');

// real projects: names, dates and lines from about.md and the old homepage; screenshots taken from the live sites
const PROJECTS = [
  ['AI Search Leaders', 'A private peer community for senior search professionals navigating the shift to generative AI search.', '2026 to now · searchleaders.ai', 'aisl'],
  ['The SEO MBA', 'Professional development for SEO professionals.', '2021 to now · seomba.com', 'seomba'],
  ['The Strategic Independent', 'A book about sustainable indie consulting.', 'Book · tomcritchlow.com/strategy', 'strategy'],
  ['Quotebacks', 'A quoting tool for bloggers.', '2020 · quotebacks.net', 'quotebacks'],
  ['The NEW MBA', 'Essays on becoming more capable and confident at work.', '2023 · newmba.co', 'newmba'],
  ['Fiercely Curious', 'A Brooklyn art collective with pop-up art shows.', '2013 to now · fiercelycurious.com', 'fiercely'],
  ['7books', 'Playlists for bookworms. My first Python project; it grew to over 6,000 users.', '2011 to 2013 · no longer online', null],
];
const projects = PROJECTS.map(([name, line, meta, shot]) => `<a class="proj" href="#"><figure>${shot ? `<img src="shots/${shot}.jpg" alt="Screenshot of ${esc(name)}" loading="lazy">` : `<div class="ph">7books</div>`}</figure><div class="meta"><b>${esc(name)}</b><i>${esc(line)}</i><span>${esc(meta)}</span></div></a>`).join('');

const firstSentence = (x) => (x || '').split(/(?<=[.!?])\s/)[0].trim();
const sentences = posts.map((p) => firstSentence(p.x)).filter((s) => s.length > 30 && s.length < 150);
const words = posts.map((p) => p.x.replace(/\.\.\.$/, '')).join(' ');
const titles = posts.map((p, i) => `<a href="${p.u}" data-i="${i}">${esc(p.t)}</a><sup>${p.d.slice(2, 4)}</sup>`).join(' ');
const ticker = (list) => { const once = list.map((s) => `<span>${esc(s)}</span>`).join(''); return once + once; }; // doubled so the loop is seamless and the band is full at rest

const PAGES = [
  ['cut-from-words', 'A · Cut from words', 'a'],
  ['the-wall', 'B · The wall', 'b'],
  ['the-shelf', 'C · The shelf', 'c'],
];
for (const [slug, name, key] of PAGES) {
  const body = src(key + '.html')
    .replaceAll('{{NAV}}', NAV).replace('{{INTRO}}', INTRO).replace('{{TOP}}', TOP).replace('{{LATEST}}', LATEST).replace('{{LATEST_MAIN}}', LATEST_MAIN).replace('{{FOOTER}}', FOOTER).replace('{{YEARS}}', YEARS).replace('{{COUNT}}', String(posts.length))
    .replace('{{PROJECTS}}', projects).replace('{{TITLES}}', titles)
    .replace('{{TICKER1}}', ticker(sentences.slice(0, 40))).replace('{{TICKER2}}', ticker(sentences.slice(40, 80)));
  if (/\{\{[A-Z0-9]+\}\}/.test(body)) throw new Error('unfilled placeholder in ' + slug);
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${name} · homepage exploration</title>
<style>
${css}
${src('home.css')}
</style>
</head>
<body>
<div class="xbar"><b>${name}</b><a href="index.html">All homepage ideas</a><span>A mock-up: links inside it do not go anywhere.</span></div>
${body}
<script>window.__POSTS=${JSON.stringify(posts).replace(/</g, '\\u003c')};window.__WORDS=${JSON.stringify(words).replace(/</g, '\\u003c')};</script>
<script>${js}</script>
<script>${src('extra.js')}</script>
</body>
</html>
`;
  writeFileSync(join(here, slug + '.html'), html);
  console.log(slug + '.html', Math.round(html.length / 1024) + 'KB');
}
