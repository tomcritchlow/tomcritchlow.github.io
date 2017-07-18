---
layout: page
title: Links
subtitle: What I'm reading
---

<script type="text/javascript" src="/js/tabletop.js"></script>

<script type="text/javascript">
  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3RhYdUwnFzRiIXxmVFG7cGX8b-QetzBwcN2kZCZAoA1WojmkTqXEJI4jyY5oUJf1Tw-zGaDkeJdCB/pubhtml';

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