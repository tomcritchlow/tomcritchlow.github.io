// Full-site search for /search/ (posts, blogchains, wiki via /index.json + Fuse.js)
(function () {
  var fuse = null;
  var list = document.getElementById('searchResults');
  var status = document.getElementById('searchStatus');
  var input = document.getElementById('searchInput');
  if (!input || !list) return;

  function esc(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  }

  function render(term) {
    var q = (term || '').trim();
    if (!fuse) {
      if (status) status.textContent = 'Loading index…';
      return;
    }
    if (!q) {
      list.innerHTML = '';
      if (status) status.textContent = 'Type to search across posts, blogchains and wiki pages.';
      return;
    }
    var results = fuse.search(q);
    if (!results.length) {
      list.innerHTML = '';
      if (status) status.textContent = 'No matches for “' + q + '”.';
      return;
    }
    var shown = results.slice(0, 20);
    if (status) status.textContent = results.length + (results.length === 1 ? ' result' : ' results') + (results.length > shown.length ? ' (showing top ' + shown.length + ')' : '');
    list.innerHTML = shown.map(function (r) {
      var item = r.item;
      var meta = item.date || (item.category ? item.category : '');
      var snippet = (item.content || '').replace(/\s+/g, ' ').trim().slice(0, 180);
      return '<li><a href="' + esc(item.url) + '"><span class="sr-top"><b>' + esc(item.title) + '</b>' + (meta ? '<time>' + esc(meta) + '</time>' : '') + '</span>' + (snippet ? '<p>' + esc(snippet) + '…</p>' : '') + '</a></li>';
    }).join('');
  }

  input.focus();
  input.addEventListener('input', function () { render(input.value); });

  fetch('/index.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      fuse = new Fuse(data, {
        shouldSort: true,
        ignoreLocation: true,
        distance: 5000,
        threshold: 0.45,
        fieldNormWeight: 2.0,
        minMatchCharLength: 2,
        keys: ['title', 'url', 'content']
      });
      render(input.value);
    })
    .catch(function () {
      if (status) status.textContent = 'Could not load search index.';
    });
})();
