---
layout: blog
title: Projects
subtitle: Some projects I've worked on over the years...
---

{% for project in site.projects %}

<div class="projectbox" style="background:url({{project.heroimage}});"><a href="{{project.url}}"><div class="projecttitle">{{project.title}}</div><img src="{{project.heroimage}}" /></a></div>


{% endfor %}

To see what I'm up to right now check out my [/now](/now) page
