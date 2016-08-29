---
layout: page
title: Latest Writing
---

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}


{% for post in site.posts %}

<a href="{{post.url}}">

<h2>{{post.title}}</h2>

{% if post.subtitle %}

<div class='subtitle'>{{post.subtitle}}</div>

  {% endif %}

{% if post.date %}

<div class="dateline">{{ post.date | date: "%B %-d, %Y" }}</div>

  {% endif %}

</a>

  <h2><a href="{{post.url}}">Read post</a></h2>

  <a href="{{post.url}}#disqus_thread">Comments</a>

<hr>

{% endfor %}