---
layout: blog
title: TiddlyBlink on Glitch
subtitle: An "open source" Roam competitor
blogchain: digital-gardens
---

Anne-Laure Le Cunff posted a really great post recently on setting up TiddlyWiki as a self-hosted and open source Roam competitor:

<link rel="stylesheet" href="https://files-lovat-six.now.sh/quote.css" type="text/css">
<div class="portal-container">
<div class="portal-head">
<div class="portal-metadata">
<div class="portal-title">
<div class="portal-author"></div>
<div class="title-wrapper">in <span class="portal-text-title">Getting started with TiddlyWiki: a beginner's tutorial - Ness Labs</span></div>
</div>              
</div>
<div class="portal-backlink"><a target="_blank" href="https://nesslabs.com/tiddlywiki-beginner-tutorial" class="portal-arrow">Go to text <span class="right-arrow">→</span></a></div>
</div>
<div id="portal-parent" class="portal-parent">
<div class="portal-content">If you are looking for an open source alternative to Roam Research, TiddlyWiki is your best bet. Because it’s self-hosted—meaning you keep your data private—it may seem a bit more daunting to get started. So here is a guide which will take you from complete beginner to completely in love with TiddlyWiki in three steps.</div>       
</div>    
</div>

I love how thoroughly the post walks you through the basic mental model and then lays out some great user-friendly approaches to setting up TiddlyWiki. In particular - Anne shows how [TiddlyBlink](https://giffmex.org/gifts/tiddlyblink.html) recreates the bi-directional linking power of Roam right inside TiddlyWiki.

## Glitch to the rescue!

While Anne's post walks through how to self-host or set up a local instance easily none of the web options for TiddlyWiki seemed very satisfying so I went fiddling...

I quickly discovered [this excellent TiddlyWiki reference project on Glitch](https://glitch.com/~nota-bene) from [Thomas Elmiger](https://thomas-elmiger.ch/).

So all I did was remix this project - install TiddlyBlink and hey presto it works out of the box!

<!-- Copy and Paste Me -->
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/tiddlyblink?path=README.md&previewSize=0&sidebarCollapsed=true"
    title="tiddlyblink on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

I've ranted before about the "developer ecosystem" and how almost every coding project starts at the command line so it's no surprise that I really love Glitch[^disclaimer]. Really really love Glitch.

[^disclaimer]: Disclaimer: I did some consulting work for Glitch end of 2019. 

Until recently installing TiddlyWiki on Glitch would be a good proof of concept but slighly unsatisfying as a permanent long term solution for hosting it - their apps felt more like toys than production code. However...

[Glitch just launched monthly pricing](https://glitch.com/pricing) so for $8 / month your apps can become stable and always on.

Magic.

## Next

Ok - so this was fun. TiddlyWiki with bi-directional links just working out of the box. Next I gotta go working on some styling to see if I can get it to look and feel better - something like [Andy's Notes](https://notes.andymatuschak.org/About_these_notes):

![](/images/andy-notes.png)