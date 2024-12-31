//
// Originally from Craig Mod here: https://gist.github.com/cmod/5410eae147e4318164258742dd053993
// Lightly customized by Tom Critchlow
//

var fuse; // holds our search engine
var searchVisible = false;
var firstRun = true; // allow us to delay loading json data unless search activated
var list = document.getElementById('searchResults'); // targets the <ul>
var first, last; // updated dynamically when search results are loaded
var maininput = document.getElementById('searchInput'); // input box for search
var resultsAvailable = false; // Did we get any search results?

maininput.focus();
loadSearch();

// add microblog https://notes.tomcritchlow.com/archive/index.json
// add arena channels?

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 40 && resultsAvailable) { // DOWN (40)
    event.preventDefault();
    if (document.activeElement === maininput) first.focus();
    else if (document.activeElement === last) last.focus();
    else document.activeElement.parentElement.nextSibling.firstElementChild.focus();
  } else if (event.keyCode == 38 && resultsAvailable) { // UP (38)
    event.preventDefault();
    if (document.activeElement === maininput) maininput.focus();
    else if (document.activeElement === first) maininput.focus();
    else document.activeElement.parentElement.previousSibling.firstElementChild.focus();
  }
});

// ==========================================
// execute search as each character is typed
//
document.getElementById("searchInput").onkeyup = function (e) {
  executeSearch(this.value);
};

// ==========================================
// fetch some json without jquery
//
function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

// ==========================================
// load our search index, only executed once
//
function loadSearch() {
  fetchJSONFile('https://tomcritchlow.com/index.json', function (data) {
    var options = {
      shouldSort: true,
      ignoreLocation: true,
      distance: 5000,
      threshold: 0.6,
      fieldNormWeight: 2.0,
      minMatchCharLength: 2,
      keys: ['title', 'url', 'content']
    };
    fuse = new Fuse(data, options); // build the index from the json file
  });
}

// ==========================================
// using the index we loaded, run a search query
//
function executeSearch(term) {
  let results = fuse.search(term); // the actual query being run using fuse.js
  let searchitems = ''; // our results bucket

  if (results.length === 0) {
    resultsAvailable = false;
    searchitems = '';
  } else {
    results.slice(0, 10).forEach(result => {
      let item = result.item; // Extract the item from the result
      let date = item.date ? item.date : "";
      searchitems += `
        <div class="f5 pv2 overflow-hidden bg-animate hover-bg-near-white pointer">
          <a href="${item.url}" tabindex="0" class="link black dim">
            <span>
              <strong>${item.title}</strong> <span>${date}</span><br>
              <em class="f6">${item.content.substring(0, 200)}</em>
            </span>
          </a>
        </div>`;
    });
    resultsAvailable = true;
  }

  list.innerHTML = searchitems;
  list.style.display = "block";

  if (results.length > 0) {
    first = list.firstChild.querySelector('a');
    last = list.lastChild.querySelector('a');
  }
}
