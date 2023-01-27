---
title: The Magic of Small Databases
subtitle: Notes on personal libraries, collections and small indexes on the web
layout: blog
---

<div class="ba b--black-10 bg-washed-green br3 pa3 f5">
<div class="ttu black-50">summary</div>
Publishing documents to the web is a well-served use case but publishing small indexes, databases and collections to the web is still an incredibly frustrating and under-served use case. Here I outline why I think it matters and a variety of approaches to solving it.
</div>

## Introduction

Imagine you care very much about Japanese woodblock prints, and you love the web. So you decide as an interested amateur to build a website to house your library of 200k+ prints. This of course is a thing that the internet has: [ukiyo-e.org](https://ukiyo-e.org/) - Japanese Woodblock Print Search, created by John Resig.

Now, imagine that you're not THE John Resig, world class web developer and founder of Jquery.

We've built many tools for publishing to the web - but I want to make the claim that we have underdeveloped the tools and platforms for publishing collections, indexes and small databases. It's too hard to build these kinds of experiences, too hard to maintain them and a lack of collaborative tools.

Here's the thesis:
1. Independently published and maintained collections are interesting and valuable
2. Publishing them to the modern web is too hard and there are few purpose-built tools that help
3. Collaborating and maintaining them is a tough challenge

Sari (building a community index Startupy) has a nice piece exploring this tension:

<blockquote class="quoteback" darkmode="" data-title="Re-Organizing%20the%20World%E2%80%99s%20Information%3A%20Why%20we%20need%20more%20Boutique%E2%80%A6" data-author="Sari Azout" cite="https://sariazout.mirror.xyz/7gSSTJ96SEyvXeljymglO3zN4H6DCgVnrNZq8_2NX1A">
<p>There’s an emergence of tools like Notion, Airtable, and Readwise where people are aggregating content and resources, reviving the <em>curated web</em>. But at the moment these are mostly solo affairs, hidden in private or semi-private corners of the Internet, fragmented, poorly indexed, and unavailable for public use. We haven't figured out how to make them multiplayer. In cases where we’ve made them public and collaborative - here is<a href="https://docs.google.com/spreadsheets/d/16IDgIyPcfwJGG-zmXeMAenYbePQVHkc2P6WCwKEZgpk/htmlview#gid=0" rel="noopener" target="_blank"> a great example</a> - these projects are often short-lived and poorly maintained.</p>
<p><strong>The stated mission of a company worth almost two trillion dollars is to “organize the world’s information” and yet the Internet remains poorly organized.</strong></p>
<footer> <cite><a href="https://sariazout.mirror.xyz/7gSSTJ96SEyvXeljymglO3zN4H6DCgVnrNZq8_2NX1A">https://sariazout.mirror.xyz/7gSSTJ96SEyvXeljymglO3zN4H6DCgVnrNZq8_2NX1A</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

There ARE tools that allow you to manage collections and indexes, for specialist use cases. Ecommerce is the most obvious example. The core needs of creating a database of products, adding metadata, enabling search and creating collections are all well served by a range of tools (Shopify, Squarespace, etc etc).

Meanwhile, there are many tools that allow independent authors to create content (Wordpress, Substack, Squarespace, Ghost, Webflow etc etc). But these tools place a heavy emphasis on documents and pages and less of an emphasis on collections of objects, links and metadata.

To highlight this tension, consider a couple of examples:

* The personal website of Rob Giampietro [lined and unlined](https://linedandunlined.com/) has a lovely index-view of content but defaults to a site: search in Google to handle search.
* The [Cyberfeminism Index](https://cyberfeminismindex.com/) is an amazing collection of 828 resources, each with notes and quotes. Although the site has search the whole thing is a single HTML file with 100k+ lines of code.
* Jarrett Fuller publishes a lovely collection of readings for people interested in design [readings.design](https://readings.design/) that has 251 resources but what appear to be manually created tags and no search.
* My friend Jonah Dragan has been documenting amazing kids picture books, both popular and obscure. He has [over 900 archived on his Instagram](https://www.instagram.com/jonahdragan/?hl=en). How might this archive become, well, an archive?

To be clear, I'm not being critical of these resources! I very much enjoy them all and love that they exist. Indie web creators will use [digital bricolage](https://tomcritchlow.com/2023/01/20/digital-bricolage/) to use whatever tools they have to build things and that's great. The Cyberfeminism Index even has an explicit focus on long-term maintainability and lack of dependencies which is great.

But it shows some of the potential use cases where people are looking for "database publishing".

These are all individuals - personal things. But this challenge applies to institutions too. Here's the digital art foundation Rhizome on building their archive of digital art projects Artbase:

<blockquote class="quoteback" darkmode="" data-title="The%20ArtBase%20Relaunches%3A%20Welcome%20to%20Linked%20Open%20Data%C2%A0" data-author="" cite="https://rhizome.org/editorial/2021/apr/26/the-artbase-relaunches-welcome-to-linked-open-data/">
With so many tools available for cataloguing digital archives, it may seem startling that Rhizome would have invested so much time in developing a new approach. We did so because we believe that technical infrastructure shapes the way in which knowledge about cultural heritage is created and captured, organized and shared, and that existing software infrastructure is poorly suited to born-digital cultural archives.
<footer> <cite><a href="https://rhizome.org/editorial/2021/apr/26/the-artbase-relaunches-welcome-to-linked-open-data/">https://rhizome.org/editorial/2021/apr/26/the-artbase-relaunches-welcome-to-linked-open-data/</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

## What do we need?

Let's think through the kinds of use cases and functionality that is important. I'd say that the core features are:

1. Creating collections of objects
2. Adding and updating metadata for the objects (ideally in bulk if needed)
3. Creating collections, relationships and pathways through the data
4. Collaborating on these with others
5. Publishing to the web in an easy to consume way, with stable URLs, search etc
6. Open standard file formats for export / import / desktop editing

I think the last point is key to building an ecosystem of this stuff. We have CSV files as a kind of open standard for any kind of data - possible to open it in all kinds of applications (or even edit directly with a text editor) and yet we have no standard concept for a database file that you can just open and edit in a range of applications?

## Cybernetic Indexes

Let's go beyond the simple use cases though - I'm excited about building extensions and automations for these small databases. The magic of the web is that automations (via chrome extensions, bookmarklets, zapier, cloud functions, github actions, replits etc) are becoming simple, easy to build and accessible to hobby-coders, not just professional developers.

In an era of chat GPT, cheap search & web-crawlers how can we make any small database come alive?

Here's an example of cybernetic database I want to build: I'd like to build an index of all the artists in Brooklyn[^fiercely]. This would be a resource for seeing a ton of local artists and their work all in one place. A database that's searchable, taggable. This doesn't exist today. How would you build it?

[^fiercely]: Erin and I still run [Fiercely Curious](https://www.fiercelycurious.com/), which is a small-scale, curated version of this.

And importantly - after you've built it, how would you bring it to life? I'm thinking things like:

* Image machine learning to auto-extract tags and classifications around color, medium etc
* Web-scrapers that can periodically re-crawl the artist's websites and update the database with new works and new info

I could probably build this myself if I was really motivated but it would require building an *actual* database. There's no readily available solution (that I know of) that would enable this kind of thing...

## Tools & Examples

I'm still actively researching the best tools out there for this kind of work but in the meantime I've created an Airtable database for tools, examples of small databases and interesting reading. Take a look (or [load the file directly here](https://airtable.com/shrYY94GrqVB4HUsi/tblHPrdomiPbLpod6/viwxizssDJMsGqhg9?backgroundColor=green&blocks=hide))

<style>
#airtableframe{
width:150%;
}
@media screen and (max-width: 30em){
#airtableframe{
width:100%
}   
}
</style>

<details class="ba b--black-20 pa2 bg-light-green" id="airtableframe">
<summary>An airtable of resources</summary>
<iframe class="airtable-embed pv2" src="https://airtable.com/embed/shrYY94GrqVB4HUsi?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
</details>

If you have suggestions and additions - email me!

## Datasette

I'd like to call out [Datasette](https://datasette.io/) in particular. Datasette is "An open source multi-tool for exploring and publishing data" created and maintained by Simon Willison.

Of all the projects I've come across Datasette feels so closely ideologically aligned to what I want. It's open source, Simon really cares about helping non-developers use it (via a cloud product, a [desktop product](https://datasette.io/desktop) etc) - it's even building out [web-scraping functionality](https://github.com/cldellow/datasette-scraper/releases/tag/0.5)! Datasette is like a swiss army knife tool for exploring data but also allows you to publish that data to the web.

Everything about Datasette feels great - the only problem is that it still feels slightly too far out of reach for your average enthusiast / indie publisher. There are still a lot of command line prompts around... This is not criticism of Simon - he's an indie developer building the whole thing!

Anyway - my point is that I think Datasette is going to get easier over time and may, if you're more technical than me, be a good tool for this *today*.

## Market-making Small Databases

Actually - maybe this isn't a real technology problem. Or at least not completely a technology problem. I think Substack is a good analogy here. Substack's innovation comes in two flavors: firstly it is a lovely UX for creating, publishing and maintaining a paid email list. But secondly it's also creating social validation and educating people that running a paid email list is a viable business.

I think there might be a similar market-making innovation here for small databases.

Imagine a Substack for databases - an easy tool for creating, maintaining and publishing databases with the ability to restrict parts or all of it behind a pay wall. Pair it with the ability to send email updates to your audience about changes and additions. Maybe even roll in some of the data-cleanup and data-collection magic that machine learning and web scraping offers.

Yes, you could assemble this exact business model today using a combination of Memberful and Airtable and Substack but.... it's clunky. And there isn't the market-awareness that running a business like this is viable, though there are some examples (e.g. [2pmlinks](https://2pml.com/) which is a paid email newsletter but has a set of small-databases attached to it called their Executive Library with collections of things like indie media businesses or an agency index).

## Conclusion: How can we let a thousand small libraries bloom?

Depending on your mental model of the world, the shape of the data you want to work with, and your technical aptitude you might have strong reactions to this post. Things like "just use a real database!" or "no way!" or "This is missing the point" but I sincerely believe there is a whole set of publishing use cases waiting in the wings that are underserved today.

I want to empower more individuals to publish, maintain and collaborate on small indexes. To build a million tiny libraries, community databases, weird collections and indie indexes.