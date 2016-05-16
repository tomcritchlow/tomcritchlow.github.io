---
layout: blog
title: Projects
---

Some projects I've worked on over the years...

{% for project in site.projects %}

<div class="projectbox"><a href="{{project.url}}"><div class="projecttitle">{{project.title}}</div><img src="{{project.heroimage}}" /></a></div>


{% endfor %}
