---
layout: blog
title: Links I Find Interesting
subtitle: A constantly updated stream of things I'm reading and find fascinating. 
---

<div class="blogcontent linkscontainer">

{% for link in site.links %}
<hr>
<div class="linksblock">
<p>
{{link.link}} - <span>{{link.date | date_to_string}} <a href="{{link.url}}"><i class="fa fa-link" aria-hidden="true"></i></a></span>   
{% if link.quote %}
<blockquote>
{{link.quote}}
</blockquote>
{% endif %}

</p>


</div>


{% endfor %}

</div>

