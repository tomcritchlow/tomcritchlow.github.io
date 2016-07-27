---
layout: page
title: Latest Writing
---
{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for post in site.posts %}

{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}

{% if posttime < nowunix %}

{{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})

<a href="{{post.url}}#disqus_thread">Link</a>

{% endif %}
{% endfor %}

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>