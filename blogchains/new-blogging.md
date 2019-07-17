---
layout: blogchain
title: New Blogging
subtitle: Adventures in new blog formats.
---

Hello world.

For post in posts...

{{page.path | replace: "/blogchains/", "" | replace: ".md", ""}}

{% for post in site.posts  %}
{% if post.blogchain contains "strategy" %}
<p>The latest post from this series is: <a href="{{ post.url }}">{{ post.title }}</a> written on {{ post.date | date: "%-d %B %Y" }}.</p>
{% break %}
{% endif %}
{% endfor %}