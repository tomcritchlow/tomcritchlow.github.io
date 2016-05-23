---
layout: blog
title: Links I Find Interesting
---

<div class="blogcontent linkscontainer">

{% for file in site.links %}
{% for link in file.info %}

<div class="linksblock">
<p>
<span>{{link.date}}</span>{{link.link}}<i class="fa fa-link" aria-hidden="true"></i>   
</p>
</div>
{% endfor %}
{% endfor %}

</div>

