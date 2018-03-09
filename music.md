---
layout: blog
title: Music I like
---


{% for link in site.music %}

{{link.music}} - <a href="https://open.spotify.com/search/albums/{{link.music}}">Spotify</a>


{% endfor %}



