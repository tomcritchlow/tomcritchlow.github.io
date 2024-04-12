---
layout: blog
title: Latest Writing
---

Subscribe:
<div class="flex">
<div class="w-50 pa3 bg-newgreen-light mr2"><i data-feather="mail" class="h1 pr3"></i> <a href="https://newsletter.tomcritchlow.com/" class="link black">Email newsletter</a></div>
<div class="w-50 pa3 bg-newgreen-light ml2"><i data-feather="rss" class="h1 pr3"></i> <a href="https://tomcritchlow.com/feed" class="link black">RSS</a></div>
</div>

{% include streak.html %}

{% for post in site.posts  %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

{% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
{% capture next_month %}{{ post.next.date | date: "%B" }}{% endcapture %}

{% if forloop.first %}
<div id="{{ this_year }}-ref" class="b f4 pv2">{{this_year}}</div>

{% endif %}

{% if post.draft == true %}
{% else %}

{% if forloop.first %}
<div class="f7 ttu black-70 b pt4">{{ this_month }}</div>
{% elsif this_month != next_month %}
<div class="f7 ttu black-70 b pt4">{{ this_month }}</div>
{% endif %}

<div class="flex flex-wrap w-100 pv2 justify-between f5">
  <div class="w-100 w-auto-l">
  <a class="link newgreen b" href="https://tomcritchlow.com{{post.url}}">{{post.title}}</a>
  <br><span class="black-50 i">{{post.subtitle}}</span>
  </div>
  <div class="black-50 f6 tr">{{ post.date | date: "%B %-d, %Y" }}
  <br><span class="black-50 f6"  data-page-id="http://tomcritchlow.com{{post.url}}"><a class="link black-50" id="commentolink" href="{{ post.url }}#commento"></a></span></div>
</div>

<!--
<div class="pv1 f5">{% if post.reply %}<img class="dib h2 v-mid" style="padding-top:0px;padding-bottom:0px" src="https://img.icons8.com/cute-clipart/64/000000/response.png"/> {% endif %}<p class="pv0 mv0"><a href="{{ post.url }}">{{ post.title }}</a> <span class="ttu f6 red">{% for tag in post.tags %}{{tag}} {% endfor %}</span><span class="f5 black-50 i">{{post.subtitle}}</span><span class="black-50 f6"  data-page-id="http://tomcritchlow.com{{post.url}}"><a id="commentolink" href="{{ post.url }}#commento"></a></span></p>
</div>
-->
{% endif %}



{% if forloop.last %}

{% else %}
{% if this_year != next_year %}
<div id="{{ next_year }}-ref" class="b f4 pv2">{{next_year}}</div>

{% endif %}
{% endif %}
{% endfor %}


<script>
window.commentoCustomText = function(count) {
  if(count === 0) {
    return "";
  } else if (count === 1) {
    return "⚡ 1 comment";
  } else {
    return "⚡ "+ count + " comments";
  }
}
</script>
<script src="https://cdn.commento.io/js/count.js" data-custom-text="window.commentoCustomText"></script>
