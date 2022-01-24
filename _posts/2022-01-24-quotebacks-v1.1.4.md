---
title: Quotebacks V1.1.4
subtitle: Tweaks, fixes and full article saving
layout: blog
---

[Quotebacks](https://quotebacks.net/) is a chrome extension for saving quotes and a quasi-standard for making text quoting more interesting. The ultimate ambition is for it to encourage and activate a deeper cross-blogger discussion space. To promote diverse voices and encourage networked writing to flourish.

It's built in collaboration with Toby Shorin and I couldn't agree more with Toby when he says "We're not so good at maintaining it, but it's one of my favorite projects."

Amen to that.

Anyway - we just pushed a new version live in the Chrome store with a few bits and bobs:

## Full Article Saving & Bug Fixing

The chrome extension[^firefox] now saves both the highlighted quote AND the full text from the page you're on. You can toggle between them in a new "article view" in the dashboard (see the link "click me for article view"):

[^firefox]: Firefox will be updated soon when I can figure out how to navigate their approvals process again. Soon hopefully.

![](/images/quotebacks-article-view.png)

We're using readability.js under the hood to extract the full article text so you can save and read it right inside the extension.

In addition - there's a few minor bug fixes, most notably we've tweaked the manifest so it should work for Linux users (hopefully! I don't have a machine to test it on).

[Check out the latest version here](https://chrome.google.com/webstore/detail/quotebacks-quote-the-web/makakhdegdcmmbbhepafcghpdkbemach).

## The Future of Quotebacks?

At this point I think it's fair to assume limited future releases from Toby and I. Everything works pretty well and I'm pleased we got it to this point. Given everything Toby and I have on our plates I think it's unlikely we'll extend Quotebacks into the more ambitious territory of hosting quotes in a centralized database or creating some kind of analytics layer...

I'm going to keep maintaining the extension and you never know - if inspiration strikes I think there's potential for some interesting future directions. But for now let's not expect those any time soon!

But - if you have ideas or suggestions we'd love to hear them. Are you using Quotebacks? What bugs are you finding? What did you wish it could do? Drop us a note.






