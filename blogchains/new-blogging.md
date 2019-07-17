---
layout: blogchain
title: New Blogging
subtitle: Adventures in new blog formats.
---

Hello world.

For post in posts...

{% assign blogchain = page.path | replace: "blogchains/", "" | remove: ".md" %}

{{page.path | replace: "blogchains/", "" | remove: ".md"}}

{% for post in site.posts  %}
{% if post.blogchain contains blogchain %}
<p>The latest post from this series is: <a href="{{ post.url }}">{{ post.title }}</a> written on {{ post.date | date: "%-d %B %Y" }}.</p>

{% endif %}
{% endfor %}