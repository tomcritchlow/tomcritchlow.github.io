---
layout: page
title: Latest Writing
---

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for post in site.posts %}

{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}

{% if posttime < nowunix %}

## [ {{ post.title }} ]({{ post.url }})

{% if post.subtitle %}

### {{post.subtitle}}

{% endif %}

<span class="date">{{ post.date | date_to_string }}</span>


{{post.excerpt}}



{% endif %}
{% endfor %}