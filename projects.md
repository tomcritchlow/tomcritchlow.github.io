---
layout: blog
title: Projects
subtitle: Some things I'm proud of...
---

{% for project in site.projects %}

<div class="projectdiv">
<img src="{{project.heroimage}}" />
</div>

<hr>
{% endfor %}

To see what I'm up to right now check out my [/now](/now) page
