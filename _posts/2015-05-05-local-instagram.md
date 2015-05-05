---
layout: blog
title: Building a feed of Instagram photos near where I live.
---

One of the most rewarding habits I try to cultivate is to look more closely at the world around me. Paying attention to the world and the self as I walk through the world. This quote from Italo Calvino eloquently illustrates the point that most people learn blindness as a defense: 

> *There are two ways to escape suffering [the inferno of living]. The first is easy for many: accept the inferno and become such a part of it that you can no longer see it.* - Italo Calvino

So I built a lens. A digital tool that lets me look at the world around me in a new way. It's something that Instagram doesn't offer natively - a feed of images taken around me. I'm not interested in building out a full app and hitting rate limits so I just built this for myself. It's a feed of instagram photos taken within 400 yards of where I live which includes parts or Boerum Hill and Gowanus in Brooklyn. 

What do we learn from looking at the world around us? It turns out that you learn a lot - this feed looks very different from my curated filter bubble that is my traditional Instagram feed...

![Instagram images from the Boerum Hill / Gowanus area of Brooklyn, NY](/images/instagram.png)

See for yourself here: [tomcritchlow.com/instagram/](/instagram/)

## The plumbing

Behind the scenes, here's how I built it:

Firstly - the data gets pulled into a spreadsheet using Google Scripts ([see the code in a gist here](https://gist.github.com/tomcritchlow/cd369e300bb0a6f4ae2b)).

Then - I publish that spreadsheet ([see it here](https://docs.google.com/spreadsheets/d/1er8KB9DhFaAddMAGekPWlJddcAZQEFuDg58WOpUKI08/pubhtml?gid=0&single=true)).

Lastly - I use tabletop.js to display the data visually ([see the front end code here](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/boerumhill.html)).
