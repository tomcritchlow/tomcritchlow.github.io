---
layout: blog-sidebar-nav
title: Notes
---

My notes are hosted on Microblog. I'm [@tomcritchlow](https://micro.blog/tomcritchlow). See the [archive here](https://notes.tomcritchlow.com/archive/).

<div id="microblog"></div>

<script type="text/javascript" src="https://micro.blog/sidebar.js?username=tomcritchlow&count=100"></script>

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
    });

</script>

<style>
/* CSS rules for the micro.blog sidebar.js content */

/* This is for the whole feed. */
.microblog_timeline {
  margin: 0 auto;
  max-width: 800px;
  width: 90%
}

/* This is for individual posts. */
.microblog_post {
  background-color: #fff;
  box-shadow: 0 10px 25px 0 #e8e8e8;
  font-size: larger;
  margin: 2.5em 0;
  padding: 0.1em 1em 1em 1em;
}

/* This is for images in individual posts. */
.microblog_text > p > a > img {
  width: 100%;
}

/* This is for the timestamp. */
.microblog_time {
  background-color: #373fff;
  color: #fff;
  float: right;
  font-size: small;
  padding: 5px 10px;
}
</style>