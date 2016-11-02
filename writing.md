---
layout: page
title: Latest Writing
---

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for post in site.posts %}

{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}

{% if posttime < nowunix %}

## [ {{ post.title }} ]({{ post.url }})

{% if post.subtitle %}

### {{post.subtitle}}

{% endif %}

<span class="date">Posted on {{ post.date | date_to_string }} | &#128490; <span class="disqus-comment-count" data-disqus-url="{{post.url}}">Comments</span> </span>


{{post.excerpt}}

[Read more &#10239;]({{post.url}})

<hr>

{% endif %}
{% endfor %}

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>
