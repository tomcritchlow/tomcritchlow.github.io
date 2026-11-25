(function () {
  var meta = document.querySelector('meta[name="color-scheme"]');
  var root = document.documentElement;
  var mqDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  window.REDUCED = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  window.STILL = /shot=/.test(location.search);

  function resolvedScheme() {
    var c = meta ? meta.content : 'light dark';
    if (c === 'dark' || c === 'light') return c;
    return mqDark && mqDark.matches ? 'dark' : 'light';
  }

  function syncThemeAttr() {
    root.dataset.theme = resolvedScheme();
  }

  // Respect ?theme=light|dark query param for screenshots/review, otherwise stored override or system
  var qTheme = new URLSearchParams(location.search).get('theme');
  if (qTheme === 'light' || qTheme === 'dark') {
    if (meta) meta.content = qTheme;
  }
  syncThemeAttr();

  if (mqDark && mqDark.addEventListener) {
    mqDark.addEventListener('change', function () {
      syncThemeAttr();
      window.dispatchEvent(new Event('themechange'));
    });
  }

  window.addEventListener('storage', function (e) {
    if (e.key === 'tc-color-scheme' && meta) {
      meta.content = e.newValue || 'light dark';
      syncThemeAttr();
      window.dispatchEvent(new Event('themechange'));
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Screenshot helper: ?shot=post hides the homepage screen so we capture essay cleanly
    var shot = new URLSearchParams(location.search).get('shot');
    if (shot === 'post') {
      var labels = document.querySelectorAll('.screenlabel');
      var nd = labels[0];
      while (nd && nd !== labels[1]) {
        var nx = nd.nextElementSibling;
        nd.remove();
        nd = nx;
      }
      var bar = document.querySelector('.tilebar');
      if (bar) bar.remove();
    } else if (shot === 'home') {
      var barH = document.querySelector('.tilebar');
      if (barH) barH.remove();
      var lbls = document.querySelectorAll('.screenlabel');
      if (lbls[0]) lbls[0].remove();
      if (lbls[1]) {
        var cur = lbls[1];
        while (cur) {
          var next = cur.nextElementSibling;
          cur.remove();
          cur = next;
        }
      }
    }

    // Two-state theme toggle that reverts cleanly to system default when matching OS
    var btn = document.getElementById('themebtn');
    function updateBtn() {
      if (!btn) return;
      btn.textContent = resolvedScheme() === 'dark' ? 'Switch to light' : 'Switch to dark';
    }
    if (btn) {
      btn.addEventListener('click', function () {
        var sys = mqDark && mqDark.matches ? 'dark' : 'light';
        var target = resolvedScheme() === 'dark' ? 'light' : 'dark';
        if (target === sys) {
          try { localStorage.removeItem('tc-color-scheme'); } catch (e) {}
          if (meta) meta.content = 'light dark';
        } else {
          try { localStorage.setItem('tc-color-scheme', target); } catch (e) {}
          if (meta) meta.content = target;
        }
        syncThemeAttr();
        updateBtn();
        window.dispatchEvent(new Event('themechange'));
      });
      updateBtn();
    }

    // Scroll progress fallback when animation-timeline: scroll() is unsupported
    var prog = document.querySelector('.scroll-progress');
    if (prog && !(window.CSS && CSS.supports && CSS.supports('animation-timeline', 'scroll()'))) {
      var updateProg = function () {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        var pct = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
        prog.style.transform = 'scaleX(' + pct + ')';
      };
      window.addEventListener('scroll', updateProg, { passive: true });
      updateProg();
    }

    // Floating link preview hovercard (accessible role="tooltip" + aria-describedby wired upfront)
    var card = document.createElement('div');
    card.id = 'tc-hovercard';
    card.className = 'hovercard';
    card.setAttribute('role', 'tooltip');
    card.innerHTML = '<b></b><i></i><span></span>';
    document.body.appendChild(card);

    var hideTimer = null;
    function showCard(a) {
      clearTimeout(hideTimer);
      card.children[0].textContent = a.dataset.t || '';
      card.children[1].textContent = a.dataset.s || '';
      card.children[2].textContent = a.dataset.d || '';
      var r = a.getBoundingClientRect();
      var cardW = Math.min(304, window.innerWidth - 32);
      var left = Math.min(Math.max(16, r.left), window.innerWidth - cardW - 16);
      var top = r.bottom + 10;
      if (top + 120 > window.innerHeight && r.top > 130) {
        top = r.top - 114;
      }
      card.style.left = left + 'px';
      card.style.top = top + 'px';
      card.classList.add('on');
    }
    function hideCard() {
      hideTimer = setTimeout(function () { card.classList.remove('on'); }, 70);
    }
    document.querySelectorAll('a[data-t]').forEach(function (a) {
      if (!a.hasAttribute('aria-describedby')) a.setAttribute('aria-describedby', 'tc-hovercard');
      a.addEventListener('pointerenter', function () { showCard(a); });
      a.addEventListener('focus', function () { showCard(a); });
      a.addEventListener('pointerleave', hideCard);
      a.addEventListener('blur', hideCard);
      a.addEventListener('click', function (e) { e.preventDefault(); });
    });

    // Reveal-on-view for neat-annotations SVG marks
    var marks = document.querySelectorAll('[data-reveal]');
    if (window.STILL || window.REDUCED || !('IntersectionObserver' in window)) {
      marks.forEach(function (el) { el.classList.add('seen'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('seen');
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.4 });
      marks.forEach(function (el) { io.observe(el); });
    }

    // Native <dialog closedby="any"> search palette across all 223 posts
    var POSTS = window.POSTS || [];
    var dialog = document.createElement('dialog');
    dialog.id = 'search-dialog';
    dialog.className = 'search-dialog';
    dialog.setAttribute('closedby', 'any');
    dialog.setAttribute('aria-label', 'Search all ' + POSTS.length + ' posts');
    dialog.innerHTML =
      '<div class="search-head">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
        '<input id="tc-q" type="search" placeholder="Search ' + POSTS.length + ' posts by title, topic, or year..." autocomplete="off" autofocus aria-controls="tc-qr">' +
        '<button type="button" class="search-close" aria-label="Close search">esc</button>' +
      '</div>' +
      '<ul id="tc-qr" class="search-results" role="listbox"></ul>' +
      '<div class="search-foot"><span id="tc-qc"></span><span>\u2191 \u2193 move \u00b7 enter open \u00b7 esc close</span></div>';
    document.body.appendChild(dialog);

    // Light-dismiss fallback when dialog.closedBy is unsupported
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      var outside = function (e) {
        var r = dialog.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      var pressedOut = false;
      dialog.addEventListener('pointerdown', function (e) { pressedOut = outside(e); });
      dialog.addEventListener('pointerup', function (e) { if (pressedOut && outside(e)) dialog.close(); });
    }

    var q = dialog.querySelector('#tc-q');
    var list = dialog.querySelector('#tc-qr');
    var count = dialog.querySelector('#tc-qc');
    var closeBtn = dialog.querySelector('.search-close');
    var sel = 0, shown = [];

    function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
    function mark(text, terms) {
      var out = esc(text);
      terms.forEach(function (t) {
        if (!t) return;
        var re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![^<]*>)', 'ig');
        out = out.replace(re, '<mark>$1</mark>');
      });
      return out;
    }

    function runSearch() {
      var terms = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
      var scored = [];
      POSTS.forEach(function (p, i) {
        var title = p[1].toLowerCase(), sub = (p[2] || '').toLowerCase(), date = p[0];
        var score = 0;
        for (var k = 0; k < terms.length; k++) {
          var w = terms[k];
          if (title.indexOf(w) === 0) score += 6;
          else if (new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).test(title)) score += 4;
          else if (title.indexOf(w) >= 0) score += 3;
          else if (date.indexOf(w) === 0) score += 3;
          else if (sub.indexOf(w) >= 0) score += 1;
          else return;
        }
        scored.push([score, i]);
      });
      scored.sort(function (a, b) { return b[0] - a[0] || a[1] - b[1]; });
      shown = scored.slice(0, terms.length ? 30 : 8).map(function (x) { return x[1]; });
      sel = 0;
      count.textContent = terms.length
        ? scored.length + ' of ' + POSTS.length + ' posts'
        : 'Latest ' + shown.length + ' of ' + POSTS.length + ' posts';
      list.innerHTML = shown.length
        ? shown.map(function (idx, k) {
            var p = POSTS[idx];
            return '<li role="option" data-k="' + k + '"><time>' + esc(p[0]) + '</time><span><b>' + mark(p[1], terms) + '</b>' + (p[2] ? '<i>' + mark(p[2], terms) + '</i>' : '') + '</span></li>';
          }).join('')
        : '<li class="none">No posts match. Try a single word or year (e.g. 2020).</li>';
      paintSel();
    }

    function paintSel() {
      [].forEach.call(list.children, function (li, k) {
        li.setAttribute('aria-selected', k === sel ? 'true' : 'false');
        if (k === sel && li.scrollIntoView) li.scrollIntoView({ block: 'nearest' });
      });
    }

    window.openSiteSearch = function (prefill) {
      if (!dialog.open) dialog.showModal();
      q.value = prefill || '';
      runSearch();
      q.focus();
    };

    closeBtn.addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('close', function () { dialog.returnValue = ''; });
    q.addEventListener('input', runSearch);
    list.addEventListener('pointermove', function (e) {
      var li = e.target.closest('li[data-k]');
      if (li && +li.dataset.k !== sel) { sel = +li.dataset.k; paintSel(); }
    });
    list.addEventListener('click', function (e) {
      var li = e.target.closest('li[data-k]');
      if (li) dialog.close();
    });

    document.querySelectorAll('[data-search]').forEach(function (b) {
      b.addEventListener('click', function () { window.openSiteSearch(b.dataset.search || ''); });
    });

    window.addEventListener('keydown', function (e) {
      if (!dialog.open) {
        if ((e.key === '/' && !/INPUT|TEXTAREA/.test(e.target.tagName)) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
          e.preventDefault();
          window.openSiteSearch('');
        }
        return;
      }
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(shown.length - 1, sel + 1); paintSel(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); paintSel(); }
      else if (e.key === 'Enter' && shown.length) { e.preventDefault(); dialog.close(); }
    });
  });

  // Helper to get resolved RGB color for Canvas 2D (resolves CSS light-dark() properly)
  var colorProbe = null;
  window.cssVar = function (name) {
    if (!colorProbe && document.body) {
      colorProbe = document.createElement('span');
      colorProbe.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;width:0;height:0';
      document.body.appendChild(colorProbe);
    }
    if (colorProbe) {
      colorProbe.style.color = '';
      colorProbe.style.color = 'var(' + name + ')';
      var resolved = getComputedStyle(colorProbe).color;
      if (resolved) return resolved;
    }
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  };
})();
