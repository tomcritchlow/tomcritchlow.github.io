---
layout: blog-sidebar-nav
title: Latest Writing
---

{% include streak.html %}

{% for post in site.posts  %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

{% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
{% capture next_month %}{{ post.next.date | date: "%B" }}{% endcapture %}

{% if forloop.first %}
<h2 id="{{ this_year }}-ref">{{this_year}}</h2>

{% endif %}

{% if post.draft == true %}
{% else %}

{% if forloop.first %}
<div class="f7 ttu black-70 b pt3">{{ this_month }}</div>
{% elsif this_month != next_month %}
<div class="f7 ttu black-70 b pt3">{{ this_month }}</div>
{% endif %}


<div class="pv1 f5">{% if post.reply %}<img class="dib h2 v-mid" style="padding-top:0px;padding-bottom:0px" src="https://img.icons8.com/cute-clipart/64/000000/response.png"/> {% endif %}<p class="pv0 mv0"><a href="{{ post.url }}">{{ post.title }}</a> <span class="ttu f6 red">{% for tag in post.tags %}{{tag}} {% endfor %}</span><span class="f5 black-50 i">{{post.subtitle}}</span><span class="black-50 f6"  data-page-id="http://tomcritchlow.com{{post.url}}"><a id="commentolink" href="{{ post.url }}#commento"></a></span></p>
</div>
{% endif %}

{% if forloop.last %}

{% else %}
{% if this_year != next_year %}

<h2 id="{{ next_year }}-ref">{{next_year}}</h2>

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
