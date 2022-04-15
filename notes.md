---
layout: blog-sidebar-nav
title: Notes
---

*My notes are hosted on Microblog. I'm [@tomcritchlow](https://micro.blog/tomcritchlow). See the [archive here](https://notes.tomcritchlow.com/archive/).*

<div id="microblog"></div>

<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

<script>

fetch("https://notes.tomcritchlow.com/feed.json")
    .then((response) => {return response.json()})
    .then((data) => {
        for(var i = 0; i <data.items.length; i++){
            var div = document.createElement("div");
            div.innerHTML = `<div class="bt bb b--black-20 pv4"><div class="f6 black-40"><a href="${data.items[i].url}">${data.items[i].date_published}</a></div><div>${data.items[i].content_html}</div></div>`;
            document.getElementById("microblog").appendChild(div);
            //trigger a domcontentloaded to force Quotebacks JS to work
        window.document.dispatchEvent(new Event("DOMContentLoaded", {
            bubbles: true,
            cancelable: true
        }));
        }
                
        console.log(data);
        

    });



</script>