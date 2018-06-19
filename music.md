---
layout: page
title: Music I like
---


{% assign postsByYearMonth = site.music | group_by_exp:"music", "music.date | date: '%Y %b'"  %}
{% for yearMonth in postsByYearMonth %}
<h3>{{ yearMonth.name }}</h3>

<article>
  <h2 class="f3 fw4 pa3 mv0">Albums</h2>
{% for post in yearMonth.items %}
  <div class="cf pa2">
    <div class="fl w-50 w-25-m w-20-l pa2">
      <a href="{{post.href}}" class="db link dim tc">
        <img src="{{post.art}}" alt="Frank Ocean Blonde Album Cover" class="w-100 db outline black-10"/>
        <dl class="mt2 f6 lh-copy">
          <dt class="clip">Title</dt>
          <dd class="ml0 black truncate w-100">{{post.title}}</dd>
          <dt class="clip">Artist</dt>
          <dd class="ml0 gray truncate w-100">{{post.artist}}</dd>
        </dl>
      </a>
    </div>
{% endfor %}

  </div>
</article>


{% endfor %}



https://tachyons.io/components/collections/albums/index.html

<article>
  <h2 class="f3 fw4 pa3 mv0">Albums</h2>
  <div class="cf pa2">
    <div class="fl w-50 w-25-m w-20-l pa2">
      <a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music" class="db link dim tc">
        <img src="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png" alt="Frank Ocean Blonde Album Cover" class="w-100 db outline black-10"/>
        <dl class="mt2 f6 lh-copy">
          <dt class="clip">Title</dt>
          <dd class="ml0 black truncate w-100">Blonde</dd>
          <dt class="clip">Artist</dt>
          <dd class="ml0 gray truncate w-100">Frank Ocean</dd>
        </dl>
      </a>
    </div>
  </div>
</article>

