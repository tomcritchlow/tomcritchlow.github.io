---
title: Annotations for the web
layout: blog
draft: true
---

In my post [experiments in networked writing](https://tomcritchlow.com/2018/01/05/networked-writing/) I explored some ideas about how to put the network back in the writing. In particular - the idea that comments are actually the interesting unit of the blog, not the post.

> . The idea that blogs exist within the network is crucial to understanding the medium (the medium is the message - could one say the blogosphere is the blog?).

This has been bubbling in my mind for a long time with no satisfactory way forward but it came up again because of the Augmenting Human Intellect project which is going on right now. It looks like a lot of fun and is very interesting - it's basically a crowd-swarm of in-line commenting on Douglas Engelbart's famous paper Augmenting Human Intellect.

You can read the [background on the project here](https://cogdogblog.com/2019/02/annotating-the-intent/).

And you can see [the paper and annotations live here](http://dougengelbart.org/content/view/138/000/).

Great! Except... it all runs on top of Hypothesis. I know very little about them but it really seems like they're trying very hard to build a robust, long-term utility for the web which is awesome. Except their UI leaves a lot to be desired. Especially on mobile.

So it felt like a good time to take a quick peek at a few common design patterns and think about some ways forward.

## Hypothesis

You can see it for yourself with the JS enabled here:

![](/images/hypothesis-annotations.png)

Play around with it yourself on [this demo page I set up](/annotations-hypothesis/).

Some observations:
- By having the comment "drawer" on the side always present it interferes with the site's UX (on this site for example the arrow to expand the comments overlaps the menu on mobile)
- The close icon overlaps the main site underneath so often on mobile if I click the "close drawer" icon I also hit the logo for the site booting me back to the homepage.
- Features-wise it's likely the most robust with support for groups, threading etc etc.
- Note their [new experimental UI](https://h.readthedocs.io/projects/client/en/latest/publishers/config/#config-settings) is a little cleaner but still doesn't feel like it's pleasureable to use


## Genius

Genius is basically "the other" annotation layer for the web and is sometimes even used by "real" newsrooms. Likely because of the polished UI. You can see it for yourself here.

![](/images/genius-annotations.png)

Play around with it yourself on [this demo page I set  up](/annotations-genius/).

Some observations:

- Overall the flow is much cleaner and clearer here.
- On desktop the "annotate" call to action is in-line but on mobile is a button at the bottom of the screen which just side-steps a bunch of headaches and makes it much easier to use.
- Signup flow is clean.

## Google Docs

While Google docs certainly doesn't feel very web-native and in some ways is pretty web-hostile they have a very robust workflow around commenting. I'd venture to say their commenting UX is best in class. I use it all day every day, on mobile and desktop.

![](/images/gdocs-annotations.png)

Obviously - they have an advantage being a native app rather than a web-page but here's some observations:

- 

I love Hypothesis! It feels robust but their UI leaves a little to be desired. Especially on mobile.

Compare:

Google Docs
Genius
Hypothesis


desktop/mobile UI flows.

What is the future of annotations?

What if twitter built an annotation tool - something to allow you to grab a quote from any web-page and tweet it (with a link back to the in-line document).

https://medium.com/@liza/interactive-marginalia-f39424877d73
https://indieweb.org/marginalia

## Twitter as the annotation layer for the web

QZ has always wanted to do this:

https://gigaom.com/wp-content/uploads/sites/1/2013/08/05_loggedinfull-804x455.png

And now runs like this:

https://twitter.com/fromedome/status/1093648237318336513
