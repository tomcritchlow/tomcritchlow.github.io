---
layout: blog-sidebar-nav
title: Notes
---

My notes are hosted on Microblog. I'm [@tomcritchlow](https://micro.blog/tomcritchlow). See the [archive here](https://notes.tomcritchlow.com/archive/).

<div id="microblog"></div>

<script>

fetch("https://notes.tomcritchlow.com/feed.json")
    .then((response) => {return response.json()})
    .then((data) => {
        for(var i = 0; i <data.items.length; i++){
            var div = document.createElement("div");
            div.innerHTML = `<div>${data.items[i].date_published}</div><div>${data.items[i].content_html}</div>`;
            document.getElementById("microblog").appendChild(div);
        }
        console.log(data);
        
        //trigger a domcontentloaded to force Quotebacks JS to work
        window.document.dispatchEvent(new Event("DOMContentLoaded", {
            bubbles: true,
            cancelable: true
        }));
    });

</script>