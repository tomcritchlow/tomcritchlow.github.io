---
layout: blog
title: For the record blogging
subtitle: A sketch of how Mozilla could save us
draft: true
---

The social networks are failing us. Or, at least, we’re realizing we need a “third way”. Not private and not social. Public but intimate. I’ve written a bit more about this philosophy before in my piece [small b blogging](https://tomcritchlow.com/2018/02/23/small-b-blogging/).

But starting, hosting and maintaining your own blog is still too hard.

Medium is the default choice for writing on the web and it does a pretty good job. Except for the fact that it's a flailing VC funded rocketship that's already burning up on re-entry.

Dave Winer posted a few thoughts on the need for a ["for-the-record" blogging solution](http://scripting.com/2018/09/10/161928.html):

> Yesterday I posted a poll on Twitter basically asking if there were a rational not-for-profit place-of-record essay site, would people use it. This is intended as an alternative to Medium, which has received $132 million in investment, and therefore must at some point find a business model, leaving the for-the-recordness of it in question.

While, yes! there are alternatives, they don't get to the core of the problem which is this:

> The great thing about Medium, the thing people like about it, is that they have crafted its design so that getting started isn't even three steps. That's hard to do. If one wants to replicate its functionality start there.

## Blogging is too damn hard

It pains me to see friends (both IRL and friends in the blogosphere) retreat to Medium for their writing. Sometimes they're friends who have years (decades!) of archives on their personal site. Sometimes it's a friend who's starting out writing for the first time.

Medium is not the answer.

And equally - I was browsing someone's site yesterday, hosted on Wordpress, yay! Except it was throwing plugin error messages. Wordpress is still too hard to maintain.

Wordpress is not the answer.

This site is hosted on Github pages and I really like the setup. It's quick and easy for me and stores copies of my blog by default in three places - the web, github and my local machine. In text files I can read. Nice. Except - getting set up requires a github account and "pushing" commits every time I write a post.

Github is not the answer.

The list goes on. Ghost (still tricky to set up). Tumblr (owned by Yahooath!). Squarespace (don't get me started). Svtble (slightly esoteric and overly restrictive but close to the right answer).

## What we need

Here's what I'd like to see:

 - A simple blogging platform that you can "just write" in by signing up
 - Beautiful typography and polished UI out of the box
 - Customization options to ensure not everything looks the same
 - The ability to host on your own domain
 - A commitment to long-term hosting, stability and no ads
 - Some in-built network effects (necessary to actually drive adoption)
 - A commitment to supporting RSS
 - Simple mobile publishing apps

Who on the web has a track record of supporting diverse voices, championing the indie web, delivering products with polished UI and speed while staying true to longevity?

Who on the web owns an identity/login system and a reading-focused social network?

Mozilla!

## A proposal for Mozilla Slab

I think Mozilla would be a great steward for a project like this. I tried my hand at a very simple illustation. Imagine if Mozilla launched Slab - an entry level for-the-record blogging system with in-built hosting, polished UI and the ability to grow out of the platform.

![](/images/mozillaslab.png)

I believe this project would be in-line with the [Mozilla manifesto](https://www.mozilla.org/en-US/about/manifesto/):

> Principle 1 - The internet is an integral part of modern life—a key component in education, communication, collaboration, business, entertainment and society as a whole.

> Principle 3 - The internet must enrich the lives of individual human beings.

> Principle 5 - Individuals must have the ability to shape the internet and their own experiences on it.

> Principle 6 - The effectiveness of the internet as a public resource depends upon [...] decentralized participation worldwide.



## Thinking through the details

There's some things I think you could build into a project like this that would make it sing.

**In-line editing & UI polish** - It's easy to trivialize this but I think it's essential to care about the details of the typography, UI and editing flow. This is not easy. Things like in-line editing. Syncing between devices. Copy and paste handling. Default formatting. These things would be key. Thankfully there are some good examples to follow here - Medium, Ghost, WP Gutenberg etc.

**Markdown & interoperability** - One of the things I *love* about Github pages and markdown is that by default I publish in triplicate. My workflow by design stores a copy of my blog on my local machine, on github and on the web. And not only that but every blog post is stored as a simple markdown file. Easy enough for anyone to read even if you don't know all the specifics of Markdown.

I have a vision for Slab by Mozilla to actually be *two* tools in one. A CMS for hosting, editing and maintaining markdown files AND a hosting service for publishing these as blogs. I think you could even run this whole thing on Jekyll under the hood (with a few pieces abstracted away for beginner users. Imagine a tool like [Siteleaf](https://www.siteleaf.com/) that managed to create a beautiful CMS while also keeping the underlying files readable! Magic.

This simple concept is powerful. And ultimately would allow for an incredibly portable file format. Exporting your site from Slab to your own Jekyll instance or to Wordpress would be simple. While this would add a little complexity to the design of the product on the back end it is central to the Mozilla manifesto "The effectiveness of the internet as a public resource depends upon interoperability (protocols, data formats, content)". 

**Pocket integration** - You'd want some opt-out but integration with Pocket achieves two big things - it builds in a distribution network and it fits Slab into the Mozilla ecosystem. You can't ignore the in built network effects of Medium and it would be critical to build this to ensure people actually switched from Medium to Slab. Support for sharing and reading content either on the web or inside Pocket. Maybe even enabling Pocket analytics by default on every site? I think you could implement a handful of small nudges that would align these two products nicely.

**Talk integration?** - It's a little much to expect this project to single handedly solve all of the ills of the indie web but Mozilla already has [Talk from the Coral Project](https://coralproject.net/talk/) which aims to solve commenting. Some form of integration here would make perfect sense and disqus is on life support at this point (and owned by an adtech company which makes me nervous).

## Why this makes sense for Mozilla

Above and beyond the support and service of the core mission I believe this would be a smart bet for Mozilla - driving support of firefox login (on desktop and mobile!) and integrating perfectly with Pocket.

What do you think? And if Mozilla isn't going to build this. Who will?

(PS - if you think this idea is nuts, wait till you hear the expanded version of this pitch that includes Mozilla acquiring Tumblr....)

