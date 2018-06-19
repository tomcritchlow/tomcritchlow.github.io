---
layout: page
title: Music I like
---







{% for link in site.music %}

<div class="musiclinks"><a href="{{link.href}}">{{link.title}} by {{link.artist}}</a> - {% for tag in link.tags %}{{tag}},{% endfor %}</div>


{% endfor %}

<!-- todo JS to auto-append the favicon of songlink or spotify etc depending on URL -->