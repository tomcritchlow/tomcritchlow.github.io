//
// Originally from Craig Mod here: https://gist.github.com/cmod/5410eae147e4318164258742dd053993
// Lightly customized by Tom Critchlow
//

var fuse; // holds our search engine
var searchVisible = false; 
var firstRun = true; // allow us to delay loading json data unless search activated
var list = document.getElementById('searchResults'); // targets the <ul>
var first = list.firstChild; // first child of search list
var last = list.lastChild; // last child of search list
var maininput = document.getElementById('searchInput'); // input box for search
var resultsAvailable = false; // Did we get any search results?

maininput.focus();
loadSearch();

// add microblog https://notes.tomcritchlow.com/archive/index.json
// add arena channels?

document.addEventListener('keydown', function(event) {

  // DOWN (40) arrow
  if (event.keyCode == 40) {
    if (resultsAvailable) {
      console.log("down");
      event.preventDefault(); // stop window from scrolling
      if ( document.activeElement == maininput) { first.focus(); } // if the currently focused element is the main input --> focus the first <li>
      else if ( document.activeElement == last ) { last.focus(); } // if we're at the bottom, stay there
      else { document.activeElement.parentElement.nextSibling.firstElementChild.focus(); } // otherwise select the next search result
    }
  }

  // UP (38) arrow
  if (event.keyCode == 38) {
    if (resultsAvailable) {
      event.preventDefault(); // stop window from scrolling
      if ( document.activeElement == maininput) { maininput.focus(); } // If we're in the input box, do nothing
      else if ( document.activeElement == first) { maininput.focus(); } // If we're at the first item, go to input box
      else { document.activeElement.parentElement.previousSibling.firstElementChild.focus(); } // Otherwise, select the search result above the current active one
    }
  }
});


// ==========================================
// execute search as each character is typed
//
document.getElementById("searchInput").onkeyup = function(e) { 
  executeSearch(this.value);
}


// ==========================================
// fetch some json without jquery
//
function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
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
// on first call of search box (CMD-/)
//
function loadSearch() { 
  fetchJSONFile('https://tomcritchlow.com/index.json', function(data){

    // I think I should be able to merge site search and microblog search here
    // https://techtutorialsx.com/2020/09/06/javascript-merge-json-objects/
    // https://notes.tomcritchlow.com/archive/index.json
    // https://tomcritchlow.com/index.json
    // reformat my own index file to match microblog and then merge files then search across them

    var options = { // fuse.js options; check fuse.js website for details
      shouldSort: true,
      ignoreLocation: true,
      distance: 5000,
      threshold: 0.6,
      fieldNormWeight: 2.0,
      minMatchCharLength: 2,
      keys: [
        'title',
        'url',
        'content'
        ]
    };
    fuse = new Fuse(data, options); // build the index from the json file
  });
}


// ==========================================
// using the index we loaded on CMD-/, run 
// a search query (for "term") every time a letter is typed
// in the search box
//
function executeSearch(term) {
  let results = fuse.search(term); // the actual query being run using fuse.js
  let searchitems = ''; // our results bucket

  if (results.length === 0) { // no results based on what was typed into the input box
    resultsAvailable = false;
    searchitems = '';
  } else { // build our html 
    for (let item in results.slice(0,10)) { // only show first 5 results
      
      if(results[item].date){ //wiki pages have no date
          var date = results[item].date;
      }else{
        var date = "";
      };
      //searchitems = searchitems + '<li><a href="' + results[item].url + '" tabindex="0">' + '<span class="title"><strong>' + results[item].title + '</strong></span><br /> ' + date + ' — <em>' + results[item].content.substring(0,150) + '</em></a></li>';
      
      searchitems = searchitems + `<div class="f5 pv2">
      <a href="${results[item].url}" tabindex="0" class="link black dim">
      <span>
      <strong>${results[item].title}</strong> <span>${date}</span><br>
      <em class="f6">${results[item].content.substring(0,200)}</em>
      </span></a></div>`;
      
    }
    resultsAvailable = true;
  }

  list.innerHTML = searchitems;
  list.style.display = "block";
  if (results.length > 0) {
    first = list.firstChild.firstElementChild; // first result container — used for checking against keyboard up/down location
    last = list.lastChild.firstElementChild; // last result container — used for checking against keyboard up/down location
  }
}