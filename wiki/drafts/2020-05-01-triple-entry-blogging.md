---
title: Triple Entry Blogging
subtitle: ...and some thoughts on servers in the modern age
layout: blog
---

A monk in 1494 called Luca Pacioli invented double entry accounting. It's a kind of business infrastructure that enabled modern finance to emerge. By recording changes in two places you create a much more robust and error-resistant system of accounting:

<blockquote class="quoteback" darkmode="" data-title="How%20double-entry%20bookkeeping%20changed%20the%20world%20%E2%80%94%20MATH%20VALUES" data-author="Keith%20Devlin" cite="https://www.mathvalues.org/masterblog/2019/4/26/how-double-entry-bookkeeping-changed-the-world">
Looking back, we see that Venetian bookkeeping proved to be an ideal system for generating the financial statements that were required for the modern industrialized world. It could accurately record capital and income (as required by law and investors), it could distinguish between private expenses and corporate costs, and it could produce data that helped to evaluate past investment decisions.
<footer> <cite><a href="https://www.mathvalues.org/masterblog/2019/4/26/how-double-entry-bookkeeping-changed-the-world">https://www.mathvalues.org/masterblog/2019/4/26/how-double-entry-bookkeeping-changed-the-world</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

Here's a little about it from NPR (with some nice additional color about his potential relationship to da Vinci):

<blockquote class="quoteback" darkmode="" data-title="The%20Accountant%20Who%20Changed%20The%20World" data-author="@NPR" cite="https://www.npr.org/sections/money/2012/10/04/162296423/the-accountant-who-changed-the-world">
<p>Luca Pacioli was a monk, magician and lover of numbers. He discovered this special bookkeeping in Venice and was intrigued by it. In 1494, he wrote a huge math encyclopedia and included an instructional section on double-entry bookkeeping.</p>   <p>Thanks to the newly invented printing press, his book was mass produced and became a big hit. One of the first readers was Leonardo da Vinci, who at the time was painting <em>The Last Supper</em>. Pacioli's encyclopedia had a section on the mathematics of perspective painting which fascinated da Vinci.</p>   <p>"They were hanging out together....I think they were probably lovers. They certainly spent a lot of time together, and definitely Luca Pacioli was there in the church when Leonardo da Vinci was there in the actual church when Leonardo da Vinci was painting <em>The Last Supper</em>," said Gleeson-White.</p>   <p>What Pacioli is known for today, though, is that tiny section of the book about accounting. Today, every country and every business uses double-entry bookkeeping.</p>
<footer>@NPR <cite><a href="https://www.npr.org/sections/money/2012/10/04/162296423/the-accountant-who-changed-the-world">https://www.npr.org/sections/money/2012/10/04/162296423/the-accountant-who-changed-the-world</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

🔢

This is a blog without servers. I don't mean that literally - of course there's servers (there's even double entry accounting somewhere in the stack!). But what I mean is that I don't spend any time on sys admin. I don't fiddle with server settings or controls. I can't, there's nothing to fiddle with!

This site is a static site, hosted on Github Pages.

I use Github Pages, not because it's easy (though it is pretty easy), but because it's simple[^gui]. Everything is just text files. It's markdown mostly with a little sprinkling of HTML. Most of the complicated logic for templating etc is separated from the actual writing so burning this site to the ground and starting from scratch with all my content would be pretty trivial.

[^gui]: Github feels very scary and has stupid language that makes no sense. But once you get over that it's not that hard. I manage everything from the Github desktop client, I don't use the command line.

But there's a nice benefit to running my blog through Github - I accidentally get **triple entry blogging**. What is triple entry blogging? Well my whole site is, by default, replicated in three places:

1. My local machine (stored as text files)
2. Github creates a robust version, complete with version history
3. The web at tomcritchlow.com (where all kinds of spiders crawl all over it)

There's no export button - everything is automatically replicated in all three places.

This feels like some kind of resilience. I think there might even be a snapshot of my site [buried 250 meters deep in the permafrost of an Arctic mountain](https://archiveprogram.github.com/arctic-vault/)...

🔢

The magic of double entry bookkeeping, though,  wasn't just that the records were stored in two places. It wasn't just a copy - it was a log. It enabled new kinds of accounting to keep track of more complicated transactions.

It's nice to have three copies of my site, but what kinds of new experiences might triple entry blogging enable?

Well Github has a very robust API. The nice thing about that is it essentially provides an API to my site too. Imagine you want to create a new blog that feeds in posts from a bunch of different sites. This would be trivial if they all ran on top of Github (also possible [via RSS](https://tomcritchlow.com/2022/04/21/new-rss/)).

Or perhaps you wanted to create a search index on top of a bunch of blogs - again, if they all ran on top of Github Pages this would be trivial[^trivial] with the Github API.

[^trivial]: "Trivial" in the mathematical sense of being beyond my capabilities but theoretically possible and straightforward for someone more capable than me.

Another nice thing enabled by triple entry blogging is the ability to have a version history and changelog for every blog post. This is something I've been meaning to implement for a while. Here's a how to: [Including Git History in a Jekyll Post](https://ryanjduffy.github.io/blog/2016/01/08/including-git-history-in-a-jekyll-post.html).

What new kinds of things could we build on top of this idea of tripe entry blogging?

🔢

Servers are weird. I've constructed this whole blogging setup as a way to never have to think about servers. But actually servers are cool again. Services like [Replit](https://replit.com/) and [Glitch](https://glitch.com/) have become incredible. What started as a kind of easy way to configure a server through the browser has quietly become something.... else?

Both Replit and Glitch have "always-on" modes if you pay $7 or $8 / month.

Yes, it's making it easier than ever to write code collaboratively in the browser with zero configuration and setup. That's amazing! I'm a HUGE believer in this mission.

But/and I think there's something more. The idea that writing server-side code is **as easy** as writing HTML opens up something new. I can feel the energy in my fingertips - a kind of Internet-Fingerspitzengefühl perhaps.

Take [Mastodon](https://mastodon.social/) for example.

This is a model of decentralization that still involves servers. Yes, yes I know everything involves servers, chill! What I mean is that it's a model of decentralization that requires *real* servers. It requires *configuring* servers. Because of that it's both technologically and socially clunky. It requires setup and it requires knowing someone who knows how to configure one.

But what happens when writing server-side code is as easy as writing front end code? What happens if - maybe! - there's a model of decentralization that feels more like a bunch of weird Replits networking with each other. Some kind of richer, smaller, messier mesh. A kind of decentralization that doesn't require so many people to maintain a bunch of servers...?

🔢

Here's a real example. A while back I posted up some thoughts about a decentralized Goodreads: [Library JSON - A Proposal for a Decentralized Goodreads](https://tomcritchlow.com/2020/04/15/library-json/).

The idea is that a million individual static sites can publish their book lists in a way that allows us to build Goodreads-esque behavior on top of it.

There's two ways to look at this kind of idea - on the one hand you can imagine a Mastodon like approach. Real coding people come along and host some real servers and build robust code that rebuilds a service on top of this open data. To be 100% clear I think this would be batshit cool! Imagine a centralized service that you can log into, create an account and use just like Goodreads - except under the hood it's fully interop with this open data spec. You can interact side by side with data on the platform and data spread across these personal sites. Magic.

But there's another way to look at this idea - instead of the "Mastodon appraoch" we take the "Replit approach". This way, there's no servers (you know what I mean!) - just some hackers and hobbyists writing a bit of front-end and back-end javascript to create a million little libraries. Some of them might end up being big (think the NYPL!). Big, popular, robust services consuming and creating book data. But most of them will be small neighborhood libraries. Maybe they're friends in a book club. Or a books version of a blog ring. Who knows. Tiny libraries.

Here's a [super rough proof of concept Replit tiny library](https://library-json-node-2.tomcritchlow.repl.co/library?url=https://tomcritchlow.com/library.json). I've never written nodeJS code before and managed to copy and paste together a little thing that takes a library.json file and turns it into a library. Right now it only iterates over a single library but it's easy to imagine how to extend this to include a feed, info across library files etc etc. I'm gonna get to all that, I jut haven't had time.

🔢

Talking of libraries and decentralized social media... Maybe *actual* libraries are part of the answer?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">These are the five core principles of the Brooklyn Public Library. Feels like you could certainly support these efforts with some kind of social space... <a href="https://t.co/XGU789dawe">pic.twitter.com/XGU789dawe</a></p>&mdash; Tom Critchlow (@tomcritchlow) <a href="https://twitter.com/tomcritchlow/status/1519032093233270785?ref_src=twsrc%5Etfw">April 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Maybe the library of the future need to think about creating and consuming content? From a lovely paper in 2006 (!): “In the new digital libraries, users are not only consumers but also producers of information”:

<blockquote class="quoteback" darkmode="" data-title="(PDF) Digital Libraries of the Future - and the Role of Libraries" data-author="Donatella Castelli" cite="https://www.researchgate.net/publication/28804446_Digital_Libraries_of_the_Future_-_and_the_Role_of_Libraries">
New DLs are also required to offer a much richer set of services to their
users than in the past. In particular, they must support the activities of their users
by providing functionalities that may range from general utilities, like annotation,
summarization or co-operative work support, to very audience-specific functions,
like map processing, semantic analysis of images, or simulation. The availability of
this new DL functionality can, in principle, change the way in which research is
conducted. By exploiting such types of DL, for example, a scientist can annotate
the article of a colleague with a programme that extracts useful information from a
large amount of data collected by a specific scientific observatory. This
programme, executed on demand when the annotation is accessed, can
complement the content of the paper with continuously refreshed information.<div><br></div><div>In the new DLs users are not only consumers but also producers of
information. By elaborating information gathered through the DL they can create
new information objects that are published in the DL, thus enriching its content.
The new DLs are thus required to offer services that support the authoring of these
new objects and the workflows that lead to their publication. </div>
<footer>Donatella Castelli<cite> <a href="https://www.researchgate.net/publication/28804446_Digital_Libraries_of_the_Future_-_and_the_Role_of_Libraries">https://www.researchgate.net/publication/28804446_Digital_Libraries_of_the_Future_-_and_the_Role_of_Libraries</a></cite></footer>
</blockquote><script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

🔢

Triple entry blogging doesn't sound like the kind of thing to change the world. But then again, neither does double entry accounting. 