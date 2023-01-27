---
title: Notes on working with small indexes, databases and community resources
subtitle: Working with databases, lists and collections
layout: blog
---

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

To be clear, I'm not being critical of these resources! I very much enjoy them all and love that they exist. Indie web creators will use [digital bricolage](https://tomcritchlow.com/2023/01/20/digital-bricolage/) to use whatever tools they have to build things and that's great. The Cyberfeminism Index even has an explict focus on long-term maintainability and lack of dependencies which is great.

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

## A review of the tools

I'm not an expert (surprise!) so I'm sure I'm missing plenty of potential tools but here's some that I've considered or seem like they fit the bill:

*Google Sheets
* Datasette
* Dataview obsidian
* Notion
* Airtable
* Jekyll YAML
* Jekyll front-matter
* Jekyll + Github actions (https://katydecorah.com/code/build-your-metadata-library/)
* Jekyll + Airtable (https://mzrn.sh/2022/04/29/using-airtable-as-a-jekyll-website-database/)
* Datatables / https://cloudtables.com/

*See below for an airtable with links and updated 

## Examples of small-indexes

https://beta.startupy.world/
https://ukiyo-e.org/
https://blackmusiclibrary.com/Library
https://apod.li/
https://readings.design/
https://cyberfeminismindex.com/
https://philippinecassettearchive.com/

https://www.are.na/gemma-copeland/list-view
https://www.are.na/chia/www-index-list
https://www.are.na/sam-saruhan/ref-archival-websites

<style>
#airtableframe{
width:150%;
}
@media screen and (min-width: 30em){
#airtableframe{
width:100%
}   
}
</style>

<details class="ba b--black-20 pa2 bg-light-green" id="airtableframe">
<summary>An airtable of resources</summary>
<iframe class="airtable-embed pv2" src="https://airtable.com/embed/shrYY94GrqVB4HUsi?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
</details>

## Market-making Databases

Two ideas:

1) Creating a database creates a market (I'm sure there's some theory that a market IS a database). Consider the Brooklyn artist database example I mentioned earlier. If we imagine this exists and 

2) Substack for databases. What if there was a simple tool for creating and maintaining databases. Pair this with a pay-wall so people have to pay to access the database and pair it with a weekly update/email tool that let's you . Yes, you could assemble this together using memberful and airtable or something but.... it's clunky and doesn't have a nice UI.

https://2pml.com/publishers/
Startupy

## Conclusion

Depending on your mental model of the world, the shape of the data you want to work with, and your technical aptitude you will likely have strong reactions to this post. Things like "no way!" or "This is missing the point" but 

Empowering more individuals to publish, maintain and collaborate on small indexes I think would be a positive.


--
People to reach out to:

https://lozanarossenova.com/about/
Geoffy Lit
Electric Tables folks
Arc
Chia