---
layout: page
title: Latest Writing
---

{% for post in site.posts  %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

{% if forloop.first %}
<h2 id="{{ this_year }}-ref">{{this_year}}</h2>
<ul>
{% endif %}

<li><a href="{{ post.url }}">{{ post.title }}</a></li>

{% if forloop.last %}
</ul>
{% else %}
    {% if this_year != next_year %}
    </ul>
    <h2 id="{{ next_year }}-ref">{{next_year}}</h2>
    <ul>
    {% endif %}
{% endif %}
{% endfor %}

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

{% for post in site.posts %}

{% capture posttime %}{{post.date | date: '%s'}}{% endcapture %}

{% if posttime < nowunix %}

<div class="pv3">

<h3 class="mv0"><a class="no-underline tcblack" href="{{post.url}}">{{post.title}}</a></h3>

{% if post.subtitle %}

<h4 class="mv0 fw3"><a class="no-underline tcblack" href="{{post.url}}">{{post.subtitle}}</a></h4>

{% endif %}

<span class="f5 f6-s ttu black-20 pv3">{{ post.date | date_to_string }} | <span class="disqus-comment-count" data-disqus-url="http://tomcritchlow.com{{post.url}}">Comments</span> </span>

</div>

{% endif %}
{% endfor %}

<script id="dsq-count-scr" src="//tomcritchlow.disqus.com/count.js" async></script>
