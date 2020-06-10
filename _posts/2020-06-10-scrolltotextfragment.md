---
title: Exploring ScrollToTextFragment
subtitle: Buggy af for me...
layout: blog
---

Yesterday we launched [quotebacks](https://tomcritchlow.com/2020/06/09/quotebacks/) and I had a bunch of people suggesting that we integrate the scrolltotextfragment protocol to make the links point to the correct part of the page.

Great in theory!

However - in practice I've found the implementation super buggy.

## First, what is ScrollToTextFragment?

In essence - ScrollToTextFragment allows you to deep-link to a specific part of a page, with the text highlighted. If you're in Chrome it should work on any web-page. And Google is using this for their featured snippets (click through to the Verge article for screenshots):

<blockquote class="quoteback" data-title="Google now highlights search results directly on webpages" data-author="Jon Porter" cite="https://www.theverge.com/2020/6/4/21280115/google-search-engine-yellow-highlight-featured-snippet-anchor-text">
Google is trying to make it easier to find the information you’re looking for on external websites by highlighting relevant sections in yellow, <a href="https://searchengineland.com/google-launches-featured-snippet-to-web-page-content-highlight-feature-335511" target="_blank"><em>SearchEngineLand</em> reports</a>. The functionality works with Google’s Featured Snippets — the standalone boxes that appear at the top of search results that attempt to give you answers without having to visit a website beyond Google.
<footer>Jon Porter <cite><a href="https://www.theverge.com/2020/6/4/21280115/google-search-engine-yellow-highlight-featured-snippet-anchor-text">https://www.theverge.com/2020/6/4/21280115/google-search-engine-yellow-highlight-featured-snippet-anchor-text</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

Nice in theory.

## WTF?

In practice I see very inconsistent behavior:

- Sometimes the text is not highlighted and nothing happens
- Sometimes the text is highlighted but no scroll happens
- Sometimes you need to refresh the page to see anything happen

And some URLs always fail - while others work sporadically (wtf!).

Here's some examples:

<a taget="_blank" href="https://tomcritchlow.com/2020/06/09/quotebacks/#:~:text=a%20small%20tool%20called">This one doesn't work for me</a>

<a taget="_blank" href="https://tomcritchlow.com/2020/06/09/quotebacks/#:~:text=a%20small">This one works for me</a>

Do they work for you?

[Grab the bookmarklet from over here](https://supple.com.au/tools/scroll-to-text-fragment-generator-bookmarklet/) to play around and generate your own.

Can anyone shine light on what's going on? Comments welcome below or on [Twitter](https://twitter.com/tomcritchlow).
