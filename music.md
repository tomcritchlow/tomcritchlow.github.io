---
layout: page
title: Music I like
---

{% for post in site.music  %}
{% capture this_month %}{{ post.date | date: "%M" }}{% endcapture %}
{% capture next_month %}{{ post.previous.date | date: "%M" }}{% endcapture %}

{% if forloop.first %}
<h2 id="{{ this_month }}-ref">{{this_month}}</h2>
<ul>
{% endif %}

<li class="pv2"><a href="{{ post.url }}">{{ post.title }}</a> </li>

{% if forloop.last %}
</ul>
{% else %}
{% if this_month != next_month %}
</ul>
<h2 id="{{ next_month }}-ref">{{next_month}}</h2>
<ul>
{% endif %}
{% endif %}
{% endfor %}


<ul>
{% for link in site.music %}

<li><a href="{{link.href}}">{{link.title}}</a> by {{link.artist}} <span class="fr f5">{% for tag in link.tags %}{{tag}},{% endfor %}</span></li>


{% endfor %}
</ul>

https://tachyons.io/components/collections/albums/index.html