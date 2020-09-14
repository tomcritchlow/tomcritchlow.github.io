---
title: Further thoughts about GoodReads & the web books ecosystem
subtitle: Rough notes as followup to Library.json
layout: blog
---

A few months ago I wrote up an outline of a spec for a decentralized GoodReads: [Library JSON - A Proposal for a Decentralized Goodreads](https://tomcritchlow.com/2020/04/15/library-json/). It had a bunch of interesting replies and comments and I've yet to get around to writing a followup.

This post is not that followup.

But - Sarah Manavis from New Statesman recently interviewed me via email for [a piece she wrote about GoodReads](https://www.newstatesman.com/science-tech/social-media/2020/08/better-goodreads-possible-bad-for-books-storygraph-amazon). You should read her piece but I thought it was worth posting my replies in full here:

*Sarah:  Could you tell me a bit about yourself? Where you're based, professional background, etc (just to explain who you are in the piece)* 

I'm Tom Critchlow, an independent strategy consultant. I'm from the UK originally and been living in Brooklyn for almost a decade with my partner and two kids. I'm a blogger and currently writing a book for independent strategy consultants.

Also relevant for this conversation - I launched a books website called 7books (now offline) back in 2010 that had about 6k signups but ultimately never went anywhere but did launch my career in a certain way ([this post](https://web.archive.org/web/20150214185808/http://www.7bks.com/blog/179001) got a lot of traction and was at the top of Hacker News for a while). So I've been circling this books idea for a long time! [Screenshot of 7bks website here](https://tomcritchlow.com/images/projects/7books.png).

*Sarah: You wrote the blog of course – but could you explain in slightly more detail why you think Goodreads has been able to hold onto this monopoly?*

In my mind there's three core reasons that Goodreads remains dominant:

1. They are the incumbent with a large user base, ties to Amazon and an incredible amount of SEO traffic
2. Building a competing product requires a robust books database. Unfortunately there really isn't a good open database that competes with Amazon's - so if you want to compete seriously you would be building on top of the Amazon API and that would make me nervous as Amazon has showed no mercy when dealing with competitors before. [Open library](https://openlibrary.org/works/OL65936W/Desolation_angels) is likely the best thing you could use for a books database but is certainly not as robust as Amazon's.
3. Monetizing books is incredibly hard. Margins on books are razor thin (if not negative!) and almost all the demand goes through Amazon - so again, if you were to compete you would need significant scale before you could either monetize meaningfully and/or rely on Amazon's affiliate program. Amazon's affiliate program for books is a small % and again you'd be dealing with Amazon directly...

It should be noted - that I think a "better Goodreads" is alluring because reading books and sharing books is an incredibly emotional experience and we try and project and shape our individual identities via books. But! The Goodreads experience for keeping a list of books you've read and want to read is actually served pretty well by Goodreads.

Most of the imagined features and social ideas are not actually that useful or would never be used often. So many people who dream of disrupting Goodreads focus on the wrong things (myself included!)

*Sarah: Why do you think Amazon doesn't invest in making Goodreads better?*

Feels like the same reason that they don't invest in making the Kindle better. Amazon I think views both the Kindle and Goodreads as good enough for the core experience (reading, book lists respectively) and sees no real threat so isn't about to invest behind any major new development.

*Sarah: What would, in your opinion, a good competitor look like now?*

There are I think a few viable paths:

1) Great polished UX combined with real book community work (reader talks, Q&A, maybe even exclusive releases etc). Basically just a more exciting and culturally relevant Goodreads. Easy to imagine, very hard to build scale.

2) Focus on community. Perhaps by starting with a specific niche (e.g. non fiction books, poetry etc) and build a real engaged userbase and then expand from there. Perhaps [Literati](https://literati.com/) could build a foundation of community to eventually challenge Goodreads?

3) Build some new tools that actually change the reading experience. Something like [Highlighter](https://highlighter.com/) could potentially become this.

4) Directly address the unit economics of books. [Bookshop.org](https://bookshop.org/) is attempting to do this through a new affiliate program and direct book purchases. Admirable effort though two problems I see: a) they appear indie but actually are owned by the American Booksellers Association - something they make non obvious to find out. and b) see how much more expensive books are here which makes me think they face a long uphill battle.

5) Similar to point 4, perhaps there's a new economic model for books around the corner. Substack, patreon etc have unbundled the economics of all kinds of things. Maybe books are next? Maybe some kind of Kickstarter dedicated to books and authors that allows them to build their own distribution? [Leanpub](https://leanpub.com/) is interesting here. Also Craig Mod recently [sold his book](https://shop.specialprojects.jp/products/kissa-by-kissa?variant=34630892683419) on a '[Craigstarter](https://github.com/cmod/craigstarter)' model - his own home-built version of a Kickstarter campaign.

6) Some kind of decentralized model like my library.json proposal.

*Sarah: Do you think there ever will be one?* 

I'm sure - though a singular replacement might be the wrong model. Perhaps books just get more fragmented and unbundled as we go.

And finally, in your blog you mention creating your own infrastructure. Could you explain a bit about what you've done and why you think something like what you've built could work? 

Right now all I've done is create [an idea and a rough spec](https://tomcritchlow.com/2020/04/15/library-json/). It got a lot of attention and enthusiasm but I have not taken it further because of other life priorities (and I don't believe it would be a viable money making project as per above! so it's just a hobby). That said - there's a handful of sites adopting the json file format so there's some definite signs of engagement and excitement.

Personally I'd love to see some version of this decentralized book protocol exist - the technology is incredibly simple and it's very close to how bloggers and indie site owners make book lists today. I believe it could be something like a fork of RSS (or maybe even RSS!) and allow you to create an open decentralized books ecosystem. Not really competing with Goodreads but offering an alternative.

Of course - a robust, open source book database is still a problem here......