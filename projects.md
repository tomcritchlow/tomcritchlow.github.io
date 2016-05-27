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
<a href="{{project.url}}"><div class="projectdiv {{evenodd}}">
<img src="{{project.heroimage}}" />
<div class="projecttitle">{{project.title}}<br>
<span>{{project.subtitle}}</span><br><br>
<p class="mobilehidden">Learn more <i class="fa fa-angle-double-right" aria-hidden="true"></i></p>
</div>
</div></a>
</div>

{% endfor %}

To see what I'm up to right now check out my [/now](/now) page
