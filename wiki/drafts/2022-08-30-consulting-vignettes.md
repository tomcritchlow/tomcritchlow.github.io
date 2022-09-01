---
title: RQL - RSS Query Language
subtitle: A proposal for RSS 2.0
layout: blog
---

A kind of RSS 2.0 that requires very little tech and just a smidge of coordination.

## RSS is essentially a simple scraping spec

At it's most simple, RSS today functions like this:

Structured data and permission to crawl
Feed reader to display items, mark as read etc


My proposal is for the following:

1. RSS readers to crawl URLs, not just consume feeds
2. Ability to add custom structured data to blog posts and RSS feeds
3. Feed readers to allow you to build views that query across this data
4. A new default behavior to "view all" on an RSS feed to enable indexing and querying

I think the most radical part is that I think RSS readers should be mini web-crawlers. It probably is the most complex part to achieve technically (web crawling comes with LOTS of edge cases) BUT/AND I think it would all fail gracefully and be easy to layer up (so everything about RSS today would keep working - full backwards compatibility)

https://www.disobey.com/detergent/2002/extendingrss2/#nitURIref

https://github.com/scripting/reallysimple
Dave - can you support custom namespaces?

https://zylstra.org/opml/books/books.opml
https://macwright.com/reading/rss.xml

Would want to support:
https://openlibrary.org/people/ScarTissue/books/want-to-read.json

## Motivations

There's a few use cases I can think of, but likely a million more.

The most obvious one is library.json

rdfa or schema e.g. json+LD is pretty common these days.

"RSS 2.0 adds that capability, following a simple rule. A RSS feed may contain elements and attributes not described on this page, only if those elements and attributes are defined in a namespace."

Hmm but is requiring a namespace necessary? Or should we let a million custom data schemas bloom? On the one hand I think a library namespace would make sense

Or maybe we just add a namespace taht 

Maybe 


I think it would be great to automatically extract some info. e.g. links as objects.

So you could do something like "show me all the external links from tomcritchlow.com" or, "show me all the times tomcritchlow.com links to interconnected.org"

(An actual RQL query might be something closer to "select * from tomcritchlow.com-links where LINK contains interconnected.org" but you get the idea - maybe we'd have some nice interfaces for these things)




