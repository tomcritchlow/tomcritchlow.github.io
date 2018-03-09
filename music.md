---
layout: blog
title: Music I like
---


{% for link in site.music %}

{{link.music}} <a href="{{link.url}}">#</a> - <a href="https://open.spotify.com/search/albums/{{link.music}}">Spotify</a>


{% endfor %}



ToDO:
- Link to services
- Cookie?
- # link to each URL to share
- 