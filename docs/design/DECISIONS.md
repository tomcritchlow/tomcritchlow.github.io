# Design decisions — tomcritchlow.com

## 2026-11-25 — Three directions built

Review page (Claude artifact, private): https://claude.ai/artifact/LCNaaMB3MNUb9dBk8jMWvr
Source for that page: `docs/design/tiles/directions.html`. This is a personal project, so nothing is published to Alephic Intelligence.

| Tile | Colour | Type | Density | Material | Interactive piece | Page |
| ---- | ------ | ---- | ------- | -------- | ----------------- | ---- |
| A · Marginalia | Restrained | Editorial serif/sans (Literata + Figtree) | Spacious | Flat, hairlines | Text pond in the footer | `marginalia.html` |
| B · Green Room | Committed (green field) | Display with a point of view (Bricolage Grotesque + Geist) | Normal | Tonal layering, rounded sheets | Termite colony on the homepage field | `green-room.html` |
| C · The Stacks | Restrained | Workhorse sans + mono (Hanken Grotesk + JetBrains Mono) | Compact | Bordered, subtle elevation | Posts-per-year garden in the sidebar | `the-stacks.html` |

Sources: `docs/design/tiles/src/` and `build.mjs`; output `docs/design/tiles/<slug>.html`
with light and dark captures alongside.

Notes:

- The alephic-design tile template (stat cards, data table, form) is built for
  product UI. These tiles instead show the two screens that matter for a blog,
  the homepage and a post, with each direction's flourishes working.
- All fonts are from Google Fonts under the SIL Open Font License and are
  embedded in the tiles as base64.
- Text contrast is checked in `build.mjs` (WCAG AA, 4.5:1) for both modes.
- The side note in each post excerpt is sample text; everything else is real
  site content.

Recommendation: A, Marginalia. Decision pending.

## 2026-11-25 — Round 2: B + C hybrids

Tom's steer: "a big bold homepage, with a more technical / refined inner essay
pages". Three hybrids, same review page (version 2):

| Tile | Homepage | Essay page | Fonts |
| ---- | -------- | ---------- | ----- |
| D · Front Door (`front-door.html`) | B's, unchanged | C's reader with context rail | Bricolage Grotesque, Geist, Geist Mono |
| E · Green Ledger (`green-ledger.html`) | Green field split: hello + ruled ledger of posts | Working paper: Literata column, mono notes in both margins | Bricolage Grotesque, Literata, Geist, Geist Mono |
| F · Termite Type (`termite-type.html`) | All green; headline drawn in characters that termites eat | Manual: numbered section rail, mono headings, inline callouts | Bricolage Grotesque, Geist, Geist Mono |

All three share one palette (`HY_LIGHT` / `HY_DARK` in `build.mjs`). Homepages
and essay pages are separate parts in `docs/design/tiles/src/` and can be
recombined in `build.mjs`.

Recommendation: E, Green Ledger. Decision pending.

## 2026-11-25 — Round 3: riffs on F

Tom: "I like F best. Keep exploring directions." Three riffs on Termite Type
(review page version 3). The headline engine is `src/f.js`, configured per page
with `data-wide`, `data-narrow`, `data-fill`, `data-words` and `data-mode`.

| Tile | What changes from F |
| ---- | ------------------- |
| G · Own Words (`own-words.html`) | Solid letters at 7.5px with the intro sentence knocked out inside them; essay text in Literata |
| H · Night Swarm (`night-swarm.html`) | Near-black homepage in both modes; headline is a swarm that assembles, scatters from the pointer and returns |
| I · Paper Colony (`paper-colony.html`) | Paper ground with green characters; headline is the latest essay title; posts-per-year garden; walking section breaks |

Recommendation: I, Paper Colony. Decision pending.

## 2026-11-25 — Round 4: Green Stacks (converging)

Tom: "I like the big green background and I like the article crisp-ness of C
- the stacks. We'll need search. Let's add a section on the homepage to feature
the top posts, then flow into the latest."

J · Green Stacks (`green-stacks.html`, review page version 4):

- Homepage: F's green field and character headline; a Top posts section on the
  green; a character dither where the green ends; the latest eight posts below
  in the Stacks' row style.
- Essay: C's reader unchanged, plus a top bar with nav and search.
- Search: palette opened with `/` or Cmd/Ctrl-K, over the titles and subtitles
  of all 223 posts (index built from `_posts` in `build.mjs`).
- Type: Hanken Grotesk + JetBrains Mono throughout; Bricolage Grotesque only
  as the shape the headline is cut from.
- Top posts are a placeholder set taken from `start-here.md`; Tom to confirm.

## 2026-11-25 — Round 5: Green Stacks, fade and essay page

Tom: likes the pixelated fade, wants it "cooler / more visually interesting";
essay page is good and spare but "missing some connective tissue back to the
homepage"; keeps the left column, drops the right sidebar, prefers floating
annotations and margin notes.

- Fade (`pre.fade`, engine in `src/j.js`): solid cells, then a character ramp,
  on drifting value noise; termites chew along it; recedes from the pointer.
  `data-rows` sets height, `data-dir="up"` reverses it.
- Essay (`src/j-post.html`): no panel, no rail. Green nav strip with a fade
  below it, one 66ch column, margin notes in a second grid column, floating
  link previews, walking section breaks, fade back up into a green foot with
  "Keep reading".

## 2026-11-25 — Round 6: options bar on Green Stacks

Tom: "almost there - keep iterating and exploring these directions".
`green-stacks.html` now carries an options bar (`src/lab.js`, `src/lab.css`)
that switches four things live; choices persist in localStorage and can be set
by query string (`?fade=&head=&top=&notes=`) for screenshots.

- Fade: skyline (noise) · dither (Bayer 4x4) · drip (per-column lengths)
- Headline: hash · words (solid, intro sentence inside) · swarm
- Essay top: strip · title (title block on the green) · rule (no green)
- Notes: margin · pop (hover/focus popover) · drawn (hand-drawn underline)

My recommendation: dither, words, title, margin. Decision pending.

## 2026-11-25 — Round 7: Tom's picks locked in

Tom chose: **hash headline**, **dither fade** ("more refined, maybe fade it
out"), **title on green** for essays with the dither there "much more subtle...
can't draw the eye too much or be too gimmicky", and **margin notes open by
default**. The options bar and the other variants are removed from
`green-stacks.html` (earlier variants survive in git history of
`docs/design/tiles/src/` once committed, and in `own-words.html` /
`night-swarm.html`).

- Fade is now a canvas (`canvas.fade`, `src/j.js`): 8x8 ordered dither whose
  alpha also falls off. Homepage 4px cells, 120px, slow ripple, slight pointer
  give. Essays 3px cells, 36px, static.
- Essay section breaks are a plain rule (the walking termite was dropped as too
  busy for a reading page; my call, following his "not gimmicky" steer).

Still open: which six top posts; whether search covers full text, wiki and
library.

## 2026-11-25 — Round 8: featured essays, post column

Tom: explore treatments of the featured essays ("maybe screenshots of each you
can swipe through"); move the post column "closer to center aligned, not all
the way left. Some way left is fine".

- Top posts has three treatments behind a small bar (`src/feat.js`,
  `data-feat` on the root, `?feat=` for screenshots): `list` (lead + list),
  `swipe` (scroll-snap row of miniature essay pages), `deck` (one at a time
  with a stack). Miniatures are live HTML built from each post's title,
  subtitle and first paragraphs (`excerpt()` in `build.mjs`), not images.
- Essay: `.erow` and the title block share a 930px centred measure, so the
  66ch column sits left of centre with notes to its right.

My recommendation: swipe row. Decision pending.

## 2026-11-25 — Round 9: swipe row locked; post details

Tom: "swipe row is best. post column looks good." Then: explore post details,
"on hover, annotations, quotebacks treatment etc".

- Homepage Top posts is the swipe row only (`src/feat.js` simplified).
- Essay mock now uses the real post `2020-12-17-side-notes` (three real side
  notes, an internal link, a Quoteback, a tweet).
- Options bar (`src/detail.js`; `?links=&notes=&quotes=`, `&hover=1` to show the
  first internal link's preview in screenshots):
  - Link hover: `card` · `margin` · `mini` (miniature of the target post for
    internal links, card for external)
  - Notes: `num` · `tint` (phrase tinted, linked hover) · `drawn`
  - Quotes (Quotebacks and tweets share one component): `card` · `rule`
    (source in margin) · `wash`
- Caveat recorded for the build: `tint` and `drawn` need a phrase to attach
  to; existing posts use point footnotes (`[^x]`), so only `num` works with
  them unchanged.

My recommendation: num, rule, mini. Decision pending.

## 2026-11-25 — Round 10: two ideas from Gemini's versions

Tom shared `docs/design/gemini/field-margin.html` and `living-garden.html`
(made with Gemini) and liked two things; both are now in Green Stacks.

- Green spine: 6px green line down the left edge of the essay sheet
  (`.spined::before` in `src/j.css`).
- Words as texture: all post titles, faint, behind the homepage headline
  (`.weave`, filled from `POSTS` in `build.mjs`), masked to fade out above the
  intro text. Gemini's version ran behind body text; ours deliberately doesn't.

Post-detail options (round 9) still undecided.

## 2026-11-25 — Round 11: pare back; post details decided

Tom: "getting a bit busy. Let's pair it back and refine." Decisions:

- **Notes:** tinted phrase, **no underline** ("looks like a link?"). Phrase and
  margin note highlight together on hover. No numbers.
- **Quotebacks (and tweets):** card.
- **Link hover:** a card, "more informative/bigger for real info, not a
  gimmick". Now 400px, 220ms delay. Internal links: title, subtitle, opening
  lines, date, word count, reading time, backlink count, all computed in
  `build.mjs` (`linkData`). External links: domain, title, author, description
  (hand-entered in the mock; the real site needs these stored at write time).

Pared back: no dither inside the Top posts miniatures; half the termites and no
trails; title texture off by default.

Open: homepage top, behind a bar (`src/hero.js`, `?hero=`): `termites` ·
`texture` · `still`. My recommendation: termites.

## 2026-11-25 — Round 12: homepage top decided; design settled

Tom: "I think the termites is still strongest." Title texture and the options
bar are removed. `green-stacks.html` is now the settled design with no
switches:

- Homepage: green field, hash headline with termites (half density, no
  trails), swipe row of miniature essay pages, ordered-dither fade, latest
  eight, search.
- Essay: title on green, quiet dither, 6px green spine, 66ch sans column
  centred with its notes, tinted-phrase margin notes (no underline), quote
  cards, rich link card.

Still needed from Tom: the six top posts; search scope.
Not yet designed: writing index, about, wiki, library, book chapters, mobile
review of the settled pages.

## 2026-11-25 — Build: Green Stacks in the real Jekyll templates

Tom: "I think this is good let's go". Built on branch `redesign` (uncommitted
at time of writing).

New: `css/site.css`, `css/legacy.css` (generated by `_tools/legacy-css.py`),
`js/site.js`, `fonts/*.woff2` (self-hosted), `posts.json` (search + link-card
index), `_includes/gs-head.html`, `gs-nav.html`, `gs-foot.html`.
Rewritten: `_layouts/blog.html`, `_layouts/page.html` (now inherits blog),
`index.html`, `writing.html`. Six posts carry `featured: 1..6` (placeholder
picks).

Covered by the new design: homepage, all posts, pages using the `blog` or
`page` layouts (about, now, start-here, search, wiki drafts), writing index.
Still on the old design: wiki, library, The Strategic Independent chapters,
blogchain index pages, and the `tufte`, `strategy`, `blog-sidebar-nav` layouts.

Dropped from the post layout, to confirm with Tom: the Hypothesis annotation
embed, the "More blog posts" box, the jQuery side-note script. Known gap: four
posts use `{% include tufte-sn.html %}`, whose side notes are not restyled.

Verified: `_tools/check-urls.sh` shows 0 files removed, 7 added. Screenshots of
the built site: homepage, two posts, writing index, about, an old post with
heavy inline markup; homepage and a post at 390px.
