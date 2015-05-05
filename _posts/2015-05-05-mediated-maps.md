---
layout: blog
title: Mediated Maps & Digital Blind Spots
---

What do we learn from looking at the world around us?

I built a tool to look at all the Instagram photos taken near where I live. The feed looks very different from what the stream of photos from my filtered followers suggests....

![Instagram images from the Boerum Hill / Gowanus area of Brooklyn, NY](/images/instagram.png)

Technically it’s just a feed of instagram photos taken within 400 yards of where I live which includes parts or Boerum Hill and Gowanus in Brooklyn, but in reality it’s kitchens, playgrounds and commutes of people who live around me but never show up in the mediated maps of Facebook and Instagram. 

One of the most rewarding habits I try to cultivate is to look more closely at the world around me, but looking is an old habit. I wanted to build a digital tool that lets me look at the world around me in a new way, and give me a new lens.  

See for yourself here: [tomcritchlow.com/instagram/](/instagram/)

This is really just the tip of the iceberg in the broader conversation about how we become human beings on and with and using the internet. You realize that the act of following is also the act of excluding - how can we build new inclusions? Sometimes it’s important to change your filter to think in new ways about how “place”, “people” and “communities” work.

## The plumbing

Behind the scenes, here's how I built it:

Firstly - the data gets pulled into a spreadsheet using Google Scripts and refreshed every 5 minutes ([see the code in a gist here](https://gist.github.com/tomcritchlow/cd369e300bb0a6f4ae2b)).

Then - I publish that spreadsheet ([see it here](https://docs.google.com/spreadsheets/d/1er8KB9DhFaAddMAGekPWlJddcAZQEFuDg58WOpUKI08/pubhtml?gid=0&single=true)).

Lastly - I use tabletop.js to display the last 50 photos visually ([see the front end code here](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/boerumhill.html)).

## Digital Research

A higher resolution map of the spaces we inhabit, whether target audiences or physical neighborhoods, lets us find more opportunity for finding real problems, understanding real lives and engaging with communities in real, meaningful ways.

I’m thinking more closely about research projects - if you’re curious about using digital tools to unearth stories and insights about the real world get in touch. I’d love to talk.

--

Footnote:

There is a certain feeling of overstepping boundaries that comes with gathering people’s photos like this. This is powered by a single Instagram API call from public photos but that sidesteps the fact that most of these photos were not intended to be broadcast to the public but rather to be semi-private to their personal network. As a consequence I doubt I’ll leave this tool running for long (and if you are reading this and want your photo removed please email me and I’ll take it down immediately: tjcritchlow@gmail.com)

--

Thanks to [Brian Dell](http://briandell.info/) for helping me with the initial draft of this post.
