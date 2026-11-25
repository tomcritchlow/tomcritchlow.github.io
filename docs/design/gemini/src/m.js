(function () {
  var BAYER4 = [[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]];

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Subtle Title-Weave Backdrop behind the green hero
    var weave = document.getElementById('m-weave');
    var POSTS = window.POSTS || [];
    if (weave && POSTS.length) {
      var lines = [];
      for (var row = 0; row < 20; row++) {
        var chunks = [];
        for (var k = 0; k < 10; k++) {
          var p = POSTS[(row * 7 + k * 3) % POSTS.length];
          chunks.push(p[0].slice(0, 4) + ' ' + p[1]);
        }
        lines.push('<div>' + chunks.join('   ·   ') + '</div>');
      }
      weave.innerHTML = lines.join('');
    }

    // 2. Data-Driven 2012-2026 Archive Pixel Skyline
    var sky = document.getElementById('m-skyline');
    var readout = document.getElementById('m-readout');
    var YEARS = window.YEAR_COUNTS || [];
    if (sky && YEARS.length) {
      var ctx = sky.getContext('2d');
      var maxCount = Math.max.apply(null, YEARS.map(function (y) { return y[1]; })) || 40;
      var hoverIdx = -1, t = 0;

      function resizeSky() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = sky.clientWidth || 1000;
        var h = 142;
        sky.width = Math.round(w * dpr);
        sky.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function drawSky() {
        t += 0.03;
        var w = sky.clientWidth || 1000;
        var h = 142;
        var cell = 6;
        var cols = Math.ceil(w / cell);
        var rows = Math.ceil(h / cell);
        var field = window.cssVar('--field') || '#02AD28';
        var bg = window.cssVar('--bg') || '#f6f8f6';
        var ink = window.cssVar('--on-field') || '#07220d';
        var accent = window.cssVar('--green-ink') || '#046a1c';

        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        var bandW = cols / YEARS.length;
        for (var c = 0; c < cols; c++) {
          var yIdx = Math.min(YEARS.length - 1, Math.floor(c / bandW));
          var local = (c - yIdx * bandW) / bandW;
          // Smoothly blend edges between neighboring years while keeping distinct plateaus
          var nextIdx = Math.min(YEARS.length - 1, yIdx + 1);
          var prevIdx = Math.max(0, yIdx - 1);
          var val = YEARS[yIdx][1];
          if (local > 0.85) val = val * 0.7 + YEARS[nextIdx][1] * 0.3;
          else if (local < 0.15) val = val * 0.7 + YEARS[prevIdx][1] * 0.3;

          var norm = 0.22 + (val / maxCount) * 0.66;
          var breath = Math.sin(t + yIdx * 0.9 + c * 0.08) * 0.035;
          var peakRow = (norm + breath) * (rows - 3);
          var isHot = yIdx === hoverIdx;

          for (var r = 0; r < rows; r++) {
            var diff = peakRow - r;
            var thresh = (BAYER4[r & 3][c & 3] + 0.5) / 16;
            var density = r <= 1 ? 1 : (diff > 1.8 ? 1 : (diff > -3.5 ? (diff + 3.5) / 5.3 : 0));
            if (density > thresh) {
              ctx.fillStyle = isHot ? ink : field;
              ctx.fillRect(c * cell, r * cell, cell, cell);
            } else if (isHot && r < rows - 2 && r === Math.floor(peakRow) + 2 && (c & 1) === 0) {
              ctx.fillStyle = accent;
              ctx.fillRect(c * cell + 1, r * cell + 1, cell - 2, cell - 2);
            }
          }
        }

        // Crisp year markers along the bottom
        ctx.font = '500 10.5px "JetBrains Mono", ui-monospace, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        YEARS.forEach(function (yr, idx) {
          var cx = (idx + 0.5) * (w / YEARS.length);
          var show = w > 760 || idx % 2 === 0 || idx === hoverIdx;
          if (!show) return;
          ctx.fillStyle = idx === hoverIdx ? accent : (window.cssVar('--muted') || '#56635b');
          ctx.fillText(String(yr[0]), cx, h - 2);
        });
      }

      sky.addEventListener('pointermove', function (e) {
        var b = sky.getBoundingClientRect();
        var idx = Math.min(YEARS.length - 1, Math.max(0, Math.floor(((e.clientX - b.left) / b.width) * YEARS.length)));
        if (idx !== hoverIdx) {
          hoverIdx = idx;
          var yr = YEARS[idx];
          if (readout) {
            readout.textContent = yr[0] + ' · ' + yr[1] + (yr[1] === 1 ? ' essay' : ' essays') + (yr[1] === maxCount ? ' (peak year)' : '') + ' · click to search';
          }
          drawSky();
        }
      });
      sky.addEventListener('pointerleave', function () {
        hoverIdx = -1;
        if (readout) readout.textContent = 'Hover a ridge to inspect a year · click to filter';
        drawSky();
      });
      sky.addEventListener('click', function () {
        if (hoverIdx >= 0 && window.openSiteSearch) {
          window.openSiteSearch(String(YEARS[hoverIdx][0]));
        }
      });

      resizeSky();
      drawSky();
      if (!window.STILL && !window.REDUCED) {
        var vis = true, last = 0;
        new IntersectionObserver(function (es) { vis = es[0].isIntersecting; }).observe(sky);
        function loop(ts) {
          if (vis && ts - last > 80) { last = ts; drawSky(); }
          requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
      }
      window.addEventListener('resize', function () { resizeSky(); drawSky(); });
      window.addEventListener('themechange', drawSky);
    }

    // 3. Live Pixel-Dither Progress Seam in Essay Header + Inverted Footer Horizon
    var bar = document.getElementById('m-dither-bar');
    if (bar) {
      var bctx = bar.getContext('2d');
      function drawBar() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = bar.clientWidth || 1000;
        var h = 12;
        bar.width = Math.round(w * dpr);
        bar.height = Math.round(h * dpr);
        bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var cell = 4;
        var cols = Math.ceil(w / cell);
        var rows = 3;
        var field = window.cssVar('--field') || '#02AD28';
        var rule = window.cssVar('--rule') || '#d6dfd8';
        var maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        var pct = window.STILL ? 0.34 : Math.min(1, Math.max(0.06, window.scrollY / maxScroll));
        var limit = pct * cols;

        bctx.clearRect(0, 0, w, h);
        bctx.fillStyle = rule;
        bctx.fillRect(0, 0, w, 1);

        for (var r = 0; r < rows; r++) {
          for (var c = 0; c < cols; c++) {
            var d = (limit - c) / 14;
            var thresh = (BAYER4[r & 3][c & 3] + 0.5) / 16;
            var verticalFade = 1 - r * 0.28;
            if (d * verticalFade > thresh) {
              bctx.fillStyle = field;
              bctx.fillRect(c * cell, r * cell, cell, cell);
            }
          }
        }
      }
      drawBar();
      window.addEventListener('scroll', drawBar, { passive: true });
      window.addEventListener('resize', drawBar);
      window.addEventListener('themechange', drawBar);
    }

    var fsky = document.getElementById('m-foot-sky');
    if (fsky) {
      var fctx = fsky.getContext('2d');
      function drawFoot() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = fsky.clientWidth || 1000;
        var h = 74;
        fsky.width = Math.round(w * dpr);
        fsky.height = Math.round(h * dpr);
        fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var cell = 6, cols = Math.ceil(w / cell), rows = Math.ceil(h / cell);
        var field = window.cssVar('--field') || '#02AD28';
        var bg = window.cssVar('--bg') || '#f6f8f6';
        fctx.fillStyle = bg;
        fctx.fillRect(0, 0, w, h);
        for (var c = 0; c < cols; c++) {
          var wave = Math.sin(c * 0.14) * 1.4 + Math.cos(c * 0.05) * 1.6;
          for (var r = 0; r < rows; r++) {
            var rr = rows - 1 - r;
            var dens = rr <= 1 ? 1 : (rows * 0.45 + wave - rr) / (rows * 0.42);
            if (dens > (BAYER4[r & 3][c & 3] + 0.5) / 16) {
              fctx.fillStyle = field;
              fctx.fillRect(c * cell, r * cell, cell, cell);
            }
          }
        }
      }
      drawFoot();
      window.addEventListener('resize', drawFoot);
      window.addEventListener('themechange', drawFoot);
    }
  });
})();
