---
layout: blog
title: Library JSON - A Proposal for a Decentralized Goodreads
subtitle: V0.1 for an experimental open bookshelf spec
---

There's been a lot of discussion around a "better" GoodReads and at some point almost every side-project-slinger has tried their hand at building a "books website". Myself included.

Back in 2010 I built a site called [7books](https://tomcritchlow.com/projects/7books/) - the tagline was playlists for bookworms and it looked like this:

![](/images/projects/7books.png)

There is a large graveyard of these books sites.

But there are (at least) three fundamental problems with building a GoodReads competitor:

### 1. Amazon owns the only good book index

As far as I know there is no good reliable book index that's open. Books come in so many different formats, re-issues, versions, languages and publishers that maintaining a canonical reference for a specific book is very tough.

### 2. A books website is a cultural black hole

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Same is true of music social networks. Cultural black holes. Seductive and imaginary ideas about social networks that just don&#39;t work.</p>&mdash; Tom Critchlow (@tomcritchlow) <a href="https://twitter.com/tomcritchlow/status/1164386179187433472?ref_src=twsrc%5Etfw">August 22, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It's one of those alluring ideas that just does. not. work.

### 3. The only path to monetization is Amazon

Closely related to point #1 - the only (effective) way to monetize a books website is through Amazon. Any books site of meaningful size would get cut from the Amazon affiliate program in a heartbeat as it would compete directly with both Amazon and GoodReads.

But...

## Web of Books

On closer examination I realized that I'm not really interested in building a "startup" or a "business" around this - what I really want is 

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Would love to see a &quot;web of books&quot; emerge from the indie web rather than via fixing goodreads</p>&mdash; Tom Critchlow (@tomcritchlow) <a href="https://twitter.com/tomcritchlow/status/1170340177702785024?ref_src=twsrc%5Etfw">September 7, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

There are lots of really really great indie sites that maintain structured reading lists. I've got a running list in my wiki: [web of books](https://tomcritchlow.com/wiki/books/bookshelves/). Probably my all time favorite is Mandy's [A Working Library](https://aworkinglibrary.com/).

## Decentralized Architecture

Thinking through building some kind of "web of books" I realized that we could use something similar to RSS to build a kind of decentralized GoodReads powered by indie sites and an underlying easy to parse format.

I created a proof of concept by converting my own bookshelf into a JSON file <https://tomcritchlow.com/library.json>.

If you think of several sites publishing their bookshelf as a library.json file you can imagine a bookshelf "feed reader" that let's you keep track of friends bookshelves something like this[^loldesign]:

[^loldesign]: Not accepting freelance web design gigs atm, sorry.

![](/images/library-json.png)

And combined with a "feed" something like this:

![](/images/library-json-feed.png)

## Groups & Control

The great thing about this being an open spec is that people can choose to participate in the centralized GoodReads-esque hub or... not. In fact people can hack on top of it in many ways - extending, modifying and so on.

In particular it would be very easy for a small group of people to form a book club and host a summary view of a handful of library.json files completely independently of any open aggregator.

## V0.1 of a library.json spec

So this brings me to my "spec". Let's imagine a library.json file that roughly looks like this:

- Title
- URL
- Bio
    - Lists
        - List
        - List

Where each book list contains a book object something like this:

- Title
- Author
- URL
- ID
- Notes (can be text or a link to a full review/note)

I created some dummy example files [in this gist](https://gist.github.com/tomcritchlow/a4a9c8064a97a997fbbad4c338748173):

<script src="https://gist.github.com/tomcritchlow/a4a9c8064a97a997fbbad4c338748173.js"></script>

## Feedback? Next?

So where to next? Three obvious things:

1. Further research into a universal book ID solution. Without it this whole idea is going to be shaky ground.
2. Building an MVP of the feed reader experience slurping in some sample library.json files
3. Gather feedback on the json spec above

If you are interested in building something in this space and/or maintain a page that's part of the "web of books" I'd love to hear from you on the above proposal.


