---
title: Using Bookmarklets to Script Static Sites
subtitle: Auto-generating text snippets using a little javascript and bookmarklet magic
layout: blog
---

I've been tending to my digital garden / wiki recently. See my other post on [using Screenotate to power my screenshot->wiki workflow](https://tomcritchlow.com/2019/06/19/screenotate-wiki/).

But I found that I've been saving too many links to my wiki without any context. I was finding the links while in some other context and wanting a quick way to dump the link into my wiki. The challenge became - how to quickly add context to the link I'm dropping in?

The way I'm solving this is by experimenting with upgrading my workflow by using bookmarklets to make it easy to "script" workflows. I run this blog on Jekyll and Github Pages so it's entirely static, but that doesn't mean my workflow has to be.

So I wrote a little javascript:

<script src="https://gist.github.com/tomcritchlow/92ec5f069b5b9bc35cf1fbd7dcbefd1d.js"></script>

And turned it into a bookmarklet here (drag this link to your bookmarks bar):]

[Quote text](javascript:(function()%7Bfunction%20getSelectionText()%20%7Bvar%20text%20%3D%20%22%22%3Bif%20(window.getSelection)%20%7Btext%20%3D%20window.getSelection().toString()%3B%7D%20else%20if%20(document.selection%20%26%26%20document.selection.type%20!%3D%20%22Control%22)%20%7Btext%20%3D%20document.selection.createRange().text%3B%7Dreturn%20text%3B%7Dfunction%20blogquote()%20%7Bvar%20title%20%3D%20document.title%3Bvar%20url%20%3D%20document.location%3Bvar%20host%20%3D%20location.hostname%3Bvar%20quote%20%3D%20getSelectionText()%3Bvar%20mdfile%20%3D%20%22%3E%22%2Bquote%2B%22%5Cn%5Cnsource%3A%20%5B%22%2Btitle%2B%22%5D(%22%2Burl%2B%22)%22%3Bprompt(%22copy%22%2Cmdfile)%3B%7Dblogquote()%7D)())

When you're on a page you select the text you want to quote and hit the bookmarklet. It'll grab the text and spit out some markdown for you to copy like this:

```
>quoted text here

Source: [title of page](url of page)
```

Which renders in markdown like this:

>quoted text here

Source: [title of page](url)

--

Yes, for now you need to hit cmd+c to copy the text because I was too lazy to auto-copy the text to my clipboard... But for now this is already making it easier to drop links into my wiki while preserving some context via a quote and the title of the page.

What would you like to script for your static site? Let me know and I'll try and help you build a bookmarklet for it!

*By the way - this technique is great for more structured data too. I have a bookmarklet that is powering [this books list](https://tomcritchlow.com/wiki/books/books-read/) too. You run it on an Amazon page and it spits out the necessary Markdown frontmatter to add to my page in a structured way.*

--

*Update 8/20/19 - A few posts that came across my stream that extend this idea. Firstly this that walks through a full end to end publish experience: [indieweb link sharing](https://mxb.dev/blog/indieweb-link-sharing/) and this that seems to predate mine [Saving Links to My Site With a Bookmarklet](https://timkadlec.com/remembers/2018-02-06-saving-links-to-my-site-with-a-bookmarklet/).*