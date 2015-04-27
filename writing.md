---
layout: blog
title: Latest Writing
---

{% for post in site.posts %}
{{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

## Writing Elsewhere

[My old Svbtle blog](http://tomcritchlow.svbtle.com/)

<script async src="https://static.medium.com/embed.js"></script><a class="m-profile" data-width="100%" href="https://medium.com/@tomcritchlow">Tom Critchlow</a>
