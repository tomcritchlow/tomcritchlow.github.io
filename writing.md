---
layout: page
title: Latest Writing
---

*Subscribe: [via email](https://tinyletter.com/tomcritchlow) / [via RSS](https://tomcritchlow.com/feed)*

<details class="pv4">
<summary class="pointer"><strong>Start Here</strong></summary>

<div class="flex-l f5 pt4">

<div class="w-100 w-50-l pr3-l">

  <div class="bb b--newgreen ibmplexmono ttu f5">Independent Consulting</div>
  <ul>
    <li><a class="link" href="https://tomcritchlow.com/2019/04/04/the-strategic-independent/">The Strategic Independent</a></li>
    <li><a class="link" href="https://tomcritchlow.com/2018/10/29/ways-of-seeing/">Ways of Seeing</a></li>
    <li><a class="link" href="https://tomcritchlow.com/2021/01/26/kairos/">Chronos & Kairos</a></li>
    <li>Blogchain: <a class="link" href="https://tomcritchlow.com/blogchains/on-the-road/">On the Road</a></li>
  </ul>

  <div class="bb b--newgreen ibmplexmono ttu f5">Blogging</div>
  <ul>
    <li><a class="link" href="https://tomcritchlow.com/2018/02/23/small-b-blogging/">Small b blogging</a></li>
    <li><a class="link" href="https://tomcritchlow.com/2019/05/17/blogpunk/">Blogpunk</a></li>
    <li><a class="link" href="https://tomcritchlow.com/2020/12/17/side-notes/">Filtered for... margin notes</a></li>
    <li><a class="link" href="https://tomcritchlow.com/2020/07/23/thinking-in-public/">Thinking in Public</a></li>
    <li>Blogchain: <a class="link" href="https://tomcritchlow.com/blogchains/digital-gardens/">Digital Gardens</a></li>
  </ul>  

  

</div>

<div class="w-100 w-50-l pl3-l">

  <div class="bb b--newgreen ibmplexmono ttu f5">Content & Media</div>
  <ul>
    <li><a class="link" href="https://tomcritchlow.com/2020/02/20/narrative-strategy/">Narrative Strategy</a></li>
    <li><a class="link" href="https://tomcritchlow.com/2019/10/22/brand-worlding/">Understanding Marketing Realities</a></li>
    <li><a class="link" href="https://tomcritchlow.com/2017/10/03/how-do-you-measure-good-content/">How do you measure good content?</a></li>
    <li><a class="link" href="https://tomcritchlow.com/2017/04/20/context-collapse/">Context Collapse, Brands & Content</a></li>
  </ul>  

  <div class="bb b--newgreen ibmplexmono ttu f5">Digital Bricolage</div>
  <ul>
    <li><a class="link" href="https://tomcritchlow.com/2021/01/14/new-browsers/">Why Can't I Code In My Browser?</a></li>
    <li><a class="link" href="https://tomcritchlow.com/2021/03/29/open-scraping-database/">Notes on an Open Scraping Database</a></li>
    <li><a class="link" href="https://tomcritchlow.com/2020/04/15/library-json/">Library JSON - A Proposal for a Decentralized Goodreads</a></li>
  </ul>  

</div>
</div>
</details>

{% for post in site.posts  %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

{% if forloop.first %}
<h2 id="{{ this_year }}-ref">{{this_year}}</h2>

{% endif %}

{% if post.draft == true %}
{% else %}
<div class="pv2">
{% if post.reply %}<img class="dib h2 v-mid" style="padding-top:0px;padding-bottom:0px" src="https://img.icons8.com/cute-clipart/64/000000/response.png"/>{% endif %}<span class="f6 ttu black-50 pv3">{{ post.date | date: "%-d %B %Y" }}</span><a href="{{ post.url }}">{{ post.title }}</a> <span class="ttu f6 red">{% for tag in post.tags %}{{tag}} {% endfor %}</span><span class="black-50 f6"  data-page-id="http://tomcritchlow.com{{post.url}}"><a id="commentolink" href="{{ post.url }}#commento"></a></span>
<br></div>
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
