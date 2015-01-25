---
layout: page
title: Writing
---

## Latest Writing

{% for post in site.posts %}
{{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
