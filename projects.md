---
layout: blog
title: Projects
---

Some projects I've worked on over the years...

{% for project in site.projects %}

<a href="{{project.url}}"><div class="projectbox"><div class="projecttitle">{{project.title}}</div>
    <img src="{{project.heroimage}}" />
</div></a>


{% endfor %}
