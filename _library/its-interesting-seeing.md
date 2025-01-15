---
title: "its-interesting-seeing"
date_saved: 2021-12-12
tags: ["microblog"]
link: "http://tomcritchlow.micro.blog/2021/12/12/its-interesting-seeing.html"
---
It's interesting seeing Dave Winer playing with search as a new primitive on his "blog" (I put it in quotes because his blog is a mega-archive and leviathan body of work)...

<blockquote class="quoteback" darkmode="" data-title="Scripting%20News%3A%20Sunday%2C%20December%2012%2C%202021" data-author="@davewiner" cite="http://scripting.com/2021/12/12.html#a152131">
A new dimension has opened up. Until now writing has been more or less Of The Moment. As Google has punished me for not supporting their various <a href="http://this.how/googleAndHttp/" target="_blank" rel="noopener">hijacks</a> of the web, the writing has become more ephemeral, kind of like Twitter -- once written -- hard to find again. With Daytona all of a sudden my <a href="https://en.wikipedia.org/wiki/Memex" target="_blank" rel="noopener">memex</a> has memory. My writing is upgraded a billion percent.
<footer>@davewiner <cite><a href="http://scripting.com/2021/12/12.html#a152131">http://scripting.com/2021/12/12.html#a152131</a></cite></footer>
</blockquote>
<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

Makes me think about ways to upgrade search as a more powerful primitive on my own site....

Right now I'm using a version of [Craig Mod's search script for static site](https://gist.github.com/cmod/5410eae147e4318164258742dd053993) and it's fine. Functional but not really transformative.

Instead I'm thinking about a new /search page that pulls together:

* Blog archive (obvs)
* Notes archive via microblog API
* Full tweet archive (I'd self host a copy of my own tweets to do this)
* My wiki and saved notes

Making *everything* searchable feels like fun and it might surface some nice things....

**Update 12/14**: Hmm I just downloaded by twitter archive and tweet.js is 50MB so it's not going to be practical to host and search that everytime someone uses my search box.... 
