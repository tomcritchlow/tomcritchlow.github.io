---
layout: page
title: Maps as Media
subtitle: Following along with the New School course in fall 2018
---

{% for post in site.posts  %}

{% if forloop.first %}
<ul>
{% endif %}

{% if post.tags contains "maps-as-media" %}
{% else %}
<li class="pv2"><a href="{{ post.url }}">{{ post.title }}</a> <span class="f5 f6-s ttu black-20 pv3">{{ page.date | date: "%-d %B %Y" }}</div> <span class="disqus-comment-count" data-disqus-url="http://tomcritchlow.com{{post.url}}">Comments</span></li>
{% endif %}

{% if forloop.last %}
</ul>
{% else %}

{% endfor %}

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>
