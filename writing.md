---
layout: page
title: Latest Writing
---

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for post in site.posts %}

{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}

{% if posttime < nowunix %}

<h2 class=""><a class="no-underline tcblack" href="{{post.url}}">{{post.title}}</a></h2>

{% if post.subtitle %}

<h3 class=""><a class="no-underline tcblack" href="{{post.url}}">{{post.subtitle}}</a></h2>

{% endif %}

<span class="date">{{ post.date | date_to_string }} | <span class="disqus-comment-count" data-disqus-url="http://tomcritchlow.com{{post.url}}">Comments</span> </span>


{{post.excerpt}}

[Read more &#10239;]({{post.url}})

{% endif %}
{% endfor %}

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>
