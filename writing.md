---
layout: blog
title: Latest Writing
---
{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for post in site.posts %}

{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}
{% if posttime < nowunix %}

{{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})

{% endif %}
{% endfor %}

## Writing Elsewhere

[My old Svbtle blog](http://tomcritchlow.svbtle.com/)

<script async src="https://static.medium.com/embed.js"></script><a class="m-profile" data-width="100%" href="https://medium.com/@tomcritchlow">Tom Critchlow</a>

{{ 'now' | date: "%Y" }}