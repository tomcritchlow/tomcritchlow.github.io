---
layout: page
title: Latest Writing
---

<div class="mw8 center lh-copy f4 postcontainer ph3 ph0-l">
<h1 class="fw1 w-two-thirds pv5">Hi, I'm an independent strategy consultant, art lover and blogger.</h1>
<div class="fl w-20">Projects</div>
<div class="fl w-20"></div>
<div class="fl w-20"></div>
<div class="fl w-20"></div>
<div class="fl w-20"></div>
</div>

<a href="https://tomcritchlow.com/feed.xml"><img class="dib h2 v-mid" src="https://img.icons8.com/color/48/000000/rss.png"/> RSS Feed</a>

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
