---
layout: page
title: Latest Writing
---

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for post in site.posts %}

{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}

{% if posttime < nowunix %}

## [ {{ post.title }} ]({{ post.url }})

{{ post.date | date_to_string }}

{{ post.content | strip_html | truncatewords:75}}

{{post.exerpt}}



{% endif %}
{% endfor %}