---
layout: blog
title: Projects
subtitle: Some things I'm proud of...
---

{% for project in site.projects %}
{% assign loopindex = forloop.index | modulo: 2 %}
{% if loopindex == 1 %}
{% assign evenodd = '' %}
{% else %}
{% assign evenodd = 'projecteven' %}
{% endif %}
<div class="projectcontainer">
<a href="{{project.link}}"><div class="projectdiv {{evenodd}}">
<img src="{{project.heroimage}}" />
<div class="projecttitle">{{project.title}}<br>
<span>{{project.subtitle}}</span>
</div>
</div></a>
</div>

{% endfor %}

To see what I'm up to right now check out my [/now](/now) page
