---
layout: blog
title: Projects
---

Some projects I've worked on over the years...

{% for project in site.projects %}

<div class="projectbox"><div class="projecttitle">{{project.title}}</div><img src="{{project.heroimage}}" /></div>


{% endfor %}
