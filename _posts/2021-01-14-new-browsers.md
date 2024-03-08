---
layout: blog
title: Why can't I write code inside my browser?
subtitle: Notes on rethinking browsers
topics: digital-bricolage
---

**So I can write code inside my spreadsheet, but not inside my browser? WTF.**

Ok, let's back up. Coding is too hard.

I've been playing with the web and code for years now and still feel like I'm an outsider to the "code club". An incomplete list of things I've tried and failed to do:

- Failed to install node
- Failed to install pip
- Failed to install ruby

Meanwhile, things I do regularly:

- Use Github extensively for a variety of projects, all through the Github GUI
- Use Glitch to host some simple Node.js apps
- Maintain a fairly complex Jekyll blog hosted on Github pages without Ruby or Jekyll running locally

Increasingly there's a disconnect between the kinds of activities code enables and the "expected" workflow for "being a coder".

Meanwhile - there's been a kind of revolution around coding. "Javascript everywhere" (i.e. node.js) has really become the default web-development paradigm.

Javascript is alluring - partly because every computer has a javascript GUI and runtime - the browser! You can code in javascript on your computer using a text editor and a browser - without ever touching the command line!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I think a lot about how easy and hackable javascript feels. How it feels easy to play with and build prototypes.<br><br>And how this feeling is 100% because of the fact that every computer comes with a javascript GUI and runtime environment... the browser.</p>&mdash; Tom Critchlow (@tomcritchlow) <a href="https://twitter.com/tomcritchlow/status/1278878761681686530?ref_src=twsrc%5Etfw">July 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

But... on installing node.js you're greeted with this screen (wtf is user/local/bin in $path?), and left to fire up the command line.

![](/images/node-install.png)

Ok, once again. I can write code inside my spreadsheet but not inside my browser? WTF.

Here's my pitch: build a browser that comes pre-installed with node.js, an IDE and a simple runtime environment.

## Defaults Matter

Why is this important? Because defaults matter. Defaults allow people to get started. Python is installed by default on the mac and so I've found it very easy to do some lightweight Python coding (e.g. [some glitch art](https://tomcritchlow.com/2017/11/07/privacy-glitch/))

*Can you imagine if Node.js was installed by default?*

## GUIs Matter

People hate command lines - not only do they LOOK scary, they give weird unhelpful error messages and... you have to type everything. Ugh. This is why people would rather code inside a spreadsheet application - because it's an application.

*Can you imagine if the beginner version of Node.js came pre-installed with a GUI for managing and running your code?*

## Code for All

It's not "designers should code" or "SEOs should code" - but rather code *is* and *should* be as widespread as spreadsheets. This is a great little read on how code is perhaps finally overtaking spreadsheets in a niche reinsurance industry, but really it gets to the heart of *every* industry:

<blockquote class="quoteback" darkmode="" data-title="Ditching%20Excel%20for%20Python%20-%20Lessons%20Learned%20from%20a%20Legacy%20Industry%20-%20Amy%20Peniston" data-author="Amy Peniston" cite="https://amypeniston.com/ditching-excel-for-python/">
<p>During these three short years, I observed a radical shift in data analysis methodologies. Excel-based models, which had seemed top-of-the-line suddenly were too slow and too rigid; Integration with 3rd party data sources, which was once a luxury, became the norm; And analysts began to utilize scripts to accomplish many labor-intensive tasks typically performed by hand or in spreadsheets.</p>

<p>Enabling this change is a suite of accessible Python-powered tools. These technologies are rapidly displacing the old way of doing things, ushering in a new wave of reinsurance models and the talent needed to support them.</p>

<p>Admittedly, the following observations do come from a very niche industry. But I believe that the broader trends discussed here will also apply to other legacy companies and sectors.</p>
<footer>Amy Peniston <cite><a href="https://amypeniston.com/ditching-excel-for-python/">https://amypeniston.com/ditching-excel-for-python/</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

## New Browsers

Ok - so honestly I'm surprised that Google isn't taking some portion of their massive compute platform budget and putting it to work creating simple, widespread default onramps for code. Imagine if node.js shipped inside Chrome by default! But - in reality I doubt Google is going to do this.

So it's up to the new browsers on the block.

Maybe Mozilla could buy up Glitch and integrate it natively inside Firefox?

Maybe [BeakerBrowser](https://beakerbrowser.com/) will get enough traction and look beyond the P2P web?

Maybe the [Browser Company](https://thebrowser.company/) will do something like this?

Because I love building things using code. But coding is still too damn hard for beginners.
