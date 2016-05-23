---
layout: blog
title: Links I Find Interesting
---

<div class="blogcontent linkscontainer">

{% for link in site.links %}

<div class="linksblock">
<p>
{{link.link}} - <span>{{link.date}} <i class="fa fa-link" aria-hidden="true"></i></span>   
{% if link.quote %}
<blockquote>
{{link.quote}}
</blockquote>
{% endif %}

</p>


</div>
<hr>

{% endfor %}

</div>

