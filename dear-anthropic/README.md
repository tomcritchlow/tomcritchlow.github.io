# Dear Anthropic.

Static one-page microsite prototype for a Head of Search & Knowledge pitch.

## Files

- `index.html`: primary content file with the full essay, visuals, inline citation buttons, and the companion query launcher
- `styles.css`: editorial layout, typography, motion, and visual styling
- `app.js`: lightweight behavior for scroll reveals, citation footnote popovers, the BBC chart, and the companion modal

## Edit the copy

1. Open `index.html`.
2. Edit the prose directly inside the hero, sections, and closing blocks.
3. Inline citations are plain buttons in the HTML with `data-citation-label` and `data-citation-url`; `app.js` turns them into Bigfoot footnote popovers automatically.
4. Most visuals are also in `index.html`, so you can swap labels, values, or image URLs without touching JavaScript.

## Wire the companion app

1. Open `index.html`.
2. Add the Replit app URL to the `data-companion-url` attribute on `#app`.
3. The launcher passes the typed query into the iframe as `?q=...&embedded=1`.
4. If your Replit app expects a different query parameter name, update `setupCompanionModal()` in `app.js`.

## Swap in final visuals

1. Search for `Key visual` in `index.html`.
2. Replace placeholder labels, stat values, or image URLs directly in the matching section.
3. If you want to embed a custom chart or SVG, add the markup directly in `index.html`.
4. Update `.visual-frame` and the specific `.visual-*` classes in `styles.css` if the final visuals need different styling.

## Tweak the design

1. Global visual tokens live at the top of `styles.css` under `:root`.
2. Change `--accent` to update the green system color.
3. Adjust `--essay-width` and `--content-width` if you want a tighter or wider read.
4. Typography is loaded from Google Fonts with Libre Franklin in `index.html`.

## Preview locally

Open `index.html` directly in a browser, or run a simple local server:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`.
