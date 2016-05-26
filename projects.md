---
---

{% for project in site.projects %}

<div class="projectbox" style="background: 
  linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ),
  url({{project.heroimage}});">
  <a href="{{project.url}}"><div class="projectinner"></div>
  </a>
  </div>
  <div class="projecttitle">{{project.title}}</div>


{% endfor %}

To see what I'm up to right now check out my [/now](/now) page
