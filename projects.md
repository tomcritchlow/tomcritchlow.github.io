---
layout: blog
title: Projects
subtitle: Some things I'm proud of...
---

{% for project in site.projects %}
{% assign loopindex = forloop.index | modulo: 2 %}
{% if loopindex == 1 %}
{% assign evenodd = 'projecteven' %}
{% else %}
{% assign evenodd = '' %}
{% endif %}
<div class="projectcontainer">
<div class="projectdiv {{evenodd}}">
<img src="{{project.heroimage}}" />
</div>
</div>

{% endfor %}

To see what I'm up to right now check out my [/now](/now) page
