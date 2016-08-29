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

<div class="postcontainer">
  <div class="posttitle">{{page.title}}</div>

{% if page.subtitle %}
<div class='subtitle'>{{page.subtitle}}</div>
  {% endif %}

{% if page.date %}
<div class="dateline">{{ page.date | date: "%B %-d, %Y" }}</div>
  {% endif %}

{% endfor %}