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