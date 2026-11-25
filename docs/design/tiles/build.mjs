// Builds the three direction pages into docs/design/tiles/<slug>.html (self-contained, fonts embedded).
// Usage: node docs/design/tiles/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const src = (f) => readFileSync(join(here, 'src', f), 'utf8');
const fonts = JSON.parse(readFileSync(join(here, 'fonts/fonts.json'), 'utf8'));

const GREEN = 'oklch(0.66 0.21 145)'; // the site's #02AD28, kept

const DIRECTIONS = [
  {
    slug: 'marginalia', letter: 'A', name: 'Marginalia',
    thesis: 'A paperback someone has already been through with a green pencil. The writing sits in one quiet column and everything else lives in the margins: side notes, dates, underlines, circles.',
    not: 'Refuses the centred newsletter column with a subscribe box. Not a print pastiche: no cream paper, no drop caps, no ornament.',
    scene: 'Read on a laptop at a kitchen table in daylight, so light leads.',
    fonts: { display: 'Literata', body: 'Literata', label: 'Figtree', mono: 'ui-monospace' },
    embed: ['Literata', 'Figtree'],
    light: { bg: 'oklch(0.985 0.004 150)', panel: 'oklch(0.995 0.002 150)', fg: 'oklch(0.22 0.02 155)', muted: 'oklch(0.47 0.02 155)', rule: 'oklch(0.9 0.008 150)', green: GREEN, 'green-ink': 'oklch(0.46 0.15 147)', wash: 'oklch(0.95 0.04 148)' },
    dark: { bg: 'oklch(0.2 0.014 155)', panel: 'oklch(0.24 0.016 155)', fg: 'oklch(0.92 0.01 150)', muted: 'oklch(0.71 0.02 150)', rule: 'oklch(0.33 0.015 155)', green: 'oklch(0.74 0.2 145)', 'green-ink': 'oklch(0.8 0.17 146)', wash: 'oklch(0.28 0.04 150)' },
    pairs: [['fg', 'bg'], ['muted', 'bg'], ['green-ink', 'bg'], ['fg', 'panel']],
    specimens: [
      ['display', "Hey, I'm Tom.", 'font:400 40px/1.16 var(--font-display);letter-spacing:-.018em', 'Display · Literata 400 · 40/1.16 · -0.018em'],
      ['headline', 'Of Termites & Tokens', 'font:500 28px/1.1 var(--font-display);letter-spacing:-.02em', 'Post title · Literata 500 · 50/1.06 on the page'],
      ['body', 'Maybe the future of work is... termites? Let me explain.', 'font:400 19px/1.66 var(--font-body)', 'Body · Literata 400 · 19/1.66 · 640px measure'],
      ['label', 'June 8, 2026 · Latest writing · 223 posts since 2012', 'font:400 13.5px/1.5 var(--font-label);color:var(--muted)', 'Margins and labels · Figtree 400/700 · 13.5/1.5'],
    ],
    stance: { Color: 'Restrained. Near-white page; green appears only as ink in the margins and under links.', Type: 'Editorial pairing: a book serif for everything read, a plain sans for everything in the margin.', Density: 'Spacious. One 640px column, a date gutter on the left, a 270px margin on the right.', Material: 'Flat. Hairlines only, no cards, no shadows.', Motion: 'Elegant. Pencil marks draw in over 700ms as they scroll into view; nothing else moves.', Icons: 'None. Marks are drawn strokes, not an icon set.', Imagery: "Tom's own images in posts, set inside the column. No illustration.", 'Interactive piece': 'The pond: a text-character water surface at the foot of every page. Latest post titles float on it and ripple under the pointer.', Flourishes: 'Margin side notes; hand-drawn underline and circle marks; plain hover previews on internal links.' },
  },
  {
    slug: 'green-room', letter: 'B', name: 'Green Room',
    thesis: 'The green stops being an accent and becomes the room. A loud front door with a colony of characters crawling across it, then calm white sheets to read on.',
    not: 'Refuses the white page with a tasteful accent colour. Not a brochure: no stock hero image, no call-to-action buttons, no feature cards.',
    scene: 'Opened from a link on a phone on the subway; it has one second to look like nobody else, so the colour leads in both modes.',
    fonts: { display: 'Bricolage Grotesque', body: 'Geist', label: 'Geist', mono: 'Geist Mono' },
    embed: ['Bricolage Grotesque', 'Geist', 'Geist Mono'],
    light: { bg: 'oklch(0.965 0.025 145)', panel: 'oklch(0.995 0.004 145)', fg: 'oklch(0.2 0.035 152)', muted: 'oklch(0.45 0.03 152)', rule: 'oklch(0.87 0.03 147)', green: 'oklch(0.69 0.21 145)', 'green-ink': 'oklch(0.43 0.14 148)', 'on-field': 'oklch(0.18 0.06 152)', 'field-ink': 'oklch(0.55 0.18 146)', hl: 'oklch(0.87 0.15 142)' },
    dark: { bg: 'oklch(0.17 0.02 152)', panel: 'oklch(0.215 0.025 152)', fg: 'oklch(0.94 0.02 145)', muted: 'oklch(0.73 0.03 148)', rule: 'oklch(0.32 0.03 150)', green: 'oklch(0.36 0.11 148)', 'green-ink': 'oklch(0.8 0.18 145)', 'on-field': 'oklch(0.96 0.04 145)', 'field-ink': 'oklch(0.5 0.15 146)', hl: 'oklch(0.42 0.12 147)' },
    pairs: [['fg', 'bg'], ['fg', 'panel'], ['muted', 'bg'], ['muted', 'panel'], ['green-ink', 'bg'], ['green-ink', 'panel'], ['on-field', 'green'], ['fg', 'hl']],
    specimens: [
      ['display', "Hey, I'm Tom.", 'font:800 64px/.9 var(--font-display);letter-spacing:-.045em', 'Display · Bricolage Grotesque 800 · up to 168/0.9 · -0.045em'],
      ['headline', 'Of Termites & Tokens', 'font:650 34px/1.04 var(--font-display);letter-spacing:-.028em', 'Titles · Bricolage Grotesque 650 · 44/1.04 in lists, 68/0.98 on posts'],
      ['body', 'Maybe the future of work is... termites? Let me explain.', 'font:400 18.5px/1.66 var(--font-body)', 'Body · Geist 400 · 18.5/1.66'],
      ['label', 'Jun 2026 · Latest writing', 'font:500 13px/1.4 var(--font-mono);color:var(--muted)', 'Labels · Geist Mono 500 · 13'],
    ],
    stance: { Color: 'Committed. Green owns the whole first screen and every hover; reading surfaces are white sheets on a pale green ground.', Type: 'Display with a point of view: a wide, slightly odd grotesque set very large, over a clean sans for reading.', Density: 'Normal. Big type, generous rows, one 780px sheet for posts.', Material: 'Tonal layering. Rounded sheets with one soft shadow; previews are cards.', Motion: 'Playful, kept short. Rows slide 6px and flood green on hover; highlighter swipes in over 600ms; notes unfold in 280ms.', Icons: 'None needed; numbered chips for notes.', Imagery: "Tom's own images, full width of the sheet with 14px corners.", 'Interactive piece': 'The colony: termites made of the letter t wander the green field laying trails. Drag across it and they follow yours.', Flourishes: 'Highlighter marks; notes that pop open in place; link previews as green-topped cards.' },
  },
  {
    slug: 'the-stacks', letter: 'C', name: 'The Stacks',
    thesis: 'The site as a small library app. Fourteen years of writing in a catalogue you move through with the keyboard, with a reading pane beside it that fills as you go.',
    not: 'Refuses the blog as one long scroll of posts. Not a dashboard: no stat tiles, no card grid, no charts.',
    scene: 'A returning reader at a desk with a keyboard, digging through the archive for something half remembered, so density and speed lead.',
    fonts: { display: 'Hanken Grotesk', body: 'Hanken Grotesk', label: 'Hanken Grotesk', mono: 'JetBrains Mono' },
    embed: ['Hanken Grotesk', 'JetBrains Mono'],
    light: { bg: 'oklch(0.965 0.004 160)', panel: 'oklch(0.995 0.002 160)', fg: 'oklch(0.23 0.012 160)', muted: 'oklch(0.48 0.012 160)', rule: 'oklch(0.885 0.006 160)', green: GREEN, 'green-ink': 'oklch(0.45 0.145 147)', wash: 'oklch(0.945 0.035 147)' },
    dark: { bg: 'oklch(0.165 0.006 160)', panel: 'oklch(0.205 0.008 160)', fg: 'oklch(0.93 0.006 160)', muted: 'oklch(0.7 0.01 160)', rule: 'oklch(0.3 0.01 160)', green: 'oklch(0.72 0.2 145)', 'green-ink': 'oklch(0.8 0.17 146)', wash: 'oklch(0.27 0.045 150)' },
    pairs: [['fg', 'bg'], ['fg', 'panel'], ['muted', 'bg'], ['muted', 'panel'], ['green-ink', 'bg'], ['green-ink', 'panel'], ['fg', 'wash']],
    specimens: [
      ['display', 'Of Termites & Tokens', 'font:700 34px/1.1 var(--font-body);letter-spacing:-.022em', 'Titles · Hanken Grotesk 700 · 34/1.1 in the pane, 44/1.04 on posts'],
      ['headline', 'Writing', 'font:700 15px/1 var(--font-body)', 'Panel headings · Hanken Grotesk 700 · 15'],
      ['body', 'Maybe the future of work is... termites? Let me explain.', 'font:400 17.5px/1.68 var(--font-body)', 'Body · Hanken Grotesk 400 · 17.5/1.68 · 64ch'],
      ['label', '2026-06-08   j k move   enter open', 'font:400 12.5px/1.4 var(--font-mono);color:var(--muted)', 'Dates and keys · JetBrains Mono 400 · 12.5'],
    ],
    stance: { Color: 'Restrained. Cool greys; green marks only the selected row, links and the garden.', Type: 'Workhorse sans with a mono for dates and keys. No display face at all.', Density: 'Compact. Three panels, 14.5px rows, everything reachable without scrolling.', Material: 'Bordered, with subtle elevation. One rounded shell holding ruled panels.', Motion: 'Crisp. Selection and the preview update instantly; nothing eases for longer than 150ms.', Icons: 'None; keyboard hints carry the affordances.', Imagery: "Tom's own images inside the reader only.", 'Interactive piece': 'The garden: a stem per year, as tall as that year had posts (2020 is the tallest at 41). It sways; hover a stem for its count.', Flourishes: 'j / k and / shortcuts; a context rail on posts that holds notes and shows a preview of whichever link you are on.' },
  },
];

// ---- B + C hybrids (round 2): bold green homepage, technical / refined essay pages ----
const HY_LIGHT = { bg: 'oklch(0.972 0.008 150)', panel: 'oklch(0.995 0.003 150)', fg: 'oklch(0.21 0.02 155)', muted: 'oklch(0.46 0.02 155)', rule: 'oklch(0.885 0.012 150)', green: 'oklch(0.69 0.21 145)', mark: GREEN, 'green-ink': 'oklch(0.43 0.14 148)', 'on-field': 'oklch(0.18 0.06 152)', 'field-ink': 'oklch(0.55 0.18 146)', hl: 'oklch(0.87 0.15 142)', wash: 'oklch(0.945 0.035 147)' };
const HY_DARK = { bg: 'oklch(0.165 0.012 155)', panel: 'oklch(0.205 0.014 155)', fg: 'oklch(0.93 0.012 150)', muted: 'oklch(0.71 0.02 150)', rule: 'oklch(0.3 0.016 152)', green: 'oklch(0.36 0.11 148)', mark: 'oklch(0.72 0.2 145)', 'green-ink': 'oklch(0.8 0.18 145)', 'on-field': 'oklch(0.96 0.04 145)', 'field-ink': 'oklch(0.5 0.15 146)', hl: 'oklch(0.42 0.12 147)', wash: 'oklch(0.27 0.045 150)' };
const HY_PAIRS = [['fg', 'bg'], ['fg', 'panel'], ['muted', 'bg'], ['muted', 'panel'], ['green-ink', 'bg'], ['green-ink', 'panel'], ['on-field', 'green'], ['fg', 'wash'], ['fg', 'hl']];
DIRECTIONS.push(
  {
    slug: 'front-door', letter: 'D', name: 'Front Door',
    thesis: "The straight merge. B's green front door with the termite colony, then C's reader for essays: a calm panel with a context rail that holds the contents, notes and a preview of whichever link you are on.",
    not: 'Refuses a quiet homepage. Not an app everywhere: the catalogue from C is left out, so the homepage stays a statement.',
    scene: 'Lands from a shared link on a phone, stays to read at a desk; loud for one screen, then gets out of the way.',
    fonts: { display: 'Bricolage Grotesque', body: 'Geist', label: 'Geist', mono: 'Geist Mono' }, embed: ['Bricolage Grotesque', 'Geist', 'Geist Mono'],
    parts: { css: ['b', 'c', 'mix', 'd'], html: ['b-home', 'c-post'], js: ['b', 'c'] },
    light: HY_LIGHT, dark: HY_DARK, pairs: HY_PAIRS,
    specimens: [
      ['display', "Hey, I'm Tom.", 'font:800 64px/.9 var(--font-display);letter-spacing:-.045em', 'Homepage · Bricolage Grotesque 800 · up to 168/0.9'],
      ['headline', 'Of Termites & Tokens', 'font:750 34px/1 var(--font-display);letter-spacing:-.04em', 'Essay title · Bricolage Grotesque 750 · 58/1'],
      ['body', 'Maybe the future of work is... termites? Let me explain.', 'font:400 17.5px/1.68 var(--font-body)', 'Essay body · Geist 400 · 17.5/1.68 · 64ch'],
      ['label', '2026-06-08 · On this page · Link preview · Notes', 'font:400 12.5px/1.4 var(--font-mono);color:var(--muted)', 'Rail and dates · Geist Mono 400 · 12.5'],
    ],
    stance: { Homepage: "B's, unchanged: full green field, very large type, big rows that flood green on hover.", Essay: "C's reader: one bordered panel, sans text at 64 characters, and a rail on the right for contents, link previews and notes.", Type: 'One grotesque for every title, a clean sans for reading, a mono for the rail.', Motion: 'Playful on the homepage, crisp on essays.', 'Interactive piece': 'The colony: drag a trail across the green and the termites follow it.', Flourishes: 'Link previews dock in the rail; notes live in the rail and flash when you click their number; one highlighted sentence per essay.' },
  },
  {
    slug: 'green-ledger', letter: 'E', name: 'Green Ledger',
    thesis: "The catalogue moves onto the green. The homepage is half statement, half index: the big hello on the left, the latest posts in a ruled ledger on the right. Essays are set like a working paper: a book serif with mono notes in both margins.",
    not: 'Refuses the choice between bold and bookish. Not all sans: the essay page brings a serif back for long reading.',
    scene: 'A reader who wants to see what is here at a glance, then settle into one long piece; the essay page is built for an hour, not a minute.',
    fonts: { display: 'Bricolage Grotesque', body: 'Literata', label: 'Geist', mono: 'Geist Mono' }, embed: ['Bricolage Grotesque', 'Literata', 'Geist', 'Geist Mono'],
    parts: { css: ['b', 'e'], html: ['e-home', 'e-post'], js: ['b', 'e'] },
    light: HY_LIGHT, dark: HY_DARK, pairs: HY_PAIRS,
    specimens: [
      ['display', "Hey, I'm Tom.", 'font:800 60px/.9 var(--font-display);letter-spacing:-.045em', 'Homepage · Bricolage Grotesque 800 · up to 148/0.9, on two lines'],
      ['headline', 'Of Termites & Tokens', 'font:750 34px/.98 var(--font-display);letter-spacing:-.04em', 'Essay title · Bricolage Grotesque 750 · 64/0.98'],
      ['body', 'Maybe the future of work is... termites? Let me explain.', 'font:400 19px/1.66 var(--font-body)', 'Essay body · Literata 400 · 19/1.66 · 640px measure'],
      ['label', 'Published 2026-06-08 · Sections · 1,773 words', 'font:400 12.5px/1.5 var(--font-mono);color:var(--muted)', 'Margins, ledger dates · Geist Mono 400 · 12.5'],
    ],
    stance: { Homepage: 'Green field split in two: the hello, and a ruled ledger of the eight latest posts that inverts on hover and moves with j and k.', Essay: 'Working paper: serif column, section list and date in the left margin, side notes in the right, all in mono.', Type: 'Grotesque for titles, book serif for reading, mono for apparatus.', Motion: 'Crisp. Ledger rows invert instantly; the highlighter swipes once.', 'Interactive piece': 'The colony, behind the hello and the ledger.', Flourishes: 'Margin side notes; a section list that marks where you are; hard-edged link previews with an offset green shadow.' },
  },
  {
    slug: 'termite-type', letter: 'F', name: 'Termite Type',
    thesis: "The boldest front: the headline itself is built from characters and the termites eat it, then it grows back. The whole homepage is green. Essays are set like a technical manual: a numbered section rail, mono headings, notes as inline callouts.",
    not: 'Refuses decoration that sits beside the content: here the interactive piece is the headline. Not gentle: no white on the homepage at all.',
    scene: 'Someone who has seen a hundred personal sites this year and will remember the one where the headline got eaten.',
    fonts: { display: 'Bricolage Grotesque', body: 'Geist', label: 'Geist', mono: 'Geist Mono' }, embed: ['Bricolage Grotesque', 'Geist', 'Geist Mono'],
    parts: { css: ['b', 'f'], html: ['f-home', 'f-post'], js: ['f'] },
    light: HY_LIGHT, dark: HY_DARK, pairs: HY_PAIRS,
    specimens: [
      ['display', "Hey, I'm Tom.", 'font:800 60px/.9 var(--font-display);letter-spacing:-.045em', 'Homepage headline · drawn in 9px characters from Bricolage Grotesque 800'],
      ['headline', 'Of Termites & Tokens', 'font:750 34px/.98 var(--font-display);letter-spacing:-.04em', 'Essay title · Bricolage Grotesque 750 · 62/0.98'],
      ['body', 'Maybe the future of work is... termites? Let me explain.', 'font:400 17.5px/1.7 var(--font-body)', 'Essay body · Geist 400 · 17.5/1.7 · 66ch'],
      ['label', '3  Pheromones of the Organization', 'font:600 15px/1.3 var(--font-mono)', 'Section headings and rail · Geist Mono 600 · 15'],
    ],
    stance: { Homepage: 'Drenched: green edge to edge, the character headline, then the intro beside a plain ruled list of posts.', Essay: 'Manual: a section rail on the left that ticks off what you have read, mono numbered headings, notes as callout boxes in the text.', Type: 'Grotesque titles, sans reading text, mono for everything structural.', Motion: 'Playful and constant on the homepage headline; still everywhere else.', 'Interactive piece': 'The headline. Termites chew holes in it, it regrows, and sweeping the pointer across it clears a path.', Flourishes: 'Section progress in the rail; inline callout notes; one highlighted sentence; mono link previews.' },
  },
);

// ---- round 3: riffs on F (Termite Type) ----
const F_BASE = DIRECTIONS.find((d) => d.slug === 'termite-type');
DIRECTIONS.push(
  { ...F_BASE, slug: 'own-words', letter: 'G', name: 'Own Words',
    thesis: "F, sharper and more literary. The headline is still built from characters, but the characters are your own sentence, set fine enough that the letters read cleanly. Termites still eat it. Essays keep the manual layout and gain a serif for the text.",
    not: 'Refuses the idea that technical means sans. Not louder than F: the same homepage, with more to find when you look closely.',
    fonts: { display: 'Bricolage Grotesque', body: 'Geist', label: 'Geist', mono: 'Geist Mono' }, embed: ['Bricolage Grotesque', 'Literata', 'Geist', 'Geist Mono'],
    parts: { css: ['b', 'f', 'g'], html: ['g-home', 'f-post'], js: ['f'] },
    specimens: [F_BASE.specimens[0], F_BASE.specimens[1], ['body', 'Maybe the future of work is... termites? Let me explain.', "font:400 19px/1.66 'Literata',Georgia,serif", 'Essay body · Literata 400 · 19/1.66 · 62ch'], F_BASE.specimens[3]],
    stance: { ...F_BASE.stance, Homepage: 'As F, with the headline drawn in 7.5px characters that spell out the intro sentence.', Essay: 'The manual layout from F, with a book serif for the running text and the subtitle.', Type: 'Grotesque titles, serif reading text, mono for everything structural.', 'Interactive piece': 'The headline, made of your words. Termites chew through the sentence and it regrows.' } },
  { ...F_BASE, slug: 'night-swarm', letter: 'H', name: 'Night Swarm',
    thesis: "F after dark. The homepage is near-black in both modes and the characters are lit green. Instead of being eaten, the headline is a swarm: it flies into place when the page opens, scatters when you push through it, and finds its way back.",
    not: 'Refuses a static hero. Not a hacker terminal: one face, no scanlines, no glow, and the essay pages stay light and quiet.',
    scene: 'Opened late, on a laptop, by someone who will play with the headline for a minute before reading anything.',
    parts: { css: ['b', 'f', 'h'], html: ['h-home', 'f-post'], js: ['f'] },
    light: { ...HY_LIGHT, green: 'oklch(0.2 0.035 152)', 'on-field': 'oklch(0.86 0.2 145)', 'field-ink': 'oklch(0.45 0.12 146)' },
    dark: { ...HY_DARK, green: 'oklch(0.13 0.02 152)', 'on-field': 'oklch(0.84 0.2 145)', 'field-ink': 'oklch(0.4 0.1 146)' },
    stance: { ...F_BASE.stance, Homepage: 'Near-black green from edge to edge in light and dark mode alike; text and characters in lit green.', Motion: 'One orchestrated moment: the swarm assembling on load. After that it only moves when touched, plus an occasional gust.', 'Interactive piece': 'The headline as a swarm of characters that scatters from the pointer and reassembles.' } },
  { ...F_BASE, slug: 'paper-colony', letter: 'I', name: 'Paper Colony',
    thesis: "F turned inside out. The ground is paper and the green is the ink: every drawing on the site is made of green characters. The headline is not a greeting but whatever you published last, so the homepage changes with each essay. A garden of posts per year sits beside it.",
    not: 'Refuses a homepage that never changes. Not drenched: the green is still everywhere, but as line, not as fill.',
    scene: 'A regular reader checking back; the first thing they see is the new piece, drawn large and being eaten.',
    parts: { css: ['b', 'c', 'f', 'i'], html: ['i-home', 'i-post'], js: ['c', 'f'] },
    light: { ...HY_LIGHT, green: 'oklch(0.985 0.006 150)', 'on-field': 'oklch(0.42 0.14 147)', 'field-ink': 'oklch(0.72 0.16 146)' },
    dark: { ...HY_DARK, green: 'oklch(0.19 0.014 155)', 'on-field': 'oklch(0.82 0.19 145)', 'field-ink': 'oklch(0.5 0.14 146)' },
    specimens: [['display', 'Of Termites & Tokens', 'font:800 56px/.9 var(--font-display);letter-spacing:-.045em', 'Homepage headline · the latest essay title, drawn in 9px green characters'], F_BASE.specimens[1], F_BASE.specimens[2], F_BASE.specimens[3]],
    stance: { ...F_BASE.stance, Homepage: 'Paper ground. The latest essay title in green characters, then the intro, the garden and a ruled list of posts.', Essay: "F's manual, with a termite walking a dotted line at each section break.", Color: 'Restrained: green as ink on paper, never as a fill.', 'Interactive piece': 'Three character drawings: the edible headline, the posts-per-year garden, and the walking section breaks.', Flourishes: 'Character drawings as the house illustration style; section progress in the rail; inline callout notes.' } },
);

// ---- round 4: green front + Stacks essays + search + top posts ----
import { readdirSync } from 'node:fs';
const POSTS_DIR = join(here, '../../../_posts');
const unq = (v) => (v || '').trim().replace(/^(['"])(.*)\1$/, '$2');
const POSTS = readdirSync(POSTS_DIR).map((f) => [f, f.match(/^(\d{4})-(\d{1,2})-(\d{1,2})-(.+)\.(md|markdown|html)$/)]).filter(([, m]) => m).map(([f, m]) => {
  const fm = (readFileSync(join(POSTS_DIR, f), 'utf8').match(/^---\n([\s\S]*?)\n---/) || [, ''])[1];
  const get = (k) => unq((fm.match(new RegExp('^' + k + ':(.*)$', 'm')) || [, ''])[1]);
  const [y, mo, d, slug] = [m[1], m[2].padStart(2, '0'), m[3].padStart(2, '0'), m[4]];
  return { file: f.replace(/\.[^.]+$/, ''), date: `${y}-${mo}-${d}`, title: get('title') || slug, subtitle: get('subtitle'), url: `/${y}/${mo}/${d}/${slug}/` };
}).sort((a, b) => (a.date < b.date ? 1 : -1));
// Tom's own picks from start-here.md; in the real site this becomes `featured: true` in a post's front matter.
const TOP = ['2019-04-04-the-strategic-independent', '2018-02-23-small-b-blogging', '2018-10-29-ways-of-seeing', '2020-02-20-narrative-strategy', '2019-05-17-blogpunk', '2020-07-23-thinking-in-public'].map((f) => { const p = POSTS.find((x) => x.file === f); if (!p) throw new Error('missing top post ' + f); return p; });
const topHtml = () => `<a class="lead" href="#"><time>${TOP[0].date}</time><b>${esc(TOP[0].title)}</b><i>${esc(TOP[0].subtitle)}</i><u>Read the essay</u></a>
<ol class="plain rich">${TOP.slice(1).map((p) => `<li><a href="#"><span><b>${esc(p.title)}</b><i>${esc(p.subtitle)}</i></span><time>${p.date.slice(0, 4)}</time></a></li>`).join('')}</ol>`;
// first prose paragraphs of a post, as plain text, for the miniature page previews
const excerpt = (file, n) => {
  const raw = readdirSync(POSTS_DIR).find((f) => f.startsWith(file + '.'));
  const body = readFileSync(join(POSTS_DIR, raw), 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  return body.split(/\n\s*\n/).map((b) => b.trim()).filter((b) => b && !/^[<!#{>|]/.test(b) && !/^(\*|-|\d+\.)\s/.test(b) && !/^\{%/.test(b))
    .map((b) => b.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/<[^>]+>/g, '').replace(/\{%[^%]*%\}/g, '').replace(/[*_`]{1,3}([^*_`]+)[*_`]{1,3}/g, '$1').replace(/\[\^[^\]]+\]/g, '').replace(/\s+/g, ' ').trim())
    .filter((b) => b.length > 40).slice(0, n);
};
// everything a link card shows for one of Tom's own posts, all read from the repo
const rawPost = (file) => readFileSync(join(POSTS_DIR, readdirSync(POSTS_DIR).find((f) => f.startsWith(file + '.'))), 'utf8');
const attr = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const linkData = (file) => {
  const p = POSTS.find((x) => x.file === file); if (!p) throw new Error('missing ' + file);
  const words = rawPost(file).replace(/^---\n[\s\S]*?\n---\n/, '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const back = POSTS.filter((o) => o.file !== file && rawPost(o.file).includes(p.url.replace(/\/$/, ''))).length;
  const when = new Date(p.date + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
  return `data-t="${attr(p.title)}" data-s="${attr(p.subtitle)}" data-x="${attr(excerpt(file, 2).join(' '))}" data-date="${when}" data-words="${words.toLocaleString('en-US')} words" data-read="${Math.max(1, Math.round(words / 230))} min read" data-back="${back ? `Linked from ${back} other post${back === 1 ? '' : 's'}` : ''}"`;
};
const miniHtml = (p) => `<a class="mini" href="#" aria-label="${esc(p.title)}"><div><div class="minihead"><div class="mw">Tom Critchlow</div><time>${p.date}</time><b>${esc(p.title)}</b><i>${esc(p.subtitle)}</i></div><canvas class="fade quiet" data-h="30" data-cell="3" aria-hidden="true"></canvas><div class="minibody">${excerpt(p.file, 4).map((t) => `<p>${esc(t)}</p>`).join('')}</div></div></a>`;
const minisHtml = () => TOP.map(miniHtml).join('');
const deckHtml = () => TOP.map((p) => { const first = (excerpt(p.file, 1)[0] || '').split(/(?<=[.!?])\s/).slice(0, 2).join(' '); return `<div class="slide"><div class="decktext"><a href="#"><time>${p.date}</time><b>${esc(p.title)}</b><i>${esc(p.subtitle)}</i><q>${esc(first)}</q><u>Read the essay</u></a></div><div class="stack">${miniHtml(p)}</div></div>`; }).join('');
const latestHtml = () => POSTS.slice(0, 8).map((p) => `<li><a href="#"><time>${p.date}</time><span><b>${esc(p.title)}</b>${p.subtitle ? `<i>${esc(p.subtitle)}</i>` : ''}</span></a></li>`).join('');
DIRECTIONS.push({
  slug: 'green-stacks', letter: 'J', name: 'Green Stacks',
  thesis: "The green front with the character headline, then top posts, then the latest, with the green dithering out into the page between them. Essays carry their title on the same green, then go spare: one crisp column with notes open in the margin. Search is one key away on every page.",
  not: 'Refuses a homepage that is only a greeting: it now does a job, pointing at the best work first and the newest second. Not an app: no catalogue panes, just search.',
  scene: 'A new reader from a shared link who wants to know where to start, and a returning one who wants a specific old post fast.',
  fonts: { display: 'Hanken Grotesk', body: 'Hanken Grotesk', label: 'Hanken Grotesk', mono: 'JetBrains Mono' }, embed: ['Hanken Grotesk', 'JetBrains Mono', 'Bricolage Grotesque'],
  parts: { css: ['b', 'c', 'f', 'mix', 'j'], html: ['j-home', 'j-post'], js: ['feat', 'post', 'c', 'f', 'j'] }, data: 'posts',
  light: HY_LIGHT, dark: HY_DARK, pairs: HY_PAIRS,
  specimens: [
    ['display', 'The Strategic Independent', 'font:700 48px/.98 var(--font-display);letter-spacing:-.04em', 'Top post · Hanken Grotesk 700 · up to 62/0.98. The greeting above it is drawn in characters.'],
    ['headline', 'Of Termites & Tokens', 'font:700 34px/1.04 var(--font-body);letter-spacing:-.03em', 'Essay title · Hanken Grotesk 700 · 44/1.04'],
    ['body', 'Maybe the future of work is... termites? Let me explain.', 'font:400 17.5px/1.68 var(--font-body)', 'Essay body · Hanken Grotesk 400 · 17.5/1.68 · 64ch'],
    ['label', '2026-06-08 · Top posts · Latest · Search /', 'font:400 12.5px/1.4 var(--font-mono);color:var(--muted)', 'Dates, labels, keys · JetBrains Mono 400 · 12.5'],
  ],
  stance: { Homepage: 'Green from the nav down through the top posts: the hash headline with a few termites nibbling it, a two-part intro, then a swipe row of six miniature essay pages. The green then breaks up into characters and the latest eight posts sit on the page below.', Essay: "The essay title sits on the green, which dissolves into the page through a small, still dither. A thin green spine runs down the left edge to the green foot. One crisp sans column sits a little left of centre with notes open in the margin: the phrase a note belongs to is tinted, and the two light up together. Quotebacks and tweets are cards. Links show a larger card with real details after a short pause.", Fade: 'Ordered dither on an 8 by 8 pattern that also fades in strength. Homepage: 4px cells, 120px tall, a slow ripple. Essays: 3px cells, 36px tall, no motion.', Search: 'Press / or Cmd-K anywhere, or use the Search button. It searches the titles and subtitles of all 223 posts as you type; arrows move, escape closes.', 'Top posts': 'Six of your own picks from the Start Here page. On the real site a post is featured by adding one line to its front matter.', Type: 'One workhorse sans for everything, a mono for dates and keys. The headline shape is still cut from Bricolage Grotesque.', Motion: 'Constant on the headline only; everything else is crisp and under 150ms.', 'Interactive piece': 'The edible headline, plus search.' },
});

// ---- colour maths: oklch -> sRGB, WCAG contrast ----
function oklchToRgb(str) {
  const m = str.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)/);
  const L = +m[1], C = +m[2], h = (+m[3] * Math.PI) / 180;
  const a = C * Math.cos(h), b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b, m_ = L - 0.1055613458 * a - 0.0638541728 * b, s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3, mm = m_ ** 3, s = s_ ** 3;
  return [4.0767416621 * l - 3.3077115913 * mm + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * mm - 0.3413193965 * s, -0.0041960863 * l - 0.7034186147 * mm + 1.707614701 * s].map((v) => Math.min(1, Math.max(0, v)));
}
const lum = (c) => { const [r, g, b] = oklchToRgb(c); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const contrast = (x, y) => { const a = lum(x), b = lum(y); return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05); };

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const fontFaces = (families) => fonts.filter((f) => families.includes(f.family)).map((f) => {
  const b64 = readFileSync(join(here, 'fonts', f.file)).toString('base64');
  return `@font-face{font-family:'${f.family}';font-style:${f.style};font-weight:${f.weight};font-display:swap;src:url(data:font/woff2;base64,${b64}) format('woff2')}`;
}).join('\n');
const vars = (t) => Object.entries(t).map(([k, v]) => `--${k}:${v}`).join(';');
const stack = (f) => (f === 'ui-monospace' ? 'ui-monospace,SFMono-Regular,Menlo,monospace' : `'${f}',system-ui,sans-serif`);

let failed = false;
for (const d of DIRECTIONS) {
  for (const mode of ['light', 'dark']) for (const [fg, bg] of d.pairs) {
    const r = contrast(d[mode][fg], d[mode][bg]);
    if (r < 4.5) { failed = true; console.error(`CONTRAST FAIL ${d.slug} ${mode} ${fg} on ${bg}: ${r.toFixed(2)}`); }
  }
  const sw = (mode) => `<div><h3>${mode === 'light' ? 'Light' : 'Dark'}</h3>${Object.entries(d[mode]).map(([k, v]) => `<div class="sw"><i style="background:${v}"></i><div><b>${k}</b><code>${v}</code></div></div>`).join('')}</div>`;
  const spec = `<section class="spec"><div class="spec-grid">
<div><h2>Type</h2><div class="specimen">${d.specimens.map(([, text, style, note]) => `<div><div style="${style}">${esc(text)}</div><small>${esc(note)}</small></div>`).join('')}</div></div>
<div><h2>Colour, both modes</h2><div class="swatches">${sw('light')}${sw('dark')}</div></div>
<div style="grid-column:1/-1"><h2>Stance</h2><dl class="stance">${Object.entries(d.stance).map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('')}<dt>Scene</dt><dd>${esc(d.scene)}</dd></dl></div>
</div></section>`;
  const key = d.letter.toLowerCase();
  const P = d.parts || { css: [key], html: [key], js: [key] };
  let html = `<!doctype html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${d.letter} · ${d.name} · tomcritchlow.com direction</title>
<style>
${fontFaces(d.embed)}
:root{${vars(d.light)};--font-display:${stack(d.fonts.display)};--font-body:${stack(d.fonts.body)};--font-label:${stack(d.fonts.label)};--font-mono:${stack(d.fonts.mono)}}
[data-theme="dark"]{${vars(d.dark)}}
${src('base.css')}
${P.css.map((f) => src(f + '.css')).join('\n')}
</style>
<script>${src('shared.js')}</script>${d.data === 'posts' ? `\n<script>window.POSTS=${JSON.stringify(POSTS.map((p) => [p.date, p.title, p.subtitle, p.url])).replace(/</g, '\\u003c')}</script>` : ''}
</head>
<body>
<!-- DIRECTION ${d.letter}: ${d.name}. THESIS: ${d.thesis} NOT: ${d.not} -->
<div class="tilebar"><div class="name">${d.letter} · ${d.name}<small><a href="index.html">All directions</a></small></div><div class="thesis"><p>${esc(d.thesis)}</p><p class="not">${esc(d.not)}</p></div><button id="themebtn" type="button">Switch to dark</button></div>
${P.html.map((f) => src(f + '.html')).join('\n')}
${spec}
<script>${P.js.map((f) => src(f + '.js')).join('\n')}</script>
</body>
</html>
`;
  if (d.data === 'posts') html = html.replace('<!--TOP-->', topHtml()).replace('<!--LATEST-->', latestHtml()).replace('<!--MINIS-->', minisHtml()).replace(/data-post="([^"]+)"/g, (m, file) => linkData(file)).replace('<!--NEXT-->', POSTS.slice(1, 4).map((p) => `<li><a href="#"><span><b>${esc(p.title)}</b><i>${esc(p.subtitle)}</i></span><time>${p.date.slice(0, 4)}</time></a></li>`).join(''));
  if (/\u2014/.test(html.replace(/<script>window\.POSTS=[^\n]*/, ''))) { failed = true; console.error(`EM DASH in ${d.slug}`); }
  writeFileSync(join(here, d.slug + '.html'), html);
  console.log(`${d.slug}.html ${(html.length / 1024).toFixed(0)}KB`);
}
if (failed) process.exit(1);
