(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Interactive ASCII Koi Pond (tribute to Tom's reference!)
    var pond = document.getElementById('l-koi');
    if (pond) {
      var cols = 48, rows = 14, t = 0;
      var ripples = [];
      var fish = [
        { x: 10, y: 4.2, vx: 0.24, vy: 0.04, len: 7, phase: 0, body: ['@','O','o','=','-','~','.'] },
        { x: 34, y: 9.6, vx: -0.20, vy: -0.05, len: 6, phase: 2.1, body: ['@','o','=','-','~','.'] },
        { x: 22, y: 7.0, vx: 0.16, vy: 0.06, len: 5, phase: 4.3, body: ['O','o','-','~','.'] }
      ];
      var trails = fish.map(function (f) {
        var arr = [];
        for (var i = 0; i < f.len; i++) arr.push({ x: f.x - f.vx * i * 3, y: f.y - f.vy * i * 3 });
        return arr;
      });
      var ptr = null;

      function measurePond() {
        var probe = document.createElement('span');
        probe.textContent = 'MMMMMMMMMM';
        probe.style.visibility = 'hidden';
        pond.appendChild(probe);
        var cw = probe.getBoundingClientRect().width / 10 || 7.2;
        pond.removeChild(probe);
        var lh = parseFloat(getComputedStyle(pond).lineHeight) || 15;
        cols = Math.max(26, Math.floor(pond.clientWidth / cw));
        rows = Math.max(10, Math.floor(pond.clientHeight / lh));
      }

      function stepPond() {
        t += 0.08;
        if (Math.random() < 0.04 && !window.STILL) {
          ripples.push({ x: Math.random() * cols, y: Math.random() * rows, r: 0.5, max: 6 + Math.random() * 5 });
        }
        for (var ri = ripples.length - 1; ri >= 0; ri--) {
          ripples[ri].r += 0.28;
          if (ripples[ri].r > ripples[ri].max) ripples.splice(ri, 1);
        }

        fish.forEach(function (f, fi) {
          if (!window.STILL && !window.REDUCED) {
            // Gentle swimming + subtle attraction/scatter near pointer
            var ang = Math.atan2(f.vy, f.vx) + Math.sin(t * 0.7 + f.phase) * 0.055;
            var sp = Math.hypot(f.vx, f.vy);
            if (ptr) {
              var dx = ptr.x - f.x, dy = (ptr.y - f.y) * 2;
              var d = Math.hypot(dx, dy);
              if (d < 8 && d > 0.1) {
                ang = Math.atan2(-(ptr.y - f.y), -dx);
                sp = Math.min(0.45, sp + 0.05);
              } else if (d < 22) {
                var target = Math.atan2(ptr.y - f.y, dx);
                var diff = Math.atan2(Math.sin(target - ang), Math.cos(target - ang));
                ang += diff * 0.06;
              }
            }
            sp += (0.21 - sp) * 0.05;
            f.vx = Math.cos(ang) * sp;
            f.vy = Math.sin(ang) * sp * 0.48;
            f.x += f.vx;
            f.y += f.vy;
            if (f.x < 2) { f.x = 2; f.vx = Math.abs(f.vx); }
            if (f.x > cols - 3) { f.x = cols - 3; f.vx = -Math.abs(f.vx); }
            if (f.y < 1.2) { f.y = 1.2; f.vy = Math.abs(f.vy); }
            if (f.y > rows - 2.2) { f.y = rows - 2.2; f.vy = -Math.abs(f.vy); }

            var tr = trails[fi];
            var head = tr[0];
            if (Math.hypot(f.x - head.x, (f.y - head.y) * 2) > 0.95) {
              tr.unshift({ x: f.x, y: f.y });
              if (tr.length > f.len) tr.pop();
            }
          }
        });

        // Build character grid (calm sparse water reflections)
        var grid = new Array(rows * cols);
        var kind = new Uint8Array(rows * cols); // 0 water, 1 ripple, 2 fish
        for (var r = 0; r < rows; r++) {
          for (var c = 0; c < cols; c++) {
            var k = r * cols + c;
            var w = Math.sin(c * 0.22 + t * 0.55 + r * 0.85) * Math.cos(r * 0.65 - t * 0.3 + c * 0.09);
            grid[k] = (w > 0.84 && (c % 2 === 0)) ? '~' : (w < -0.86 ? '·' : ' ');
          }
        }

        ripples.forEach(function (rp) {
          for (var r2 = 0; r2 < rows; r2++) {
            for (var c2 = 0; c2 < cols; c2++) {
              var dist = Math.hypot((c2 - rp.x) * 0.55, r2 - rp.y);
              if (Math.abs(dist - rp.r) < 0.45) {
                var k2 = r2 * cols + c2;
                grid[k2] = rp.r < 2.2 ? 'o' : (rp.r < 4.5 ? '(' : '·');
                kind[k2] = 1;
              }
            }
          }
        });

        fish.forEach(function (f, fi) {
          var tr = trails[fi];
          for (var s = tr.length - 1; s >= 0; s--) {
            var seg = tr[s];
            var sway = s > 1 ? Math.sin(t * 2.2 + f.phase - s * 0.9) * 0.35 : 0;
            var cx = Math.round(seg.x), cy = Math.round(seg.y + sway);
            if (cx >= 0 && cx < cols && cy >= 0 && cy < rows) {
              var idx = cy * cols + cx;
              var ch = f.body[Math.min(s, f.body.length - 1)];
              if (s === 0) ch = f.vx >= 0 ? '»' : '«';
              grid[idx] = ch;
              kind[idx] = 2;
            }
          }
        });

        var out = '';
        for (var ry = 0; ry < rows; ry++) {
          for (var cx2 = 0; cx2 < cols; cx2++) {
            var k3 = ry * cols + cx2;
            var ch3 = grid[k3];
            if (kind[k3] === 2) out += '<b>' + ch3 + '</b>';
            else if (kind[k3] === 1) out += '<i>' + ch3 + '</i>';
            else out += ch3;
          }
          if (ry < rows - 1) out += '\n';
        }
        pond.innerHTML = out;
      }

      pond.addEventListener('pointermove', function (e) {
        var b = pond.getBoundingClientRect();
        ptr = { x: (e.clientX - b.left) / b.width * cols, y: (e.clientY - b.top) / b.height * rows };
      });
      pond.addEventListener('pointerleave', function () { ptr = null; });
      pond.addEventListener('click', function (e) {
        var b = pond.getBoundingClientRect();
        ripples.push({
          x: (e.clientX - b.left) / b.width * cols,
          y: (e.clientY - b.top) / b.height * rows,
          r: 0.4, max: 9
        });
      });

      measurePond();
      // Pre-seed two ripples for visual life in static capture
      ripples.push({ x: cols * 0.65, y: rows * 0.34, r: 2.8, max: 8 });
      stepPond();
      if (!window.STILL && !window.REDUCED) {
        var vis = true, last = 0;
        new IntersectionObserver(function (es) { vis = es[0].isIntersecting; }).observe(pond);
        function loop(ts) {
          if (vis && ts - last > 55) { last = ts; stepPond(); }
          requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
      }
      window.addEventListener('resize', function () { measurePond(); stepPond(); });
    }

    // 2. Risograph Variable-Dot Halftone Fade Canvas
    var halves = [];
    document.querySelectorAll('canvas[data-halftone]').forEach(function (cv) {
      var ctx = cv.getContext('2d');
      var up = cv.dataset.halftone === 'up';
      var mid = cv.classList.contains('mid');
      var hptr = null, t = 0;

      function resize() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = cv.clientWidth || 1000;
        var h = mid ? 84 : 118;
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function draw() {
        t += 0.02;
        var w = cv.clientWidth || 1000;
        var h = mid ? 84 : 118;
        var step = mid ? 11 : 13;
        var field = window.cssVar('--field') || '#02AD28';
        var bg = window.cssVar('--bg') || '#f9faf7';

        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        // Solid lip at the joined edge
        ctx.fillStyle = field;
        var lip = step * 0.9;
        if (up) ctx.fillRect(0, h - lip, w, lip);
        else ctx.fillRect(0, 0, w, lip);

        var rows = Math.ceil(h / step) + 1;
        var cols = Math.ceil(w / step) + 2;
        for (var r = 0; r < rows; r++) {
          var y = (r + 0.5) * step;
          var prog = up ? (y / h) : (1 - y / h);
          var offsetX = (r % 2) * (step * 0.5);
          for (var c = -1; c < cols; c++) {
            var x = c * step + offsetX;
            var wave = Math.sin(x * 0.0085 + t * 0.9) * 0.12 + Math.cos(x * 0.021 - t * 0.6) * 0.06;
            var p = prog + wave;
            if (hptr) {
              var dx = x - hptr.x, dy = y - hptr.y;
              var dist = Math.hypot(dx, dy);
              if (dist < 130) {
                p += Math.cos((dist / 130) * Math.PI * 1.5) * 0.22 * (1 - dist / 130);
              }
            }
            if (p <= 0.04) continue;
            var radius = Math.min(step * 0.78, Math.pow(Math.min(1, p), 1.25) * step * 0.72);
            if (radius < 0.7) continue;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      cv.addEventListener('pointermove', function (e) {
        var b = cv.getBoundingClientRect();
        hptr = { x: e.clientX - b.left, y: e.clientY - b.top };
        if (window.STILL || window.REDUCED) draw();
      });
      cv.addEventListener('pointerleave', function () { hptr = null; });

      resize();
      draw();
      halves.push({ resize: resize, draw: draw });

      if (!window.STILL && !window.REDUCED) {
        var vis = true, last = 0;
        new IntersectionObserver(function (es) { vis = es[0].isIntersecting; }).observe(cv);
        function loop(ts) {
          if (vis && ts - last > 50) { last = ts; draw(); }
          requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
      }
    });

    window.addEventListener('resize', function () { halves.forEach(function (x) { x.resize(); x.draw(); }); });
    window.addEventListener('themechange', function () { halves.forEach(function (x) { x.draw(); }); });
  });
})();
