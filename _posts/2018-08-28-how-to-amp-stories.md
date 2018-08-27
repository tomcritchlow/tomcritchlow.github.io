---
layout: blog
title: How to make AMP stories using Jekyll and Github Pages
subtitle: Tap tap tap
draft: true
---

The tappable web is an interesting place. Ever since Robin Sloan debuted Fish: a Tap Essay in 2012 I've been curious of the power and mystery of unfolding storytelling.

Of course, these days discussion of tappable stories is dominated by Instagram. The Instagram stories format is, perhaps, the fastest growing media format of all time?

There are a handful of other story formats floating around for example:

- Twitter moments ([example](https://twitter.com/i/moments/1034070233189892096?lang=en))
- Instagram stories ([example](https://www.instagram.com/stories/highlights/17907535984221261/))
- Giphy stories ([example](https://giphy.com/stories/cat-puns-1579651e-a258))
- Medium series ([example](https://medium.com/series/the-best-story-in-global-health-d5442f7aee12)) (*ironically these are user-hostile on mobile, forcing you to read them on desktop or in the native app....*)

And, the origin of all this - Robin Sloan's fish essay - recently got re-mastered! I strongly encourage you to check it out: [https://www.robinsloan.com/fish/](https://www.robinsloan.com/fish/)

## AMP Stories

To date, none of the tappable story implementations have worked well on the web but the closest I think is [AMP stories](https://www.ampproject.org/stories/). Until recently they were highly experimental and you had to get your domain whitelisted by Google to try them. But AMP stories just reached V1.0 and is now available for everyone.

So I thought I'd play around!

I should say before I go further that I have some reservations about AMP stories. Namely:

- I'm wary of AMP generally. I think the end result of AMP speeding up the web is a GOOD THING, but the centralization and move away from the open web is troubling for me.
- AMP stories are still kind of clunky. No swiping to advance. They're just not as performant or smooth as native Instagram stories.
- Google's mishandling of cache problems and URL linking demonstrates a poor understanding of the web generally.

But! I think they're going to get more attention and they're the best there is right now for building web-stories. So let's play around and have some fun!

## How do you build a CMS for tappable stories?

As I began thinking about making AMP stories and building some kind of generator for them I began to study the "CMS" of Instagram stories and marvelled both at the depth and complexity of it and how much is hidden beneath the surface. It's an incredibly powerful platform that generates a huge array of types of stories without feeling burdensome.

For those that want a little more theory and noodling on web-based stories you should definitely check out Stephanie and Bryan Rieger's explorations building hopscotch with Mozilla:

[Rethinking the creative web: Our journey to reimagine ‘web publishing’ for the social web](https://medium.com/twill/rethinking-the-creative-web-our-journey-to-reimagine-web-publishing-for-the-social-web-26c2f347fcd0)

And for a more code-focused approach the team at Mic developed an open format called story-json that is designed to allow content to exist across multiple "story" platforms. I don't think it's actively maintained but it's an interesting attempt at abstraction:

[Introducing a cross-platform format for tap-through stories](https://medium.com/readme-mic/introducing-a-cross-platform-format-for-tap-through-stories-59bdbd3ad863)

Ultimately, I decided that I'd go for an MVP - a bare bones generator that I could extend and play with...

## Copy my code github!

Warning - there be dragons ahead! Badly coded dragons... I'm not a developer or a designer so you'll see this whole thing is a little rough around the edges.

This blog is hosted on Github pages using the Jekyll language. It's a markdown heavy format but allows for liquid templating and while I thought about generating AMP stories using content blocks I decided using the frontmatter was a simpler approach.

So first I created an ampstory.html layout file:

![](/images/ampcode2.png)

[View the file on Github](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/_layouts/ampstory.html)

And then everything is done in the front matter of a story file like this:

![](/images/ampcode.png)

[View a sample story file here](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/_stories/space.md)

Instructions are as follows:

The cover takes the following fields:

- "title:" which is the main story title
- "subtitle:" which is the subtitle
- "background:" which takes an image URL and makes a full screen background image

Then every page object works like this:

- "Layout: thirds" divides the page into three horizontal rows of equal height to place HTML inside.
- "Layout: vertical" allows for "stacking" of content but it's not very sophisticated. Right now I've set it up to have a top, image and bottom defined with the image taking up most of the page and full width. It's crude but allows for in-line images.
- "background" takes an image URL and makes a full screen image background for the page
- "cta" takes two children, link and text which go to the link URL and the anchor text
- "textcolor:" which allows you to change the text color on the page to something other than default white
- "backgroundblur:" when set to true it adds a filter:blur(2px) brightnesss(90%) to the background image

Two important notes: jekyll frontmatter supports emojis and amp stories support gifs. 🔥

You'll see that this is pretty crude and easily extensible. For more of an idea of what is possible take a look at [CNN's AMP stories](https://www.cnn.com/ampstories/).

## Here's a few example stories I made:

So! With all of that out of the way - what have I been playing around with? Here's a few fun little stories I've been using to test out the functionality:

[Amazing Space Colony Art from the 1970s](https://tomcritchlow.com/stories/space/) - ([see the file on github](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/_stories/space.md))

[Why you should read the left hand of darkness by Ursula K Leguin](https://tomcritchlow.com/stories/left-hand-darkness/) - ([see the file on github](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/_stories/left-hand-darkness.md))

[Hoop loops - fun basketball gifs](https://tomcritchlow.com/stories/nba/) - ([see the file on github](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/_stories/nba.md))



## Where next?

In summary - I think AMP stories have a long way to go before they feel anywhere near as fluid and fun as Instagram stories. But I'm confident that Google (or someone!) will figure out tappable stories for the web and when they do.... let the fun commence!

One feature that is especially lacking right now is links (oh the irony of struggling to add links to an open-web format!). But I'm excited that as of 5 days ago this project is being worked on to function much more like Instagram stories with a double-tap UI: [https://github.com/ampproject/amphtml/issues/16521](https://github.com/ampproject/amphtml/issues/16521).

If you make anything 
@ me on twitter (@tomcritchlow) or lea