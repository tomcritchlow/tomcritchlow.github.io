---
title: Electric Tables V0.1
subtitle: Experimenting with personal databases and the web as a texture
layout: blog
---

I spend all day long slinging URLs around. Mostly, when I copy and paste a URL it's treated as a string of characters. But you and I know that a URL is **heavy**. A URL is a representation of a blog post, or a product I want to buy, or a hike I want to go on, or an Airbnb I'm going to book.

What if we took this idea seriously?

Say hello to Electric Tables. It's a little research project and prototype to explore the idea of structured data, personal databases and web as texture.

It's pretty simple. It looks something like this:

![](/images/electrictables-asheville.png)

Electric Tables works by taking a URL, extracting some key data and adding it to a table.

It works by using a bookmarklet and local storage. So there's no login and no database in V0.1.

Simply click it on a page you want to save and you'll see something like this:

![](/images/electrictables-tomcritchlow.png)

Notice how it automatically extracts basic information like title and image? Neat. When we try it on a Target page for example notice how it grabs the price and review score automatically?

![](/images/electrictables-target.png)

Or when we try it on a recipe page it automatically extracts the ingredients into a list:

![](/images/electrictables-recipe.png)

You can change which table it saves to in the dropdown at the top (it defaults to the last used). And you can edit or add fields of data by adding rows.

Try it yourself by dragging this bookmarklet to your bookmarks bar:

<a href="javascript:(function(){ document.addEventListener(&quot;securitypolicyviolation&quot;, function(e) { var data = {}; data[&quot;url&quot;] = encodeURIComponent(window.location); data[&quot;title&quot;] = encodeURIComponent(document.title); if(window.getSelection().toString() != ''){ data[&quot;selection&quot;] = window.getSelection(); } var params_url = &quot;https://electric-tables.glitch.me/?&quot;; for (const [key, value] of Object.entries(data)){ params_url += key +&quot;=&quot;+ value+&quot;&amp;&quot;; }; window.open(params_url,&quot;electric tables&quot;); }); const zipripscript =  document.createElement('script'); zipripscript.src = &quot;https://electric-tables.glitch.me/ziprip-latest.min.js&quot;; zipripscript.setAttribute(&quot;id&quot;,&quot;electrictablesziprip&quot;); zipripscript.async = false; zipripscript.addEventListener('load', () => { zipriploaded = true; }); document.body.appendChild(zipripscript); document.body.appendChild(document.createElement('script')).src='https://electric-tables.glitch.me/bookmarklet.js'; })(); " id="bookmarklet_link">+ Electric</a>

## Some Notes

A few things to note:

- You can add notes against every item in the table. Just click in the "notes" cell and type
- You can move items from one table to another by editing the hidden "table_id" field
- Don't use this for anything important (yet) - it's still being tinkered with...
- If you're curious - all the code is here
- Desktop only right now (because of the bookmarklet/localstorage)
- [All the code is here if you want to poke around](https://glitch.com/edit/#!/electric-tables) (poorly documented right now, sorry! DM me and I can walk you through it)

When a page is saved, it'll try and grab structured data from the page such as:
- URL, title, open graph image
- Schema data like: price, address, recipe ingredients
- It'll also save any text you have highlighted on the page into a "selection" field!

Note, because of technical reasons (content security polcies) some sites (e.g. Twitter, Airbnb) will add to Electric Tables, but in a new tab instead of using a pop-up and it won't grab much additional data..

## What Electric Tables Could Be

Electric Tables V0.1 is really just a sketch. It's a working prototype but it's pretty rough around the edges. It still has bugs and doesn't really do all the things I'd want it to. But I wanted to release it early to get feedback and figure out what to do with it. Should I invest time in making it robust and polished? Would someone else who can actually code run with it and build a better version?

I'm not sure where it goes from here, but here are some directions I'd be excited about:

### Customizable

The data extraction component is always going to be fragile. Web pages change. Some pages (e.g. Amazon) are actively hostile to data extraction. And the web is vast and weird. I want Electric Tables to be a general purpose tool so it wouldn't be that hard to have a page where the user could define their own data extraction rules.

I'm thinking you could set something like:
- domain.com: "xpath | regex | CSS selector"

Then when the bookmarklet grabs the data from the page it adds whatever data it can from the rule you set.

Not only would this make Electric Tables customizable but it would also make it very easy to fix if one of the scrapers stopped working in the future (this is also where an [open scraping database](https://tomcritchlow.com/2021/03/29/open-scraping-database/) would be useful!).

### Hosted & Collaborative

Right now Electric Tables stores data in Chrome localstorage. There's no database. It's easy to imagine that this could run on a server where the data extraction is done both client side by the bookmarklet AND server side by fetching and crawling the URL.

Once you have a hosted version and the data stored in a database you can do some key things like collaborate on tables! This is a huge and basic feature that's just a bit outside of my coding abilities unfortunately. Imagine being able to quickly spin up a table for a list of URLs and just share it by sharing the URL. Whether it's collaborating on a list of potential Airbnbs or gift ideas for the holidays.

The server side scraping can also do some more heavy lifting - such as store the entire page contents in the database. This enables full text search, the ability to re-crawl URLs and more.

This is all technically very feasible - but requires a lot more infrastructure to build things like login, databases and URL crawling...

### Saving & Publishing?

Finally - what if Electric Tables wasn't just about saving, but about publishing too?

It's frustrating to me that most CMSs don't really handle tabluated data. I'm using a static site so it's even worse but even on this site I do things like maintain a list of books in a YAML file format:

![](/images/yaml-ugh.png)

Or, maintain a list of RSS feeds in a spreadsheet:

![](/images/rss-screenshot.png)

What if both of these could be powered by Electric Tables? After all what I really want is for them to be my own little table of structured data. I want them to be web native and addressable.

Maybe you can publish any Electric Table as a JSON endpoint?

## What's Interesting? (Is this interesting?)

I'd love your feedback. I'm kind of stalled at the V0.1 phase here - rebuilding this as a hosted NodeJS app feels *just about* within my skillset but likely a few solid weeks of work (half of which would probably be learning NodeJS!).

Is it worth it? If you're a real developer want to collaborate?

Do you have ideas for where this could go?

Drop me a note - I'd love to hear your ideas and feedback.

[@tomcritchlow](https://twitter.com/tomcritchlow) (DMs open) or tjcritchlow@gmail.com