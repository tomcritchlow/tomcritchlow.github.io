---
layout: page
title: Archive
---

## Blog Posts

{% for post in site.posts %}
{{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

## Poetry

{% for poem in site.poetry %}
  [{{poem.title}}]({{poem.url}})
{% endfor %}

{{site.collections}}

{{site.collections[0]}}

{{site.collections[1]}}
