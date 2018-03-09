---
layout: blog
title: Music I like
---

<style>
svg{
    fill:green;
}
    </style>

{% for link in site.music %}

{{link.music}} <a href="{{link.url}}">#</a> - <a href="https://open.spotify.com/search/albums/{{link.music}}"><img style="height:1em" src="/images/spotify.svg" /></a> | <a href="https://play.google.com/music/listen#/sr/{{link.music}}"><img style="height:1em" src="/images/playmusic.svg" /></a>


{% endfor %}



ToDO:
- Link to services
- Cookie?
- # link to each URL to share
- 