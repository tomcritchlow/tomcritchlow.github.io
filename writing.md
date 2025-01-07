---
layout: blog
title: Latest Writing
---

</div>

<script src="/js/fuse.min.js"></script>
<script src="/js/library-search.js"></script>

<style>
  @media (min-width:961px){
.navlinks{
  width:223px;
}

.mainlinks{
  padding-left:223px
}
}

</style>


<div class="w-100 center">

<div class="flex-l relative">

<div class="fixed-l h-100 bg-near-white navlinks br b--black-10 f7 fw6">
<a class="db-l dib items-center ph3  pa2 mv3-l link fw8 f6 br3 newgreen" href="/library">
WRITING
</a>

<a class="db-l dib flex-l items-center mh3 pa2 bg-animate hover-bg-white link black br3 ttu" id="" href="/library/?query=tag%3Amusic">
<i data-feather="music" class="h1 pr3"></i> <span class="navname dn db-l">Start Here</span>
</a>
<a class="db-l dib flex-l items-center mh3 pa2 bg-animate hover-bg-white link black br3 ttu" id="" href="/library/?query=tag%3Abooks">
<i data-feather="book" class="h1 pr3"></i> <span class="navname dn db-l">Topics</span>
</a>
<a class="db-l dib flex-l items-center mh3 pa2 bg-animate hover-bg-white link black br3 ttu" id="" href="/all-links">
<i data-feather="link-2" class="h1 pr3"></i> <span class="navname dn db-l">Map</span>
</a>



<hr class="mh2 mv4 b--black-10 dn db-l">

<div class="dn db-l items-center mh3 pa2 black br3 ttu">
Tags
</div>

<div class="pa3 overflow-x-scroll overflow-auto-l nowrap ws-normal-l">
<span class="dib dn-l">Tags: </span>
{% for tag in tags | limit: 15 %}
{% if tag != null and tag != "" %}
<a href="/library/?query=tag%3A{{tag}}" class="f6 dib pa2 mr2 bg-light-gray newgreen b br2 link">{{tag}}</a>
{% endif %}
{% endfor %}
</div>
</div>

<div class="mainlinks">
Subscribe:
<div class="flex f5">
<div class="w-50 pa3 bg-newgreen-light mr2"><i data-feather="mail" class="h1 pr2 v-mid"></i> <a href="https://newsletter.tomcritchlow.com/" class="link black">Newsletter</a></div>
<div class="w-50 pa3 bg-newgreen-light ml2"><i data-feather="rss" class="h1 pr2 v-mid"></i> <a href="https://tomcritchlow.com/feed" class="link black">RSS</a></div>
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

{% endif %}



{% if forloop.last %}

{% else %}
{% if this_year != next_year %}
<div id="{{ next_year }}-ref" class="b f4 pv2">{{next_year}}</div>

{% endif %}
{% endif %}
{% endfor %}
</div>

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
