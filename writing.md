---
layout: page
title: Latest Writing
---
{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for post in site.posts %}

{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}

{% if posttime < nowunix %}

{{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})

{% endif %}
{% endfor %}

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