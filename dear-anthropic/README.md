# Dear Anthropic.

Static one-page microsite prototype for a Head of Search & Knowledge pitch.

## Files

- `index.html`: document shell, font import, and app mount point
- `styles.css`: editorial layout, typography, motion, and placeholder visual styling
- `app.js`: reusable content objects and render helpers for each section

## Edit the copy

1. Open `app.js`.
2. Update the `hero`, `sections`, and `closing` objects.
3. Keep paragraph copy in the `paragraphs` arrays. Paragraphs can be plain strings or objects with `text` and `refs` for inline citations.
4. Each section now uses a single right-rail `visual` object to keep the layout cleaner.
5. Add or edit source links in each section's `footnotes` array to control the inline citation popovers in the essay text.

## Swap in final visuals

1. Search for `visual:` in `app.js`.
2. Replace the placeholder values with your final chart labels, stat values, or structural data.
3. If you want to embed a real chart or SVG, update `renderVisualFrame()` and the matching renderer in `app.js`.
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
