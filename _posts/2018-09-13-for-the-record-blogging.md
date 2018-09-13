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

In-line editing

Pocket integration

Talk integration - It's a little much to expect this project to single handedly solve all of the ills of the indie web but Mozilla already has [Talk from the Coral Project](https://coralproject.net/talk/) which aims to solve commenting for the web. Some form of integration here would make perfect sense!

Siteleaf and CMS+markdown - the secret success here is that actually this would be *two* tools. A CMS for editing markdown files AND a hosting & distribution platform. For power users you'd still be able to use this tool to edit and maintain markdown files even if you were syncing the files and publishing them to a 3rd party service (e.g. S3 or Github etc). This model is inspired by Siteleaf.

Every time you publish - saving a copy of the file locally. Publishing in triplicate by default.

Jekyll & markdown on the backend for simple exporting to github or self-hosting later.


## Why this makes sense for Mozilla

Above and beyond the support and service of the core mission I believe this would be a smart bet for Mozilla - driving support of firefox login (on desktop and mobile!) and integrating perfectly with Pocket.

What do you think? And if Mozilla isn't going to build this. Who will?

(PS - if you think this idea is nuts, wait till you hear the expanded version of this pitch that includes Mozilla acquiring Tumblr....)

