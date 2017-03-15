---
layout: page
title: Latest Writing
---

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for post in site.posts %}

{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}

{% if posttime < nowunix %}

<h1 class=""><a class="no-underline tcblack" href="{{post.url}}">{{post.title}}</a></h1>

{% if post.subtitle %}

### {{post.subtitle}}

{% endif %}

<span class="date">{{ post.date | date_to_string }} | <span class="disqus-comment-count" data-disqus-url="http://tomcritchlow.com{{post.url}}">Comments</span> </span>


{{post.excerpt}}

[Read more &#10239;]({{post.url}})

<hr>

{% endif %}
{% endfor %}

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>
