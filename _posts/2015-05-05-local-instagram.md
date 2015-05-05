---
layout: blog
title: Building a local Instagram feed
---

One of the most rewarding habits I try to cultivate is to look more closely at the world around me. Paying attention. 

> There are two ways to escape suffering [the inferno of living]. The first is easy for many: accept the inferno and become such a part of it that you can no longer see it.

I've built a little thing. Nothing fancy - just some APIs and culture. 

What do we learn from looking at the world around us? How closely do we observe?

![Instagram images from the Boerum Hill area of Brooklyn, NY](/images/instagram.png)

If you're interested - check it out.

The feed of Instagram images tagged with geoloction near Boerum Hill, Brooklyn.

## The plumbing

Behind the scenes, here's how I built it:

Firstly - the data gets pulled into a spreadsheet using Google Scripts ([see the code in a gist here](https://gist.github.com/tomcritchlow/cd369e300bb0a6f4ae2b)).

Then - I publish that spreadsheet ([see it here](https://docs.google.com/spreadsheets/d/1er8KB9DhFaAddMAGekPWlJddcAZQEFuDg58WOpUKI08/pubhtml?gid=0&single=true)).

Lastly - I use tabletop.js to display the data visually ([see the front end code here](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/boerumhill.html)).
