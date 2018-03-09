---
layout: blog
title: Music I like
---


{% for link in site.music %}

{{link.music}} <a href="{{link.url}}">#</a> - <a href="https://open.spotify.com/search/albums/{{link.music}}"><img src="/images/spotify.svg" style="color:#1ED760;height:1em" h /></a> | <a href="https://play.google.com/music/listen#/sr/{{link.music}}">Google</a>


{% endfor %}



ToDO:
- Link to services
- Cookie?
- # link to each URL to share
- 