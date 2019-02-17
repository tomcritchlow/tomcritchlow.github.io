---
layout: blog
title: Building a digital garden
subtitle: How I built myself a simple wiki using folders and files and published via Jekyll
draft: true
---

![](/images/digital-garden-cleaned.jpg)

*This post is slightly long and slightly technical. The TL;DR is that I built a personal wiki out of files and folders and a few templates in Jekyll hosted on Github Pages. If you want to head straight to the wiki head here: [tomcritchlow.com/wiki/](https://tomcritchlow.com/wiki/) and if you want to skip straight to the technical how-to [jump here](https://tomcritchlow.com/wiki/drafts/2019-01-15-building-digital-garden/#how-it-all-works)*

For a while I've been searching for better ways of managing my information flows. Catch up by reading my last post [of digital streams, campfires and gardens](https://tomcritchlow.com/2018/10/10/of-gardens-and-wikis/).

I left that post with the following concept:

**Streams** - For me this is twitter and is more than enough stream for now.

**Campfires** - For me this is the blog here (and more broadly the blogosphere that I read and engage with). Room to grow here but generally I'm satisfied here.

**Gardens** - This is where there's a gap for me personally. No place to store and evolve deeper longer-term thinking. Many of my friends have gravitated to [Are.na](https://are.na) but I just can't get it to work for me.

For my personal garden (note: your requirements and needs might be different!) I set out to build something that would focus on stock over flow, be a blogging product without a publish button and create a space for collecting the dots.

Let's break those down one by one:

## Stock over flow

If you're familiar with this blog then the chances are high that you've read this seminal piece from Robin Sloan: [stock and flow](http://snarkmarket.com/2010/4890). Robin lays out (in 2010!) the concept of stock and flow:

> Flow is the feed. It’s the posts and the tweets. It’s the stream of daily and sub-daily updates that reminds people you exist.

> Stock is the durable stuff. It’s the content you produce that’s as interesting in two months (or two years) as it is today. It’s what people discover via search. It’s what spreads slowly but surely, building fans over time.

And is clear not to deride flow - it's the currency of the modern world - but rather to ensure you're well-balanced:

> You can tell that I want you to stop and think about stock here. I feel like we all got really good at flow, really fast. But flow is ephemeral, while stock sticks around. Stock is capital. Stock is protein.

> And the real magic trick is to put them both together. To keep the ball bouncing with your flow—to maintain that open channel of communication—while you work on some kick-ass stock in the background. Sacrifice neither. The hybrid strategy.

Personally? I'm out of balance. I spend too much time in flow and not nearly enough in stock.

## A blog without a publish button

I'm stealing this quote from my modern friend{% include tufte-sn.html id="modern" content="Ryan also has a nice little idea for <a href='https://medium.com/@ryandawidjan/modern-friends-e9ca5b6f855a'>modern friends</a> as being something between internet stranger and 'actual friend'. That's me and Ryan" %} <a href="https://twitter.com/ryandawidjan">Ryan Dawidjan</a> who has been pioneering this concept of open-access writing and blogging without a publish button. For a long time he has maintained a quip file called [high cadence thoughts](https://quip.com/jgBUALiGBjwp) that is open access and serves as a long-running note of his thinking and ideas.

It's a less-performative version of blogging - more of a captain's log than a broadcast blog.

The distinction will come down to how you blog - some people blog in much the same way. For me however blogging is mostly *performative thinking* and less captain's log. So I am looking for a space to nurture, edit in real time and evolve my thinking.

## A space for collecting the dots

This one might be the most important. Creative research is all about collecting the dots. It's more common to think of "connecting the dots" but the truth is that you can't connect the dots you can't see. And we can only hold a tiny number of things in our brains at once. So a space for collecting (and organizing) the dots is a crucial foundation for thinking, creativity and more:

>But ideas aren’t summoned from nowhere: they come from raw material, other ideas or observations about the world. Hence a two-step creative process: collect raw material, then think about it. From this process comes pattern recognition and eventually the insights that form the basis of novel ideas.

This quote from the wonderful piece by Ink and Switch: [capstone, a tablet for thinking](https://www.inkandswitch.com/capstone-manuscript.html){% include tufte-sn.html id="hunch" content="I've not read the book but I think the concept of <a href='https://www.youtube.com/watch?v=0af00UcTO-c'>the slow hunch</a> covers the same ground of collecting the dots and research leading to creative breakthroughs." %}.

## Longevity, text files and folders

The lightbulb moment for me came by connecting two ideas together:

Firstly - apparently, folders and files is the "best in class" tool (better than tags and search) for personal information management{% include tufte-sn.html id="folders" content="This gem came via the Ink and Switch article linked above." %}:

>Bergman and Whittaker report that many of us use hierarchical folders for our personal digital organizing. Critics of this method point out that information is hidden from sight in folders that are often within other folders so that we have to remember the exact location of information to access it. Because of this, information scientists suggest other methods: search, more flexible than navigating folders; tags, which allow multiple categorizations; and group information management. Yet Bergman and Whittaker have found in their pioneering personal information management research that these other methods that work best for public information management don't work as well for personal information management.

[Source](https://mitpress.mit.edu/books/science-managing-our-digital-stuff)

Secondly - I write this blog on Github pages using Jekyll - aka using folders and files!

**So what if I could build the digital garden I want right here using Jekyll using nothing more than folders and text files?**

There are a few benefits:

- Files and folders feels like it has a long shelf-life. If I'm building this for the long-term (and I think I am) then I want a format I can back-up, archive and re-publish in the future independent of platform.
- Using files and folders allows me to drag and drop files into my wiki with zero authoring - CSV, pdf, png and txt files all are hosted and contained gracefully
- It's robust since I can back up this wiki folder to any service, dropbox, Google Drive, Github, etc.

## How it all works

*For those that aren't so interested in the technical details you can skip past this section.*





 from realizing that I could build something out of simple text files (in markdown) and folders. These files and folders ares

The realization that started this project was thinking about publishing in triplicate - an idea I've thought of a few times on the power of my blog. When I publish an article it's published to 

![](/images/wiki-folders.png)

Is published looking something like this:

![](/images/maps-wiki.png)

For those comfortable reading Jekyll code then you can dive right in on Github here: [https://github.com/tomcritchlow/tomcritchlow.github.io](https://github.com/tomcritchlow/tomcritchlow.github.io)

The broad-strokes overview is as follows:

- The wiki folder is made of a series of folders - each one containing any kind of files.
- Markdown files are treated as pages
- Image files are displayed as thumbnails with a link to the image, with the filename displayed to store any kind of title you want
- PDf, CSV, txt files and anything else are displayed with a link to the file.
- The "magic" comes from each wiki folder having an index.html file which handles all of the display by using a custom layout [wikiindex](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/_layouts/wikiindex.html)
- The root wiki page loops through all the files to create a master index automatically. [Code here](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/wiki/index.html).
- Of course, the meat of the wiki is contained in note files which are just markdown files so easily portable. I intentionally designed the wiki to not rely on a ton of front-matter for portability and simplicity. To do this I added a default layout to wiki files in the [config file](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/_config.yml).
- It's not all about layout though - it's about presentation too. I added a single flag to the wikiindex frontmatter for "expand" to be true or false that displays the notes either fully expanded or as simple links. My [parenting wiki](https://tomcritchlow.com/wiki/parenting/) is an example of the notes expanded, while my [drafts folder](https://tomcritchlow.com/wiki/drafts/) is just a list of links because it's long.
- Finally, where I have a long list of links I added the ability for individual notes to be "pinned" to the top of the page to ensure more important or frequently-used links are easy to find.

Phew. So this all sounds rather complicated - and especially for programming n00b like myself some of the bits felt like hard work to get right. But it's important that all of the complexity and "programming" lies in the layout and index files and none of the complexity lies in the files and folders which remain text files for longevity and easy portability. I doubt it would overly simple but I also doubt it would be hard to port this across to Hugo or Wordpress or something else in the future.

## Some other interesting wikis

Credit for inspiration for this whole project comes from a variety of wikis and wiki-like collections on the web:

[buster.wiki/](https://buster.wiki/) - Strong design and everything has a date by the looks of it which enables an RSS feed. Very polished and thought through.

[are.na](https://are.na) - A platform that all the cool kids use for building personal knowledge libraries. Lightly social, perhaps the right answer but slightly questionable if they'll be around for a long time. Ymmv.

[Brendan's /canon](https://www.brendanschlagel.com/2017/11/05/canonize-creating-personal-canon-template/) - this was part of the original inspiration for me. A curated list of pure stock - things that Brendan returns to again and again. He has a template you can copy too.

[Worrydream's quotes page](http://worrydream.com/#!/quotes) - just a massive list of interesting quotes collected by Brett Victor. Notice how being one giant page makes it instantly searchable.

[daywreckers.com](http://daywreckers.com/) - from Ben Pieratt, not quite a wiki but a very minimal site designed to collect the dots. A daily visit from me.

[derek sivers' daily journal](https://sivers.org/dj) - a post from Derek Sivers on how to keep a text-file long-term store for your ideas and notes.

And there's lots more too - [this twitter thread](https://twitter.com/tomcritchlow/status/1083823277712248832) has a whole bunch of interesting rabbit holes.

*By the way - the illustration at the top was done by my wonderful partner [Erin Przekop](http://erinprz.com). If you like what you see check out [her picture book](http://erinprz.com/journey/) that's hitting the shelves in 2019!*


