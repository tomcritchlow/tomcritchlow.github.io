---
title: Notes on working with small indexes, databases and community resources
subtitle: Working with databases, lists and collections
layout: blog
---

## Introduction

Imagine you care very much about Japanese woodblock prints, and you love the web. So you decide as an interested amateur to build a website to house your library of 200k+ prints. This of course is a thing that the internet has: <https://ukiyo-e.org/> - Japanese Woodblock Print Search.

Now, imagine that you're not also John Resig, world class web developer and founder of Jquery.

We've built many tools for publishing to the web - but I want to make the claim that we have underdeveloped the tools and platforms for publishing collections, indexes and small databases. It's too hard to build these kinds of experiences, too hard to maintain them and a lack 

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

Meanwhile, there are many tools that allow independent authors to create content (Wordpress, Substack, Squarespace, Ghost, Webflow etc etc). But these tools place a heavy emphasis on documents and pages and less of an emphasis on collections of objects and links.

To highlight this tension, consider a couple of examples:

* For example, the personal website of Rob Giampietro [lined and unlined](https://linedandunlined.com/) has a lovely index-view of content but defaults to a site: search in Google to handle search.
* The Cyberfeminismindex is an amazing collection of 828  which is a single file with 100k lines of code
* Jarrett Fuller publishes a lovely collection of readings for people interested in design [readings.design](https://readings.design/) that has 251 resources but what appear to be manually created tags and no search.

To be clear I'm not being critical of these resources! I very much enjoy them all and love that they exist. But I think they highlight a kind of under-served need.

## What do we need?

Let's think through the kinds of needs



We've created excellent tools for managing specialist databases - the most obvious example is ecommerce stores. Uploading, managing, tagging, creating collections etc etc.

But there is a gap I believe in the tools between publishing "pieces of content" and "creating a database" that is worth exploring.


Core problems:
1. Lack of standard file formats means exporting / archiving data is not simple (there's no standard format like a CSV)
2. Publshing tools are heavy, difficult to setup and maintain
3. Hard to collaborate on datasets (tools like Notion are easy to collab on but not to publish)
4. Search





## Cybernetic Indexes

In an era of chatGPT, cheap search, web-crawlers and more.

Here's an example of a site I want to create:

Brooklyn artists. A complete database. Searchable and taggable. This doesn't exist today. How would you make it?

Interestingly one of the ingredients would be some kind of crawler - both for indexing a site to add to the database and for crawling existing sites to gather updated metadata etc. Web crawling and database maintenance of course are no easy tasks.

## A review of the tools

Google Docs
Datasette
Dataview obsidian
Notion
Airtable
Jekyll YAML
Jekyll front-matter
Jekyll + Github actions (https://katydecorah.com/code/build-your-metadata-library/)
Jekyll + Airtable (https://mzrn.sh/2022/04/29/using-airtable-as-a-jekyll-website-database/)
Datatables (https://cloudtables.com/)

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

<details class="ba b--black-20">
<summary>An airtable of resources</summary>
<iframe class="airtable-embed" src="https://airtable.com/embed/shrYY94GrqVB4HUsi?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
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