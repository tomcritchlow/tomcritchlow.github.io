---
layout: page
title: Latest Writing
---
{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}


{% for post in site.posts %}

  <div class="posttitle">{{post.title}}</div>

{% if post.subtitle %}
<div class='subtitle'>{{post.subtitle}}</div>
  {% endif %}

{% if post.date %}
<div class="dateline">{{ post.date | date: "%B %-d, %Y" }}</div>
  {% endif %}

<hr>

{% endfor %}