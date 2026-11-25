#!/usr/bin/env python3
"""Builds docs/design/swipe/swipe.html: phone frames that try full-width swiping in six places.
Uses real content from the repo. Run from the repo root after a Jekyll build:
    python3 docs/design/swipe/build.py"""
import glob, html, json, os, re
esc = html.escape
posts = json.load(open('_site/posts.json'))
by_url = {p['u']: p for p in posts}

def front(path):
    s = open(path, errors='ignore').read(); j = s.find('\n---', 4)
    fm = s[4:j]; body = s[j + 4:].strip()
    get = lambda k: (re.search(r'^%s:\s*"?(.*?)"?\s*$' % k, fm, re.M) or [None, ''])[1]
    return fm, body, get

# top posts: whatever carries `featured:` in front matter
top = []
for f in glob.glob('_posts/*'):
    fm, body, get = front(f)
    if get('featured'):
        n = os.path.basename(f); url = '/%s/%s/%s/%s/' % (n[:4], n[5:7], n[8:10], n[11:].rsplit('.', 1)[0])
        if url in by_url: top.append((int(get('featured')), by_url[url]))
top = [p for _, p in sorted(top, key=lambda t: t[0])]

chain = []
for f in sorted(glob.glob('_posts/*')):
    fm, body, get = front(f)
    if 'digital-gardens' in get('blogchain'):
        n = os.path.basename(f); url = '/%s/%s/%s/%s/' % (n[:4], n[5:7], n[8:10], n[11:].rsplit('.', 1)[0])
        if url in by_url: chain.append(by_url[url])

books = []
for f in glob.glob('_library/*'):
    fm, body, get = front(f)
    if '"books"' in fm and len(body.split()) > 25 and get('author'):
        note = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>|\[([^\]]+)\]\([^)]*\)', r'\1', body))
        books.append((get('date_saved'), get('title'), get('author'), note))
books = sorted(books, reverse=True)[:6]

years = {}
for p in posts: years.setdefault(p['d'][:4], []).append(p)
news = json.load(open('_data/newsletter.json'))

PROJECTS = [('AI Search Leaders', 'A private peer community for senior search professionals navigating the shift to generative AI search.', '2026 to now', 'aisl'),
            ('The SEO MBA', 'Professional development for SEO professionals.', '2021 to now', 'seomba'),
            ('The Strategic Independent', 'A book about sustainable indie consulting.', 'Book', 'strategy'),
            ('Quotebacks', 'A quoting tool for bloggers.', '2020', 'quotebacks'),
            ('The NEW MBA', 'Essays on becoming more capable and confident at work.', '2023', 'newmba'),
            ('Fiercely Curious', 'A Brooklyn art collective with pop-up art shows.', '2013 to now', 'fiercely')]

def clip(text, n):
    text = text.replace('...', '').strip()
    return text if len(text) <= n else text[:n].rsplit(' ', 1)[0] + '…'

def post_panel(p, label, green=True):
    return f'''<section class="panel{' green' if green else ''}"><div class="k">{esc(label)}</div><h3>{esc(p['t'])}</h3><p class="sub">{esc(p['s'])}</p><p class="x">{esc(clip(p['x'], 230))}</p><div class="meta">{p['d']} · {p['w']:,} words · {max(1, round(p['w'] / 230))} min</div><span class="btn">Read</span></section>'''

phones = []
# 1. homepage: top posts as full-screen cards
panels = ['<section class="panel green hello"><div class="k">tomcritchlow.com</div><h3 class="big">Hey, I\'m Tom.</h3><p class="x">I\'m a dad, blogger, and AI search obsessive based in Brooklyn, NY.</p><div class="hint">Swipe for the top posts</div></section>']
panels += [post_panel(p, f'Top post {i + 1} of {len(top)}') for i, p in enumerate(top)]
panels.append(f'<section class="panel green"><div class="k">Newsletter</div><h3>Get new posts by email</h3><p class="x">{esc(news["description"])}</p><div class="field">Email address</div><span class="btn">Subscribe</span></section>')
phones.append(('Homepage: top posts', 'The homepage on a phone becomes a deck: hello, then each top post as its own full screen, then the newsletter.', 'A phone visitor sees your best six without scrolling past anything. It replaces the small miniature cards, which are hard to read at phone size.', 'Hides the latest posts behind six swipes unless they also sit below.', panels))
# 2. end of a post: keep reading
panels = [post_panel(p, f'Keep reading · {i + 1} of 5', green=True) for i, p in enumerate(posts[:5])]
phones.append(('End of a post: keep reading', 'At the foot of every essay, the next posts are full-width cards you flick through, not a list.', 'The moment someone finishes an essay is when they are most likely to read another. A card with the opening lines sells it better than a title.', 'Only one suggestion is visible at a time.', panels))
# 3. projects
panels = [f'<section class="panel green proj"><div class="k">Project {i + 1} of {len(PROJECTS)}</div><img src="shots/{s}.jpg" alt="Screenshot of {esc(n)}"><h3>{esc(n)}</h3><p class="x">{esc(l)}</p><div class="meta">{esc(m)}</div></section>' for i, (n, l, m, s) in enumerate(PROJECTS)]
phones.append(('Homepage: projects', 'The projects carousel from the homepage ideas, at phone size: one project fills the screen.', 'Screenshots need the width. This is the same component as the desktop carousel, so it costs nothing extra.', 'Six swipes to see everything; a compact list is faster to scan.', panels))
# 4. blogchain
panels = [post_panel(p, f'Digital gardens · part {i + 1} of {len(chain)}', green=False) for i, p in enumerate(chain)]
phones.append(('A blogchain, in order', 'A blogchain is a sequence, so each part is a card and you swipe forward through them from the first.', 'Order is the whole point of a blogchain, and swiping is naturally ordered. Today the chain is a collapsed list at the top of a post.', 'Only works for series; needs a small page per blogchain.', panels))
# 5. library
panels = [f'<section class="panel book"><div class="k">Library · {d}</div><h3>{esc(t)}</h3><p class="sub">{esc(a)}</p><p class="x">{esc(clip(n, 300))}</p></section>' for d, t, a, n in books]
phones.append(('Library: recent books', 'Recent books from the library as cards: title, author and your note, one at a time.', 'Your notes are short and personal, which suits a card. It would give the rebuilt library a browsing mode as well as a list.', 'Book covers would make this much better and most items do not have one saved.', panels))
# 6. writing by year
ys = sorted(years, reverse=True)[:8]
panels = [f'<section class="panel year"><div class="k">Writing</div><h3 class="big">{y}</h3><div class="meta">{len(years[y])} post{"s" if len(years[y]) != 1 else ""}</div><ol>' + ''.join(f'<li><b>{esc(p["t"])}</b><span>{p["d"][5:]}</span></li>' for p in years[y][:9]) + (f'<li class="more">and {len(years[y]) - 9} more</li>' if len(years[y]) > 9 else '') + '</ol></section>' for y in ys]
phones.append(('Writing index: by year', 'The writing index as one screen per year: swipe sideways to move through time, scroll down within a year.', 'Makes the shape of 14 years of writing something you can feel.', 'The weakest fit. A long list is quicker on a phone, and sideways-plus-downward scrolling is easy to get lost in.', panels))

def phone(i, title, what, why, cost, panels):
    dots = ''.join('<i></i>' for _ in panels)
    return f'''<article class="demo">
  <div class="phone"><div class="bars" aria-hidden="true">{dots}</div><div class="track" id="t{i}" tabindex="0" aria-label="{esc(title)}: swipe or use the arrows">{''.join(panels)}</div></div>
  <div class="ctl"><button type="button" data-t="t{i}" data-d="-1" aria-label="Previous">&larr;</button><span id="c{i}">1 / {len(panels)}</span><button type="button" data-t="t{i}" data-d="1" aria-label="Next">&rarr;</button></div>
  <h2>{esc(title)}</h2>
  <p>{esc(what)}</p>
  <dl><div class="wins"><dt>Why here</dt><dd>{esc(why)}</dd></div><div class="cost"><dt>Cost</dt><dd>{esc(cost)}</dd></div></dl>
</article>'''

page = open('docs/design/swipe/template.html').read().replace('{{PHONES}}', '\n'.join(phone(i, *p) for i, p in enumerate(phones)))
open('docs/design/swipe/swipe.html', 'w').write(page)
print(len(phones), 'phones;', sum(len(p[4]) for p in phones), 'panels;', len(page) // 1024, 'KB; chain', len(chain), 'books', len(books), 'top', len(top))
