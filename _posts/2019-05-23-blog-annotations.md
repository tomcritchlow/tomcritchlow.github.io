---
layout: blog
title: Integrating Annotations into a Static Blog
subtitle: Custom CSS, alerts and more
blogchain: annotations
topics: annotation
---

So I've been on and off experimenting with using annotations on this site for the last few years. My most recent post explored the UX of annotations - specifically because the mobile UX is probably the main thing preventing me from integrating annotations everywhere on my site.

Based on some comments and insights from that post I came up with this custom code that now runs on all of my blog posts:

<script src="https://gist.github.com/tomcritchlow/94d11ecdf9832bb4f8b9697d5ecb8d64.js"></script>

The key changes are:

- The sidebar is hidden by default on desktop and mobile
- The sidebar is styled white
- The close button for the sidebar is not top left which makes it slightly more useable on mobile.

But - we're still a ways from relying on annotations for a full commenting system. Most importantly - Hypothesis doesn't have a good concept of a site owner so there's no way to get alerts for new annotations on my posts.

Fortunately Hypothesis has a very easy to use API and I whipped up a quick annotations alerter - based on the following single API call:

<https://api.hypothes.is/api/search?wildcard_uri=https%3A%2F%2Ftomcritchlow.com%2F%2A&limit=50>

This is wrapped up in a Google Apps Script function here that fetches new annotations and emails me for new ones:

<script src="https://gist.github.com/tomcritchlow/50fba1a5af3f1c8e6dfab0a5e2e31294.js"></script>

And you can see the output spreadsheet here:

![](/images/gdocsannotations.png)

[Link to the spreadsheet here](https://docs.google.com/spreadsheets/d/104uxjkHheYTMmf3GkTwW-em_lVspqSYrEl0RqXNj4k8/edit#gid=0).

So - I'm not quite ready to ditch disqus and move completely to Hypothesis annotations but this at least makes annotations more robust and easier to use for you and me on my site. Try it out!

