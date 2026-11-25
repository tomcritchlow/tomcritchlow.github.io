# Design brief — tomcritchlow.com

_Source of truth for visual direction work. Product truth lives in
`/PRODUCT.md`._

## Surface mode

Read — a personal blog; comprehension and wayfinding through 14 years of
writing.

## Feels like

Tom's words (2026-11-25): "Literary, quirky, web-modern".

- Literary — reading-first; type and margins do the work a book's would.
- Quirky — visibly one person's site, with character and a sense of play.
- Web-modern — uses what the current web platform can do, not a print pastiche
  and not a 2015 blog template.

## Must not feel like

- Consultant brochure — a polished personal-brand site that reads like a sales
  page.

## References

| Site / product | What to take | What to leave |
| -------------- | ------------ | ------------- |
| ASCII koi fish demo (Tom saw it recently; no URL given) | One interactive homepage or footer piece that "sizzles" | — |
| https://neat-annotations.syabro.com/ | Annotation marks as a consistent flourish | — |

Tom said he would list more references; none received yet.

## Flourishes Tom asked for

- One interactive homepage/footer piece.
- Consistent small touches across the site, "restrained but also functional":
  side notes, annotations, and/or on-hover link previews.

## Anti-references

- None named beyond "consultant brochure".

## Hard constraints

- Logo / brand colors: keep the green (currently `#02AD28`). No logo.
- Required fonts: none.
- Dark mode: required — light and dark, following the system setting.
- Accessibility: WCAG AA.
- Platform: web (Jekyll on GitHub Pages; static only).

## Key screens

| #   | Screen        | Route                              | What's on it                                                        | Content source |
| --- | ------------- | ---------------------------------- | ------------------------------------------------------------------- | -------------- |
| 1   | Homepage      | `/`                                | Intro paragraph, latest 10 posts, four projects, the interactive piece | `index.html`, `_posts/` |
| 2   | Post          | `/2026/06/08/termites-tokens/`     | Date, title, subtitle, long-form body, side notes, more posts, subscribe | `_posts/2026-06-08-termites-tokens.md` |
| 3   | Writing index | `/writing/`                        | All 223 posts by date                                               | `writing.html`, `_posts/` |
| 4   | About         | `/about/`                          | Long prose page with images                                         | `about.md` |

## Open questions

- Tom's further references (sites to take cues from or avoid).
- What the interactive piece actually is; each direction proposes one.
