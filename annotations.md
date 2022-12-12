---
layout: blog-sidebar-nav
title: Annotations
---

*I use Hypothesis to annotate and bookmark websites. You can see my profile here: [@tomcritchlow](https://hypothes.is/users/tomcritchlow)*

<div id="annotations"></div>

<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

<script>
fetch("https://api.hypothes.is/api/search?user=tomcritchlow")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (var i = 0; i < data.rows.length; i++) {
      var quotetext = data?.rows[i]?.target[0]?.selector?.[2]?.exact;
      if(quotetext){
      var div = document.createElement("div");
      div.innerHTML = `<p>${data.rows[i].text}</p>
      <blockquote class="quoteback" data-title="${encodeURIComponent(data.rows[i].document.title)}" data-author="" cite="${data.rows[i].link.incontext}">
      ${data.rows[i].target[0].selector[2].exact}
      <footer></footer>
      </blockquote>`
      document.getElementById("annotations").appendChild(div);  
      }
      
    }
    console.log(data.rows);
    window.document.dispatchEvent(new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: true
    }));
  });
</script>