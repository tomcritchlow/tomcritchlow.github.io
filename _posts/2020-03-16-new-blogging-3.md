---
layout: blog
title: New Blogging 3 - Blog Patterns
subtitle: Fiddling with the deckchairs...
blogchain: new-blogging
---

*This post is a retreat from the crazy world into the [domestic cozy](https://www.ribbonfarm.com/series/domestic-cozy/) self-care of fiddling with my blog.*

I've been fiddling with my blog lately as a way to distract myself from the world. I've been thinking a lot about the new age of blogging and how structures are changing. Venkatesh in [a text renaissance](https://www.ribbonfarm.com/2020/02/24/a-text-renaissance/) outlines some ways the textual model is evolvoing and what might be "next".

I'm slowly formulating a response to that post but one piece of the puzzle for the "future of blogs" is better templating and components. Especially for the new hotness of static site generators like Jekyll (what I run my site on) and Gatsby etc.

Yes - we've had plugins since forever but plugins are also highly problematic. They require an "install" mindset and in the Wordpress ecosystem plugins have become synonomous with security issues and hacks.

Installing plugins is too "heavy". What we need is more like a CSS library of **blog patterns** that allow you to adopt new styles, techniques and approaches without having to actually install any code - think more copy and paste.

To that end - this is definitely not a set of re-useable patterns (ha!). One day when I get more time perhaps... For now - here's some fiddling I've been doing on my own blog that might be of interest:

## Static Site Search (Thanks Craig Mod!)

Craig Mod posted a lovely little code snippet that adds blazing fast site-search to static sites. The [code is here](https://gist.github.com/cmod/5410eae147e4318164258742dd053993).

What's great about this code is that by relying on keyboard shortcuts instead of UI you can install it in two seconds for any static site. Craig gives instructions for Hugo but if you look at the comments I provide the code for Jekyll sites. Look how nice this is!

![](/images/craig-mod-search.png)

For *my own* site I've added a search icon and tweaked a bunch of things. Mostly this has just made the design worse (ha, sorry Craig!) but I like having the search icon. I'll improve the design as I go.

Try it out! The search works across the blog, my blogchains and my wiki. Be warned the wiki has a bunch of nonsense and half-written thoughts in there!

## Expand/Collapse Index

Inspired by [Dave Winer](http://scripting.com/) and from using [Roam](https://roamresearch.com/) too much I was looking for some way to create an outline-like experience for my site. Especially as I sprawl across blogging, wikis, blogchains, book writing etc.

![](/images/tomcritchlow-expand.png)

This index expand/collapse UX is just out of the box HTML functionality with the [details tag](https://www.w3schools.com/tags/tag_details.asp) so this is very easy to copy!

[Try it out on my homepage here](https://tomcritchlow.com/).

## A new simpler approach to margin notes

Finally - I've had margin notes for a long time on this site but writing them has always been a pain. It's written as a Jekyll include function. So to make a margin note I'd write something like this[^ack]:

```
I like this idea - that the most useful thing you need client input and co-creation on is the “base reality” - the “Who, What, Where”. For consultants coming in from the outside attempting to “solve problems” for clients the biggest flaw in generic strategies is not properly accounting for who is at the company, what we’re actually trying to solve and where this strategy will play out{% include tufte-sn.html id="just" content="Recall from <a href='https://tomcritchlow.com/2019/11/19/optimism-operating-system/'>chapter 2</a> - there is no 'just' in consulting - clients are ecosystems in balance..." %}.
```

[^ack]: Ha. The irony. This is actually not the code - I can't figure out how to get includes and code blocks to play nice in markdown. Fuck it. We'll fix it later. [View the post on Github to see the real code format](https://github.com/tomcritchlow/tomcritchlow.github.io/blob/master/_posts/2020-03-16-new-blogging-3.md).

The two most annoying things about this are a) having to switch from writing markdown to writing HTML and b) the non-standard markup / presentation.

So I switched to using the standard markdown footnotes code like this:

    I like this idea - that the most useful thing you need client input and co-creation on is the “base reality” - the “Who, What, Where”. For consultants coming in from the outside attempting to “solve problems” for clients the biggest flaw in generic strategies is not properly accounting for who is at the company, what we’re actually trying to solve and where this strategy will play out[^1].
    
    [^1]: Recall from [chapter 2](https://tomcritchlow.com/2019/11/19/optimism-operating-system/) - there is no 'just' in consulting - clients are ecosystems in balance...

And then using a little javascript to turn footnotes into margin notes client side:

    $( document ).ready(function() {
        var footnotes = $(".footnotes p");
        $("sup").each(function(index){
            var fn = footnotes[index].removeChild(footnotes[index].lastChild);
            $(this).replaceWith("<label for='"+index+"' class='margin-toggle sidenote-number'></label><input type='checkbox' id='"+index+"' class='margin-toggle'/><span class='sidenote'>"+footnotes[index].innerHTML+"</span>")  
        });   
        $(".footnotes").hide()
    });    

I don't love the idea of doing this client-side but makes the writing portion much smoother and gives me more confidence that if I ever have to export this writing into another platform it'll be easier to carry the footnotes over.


## Blogchains

I've had blogchains going for a while on this site (this post is part of the new blogging blogchain!) but I've recently been thinking about the UX and overall experience and design of blogchains so [I made an are.na channel here](https://www.are.na/tom-critchlow/blogchains) to start collecting inspiration, design and ideas for ways to evolve the blogchain format.

If you have an arena account come join in!

## Open Transclusion from Toby

Meanwhile - in other blog patterns news my buddy Toby from Subpixel Space created this beautiful looking "open transclusion" technology:

>My own blogging is one context in which I’ve seen this tension play out, and have been working to explore ways of making my texts richer. A lot of the ideas I talk about in various pieces of writing are connected to one another. When I publish an essay, I’m not done with it. The ideas live on and get renewed, reused, and recycled in later works. Some sentences contain definitions that are core to my mental models, and there are whole paragraphs that might be useful out of context. I’m building my knowledge network in mind maps and behind various SaaS APIs, but how can I publicly show my thinking to be part a cohesive worldview?

[Check out the full code over on subpixel.space](https://subpixel.space/entries/open-transclude/).

(Yes I know I really need to get around to plugging this into my own site but just haven't had time, sorry Toby!)

--

What other new and funky blog formats are out there? What do you have cooking up? Bonus points for blog patterns that work for static sites like Jekyll.

Much love.