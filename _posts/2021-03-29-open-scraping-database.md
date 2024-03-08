---
title: Notes on an Open Scraping Database
subtitle: Exposing the web's data texture
layout: blog
topics: digital-bricolage
---

I'm no developer, but I've been using spreadsheets to query, extract and fiddle with the web for [over a decade now](https://web.archive.org/web/20110129014147/http://www.distilled.co.uk/blog/seo/how-to-build-agile-seo-tools-using-google-docs/).

And today I'm knee deep in an R&D project exploring the link between the web and spreadsheets. It's basically my dream client gig.

Along the way, I found this wonderful project from Geoffrey Litt - [Wildcard](https://www.geoffreylitt.com/wildcard/):

<blockquote class="quoteback" darkmode="" data-title="Wildcard" data-author="@geoffreylitt" cite="https://www.geoffreylitt.com/wildcard/">
Wildcard is a browser extension that empowers anyone to modify websites to meet their own specific needs, using a familiar spreadsheet view. 
<footer>@geoffreylitt <cite><a href="https://www.geoffreylitt.com/wildcard/">https://www.geoffreylitt.com/wildcard/</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

Check out the demo video here:

<div style="position: relative; padding-bottom: 67.6056338028169%; height: 0;"><iframe src="https://www.loom.com/embed/4c1799d671f04c11810775d8df4783ed" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

This is kind of an "outside in" use of spreadsheets - overlaying a familiar spreadsheet UX on top of a website.

I'm working on a kind of "inside out" use of spreadsheets - extracting data from websites into a spreadsheet environment.

Both of these projects rely on parsing and extracting some kind of structured data from arbitrary websites. This.... is a very complex task.

Some gotchas (roughly ordered from simple to hard):

- Websites change code all the time, so extracting data consistently requires maintenance.
- There's no single standard (that I know of) for writing a scraper. Some use CSS selectors, some use Xpath, some use regex etc.
- Some websites are actively hostile to scrapers and obfuscate their code
- Javascript-heavy websites load data in various ways, often forcing you to render the full javascript page to get what you want
- Edge cases like sites that rate-limit scrapers, return 403 status codes etc etc.

What if... there was an open database for scraping. I'm imagining something like wikiscrape where a community builds and maintains a library of URL + schema for scraping.

So for example I could look up a website like airbnb and quickly grab the selector or xpath for extracting the price field from a listing.

Of course this wouldn't resolve the harder scraping problems but might be "good enough" for many general hobby/prosumer use cases.

Does such a thing exist?

If you're working on something like this get in touch!


