---
layout: page
title: Writing
---

## Latest Writing

{% for post in site.posts %}
{{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

## Writing Elsewhere

https://medium.com/fiercely-curious/tiny-experiments-in-doing-916768ff6e14
