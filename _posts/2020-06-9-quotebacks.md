---
title: "Introducing: Quotebacks"
subtitle: A chrome extension to quote the web
layout: blog
---

Networked writing (aka *blogging*) has become increasingly important as a part of my identity. It's the framework for creating lifelong friendships, finding rewarding client work and experimenting with ideas as a personal creative outlet.

So, [Toby Shorin](https://subpixel.space/) and I have created a small tool called **Quotebacks**. The ultimate goal is to encourage and activate a deeper cross-blogger discussion space. To promote diverse voices and encourage *networked writing* to flourish.

But, while that's a lofty goal the tool is small and simple. Quotebacks is three things:

1. A web-native citation standard and quoting UX pattern
2. A tiny library, ```quoteback.js```, that converts HTML ```<blockquote>``` tags into elegant interactive webcomponents
3. A browser extension to create quoteback components and store any quotes you save to publish later.

Saving a quote from the web looks like this:

![](/images/quotebacks-popup.png)

And your quote library looks like this (saved in chrome storage):

![](/images/quotebacks-library.png)

And this is a quoteback embedded on my blog:

<blockquote class="quoteback" data-title="A Text Renaissance" data-author="@ribbonfarm" cite="https://www.ribbonfarm.com/2020/02/24/a-text-renaissance/">
The text renaissance is an actual <em>renaissance. </em>It’s a story of history-inspired renewal in a very fundamental way: exciting recent developments are due in part to a new generation of young product visionaries circling back to the early history of digital text, rediscovering old, abandoned ideas, and reimagining the bleeding edge in terms of the unexplored adjacent possible of the 80s and 90s.
<footer>@ribbonfarm <cite><a href="https://www.ribbonfarm.com/2020/02/24/a-text-renaissance/">https://www.ribbonfarm.com/2020/02/24/a-text-renaissance/</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

Note how the quote becomes nicely styled - but also preserves the context of where I found it in a predictable way.

[Install Quotebacks in the chrome store here](https://chrome.google.com/webstore/detail/quotebacks-quote-the-web/makakhdegdcmmbbhepafcghpdkbemach/) or find out more at [quotebacks.net](https://quotebacks.net/).

*And by the way Quotebacks can be useful even if you're not a blogger - quotes can be exported as images (for e.g. substack) and markdown (for e.g. Roam)*

## Why Quotebacks

I publish this site using Jekyll - a static site templating language. That's important because it's very extensible - there's no database so everything becomes text files that I can open, manipulate and tinker with. As the web increasingly gets dominated by the large platforms we see a retreat from software (and web pages) that you can tinker with[^viewsource].

[^viewsource]: Have you tried view source on Twitter or Facebook recently?

So - while Toby and I are not professional developers - it's rewarding to build something that we want to use ourselves and release it back into the community. As Mandy Brown says:

<blockquote class="quoteback" data-title="Index cards" data-author="Mandy Brown" cite="https://aworkinglibrary.com/writing/index-cards">
Fuck that. I’m more of an editor than a developer any day, but I’ll be damned if I’m going to cede that territory. I don’t want to pour my words into a box, the parameters of which someone else decides (and obscures). I want to make the box, too. And remake it. And, hell, break it from time to time. It’s mine to break.
<footer>Mandy Brown <cite><a href="https://aworkinglibrary.com/writing/index-cards">https://aworkinglibrary.com/writing/index-cards</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

This is our first public release so I'm sure there will be bugs. Hopefully we'll squash them together.

*Thank you to early beta testers. In particular [Sonya Mann](https://www.sonyasupposedly.com/) & [CJ Eller](https://blog.cjeller.site/).*

