(function () {
  var BAYER8 = [
    [0,32,8,40,2,34,10,42],[48,16,56,24,50,18,58,26],
    [12,44,4,36,14,46,6,38],[60,28,52,20,62,30,54,22],
    [3,35,11,43,1,33,9,41],[51,19,59,27,49,17,57,25],
    [15,47,7,39,13,45,5,37],[63,31,55,23,61,29,53,21]
  ];
  function hash(x, y) {
    var s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return s - Math.floor(s);
  }
  function vnoise(x, y) {
    var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    return hash(xi, yi) * (1 - u) * (1 - v) + hash(xi + 1, yi) * u * (1 - v) +
           hash(xi, yi + 1) * (1 - u) * v + hash(xi + 1, yi + 1) * u * v;
  }

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Retina Canvas Glyph-Matrix Headline ("Hey, I'm Tom.")
    var hc = document.getElementById('k-headline');
    if (hc) {
      var hctx = hc.getContext('2d');
      var CELL = 7;
      var cols = 0, rows = 0, mask = null, eaten = null, trail = null, ants = [], ptr = null, tick = 0;
      var GLYPHS = [' ', '·', ':', '+', '▒', '▓', '█'];
      var WORDS = 'TERMITESTOKENSSTIGMERGYDIGITALGARDENSMALLBBLOGGINGSTRATEGYRIFFSBROOKLYN';

      function initHead() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var W = hc.clientWidth || 1000;
        var H = W < 620 ? 150 : 196;
        hc.style.height = H + 'px';
        hc.width = Math.round(W * dpr);
        hc.height = Math.round(H * dpr);
        hctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        CELL = W < 620 ? 6 : 8;
        cols = Math.floor(W / CELL);
        rows = Math.floor(H / CELL);

        var off = document.createElement('canvas');
        off.width = cols; off.height = rows;
        var ox = off.getContext('2d');
        var text = "Hey, I'm Tom.";
        var fs = rows * 0.86;
        ox.font = '800 ' + fs + 'px "Bricolage Grotesque", system-ui, sans-serif';
        var tw = ox.measureText(text).width;
        if (tw > cols * 0.96) fs *= (cols * 0.96) / tw;
        ox.font = '800 ' + fs + 'px "Bricolage Grotesque", system-ui, sans-serif';
        ox.textBaseline = 'middle';
        ox.fillStyle = '#000';
        ox.fillText(text, 2, rows * 0.54);

        var img = ox.getImageData(0, 0, cols, rows).data;
        mask = new Float32Array(cols * rows);
        eaten = new Float32Array(cols * rows);
        trail = new Float32Array(cols * rows);
        for (var i = 0; i < cols * rows; i++) mask[i] = img[i * 4 + 3] / 255;

        ants = [];
        var count = Math.max(12, Math.round(cols / 10));
        for (var a = 0; a < count; a++) {
          ants.push({
            x: Math.random() * cols,
            y: Math.random() * rows,
            ang: Math.random() * Math.PI * 2,
            sp: 0.42 + Math.random() * 0.28
          });
        }
      }

      function stepHead() {
        tick++;
        var W = hc.clientWidth || 1000;
        var H = parseFloat(hc.style.height) || 196;
        var fg = window.cssVar('--on-field') || '#07220d';
        var inkDim = window.cssVar('--field-dim') || 'rgba(7,34,13,0.22)';
        hctx.clearRect(0, 0, W, H);

        for (var i = 0; i < mask.length; i++) {
          if (eaten[i] > 0) eaten[i] = Math.max(0, eaten[i] - 0.018);
          if (trail[i] > 0) trail[i] *= 0.94;
        }

        if (!window.STILL && !window.REDUCED) {
          ants.forEach(function (a) {
            a.ang += (Math.random() - 0.5) * 0.55;
            a.x = (a.x + Math.cos(a.ang) * a.sp + cols) % cols;
            a.y = (a.y + Math.sin(a.ang) * a.sp + rows) % rows;
            var cx = Math.floor(a.x), cy = Math.floor(a.y);
            var idx = cy * cols + cx;
            trail[idx] = 1;
            if (mask[idx] > 0.35) {
              for (var dy = -1; dy <= 1; dy++) {
                for (var dx = -1; dx <= 1; dx++) {
                  var nx = cx + dx, ny = cy + dy;
                  if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
                    eaten[ny * cols + nx] = Math.max(eaten[ny * cols + nx], 0.95);
                  }
                }
              }
            }
          });
        }

        if (ptr) {
          var pc = Math.floor(ptr.x / CELL), pr = Math.floor(ptr.y / CELL);
          for (var dy2 = -3; dy2 <= 3; dy2++) {
            for (var dx2 = -3; dx2 <= 3; dx2++) {
              if (dx2 * dx2 + dy2 * dy2 <= 10) {
                var nx2 = pc + dx2, ny2 = pr + dy2;
                if (nx2 >= 0 && nx2 < cols && ny2 >= 0 && ny2 < rows) {
                  eaten[ny2 * cols + nx2] = Math.max(eaten[ny2 * cols + nx2], 1);
                  trail[ny2 * cols + nx2] = 0.85;
                }
              }
            }
          }
        }

        hctx.textAlign = 'center';
        hctx.textBaseline = 'middle';
        hctx.font = '700 ' + (CELL + 1) + 'px "JetBrains Mono", ui-monospace, monospace';

        var wi = 0;
        for (var r = 0; r < rows; r++) {
          for (var c = 0; c < cols; c++) {
            var k = r * cols + c;
            var m = mask[k];
            var x = c * CELL + CELL * 0.5;
            var y = r * CELL + CELL * 0.5;
            if (m > 0.25) {
              wi++;
              var health = m * (1 - eaten[k] * 0.92);
              if (health > 0.62) {
                // Crisp solid rounded micro-block with subtle Bayer grain on edges
                hctx.fillStyle = fg;
                var pad = health > 0.85 ? 0.5 : 1.1;
                hctx.fillRect(c * CELL + pad, r * CELL + pad, CELL - pad * 2, CELL - pad * 2);
              } else if (health > 0.14) {
                hctx.fillStyle = fg;
                var ch = health > 0.42 ? WORDS[(r * 13 + c) % WORDS.length] : (health > 0.26 ? '+' : '·');
                hctx.fillText(ch, x, y);
              }
            } else if (trail[k] > 0.18) {
              hctx.fillStyle = fg;
              hctx.globalAlpha = 0.28;
              hctx.fillText(trail[k] > 0.55 ? '+' : '·', x, y);
              hctx.globalAlpha = 1;
            }
          }
        }

        // Draw crisp pixel termites
        hctx.fillStyle = fg;
        ants.forEach(function (a) {
          var ax = Math.floor(a.x) * CELL;
          var ay = Math.floor(a.y) * CELL;
          hctx.fillRect(ax + 1, ay + 2, CELL - 2, CELL - 4);
          hctx.fillRect(ax + 2, ay + 1, CELL - 4, CELL - 2);
        });
      }

      hc.addEventListener('pointermove', function (e) {
        var b = hc.getBoundingClientRect();
        ptr = { x: e.clientX - b.left, y: e.clientY - b.top };
      });
      hc.addEventListener('pointerleave', function () { ptr = null; });

      var startHead = function () {
        initHead();
        stepHead();
        if (!window.STILL && !window.REDUCED) {
          var last = 0, visible = true;
          new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(hc);
          function loop(t) {
            if (visible && t - last > 48) { last = t; stepHead(); }
            requestAnimationFrame(loop);
          }
          requestAnimationFrame(loop);
        }
        window.addEventListener('resize', function () { initHead(); stepHead(); });
        window.addEventListener('themechange', stepHead);
      };
      (document.fonts && document.fonts.load
        ? document.fonts.load('800 80px "Bricolage Grotesque"').then(startHead, startHead)
        : startHead());
    }

    // 2. Retina Bayer / Contour / Strata Canvas Shoreline Seams
    var seamMode = 'bayer';
    var seams = [];

    document.querySelectorAll('canvas[data-seam]').forEach(function (cv) {
      var ctx = cv.getContext('2d');
      var up = cv.dataset.dir === 'up';
      var mini = cv.classList.contains('k-seam-mini');
      var cell = mini ? 4 : 6;
      var sptr = null, t = 0;

      function resize() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = cv.clientWidth || 1000;
        var h = mini ? 42 : 112;
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function draw() {
        t += 0.025;
        var w = cv.clientWidth || 1000;
        var h = mini ? 42 : 112;
        var cols = Math.ceil(w / cell);
        var rows = Math.ceil(h / cell);
        var field = window.cssVar('--field') || '#02AD28';
        var bg = window.cssVar('--bg') || '#f7faf7';
        var ink = window.cssVar('--on-field') || '#07220d';

        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        for (var r = 0; r < rows; r++) {
          var rr = up ? rows - 1 - r : r;
          var base = 1 - (rr + 0.5) / rows;
          for (var c = 0; c < cols; c++) {
            var density;
            if (seamMode === 'contour') {
              var n1 = vnoise(c * 0.045 + t * 0.35, rr * 0.14 + t * 0.12);
              var n2 = vnoise(c * 0.11 - t * 0.2, rr * 0.28);
              var wave = (n1 * 0.65 + n2 * 0.35);
              var ring = Math.abs(((wave * 5) % 1) - 0.5) * 2;
              density = base * 1.12 + (wave - 0.5) * 0.55 - (ring < 0.22 && base < 0.72 && base > 0.15 ? 0.35 : 0);
            } else if (seamMode === 'strata') {
              var colH = hash(Math.floor(c / 2), 9.1);
              var drip = 0.2 + 0.75 * colH * (0.72 + 0.28 * Math.sin(t * 1.3 + colH * 18));
              density = (drip - (rr / rows)) * 1.65 + 0.48;
            } else {
              // Bayer organic tidepool
              var drift = vnoise(c * 0.055 + t * 0.45, rr * 0.22 - t * 0.15) - 0.5;
              var swell = Math.sin(c * 0.035 + t * 0.8) * 0.11;
              density = base + drift * 0.52 + swell;
            }

            if (sptr) {
              var dx = (c * cell - sptr.x) / 28;
              var dy = (r * cell - sptr.y) / 22;
              var d2 = dx * dx + dy * dy;
              if (d2 < 3.6) density -= (3.6 - d2) / 3.6 * 0.65;
            }

            if (rr === 0) density = 1.0;
            var threshold = (BAYER8[r & 7][c & 7] + 0.5) / 64;
            if (density > threshold) {
              ctx.fillStyle = field;
              ctx.fillRect(c * cell, r * cell, cell, cell);
            } else if (density > threshold - 0.045 && !mini && ((c + r) & 3) === 0) {
              ctx.fillStyle = ink;
              ctx.globalAlpha = 0.24;
              ctx.fillRect(c * cell + 1, r * cell + 1, cell - 2, cell - 2);
              ctx.globalAlpha = 1;
            }
          }
        }
      }

      cv.addEventListener('pointermove', function (e) {
        var b = cv.getBoundingClientRect();
        sptr = { x: e.clientX - b.left, y: e.clientY - b.top };
        if (window.STILL || window.REDUCED) draw();
      });
      cv.addEventListener('pointerleave', function () { sptr = null; });

      resize();
      draw();
      seams.push({ cv: cv, resize: resize, draw: draw });

      if (!window.STILL && !window.REDUCED) {
        var vis = true, last = 0;
        new IntersectionObserver(function (es) { vis = es[0].isIntersecting; }).observe(cv);
        function loop(ts) {
          if (vis && ts - last > 65) { last = ts; draw(); }
          requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
      }
    });

    document.querySelectorAll('.k-seam-controls button').forEach(function (b) {
      b.addEventListener('click', function () {
        seamMode = b.dataset.mode;
        document.querySelectorAll('.k-seam-controls button').forEach(function (x) {
          x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
        });
        seams.forEach(function (s) { s.draw(); });
      });
    });

    window.addEventListener('resize', function () { seams.forEach(function (s) { s.resize(); s.draw(); }); });
    window.addEventListener('themechange', function () { seams.forEach(function (s) { s.draw(); }); });
  });
})();
