---
layout: blog
title: A Good Looking Tiddly Theme for Digital Gardens
subtitle: Based on the Krystal theme
blogchain: digital-gardens
---

There's been a ton of energy for digital gardens recently. First this thread blew up:

<blockquote class='twitter-tweet' data-conversation='none'><a href='https://twitter.com/Mappletons/status/1250532315459194880'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>

And then - Anne-Laure started blogging about TiddlyWiki:

- [Getting started with TiddlyWiki: a beginner's tutorial - Ness Labs](https://nesslabs.com/tiddlywiki-beginner-tutorial)
- [How to build a digital garden with TiddlyWiki - Ness Labs](https://nesslabs.com/digital-garden-tiddlywiki)

That inspired me to explore Glitch as a hosting paltform for Tiddly in my last post: 

[TiddlyBlink on Glitch](https://tomcritchlow.com/2020/04/20/tiddlyblink-glitch/)

But the design of TiddlyWiki still bothered me - Anne-Laure figured out a way to make a beautiful looking static-export of her wiki at [mentalnodes.com](https://www.mentalnodes.com/) but I was hungry for a node version[^node] that I could run on Glitch and didn't look terrible.

[^node]: The primary reason for using node is so I can have a wiki I can edit on my phone

## Then I found Krystal

Then someone posted a link to the [Krystal theme](https://github.com/crazko/krystal) by [Roman Veselý](https://romanvesely.com/) and it's (finally!) a nice minimal and pleasing theme for TiddlyWiki (it even looks great on mobile!):

![](/images/krystal-screenshot.png)

**[You can play around with the theme here](https://crazko.github.io/krystal/)**

## Krystal on Glitch

And here's [my reference installation for getting Krystal setup on Glitch](https://glitch.com/~krystal-tiddlywiki):

<!-- Copy and Paste Me -->
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/krystal-tiddlywiki?path=README.md&previewSize=0&sidebarCollapsed=true"
    title="tiddlyblink on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; padding-top:0px; padding-bottom:20px; border: 0;">
  </iframe>
</div>

Huge thanks to Roman for putting this all together - all I did was stick it on Glitch.

I'm going to experiment with using this as my digital garden for a little bit and see how we go.