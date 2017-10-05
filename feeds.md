---
layout: page
title: My feeds...
---

<script type="text/javascript" src="/js/tabletop.js"></script>

<script type="text/javascript">
  window.onload = function() { init() };

  var public_spreadsheet_url = '1KOafitsYQJdZyvdywnOLjxz_FI2yVlxw2IXU2XpEAiY';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true,
                     reverse:'true' } )
                     
  };
    
function showInfo(data, tabletop) {
    $("#loading").toggle();
    console.log(data);    
      $("#links").append("<p><a href='"+data[i].url + "'>" + data[i].url + "</a> - " + data[i].title + "</p>");
    };
  
</script>

Things I'm reading:

<span id="loading">Loading... (patience please, fetching from a Google Doc as CMS....)</span>

<div id="links"></div>