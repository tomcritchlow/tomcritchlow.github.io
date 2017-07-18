---
layout: page
title: Links
subtitle: What I'm reading
---

<script type="text/javascript" src="/js/tabletop.js"></script>

<script type="text/javascript">
  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1GKK4XMQrI_rKOAITexedpzojpHNp8xkIwOAp0ygbZ7Q/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true,
                     orderby: 'date',
                     reverse:'true' } )
                     
  }
    
function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
  }
</script>

Hello world.