/* tomcritchlow.com — Green Stacks behaviour. No dependencies.
   1. hash headline with termites      (homepage, <pre id="eat">)
   2. dither fades                     (<canvas class="fade">)
   3. top posts swipe row              (#swipe)
   4. search                           ([data-search] buttons, "/" and Cmd/Ctrl-K)
   5. essay details                    (margin notes, quote cards, link cards) */
(function () {
  'use strict';
  var REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function ready(fn) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }

  // run a drawing loop only while its element is on screen
  function loop(node, step, fps) {
    var on = false, last = 0, iv = 1000 / fps;
    function frame(t) { if (!on) return; if (t - last >= iv) { last = t; step(); } requestAnimationFrame(frame); }
    new IntersectionObserver(function (es) {
      var v = es[0].isIntersecting;
      if (v && !on && !REDUCED) { on = true; requestAnimationFrame(frame); } else if (!v) on = false;
    }).observe(node);
    step();
  }
  function grid(node) {
    var probe = el('span', null, 'MMMMMMMMMM'); probe.style.visibility = 'hidden'; node.appendChild(probe);
    var cw = probe.getBoundingClientRect().width / 10 || 5.4; node.removeChild(probe);
    return { cols: Math.max(20, Math.floor(node.clientWidth / cw)), cw: cw, ch: parseFloat(getComputedStyle(node).lineHeight) || 9 };
  }
  function onResize(node, fn) {
    var w = node.clientWidth;
    new ResizeObserver(function () { if (Math.abs(node.clientWidth - w) > 8) { w = node.clientWidth; fn(); } }).observe(node);
  }

  /* ---------- 1. headline: letters drawn in # characters; termites chew holes that grow back ---------- */
  function headline(node) {
    var cfg = node.dataset, g, n, mask, eaten, ants = [], tick = 0, DX = [1, 1, 0, -1, -1, -1, 0, 1], DY = [0, 1, 1, 1, 0, -1, -1, -1];
    function init() {
      node.textContent = ''; node.style.height = ''; g = grid(node);
      var W = g.cols * g.cw, lines = (W < 720 ? (cfg.narrow || cfg.wide) : cfg.wide).split('|');
      var c = document.createElement('canvas'), x = c.getContext('2d'), face = '800 100px "Bricolage Grotesque",system-ui,sans-serif';
      x.font = face; var widest = Math.max.apply(null, lines.map(function (l) { return x.measureText(l).width; }));
      var fs = Math.min(lines.length > 1 ? 230 : 300, 100 * (W * .97) / widest), lh = fs * .86, H = lh * lines.length + fs * .16;
      g.rows = Math.ceil(H / g.ch) + 3; n = g.cols * g.rows; c.width = Math.ceil(W); c.height = Math.ceil(g.rows * g.ch);
      x.font = face.replace('100px', fs + 'px'); x.textBaseline = 'alphabetic'; x.fillStyle = '#000';
      lines.forEach(function (l, i) { x.fillText(l, W * .005, fs * .78 + lh * i + g.ch); });
      var data = x.getImageData(0, 0, c.width, c.height).data; mask = new Uint8Array(n); eaten = new Int32Array(n);
      for (var r = 0; r < g.rows; r++) for (var q = 0; q < g.cols; q++) {
        var px = Math.min(c.width - 1, Math.floor((q + .5) * g.cw)), py = Math.min(c.height - 1, Math.floor((r + .5) * g.ch));
        mask[r * g.cols + q] = data[(py * c.width + px) * 4 + 3] > 110 ? 1 : 0;
      }
      node.style.height = (g.rows * g.ch) + 'px'; node.style.minHeight = '0'; ants = [];
      var count = REDUCED ? 0 : Math.max(8, Math.round(n / 520));
      for (var a = 0; a < count; a++) ants.push({ x: Math.random() * g.cols, y: Math.random() * g.rows, d: Math.floor(Math.random() * 8) });
    }
    function bite(cx, cy, r, ticks) {
      for (var dy = -r; dy <= r; dy++) for (var dx = -r * 2; dx <= r * 2; dx++) {
        var X = cx + dx, Y = cy + dy; if (X < 0 || Y < 0 || X >= g.cols || Y >= g.rows) continue;
        if (dx * dx / 4 + dy * dy <= r * r) eaten[Y * g.cols + X] = tick + ticks + Math.floor(Math.random() * 14);
      }
    }
    node.addEventListener('pointermove', function (e) { if (e.pointerType === 'touch') return; var b = node.getBoundingClientRect(); bite(Math.floor((e.clientX - b.left) / g.cw), Math.floor((e.clientY - b.top) / g.ch), 3, 50); });
    function step() {
      tick++;
      ants.forEach(function (a) {
        if (Math.random() < .22) a.d = (a.d + (Math.random() < .5 ? 1 : 7)) % 8;
        for (var t = -1; t <= 1; t++) { // steer toward uneaten letter cells ahead
          var d = (a.d + t + 8) % 8, X = Math.round(a.x + DX[d] * 4), Y = Math.round(a.y + DY[d] * 3);
          if (X >= 0 && Y >= 0 && X < g.cols && Y < g.rows) { var k = Y * g.cols + X; if (mask[k] && eaten[k] < tick && Math.random() < .5) { a.d = d; break; } }
        }
        a.x = (a.x + DX[a.d] * 1.1 + g.cols) % g.cols; a.y = (a.y + DY[a.d] * .7 + g.rows) % g.rows;
        if (mask[Math.floor(a.y) * g.cols + Math.floor(a.x)]) bite(Math.floor(a.x), Math.floor(a.y), 1, 70);
      });
      var where = new Uint8Array(n); ants.forEach(function (a) { where[Math.floor(a.y) * g.cols + Math.floor(a.x)] = 1; });
      var out = '', open = false;
      for (var y = 0; y < g.rows; y++) {
        for (var x2 = 0; x2 < g.cols; x2++) {
          var k2 = y * g.cols + x2, solid = where[k2] || (mask[k2] && eaten[k2] < tick);
          if (solid && !open) { out += '<b>'; open = true; } else if (!solid && open) { out += '</b>'; open = false; }
          out += where[k2] ? 't' : solid ? '#' : ' ';
        }
        if (open) { out += '</b>'; open = false; } out += '\n';
      }
      node.innerHTML = out;
    }
    function start() { init(); onResize(node, function () { init(); step(); }); loop(node, step, 20); }
    if (document.fonts && document.fonts.load) document.fonts.load('800 100px "Bricolage Grotesque"').then(start, start); else start();
  }

  /* ---------- 2. dither: an 8x8 ordered dither that also fades in strength ---------- */
  var B8 = [[0, 32, 8, 40, 2, 34, 10, 42], [48, 16, 56, 24, 50, 18, 58, 26], [12, 44, 4, 36, 14, 46, 6, 38], [60, 28, 52, 20, 62, 30, 54, 22], [3, 35, 11, 43, 1, 33, 9, 41], [51, 19, 59, 27, 49, 17, 57, 25], [15, 47, 7, 39, 13, 45, 5, 37], [63, 31, 55, 23, 61, 29, 53, 21]];
  function fade(cv) {
    var H = +cv.dataset.h || 100, CELL = +cv.dataset.cell || 4, UP = cv.dataset.dir === 'up', LIVE = cv.hasAttribute('data-live') && !REDUCED;
    var ctx = cv.getContext('2d'), dpr = 1, px = 1, color = '#1bb93a', t = 0, ptr = null;
    cv.style.height = H + 'px';
    function size() {
      dpr = window.devicePixelRatio || 1; px = Math.max(1, Math.round(CELL * dpr));
      cv.width = Math.ceil(cv.clientWidth * dpr); cv.height = Math.round(H * dpr);
      color = getComputedStyle(cv).getPropertyValue('--green').trim() || color; draw();
    }
    function draw() {
      var cols = Math.ceil(cv.width / px), rows = Math.ceil(cv.height / px); ctx.clearRect(0, 0, cv.width, cv.height); ctx.fillStyle = color;
      for (var y = 0; y < rows; y++) {
        var yy = UP ? rows - 1 - y : y, base = 1 - (yy + .5) / rows; ctx.globalAlpha = Math.min(1, .12 + base * 1.15);
        for (var x = 0; x < cols; x++) {
          var d = base;
          if (LIVE) {
            d += Math.sin(x * .035 + t) * .07 * Math.sin(Math.PI * base) + Math.sin(x * .009 - t * .6) * .05 * Math.sin(Math.PI * base);
            if (ptr) { var ex = x - ptr.x, ey = (y - ptr.y) * 1.4, e2 = ex * ex + ey * ey; if (e2 < 900) d -= (900 - e2) / 900 * .22; }
          }
          if (yy === 0 || d > (B8[y & 7][x & 7] + .5) / 64) ctx.fillRect(x * px, y * px, px, px);
        }
      }
      ctx.globalAlpha = 1;
    }
    if (LIVE) {
      cv.addEventListener('pointermove', function (e) { if (e.pointerType === 'touch') return; var b = cv.getBoundingClientRect(); ptr = { x: (e.clientX - b.left) * dpr / px, y: (e.clientY - b.top) * dpr / px }; });
      cv.addEventListener('pointerleave', function () { ptr = null; });
    }
    size(); var w = cv.clientWidth;
    new ResizeObserver(function () { if (Math.abs(cv.clientWidth - w) > 2) { w = cv.clientWidth; size(); } }).observe(cv);
    if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { setTimeout(size, 0); });
    if (LIVE) loop(cv, function () { t += .06; draw(); }, 12);
  }

  /* ---------- 3. top posts swipe row ---------- */
  function swipeRow(row) {
    var minis = [].slice.call(row.querySelectorAll('.mini')), count = document.getElementById('featcount');
    var prev = document.getElementById('featprev'), next = document.getElementById('featnext');
    if (!minis.length) return;
    function w() { return minis[0].offsetWidth + 22; }
    function sync() {
      var step = w(), maxScroll = Math.max(0, row.scrollWidth - row.clientWidth);
      var atStart = row.scrollLeft <= 2, atEnd = row.scrollLeft >= maxScroll - 2;
      if (prev) prev.disabled = atStart;
      if (next) next.disabled = atEnd;
      if (count) {
        var vis = Math.max(1, Math.min(minis.length, Math.floor((row.clientWidth + 22) / step)));
        var first, last;
        if (atEnd) { last = minis.length; first = Math.max(1, last - vis + 1); }
        else { first = Math.min(minis.length, Math.round(row.scrollLeft / step) + 1); last = Math.min(minis.length, first + vis - 1); }
        count.textContent = (first === last ? first : first + '\u2013' + last) + ' / ' + minis.length;
      }
    }
    function go(d) { row.scrollBy({ left: d * w(), behavior: REDUCED ? 'auto' : 'smooth' }); }
    if (prev) prev.addEventListener('click', function () { go(-1); });
    if (next) next.addEventListener('click', function () { go(1); });
    row.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    });
    row.addEventListener('scroll', sync, { passive: true });
    new ResizeObserver(sync).observe(row);
    sync();
  }

  /* ---------- post index: loaded once, the first time search or a link card needs it ---------- */
  var postsPromise = null;
  function posts() {
    if (!postsPromise) postsPromise = fetch('/posts.json').then(function (r) { return r.json(); }).catch(function () { postsPromise = null; return []; });
    return postsPromise;
  }

  /* ---------- 4. search ---------- */
  function search() {
    var scrim = el('div', 'scrim'); scrim.hidden = true;
    scrim.innerHTML = '<div class="palette" role="dialog" aria-modal="true" aria-label="Search posts"><div class="palhead"><input id="q" type="search" placeholder="Search posts" autocomplete="off" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-controls="qr"><button type="button" class="palclose" aria-label="Close search">&times;</button></div><ul id="qr" role="listbox"></ul><div class="palfoot"><span id="qc"></span><span class="palkeys">↑ ↓ move · enter open · esc close</span></div></div>';
    document.body.appendChild(scrim);
    var q = scrim.querySelector('#q'), list = scrim.querySelector('#qr'), count = scrim.querySelector('#qc'), closeBtn = scrim.querySelector('.palclose'), sel = 0, shown = [], all = [], opener = null;
    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
    function rx(t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
    function mark(text, terms) { var out = esc(text); terms.forEach(function (t) { out = out.replace(new RegExp('(' + rx(esc(t)) + ')(?![^<]*>)', 'ig'), '<mark>$1</mark>'); }); return out; }
    function run() {
      var terms = q.value.toLowerCase().split(/\s+/).filter(Boolean), scored = [];
      all.forEach(function (p, i) {
        var t = p.t.toLowerCase(), s = (p.s || '').toLowerCase(), x = (p.x || '').toLowerCase(), score = 0;
        for (var k = 0; k < terms.length; k++) {
          var w = terms[k];
          if (t.indexOf(w) === 0) score += 6; else if (new RegExp('\\b' + rx(w)).test(t)) score += 4; else if (t.indexOf(w) >= 0) score += 3;
          else if (s.indexOf(w) >= 0 || p.d.indexOf(w) === 0) score += 1.5; else if (x.indexOf(w) >= 0) score += .5; else return;
        }
        scored.push([score, i]);
      });
      scored.sort(function (a, b) { return b[0] - a[0] || a[1] - b[1]; }); shown = scored.slice(0, terms.length ? 30 : 8).map(function (s) { return s[1]; }); sel = 0;
      count.textContent = !all.length ? 'Loading…' : terms.length ? scored.length + ' of ' + all.length + ' posts' : 'Latest ' + shown.length + ' of ' + all.length + ' posts';
      list.innerHTML = shown.length ? shown.map(function (i, k) { var p = all[i]; return '<li id="qr-opt-' + k + '" role="option" data-k="' + k + '"><a href="' + esc(p.u) + '"><time>' + p.d + '</time><span><b>' + mark(p.t, terms) + '</b>' + (p.s ? '<i>' + mark(p.s, terms) + '</i>' : '') + '</span></a></li>'; }).join('') : (all.length ? '<li class="none">No posts match. Try a single word from the title.</li>' : '');
      paint();
    }
    function paint() {
      var activeId = '';
      [].forEach.call(list.children, function (li, k) {
        var on = k === sel && li.hasAttribute('data-k');
        li.setAttribute('aria-selected', on);
        if (on) { activeId = li.id; if (li.scrollIntoView) li.scrollIntoView({ block: 'nearest' }); }
      });
      if (activeId) q.setAttribute('aria-activedescendant', activeId); else q.removeAttribute('aria-activedescendant');
    }
    function open(from) {
      opener = from || document.activeElement;
      scrim.hidden = false;
      document.documentElement.style.overflow = 'hidden';
      q.value = ''; run(); q.focus();
      posts().then(function (p) { all = p; q.placeholder = 'Search ' + p.length + ' posts'; run(); });
    }
    function close() {
      scrim.hidden = true;
      document.documentElement.style.overflow = '';
      if (opener && opener.focus) opener.focus();
    }
    document.querySelectorAll('[data-search]').forEach(function (b) { b.addEventListener('click', function () { open(b); }); });
    closeBtn.addEventListener('click', close);
    q.addEventListener('input', run);
    scrim.addEventListener('pointerdown', function (e) { if (e.target === scrim) close(); });
    list.addEventListener('pointermove', function (e) { var li = e.target.closest('li[data-k]'); if (li && +li.dataset.k !== sel) { sel = +li.dataset.k; paint(); } });
    addEventListener('keydown', function (e) {
      if (scrim.hidden) {
        var typing = /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || e.target.isContentEditable;
        if ((e.key === '/' && !typing && !e.metaKey && !e.ctrlKey) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) { e.preventDefault(); open(); }
        return;
      }
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(shown.length - 1, sel + 1); paint(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); paint(); }
      else if (e.key === 'Enter') { var a = list.children[sel] && list.children[sel].querySelector('a'); if (a) { e.preventDefault(); location.href = a.href; } }
      else if (e.key === 'Tab') {
        var focusables = [].slice.call(scrim.querySelectorAll('input, button, a[href]'));
        if (!focusables.length) return;
        var idx = focusables.indexOf(document.activeElement);
        e.preventDefault();
        focusables[(idx + (e.shiftKey ? -1 : 1) + focusables.length) % focusables.length].focus();
      }
    }, true);
  }

  /* ---------- 5. essay details ---------- */
  function essay(body) {
    // -- quotebacks and tweets become one kind of card (their own scripts are not loaded) --
    function domain(u) { try { return new URL(u, location.href).hostname.replace(/^www\./, ''); } catch (e) { return ''; } }
    function card(quoteNodes, heading, author, citeText, href, extra) {
      var fig = el('figure', 'qb'), bq = el('blockquote'); if (heading) bq.appendChild(el('h4', null, heading));
      quoteNodes.forEach(function (nd) { bq.appendChild(nd); }); fig.appendChild(bq);
      var cap = el('figcaption'); if (author) cap.appendChild(el('span', 'qa', author)); if (citeText) cap.appendChild(el('cite', null, citeText));
      if (href) { var a = el('a', null, domain(href)); a.href = href; a.dataset.t = heading || citeText || domain(href); a.dataset.s = author || ''; a.dataset.x = extra || ''; a.dataset.ext = domain(href); cap.appendChild(a); }
      fig.appendChild(cap); return fig;
    }
    body.querySelectorAll('blockquote.quoteback').forEach(function (b) {
      var title = b.dataset.title || '', foot = b.querySelector('footer'); try { title = decodeURIComponent(title); } catch (e) { }
      if (foot) foot.remove(); var h = b.querySelector('h1'); if (h && h.textContent.trim() === title.trim()) h.remove();
      var nodes = [].slice.call(b.childNodes).filter(function (nd) { return nd.nodeType === 1 || nd.textContent.trim(); });
      if (nodes.length && nodes.every(function (nd) { return nd.nodeType === 3; })) { var p = el('p'); nodes.forEach(function (nd) { p.appendChild(nd); }); nodes = [p]; }
      b.replaceWith(card(nodes, title, b.dataset.author || '', title, b.getAttribute('cite'), b.textContent.trim().slice(0, 300)));
    });
    body.querySelectorAll('blockquote.twitter-tweet').forEach(function (b) {
      var p = b.querySelector('p'), links = b.querySelectorAll(':scope > a'), last = links[links.length - 1];
      var who = ''; b.childNodes.forEach(function (nd) { if (nd.nodeType === 3 && /—/.test(nd.nodeValue)) who = nd.nodeValue.replace(/^[\s—]+/, '').trim(); });
      if (!p) return;
      var name = who.replace(/\s*\(@[^)]*\)\s*$/, ''), handle = (who.match(/\((@[^)]*)\)/) || [])[1] || '';
      b.replaceWith(card([p], '', name || 'Tweet', [handle, last ? last.textContent : ''].filter(Boolean).join(' · '), last ? last.href : '', p.textContent));
    });

    // -- footnotes & legacy tufte sidenotes become margin notes; the words just before the marker are tinted --
    var notes = [];
    function tint(ref) {
      var prev = ref.previousSibling;
      while (prev && prev.nodeType === 3 && !prev.nodeValue.trim()) prev = prev.previousSibling;
      if (prev && prev.nodeType === 1 && prev.textContent.trim() && !/^(BR|SUP|INPUT|LABEL)$/.test(prev.tagName)) { var w = el('span', 'ann'); prev.replaceWith(w); w.appendChild(prev); return w; }
      if (!prev || prev.nodeType !== 3 || !prev.nodeValue.trim()) return null;
      var text = prev.nodeValue, trimmed = text.replace(/\s+$/, ''), tail = text.slice(trimmed.length);
      var cut = trimmed.match(/^[\s\S]*[.!?;:,(\u2014\u2013]\s/), start = cut ? cut[0].length : 0;
      var words = trimmed.slice(start).replace(/^\s+/, '').split(/\s+/); if (!words[0]) { start = 0; words = trimmed.split(/\s+/); }
      var phrase = words.slice(-3).join(' '), at = trimmed.lastIndexOf(phrase); if (at < 0 || !phrase) return null;
      var span = el('span', 'ann', trimmed.slice(at)); prev.nodeValue = text.slice(0, at);
      ref.parentNode.insertBefore(span, ref); if (tail) ref.parentNode.insertBefore(document.createTextNode(tail), ref);
      return span;
    }
    function bindNote(phrase, note) {
      if (!phrase) return;
      phrase.setAttribute('aria-describedby', note.id);
      var on = function () { phrase.classList.add('hot'); note.classList.add('hot'); }, off = function () { phrase.classList.remove('hot'); note.classList.remove('hot'); };
      [phrase, note].forEach(function (x) { x.addEventListener('pointerenter', on); x.addEventListener('pointerleave', off); });
    }
    body.querySelectorAll('sup[id^="fnref"], span.sidenote').forEach(function (marker) {
      var note, block, phrase, anchor;
      if (marker.tagName === 'SUP') {
        var a = marker.querySelector('a'), target = a && document.getElementById(decodeURIComponent((a.getAttribute('href') || '').slice(1))); if (!target) return;
        note = el('aside', 'enote'); note.id = 'note-' + (notes.length + 1); note.setAttribute('role', 'note'); note.innerHTML = target.innerHTML;
        note.querySelectorAll('.reversefootnote').forEach(function (r) { r.remove(); });
        block = marker.closest('p,li,h2,h3,h4,blockquote,figure') || marker.parentNode;
        phrase = tint(marker);
        bindNote(phrase, note);
        marker.classList.add('fnref', 'moved');
        anchor = phrase || marker;
      } else {
        // legacy {% include tufte-sn.html %}: <label class="margin-toggle"><input class="margin-toggle"><span class="sidenote">
        var input = marker.previousElementSibling;
        if (!input || !input.classList.contains('margin-toggle')) input = null;
        var label = input ? input.previousElementSibling : marker.previousElementSibling;
        if (!label || !label.classList.contains('margin-toggle')) label = null;
        var firstRef = label || input || marker;
        note = el('aside', 'enote'); note.id = 'note-' + (notes.length + 1); note.setAttribute('role', 'note');
        var p = el('p'); p.innerHTML = marker.innerHTML.trim(); note.appendChild(p);
        block = marker.closest('p,li,h2,h3,h4,blockquote,figure') || marker.parentNode;
        phrase = tint(firstRef);
        bindNote(phrase, note);
        if (label) label.remove();
        if (input) input.remove();
        marker.remove();
        anchor = phrase || block;
      }
      notes.push({ note: note, block: block, anchor: anchor });
    });
    if (notes.length) {
      var fn = body.querySelector('.footnotes'); if (fn) fn.classList.add('moved');
      var wide = window.matchMedia('(min-width: 1041px)');
      var place = function () {
        body.style.paddingBottom = '';
        var top = body.getBoundingClientRect().top, floor = 0;
        var lastInserted = new Map();
        notes.forEach(function (n) {
          if (wide.matches) {
            if (n.note.parentNode !== body) body.appendChild(n.note);
            var anchor = n.anchor.classList.contains('moved') ? n.block : n.anchor, y = Math.max(floor, anchor.getBoundingClientRect().top - top - 2);
            n.note.style.top = y + 'px'; floor = y + n.note.offsetHeight + 12;
          } else {
            n.note.style.top = '';
            var host = n.block.closest('li') ? n.block.closest('ul,ol') : n.block;
            var after = lastInserted.get(host) || host;
            if (n.note.previousElementSibling !== after && after.parentNode) after.parentNode.insertBefore(n.note, after.nextSibling);
            lastInserted.set(host, n.note);
          }
        });
        if (wide.matches && floor > body.offsetHeight) {
          body.style.paddingBottom = (floor - body.offsetHeight + 12) + 'px';
        }
      };
      place(); addEventListener('resize', place); addEventListener('load', place);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
    }

    // -- link cards: only where there is something real to say about the target --
    var cardEl = el('div', 'linkcard'), timer = null; cardEl.setAttribute('role', 'tooltip'); document.body.appendChild(cardEl);
    function fill(d) {
      cardEl.textContent = ''; var meta = el('div', 'lc-meta');
      meta.appendChild(el('span', null, d.ext || 'tomcritchlow.com')); meta.appendChild(el('b', null, d.ext ? 'External link' : 'Essay')); cardEl.appendChild(meta);
      var b = el('div', 'lc-body'); b.appendChild(el('p', 'lc-title', d.t)); if (d.s) b.appendChild(el('p', 'lc-sub', d.s)); if (d.x) b.appendChild(el('p', 'lc-x', d.x)); cardEl.appendChild(b);
      if (d.foot && d.foot.length) { var f = el('div', 'lc-foot'); d.foot.forEach(function (v) { f.appendChild(el('span', null, v)); }); cardEl.appendChild(f); }
    }
    function show(a, d) {
      fill(d);
      var r = a.getBoundingClientRect(), cw = cardEl.offsetWidth || 400, ch = cardEl.offsetHeight || 200;
      var left = Math.min(Math.max(16, r.left), Math.max(16, innerWidth - cw - 16));
      var above = r.bottom + ch + 20 > innerHeight && r.top > ch + 20;
      cardEl.style.left = (left + scrollX) + 'px';
      cardEl.style.top = (above ? r.top + scrollY - ch - 10 : r.bottom + scrollY + 10) + 'px';
      cardEl.classList.add('on');
    }
    function hide() { clearTimeout(timer); cardEl.classList.remove('on'); }
    addEventListener('scroll', hide, { passive: true });
    addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
    function details(a) {
      if (a.dataset.ext) return Promise.resolve({ ext: a.dataset.ext, t: a.dataset.t, s: a.dataset.s, x: a.dataset.x });
      var u; try { u = new URL(a.href, location.href); } catch (e) { return Promise.resolve(null); }
      if (!/(^|\.)tomcritchlow\.com$/.test(u.hostname) && u.hostname !== location.hostname) return Promise.resolve(null);
      var path = u.pathname.replace(/\/?$/, '/'); if (path === location.pathname.replace(/\/?$/, '/')) return Promise.resolve(null);
      return posts().then(function (all) {
        var p = all.filter(function (x) { return x.u === path; })[0]; if (!p) return null;
        var when = new Date(p.d + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
        var foot = [when, p.w.toLocaleString('en-US') + ' words', Math.max(1, Math.round(p.w / 230)) + ' min read']; if (p.b) foot.push('Linked from ' + p.b + ' other post' + (p.b === 1 ? '' : 's'));
        return { t: p.t, s: p.s, x: p.x, foot: foot };
      });
    }
    body.querySelectorAll('a[href]').forEach(function (a) {
      var live = false;
      function go(delay) { live = true; clearTimeout(timer); timer = setTimeout(function () { details(a).then(function (d) { if (d && live) show(a, d); }); }, delay); }
      a.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'touch') go(220); });
      a.addEventListener('focus', function () { go(0); });
      a.addEventListener('pointerleave', function () { live = false; hide(); });
      a.addEventListener('blur', function () { live = false; hide(); });
    });
  }

  /* ---------- newsletter page: add any issues newer than the saved list, straight from the feed ---------- */
  function issues(list) {
    var first = list.querySelector('time'), newest = first ? first.getAttribute('datetime') : '';
    fetch(list.dataset.feed).then(function (r) { return r.text(); }).then(function (xml) {
      var doc = new DOMParser().parseFromString(xml, 'text/xml'), fresh = [];
      doc.querySelectorAll('item').forEach(function (it) {
        var get = function (t) { var n = it.querySelector(t); return n ? n.textContent.trim() : ''; }, d = new Date(get('pubDate'));
        if (isNaN(d)) return; var iso = d.toISOString().slice(0, 10); if (iso <= newest || !/^https:\/\//.test(get('link'))) return;
        var li = el('li'), a = el('a'), t = el('time', null, iso), s = el('span'); a.href = get('link'); t.setAttribute('datetime', iso); s.appendChild(el('b', null, get('title'))); a.appendChild(t); a.appendChild(s); li.appendChild(a); fresh.push(li);
      });
      fresh.reverse().forEach(function (li) { list.insertBefore(li, list.firstChild); });
    }).catch(function () { });
  }

  /* ---------- end of a post on a phone: count which keep-reading card is showing ---------- */
  function keepRow(row) {
    var count = document.getElementById('keepcount'), n = row.children.length; if (!count || !n) return;
    function label() { var w = row.children[0].offsetWidth + 12; count.textContent = (Math.min(n - 1, Math.round(row.scrollLeft / w)) + 1) + ' / ' + n; }
    row.addEventListener('scroll', label, { passive: true }); addEventListener('resize', label); label();
  }

  ready(function () {
    var eat = document.getElementById('eat'); if (eat) headline(eat);
    document.querySelectorAll('canvas.fade').forEach(fade);
    var row = document.getElementById('swipe'); if (row) swipeRow(row);
    if (document.querySelector('[data-search]')) search();
    var body = document.querySelector('.post-body'); if (body) essay(body);
    var keep = document.getElementById('keep'); if (keep) keepRow(keep);
    var past = document.getElementById('issues'); if (past && past.dataset.feed) issues(past);
  });
})();
