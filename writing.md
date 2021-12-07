---
layout: page
title: Latest Writing
---

<h2>Start Here</h2>

<div class="flex">

<div class="w-50-l pr2-l">

  <div class="bb b--newgreen ibmplexmono ttu f5">Consulting</div>
  <ul>
    <li><a class="link">The Contrary Consultant</a></li>
    <li><a class="link">The Contrary Consultant</a></li>
  </ul>

</div>

<div class="w-50-l pr2-l">
</div>
</div>





{% for post in site.posts  %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

{% if forloop.first %}
<h2 id="{{ this_year }}-ref">{{this_year}}</h2>
<ul>
{% endif %}

{% if post.draft == true %}
{% else %}
<li class="pv2">
{% if post.reply %}<img class="dib h2 v-mid" style="padding-top:0px;padding-bottom:0px" src="https://img.icons8.com/cute-clipart/64/000000/response.png"/>{% endif %}<a href="{{ post.url }}">{{ post.title }}</a> <span class="ttu f6 red">{% for tag in post.tags %}{{tag}} {% endfor %}</span>
<br><span class="f6 ttu black-50 pv3">{{ post.date | date: "%-d %B %Y" }}</span><span class="black-50 f6"  data-page-id="http://tomcritchlow.com{{post.url}}"><a id="commentolink" href="{{ post.url }}#commento"></a></span></li>
{% endif %}

{% if forloop.last %}
</ul>
{% else %}
{% if this_year != next_year %}
</ul>
<h2 id="{{ next_year }}-ref">{{next_year}}</h2>
<ul>
{% endif %}
{% endif %}
{% endfor %}


<script>
window.commentoCustomText = function(count) {
  if(count === 0) {
    return "";
  } else if (count === 1) {
    return " | ⚡ 1 comment";
  } else {
    return " | ⚡ "+ count + " comments";
  }
}
</script>
<script src="https://cdn.commento.io/js/count.js" data-custom-text="window.commentoCustomText"></script>
