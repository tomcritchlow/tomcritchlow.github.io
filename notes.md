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
        var my_awesome_script = document.createElement('script');
        my_awesome_script.setAttribute('src','https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js');
        document.head.appendChild(my_awesome_script);
    });

</script>