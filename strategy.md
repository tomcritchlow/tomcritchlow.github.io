---
layout: page
title: The Consultant's Grain
subtitle: Theory and practice of running an independent strategy consulting practice.
---

I've spent over 10 years consulting on a wide range of digital projects. The past 4 years I've run my own independent consulting practice. Here's an evolving and growing list of posts I've written on strategy, how to get things done and the emotional rollercoaster of being independent:

{% for post in site.posts  %}

{% if forloop.first %}
<ul>
{% endif %}

{% if post.tags contains "strategy" %}
<li class="pv2"><a href="{{ post.url }}">{{ post.title }}</a> <span class="disqus-comment-count" data-disqus-url="http://tomcritchlow.com{{post.url}}">Comments</span> | <span class="f5 f6-s ttu black-50 pv3">{{ post.date | date: "%-d %B %Y" }}</span> </li>
{% endif %}

{% if forloop.last %}
</ul>
{% endif %}

{% endfor %}

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>
