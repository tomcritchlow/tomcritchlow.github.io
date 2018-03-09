---
layout: page
title: Music I like
---

<style>
#musiclinks img{
    padding:0;
    height:1em;
    margin-bottom:-0.125em;
}
    </style>



{% for link in site.music %}

<div class="musiclinks">{{link.music}} <a href="{{link.url}}">#</a> - <a title="Open with Spotify" href="https://open.spotify.com/search/albums/{{link.music}}"><img style="padding:0;height:1em" src="/images/spotify.svg" /></a> | <a title="Open with Google Play Music" href="https://play.google.com/music/listen#/sr/{{link.music}}"><img style="padding:0;height:1em" src="/images/playmusic.svg" /></a> | <a title="Open with Apple Music" href="{{link.music}}"><img style="padding:0;height:1em" src="/images/applemusic.svg" /></a></div>


{% endfor %}
