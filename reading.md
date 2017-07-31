---
layout: page
title: reading...
---

<script type="text/javascript" src="/js/tabletop.js"></script>

<script type="text/javascript">
  window.onload = function() { init() };

  var public_spreadsheet_url = '1GKK4XMQrI_rKOAITexedpzojpHNp8xkIwOAp0ygbZ7Q';

  var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

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
    var datearray = [];
    var month = 42;
    var year = 2017;
    for(i=0; i < data.length; i++){
      var linkdate = new Date(data[i].date);
      var linkmonth = linkdate.getMonth();
      var linkyear = linkdate.getFullYear();
      if (linkyear != year){
        $("#links").append("<h2>"+linkyear+"</h2>");
        var year = linkyear;
      };
      if (linkmonth != month){
        $("#links").append("<h2>"+monthNames[linkmonth]+"</h2>");
        var month = linkmonth;
      };
      $("#links").append("<p><a href='"+data[i].link + "'>" + data[i].link + "</a> - " + data[i].comment + "</p>");
    };
  }
</script>

<span id="loading">Loading... (patience please, fetching from a Google Doc as CMS....)</span>

<div id="links"></div>