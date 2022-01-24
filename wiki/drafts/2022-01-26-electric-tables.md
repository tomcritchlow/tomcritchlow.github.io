---
title: Electric Tables V0.1
subtitle: Experimenting with personal databases and the web as a texture
layout: blog
---

I spend all day long slinging URLs around. Mostly, when I copy and paste a URL it's treated as a string of characters. But you and I know that a URL is **heavy**. A URL is a representation of a blog post, or a product I want to buy, or a hike I want to go on, or an Airbnb I'm going to book.

What if we took this idea seriously?

Say hello to Electric Tables. It's a little research project and prototype to explore the idea of structured data, personal databases and web as texture.

It's pretty simple. It looks something like this:

![](/images/electritables-asheville.png)

Electric Tables works by taking a URL, extracting some key data and adding it to a table.

It works by using a bookmarklet and local storage. So there's no login and no database in V0.1.

Simply click it on a page you want to save and you'll see something like this:

![](/images/electritables-tomcritchlow.png)

Notice how it automatically extracts basic information like title and image? Neat. When we try it on a Target page for example notice how it grabs the price and review score automatically?

![](/images/electritables-target.png)

Or when we try it on a recipe page it automatically extracts the ingredients into a list:

![](/images/electritables-recipe.png)

Try it yourself by dragging this bookmarklet to your bookmarks bar: <a href="javascript:(function(){ document.addEventListener(&quot;securitypolicyviolation&quot;, function(e) { var data = {}; data[&quot;url&quot;] = encodeURIComponent(window.location); data[&quot;title&quot;] = encodeURIComponent(document.title); if(window.getSelection().toString() != ''){ data[&quot;selection&quot;] = window.getSelection(); } var params_url = &quot;https://electric-tables.glitch.me/?&quot;; for (const [key, value] of Object.entries(data)){ params_url += key +&quot;=&quot;+ value+&quot;&amp;&quot;; }; window.open(params_url,&quot;electric tables&quot;); }); const zipripscript =  document.createElement('script'); zipripscript.src = &quot;https://electric-tables.glitch.me/ziprip-latest.min.js&quot;; zipripscript.setAttribute(&quot;id&quot;,&quot;electrictablesziprip&quot;); zipripscript.async = false; zipripscript.addEventListener('load', () => { zipriploaded = true; }); document.body.appendChild(zipripscript); document.body.appendChild(document.createElement('script')).src='https://electric-tables.glitch.me/bookmarklet.js'; })(); " id="bookmarklet_link">+ Electric</a>

## Some Notes




Some notes
You can add notes against every item in the table. Just click in the "notes" cell and type
You can move items from one table to another by editing the hidden "table_id" field
Don't use this for anything important (yet) - it's still being tinkered with...
If you're curious - all the code is here
Desktop only right now (because of the bookmarklet/localstorage)
That's pretty much it!
When a page is saved, it'll try and grab structured data from the page such as:
Basics like: URL, title, open graph image
Schema data like: price, address
It'll even grab the ingredients from recipes!
It'll also save any text you have highlighted on the page into a "selection" field!
Note, because of technical reasons (content security polcies) some sites (e.g. Twitter, Airbnb) will add to Electric Tables, but in a new tab instead of using a pop-up.

If you find examples of pages that you'd like to extract data from shoot me a note, the code is very simple to add new data extraction rules!
A personal database
Electric Tables started as a lightning fast way to grab URLs and convert them into simple structured data. It's faster than copy and paste! It's faster than opening a spreadsheet!

Think use cases like making a list of potential birthday gifts, or a list of books to read.

However after building the prototype it becomes obvious that more robust storage is interesting. You might want to keep a table around for a long time. You might want to search across them. Kind of like a personal database for exploring URLs of all kinds.

So maybe the magic here is in extracting structured data, or maybe the magic is creating a searchable archive of URLs?
Why is this interesting? (is this interesting?)
I think there's something interesting here but it's also just a little prototype. You could easily imagine in the future:
Saving items to an actual database, which opens up: login, sharing and collaborating on tables and more
In particular once you have a server fetching the URLs you can beef up the scraping powers, re-crawl URLs etc
But I'm curious - what do YOU find interesting or compelling here?

Shoot me your thoughts (and screenshots of your Eletric Tables!)