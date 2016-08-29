---
layout: page
title: Latest Writing
---

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}


{% for post in site.posts %}

  <a href="{{post.url}}"><div class="posttitle">{{post.title}}</div>

{% if post.subtitle %}
<div class='subtitle'>{{post.subtitle}}</div>
  {% endif %}

{% if post.date %}
<div class="dateline">{{ post.date | date: "%B %-d, %Y" }}</div>
  {% endif %}</a>

  <a href="{{post.url}}#disqus_thread">Comments</a>

<hr>

{% endfor %}