/* behaviour that only the explorations need */
(function () {
  var REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('DOMContentLoaded', function () {
    // links inside a mock-up go nowhere
    document.querySelectorAll('a[href^="/"], a[href="#"]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });

    // B: typing lights up matching titles
    var filter = document.getElementById('wallfilter'), titles = document.getElementById('titles');
    if (filter && titles) filter.addEventListener('input', function () {
      var q = filter.value.trim().toLowerCase();
      titles.querySelectorAll('a').forEach(function (a) { a.classList.toggle('hit', !!q && a.textContent.toLowerCase().indexOf(q) >= 0); a.classList.toggle('miss', !!q && a.textContent.toLowerCase().indexOf(q) < 0); });
      if (!titles.classList.contains('deepwall')) titles.style.maxHeight = q ? 'none' : '';
      document.querySelectorAll('#yearchips button').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
    });
    // A's deep wall: read out the post under the pointer; year chips light up a year
    var readout = document.getElementById('readout'), POSTS = window.__POSTS || [];
    if (readout && titles) {
      var idle = readout.textContent;
      var say = function (a) { var p = POSTS[+a.dataset.i]; if (!p) return; readout.textContent = ''; var b = document.createElement('b'); b.textContent = p.d + '  '; readout.appendChild(b); readout.appendChild(document.createTextNode([p.s, p.w.toLocaleString('en-US') + ' words', Math.max(1, Math.round(p.w / 230)) + ' min'].filter(Boolean).join(' \u00b7 '))); };
      titles.addEventListener('pointerover', function (e) { var a = e.target.closest('a'); if (a) say(a); });
      titles.addEventListener('focusin', function (e) { var a = e.target.closest('a'); if (a) say(a); });
      titles.addEventListener('pointerleave', function () { readout.textContent = idle; });
      var chips = document.getElementById('yearchips');
      if (chips) chips.addEventListener('click', function (e) {
        var btn = e.target.closest('button'); if (!btn) return; var on = btn.getAttribute('aria-pressed') !== 'true', y = btn.dataset.year, n = 0;
        chips.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b === btn && on ? 'true' : 'false'); });
        if (filter) filter.value = '';
        titles.querySelectorAll('a').forEach(function (a) { var p = POSTS[+a.dataset.i], hit = on && p && p.d.slice(0, 4) === y; if (hit) n++; a.classList.toggle('hit', !!hit); a.classList.toggle('miss', on && !hit); });
        idle = on ? n + ' post' + (n === 1 ? '' : 's') + ' in ' + y + '.' : POSTS.length + ' posts. Point at one.'; readout.textContent = idle;
      });
    }

    // A: a wall of sentences; the headline is the same text made bold, and termites eat it
    var wall = document.getElementById('wall'); if (!wall) return;
    var TEXT = (window.__WORDS || '').replace(/\s+/g, ' '), cfg = wall.dataset, g, n, mask, eaten, ants = [], tick = 0, DX = [1, 1, 0, -1, -1, -1, 0, 1], DY = [0, 1, 1, 1, 0, -1, -1, -1], chars = [];
    function esc(c) { return c === '&' ? '&amp;' : c === '<' ? '&lt;' : c; }
    function init() {
      wall.textContent = ''; wall.style.height = '';
      var probe = document.createElement('span'); probe.textContent = 'MMMMMMMMMM'; probe.style.visibility = 'hidden'; wall.appendChild(probe);
      var cw = probe.getBoundingClientRect().width / 10 || 5.4; wall.removeChild(probe);
      g = { cols: Math.max(20, Math.floor(wall.clientWidth / cw)), cw: cw, ch: parseFloat(getComputedStyle(wall).lineHeight) || 10.35 };
      var W = g.cols * g.cw, lines = (W < 720 ? (cfg.narrow || cfg.wide) : cfg.wide).split('|'), PAD = W < 720 ? 3 : 5;
      var c = document.createElement('canvas'), x = c.getContext('2d'), face = '800 100px "Bricolage Grotesque",system-ui,sans-serif';
      x.font = face; var widest = Math.max.apply(null, lines.map(function (l) { return x.measureText(l).width; }));
      var fs = Math.min(lines.length > 1 ? 230 : 300, 100 * (W * .97) / widest), lh = fs * .86, H = lh * lines.length + fs * .16;
      g.rows = Math.ceil(H / g.ch) + PAD * 2; n = g.cols * g.rows; c.width = Math.ceil(W); c.height = Math.ceil(g.rows * g.ch);
      x.font = face.replace('100px', fs + 'px'); x.textBaseline = 'alphabetic'; x.fillStyle = '#000';
      lines.forEach(function (l, i) { x.fillText(l, W * .005, fs * .78 + lh * i + PAD * g.ch); });
      var data = x.getImageData(0, 0, c.width, c.height).data; mask = new Uint8Array(n); eaten = new Int32Array(n); chars = new Array(n);
      for (var r = 0; r < g.rows; r++) for (var q = 0; q < g.cols; q++) {
        var px = Math.min(c.width - 1, Math.floor((q + .5) * g.cw)), py = Math.min(c.height - 1, Math.floor((r + .5) * g.ch)), i = r * g.cols + q;
        mask[i] = data[(py * c.width + px) * 4 + 3] > 110 ? 1 : 0; chars[i] = esc(TEXT[i % TEXT.length] || ' ');
      }
      wall.style.height = (g.rows * g.ch) + 'px'; ants = [];
      var count = REDUCED ? 0 : Math.max(8, Math.round(n / 900));
      for (var a = 0; a < count; a++) ants.push({ x: Math.random() * g.cols, y: Math.random() * g.rows, d: Math.floor(Math.random() * 8) });
    }
    function bite(cx, cy, r, ticks) { for (var dy = -r; dy <= r; dy++) for (var dx = -r * 2; dx <= r * 2; dx++) { var X = cx + dx, Y = cy + dy; if (X < 0 || Y < 0 || X >= g.cols || Y >= g.rows) continue; if (dx * dx / 4 + dy * dy <= r * r) eaten[Y * g.cols + X] = tick + ticks + Math.floor(Math.random() * 14); } }
    wall.addEventListener('pointermove', function (e) { var b = wall.getBoundingClientRect(); bite(Math.floor((e.clientX - b.left) / g.cw), Math.floor((e.clientY - b.top) / g.ch), 3, 50); });
    function step() {
      tick++;
      ants.forEach(function (a) {
        if (Math.random() < .22) a.d = (a.d + (Math.random() < .5 ? 1 : 7)) % 8;
        for (var t = -1; t <= 1; t++) { var d = (a.d + t + 8) % 8, X = Math.round(a.x + DX[d] * 4), Y = Math.round(a.y + DY[d] * 3); if (X >= 0 && Y >= 0 && X < g.cols && Y < g.rows) { var k = Y * g.cols + X; if (mask[k] && eaten[k] < tick && Math.random() < .5) { a.d = d; break; } } }
        a.x = (a.x + DX[a.d] * 1.1 + g.cols) % g.cols; a.y = (a.y + DY[a.d] * .7 + g.rows) % g.rows;
        if (mask[Math.floor(a.y) * g.cols + Math.floor(a.x)]) bite(Math.floor(a.x), Math.floor(a.y), 1, 70);
      });
      var out = '', open = false;
      for (var y = 0; y < g.rows; y++) {
        for (var x2 = 0; x2 < g.cols; x2++) { var k2 = y * g.cols + x2, solid = mask[k2] && eaten[k2] < tick; if (solid && !open) { out += '<b>'; open = true; } else if (!solid && open) { out += '</b>'; open = false; } out += chars[k2]; }
        if (open) { out += '</b>'; open = false; } out += '\n';
      }
      wall.innerHTML = out;
    }
    function start() {
      init(); step(); var w = wall.clientWidth;
      new ResizeObserver(function () { if (Math.abs(wall.clientWidth - w) > 8) { w = wall.clientWidth; init(); step(); } }).observe(wall);
      if (!REDUCED && !/shot=/.test(location.search)) { var on = false, last = 0; new IntersectionObserver(function (es) { on = es[0].isIntersecting; if (on) requestAnimationFrame(function f(t) { if (!on) return; if (t - last > 70) { last = t; step(); } requestAnimationFrame(f); }); }).observe(wall); }
    }
    if (document.fonts && document.fonts.load) document.fonts.load('800 100px "Bricolage Grotesque"').then(start, start); else start();
  });
})();
