---
layout: page
title: reading...
---

<script type="text/javascript" src="/js/tabletop.js"></script>

<script type="text/javascript">
  window.onload = function() { init() };

  var public_spreadsheet_url = '1GKK4XMQrI_rKOAITexedpzojpHNp8xkIwOAp0ygbZ7Q';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true,
                     orderby: 'date',
                     reverse:'true' } )
                     
  }
    
function showInfo(data, tabletop) {
    $("#loading").toggle();
    console.log(data);
    for(i=0; i < data.length; i++){
      $("#links").append("<p><a href='"+data[i].link + "' />" + data[i].link + "</a> - " + data[i].comment + "</p>");
    };
  }
</script>

Things I'm reading:

<span id="loading">Loading... (patience please, fetching from a Google Doc as CMS....)</span>

<div id="links"></div>