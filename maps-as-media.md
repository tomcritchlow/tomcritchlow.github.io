---
layout: page
title: Maps as Media
subtitle: Following along with the New School course in fall 2018
---

Sep - Dec 2018 I'm following along with Shannon Mattern's [Maps as Media](http://www.wordsinspace.net/mapsmedia/fall2018/) course at the New School as a satellite blogger. I'm going to try and write a post weekly to keep up. Here they are: 

{% for post in site.posts  %}

{% if forloop.first %}
<ul>
{% endif %}

{% if post.tags contains "maps-as-media" %}
<li class="pv2"><a href="{{ post.url }}">{{ post.title }}</a> <span class="disqus-comment-count" data-disqus-url="http://tomcritchlow.com{{post.url}}">Comments</span> | <span class="f5 f6-s ttu black-50 pv3">{{ post.date | date: "%-d %B %Y" }}</span> </li>
{% endif %}

{% if forloop.last %}
</ul>
{% endif %}

{% endfor %}

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>
