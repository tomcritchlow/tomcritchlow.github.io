---
layout: page
title: Latest Writing
---

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for post in site.posts %}

{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}

{% if posttime < nowunix %}

<div class="pv4">

<h3 class="mv0"><a class="no-underline tcblack" href="{{post.url}}">{{post.title}}</a></h2>

{% if post.subtitle %}

<h4 class="mv0 fw3"><a class="no-underline tcblack" href="{{post.url}}">{{post.subtitle}}</a></h3>

{% endif %}

<span class="f5 f6-s ttu black-20 pv3">{{ post.date | date_to_string }} | <span class="disqus-comment-count" data-disqus-url="http://tomcritchlow.com{{post.url}}">Comments</span> </span>

<p><a class="no-underline tcblack" href="{{post.url}}">Read more &#10239;</a></p>

</div>

{% endif %}
{% endfor %}

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>
