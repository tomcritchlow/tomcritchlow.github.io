# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Readers of Tom Critchlow's writing: independent consultants, strategists,
marketers and SEO/AI-search operators, plus the indie-web and blogging crowd.
Most arrive on a single post from a link, a feed reader or the newsletter, and
read on a phone or a laptop.

## Product Purpose

Tom's personal site and long-running blog (posts from 2012 onward). It exists
for him to think in public and for readers to find and read that writing.
Success is that publishing a new piece is easy and old pieces stay readable at
their original URLs.

## Operating Context

- Jekyll, built and hosted by GitHub Pages from this repo; custom domain
  tomcritchlow.com.
- Posts are Markdown in `_posts`; drafts live in `wiki/drafts` and are public
  on purpose.
- Sections: writing (223 posts), wiki (about 340 pages), library (about 290
  items), The Strategic Independent (a book, 19 chapters), blogchains.
- Newsletter on Buttondown; RSS at `/feed.xml`.

## Capabilities and Constraints

- Every existing URL keeps working; `_tools/check-urls.sh` diffs published
  files against a baseline.
- Static site only: no server, no build step beyond Jekyll's GitHub Pages
  plugin set.
- Old posts contain inline HTML, embeds (Quotebacks, tweets) and 47 distinct
  Tachyons utility classes that must keep rendering.
- The wiki and library get rebuilt later; this pass covers the homepage, post
  page, writing index and site chrome.

## Brand Commitments

- The green (`#02AD28` today) stays. Everything else is open.

## Evidence on Hand

- Real content for every screen is in the repo: `index.html`, `_posts/`,
  `writing.html`, `about.md`.
- No analytics data is available in the repo; do not invent traffic figures.

## Product Principles

- The writing comes first; design serves reading.
- It is a personal site, not a sales page.
- Old work stays reachable.
- Publishing has to be low-friction.
