---
layout: blog
title: Quotebacks for Firefox is here!
subtitle: Plus a new release for Chrome
---

Quotebacks has been out for a few weeks now - with some lovely feedback. Thank you to everyone who's used it, helped share it and provide feedback, bug reports and even pull requests!

Thank you.

Perhaps my fave writeup was from Kicks Condor - who described Quotebacks as a "sneaky strategy" which I quite like:

<blockquote class="quoteback" darkmode="" data-title="Admiring%20the%20Quotebacks%20Strategy" data-author="@kickscondor" cite="https://www.kickscondor.com/admiring-quotebacks-strategy">
<p>The novel styling of quotebacks is not immaterial. The elegant formatting - and
even the slight hover effect - creates desire to be quoted. Just as reading a
book with gorgeous typesetting and paper aroma alone fills one with desire to
write. (“This book sucks - but I can almost picture the book that might live up
to a binding of this quality…”) The styling gives the Web texture and physical
appeal that it is distinctly lacking.</p>
<p>If the Web is going to be treated as a place to drop embeds, this extension
embraces that. Here are some more good-lookin’ embeds for ya.</p>
<p>And I actually hope that quotebacks become a more general thing. Imagine if you
could snip video or podcast segments and spit out a block that is also
recognizable as a quoteback. The Web contains and wraps those fragments,
seeds in its garden.</p>
<footer>@kickscondor <cite><a href="https://www.kickscondor.com/admiring-quotebacks-strategy">https://www.kickscondor.com/admiring-quotebacks-strategy</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

Anyway - today we're pleased to release the first (slightly experimental) Firefox version of Quotebacks:

**[Get Quotebacks for Firefox here](https://addons.mozilla.org/en-US/firefox/addon/quotebacks-quote-the-web/)**

![](/images/quotebacks-firefox.png)

## Updates & Improvements

The Chrome version is updated too - we've been gradually releasing some bug fixes and improvements including:

- Dark mode support (add darkmode="true" to the quoteback)
- Screen reader support for the embed
- Fixed assorted bugs (inc one for single quotes in titles)

Get it for Chrome: [quotebacks.net](https://quotebacks.net)

## Cross-Platform Technical Details

For those who care about some of the technical details:

- Managing releases for Chrome and Firefox has been exhausting. The additional overhead, testing and admin requirements has been significantly increased vs just one platform.
- Both Chrome and Firefox can be frustrating gatekeepers. Chrome for their lack of information and Firefox for their lack of flexibility.
- Hopefully the major discrepancies are resolved - I was largely surprised how easy it is to port a Chrome extension to Firefox. You can mostly copy and paste it and it'll "just work"
- The major headache was around web components. I would recommend not using web components in extensions. Ha.

## What's Next?

Now that we have some basic bugs squashed and Firefox released into the world, Toby and I can turn our eye to the longer-term roadmap and vision for where this might go next. If you have strong opinions let's hear em.

Thanks
