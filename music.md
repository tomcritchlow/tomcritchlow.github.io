---
layout: page
title: Music I like
---






<ul>
{% for link in site.music %}

<li><a href="{{link.href}}">{{link.title}} by {{link.artist}}</a> - {% for tag in link.tags %}{{tag}},{% endfor %}</li>


{% endfor %}
</ul>

<!-- todo JS to auto-append the favicon of songlink or spotify etc depending on URL -->