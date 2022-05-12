---
layout: blog
title: Reflecting on things I failed to get done at Google
subtitle: A meditation on corporate frustration & autonomy
---

I'm kind of obsessed with how to get buy-in for your ideas.

- Exhibit A: My [book on independent consulting](https://tomcritchlow.com/strategy/)
- Exhibit B: My [SEO MBA online course in executive communication](https://seomba.com/executive-presence/)

I worked at Google between 2012-2014, first at the Google Creative Lab and then as part of an internal innovation team that would eventually build Google Jamboard. I thought it would be fun to dust off some of my old ideas and figure out why they never went anywhere.

This is one part nostalgia, and one part recording the ideas on my blog for history[^lawyers]. Maybe we can learn something about how to pitch ideas, how to get buy-in and examine corporate frustration and autonomy (or lack thereof).

[^lawyers]: Hopefully enough time has passed that no Gogole lawyers come after me...

Note that I worked on a bunch of other stuff while I was at Google[^dayjob] but these were ideas that were mine and I tried to get them off the ground.

[^dayjob]: It's worth noting that while it wasn't my job explicitly to come up with new ideas, it wasn't NOT my job either. In both roles there was a culture that encouraged "anyone to have ideas" - and I saw first hand lots of projects that started as a simple idea from a colleague or peer.

## Idea 1 - Google Workspace

*"Collaborate on projects, not just docs"*

**The idea**: A workspace for Google teams, combining Google+ streams, Gmail and Drive into one unified experience. Somewhere between Basecamp and Slack. This was *just* before Slack launched (Slack launched in 2013) and frankly I think it was a bit ahead of it's time.

This was (and is) *obviously* a good idea - for teams "all in" on Google Docs / Drive / Gmail / Hangouts it's always been frustrating keeping things organized and collaborating on projects[^collab].

[^collab]: It's remarkable how Google is spectacularly good at collaboration on documents and spectacularly bad at collaboration on projects.

Google has since launched Google WorkSpaces - they achieve some of the same goals but aren't anywhere near as fluid as Slack for team chat and collaboration.

There were some nice touches I remember. For example: every project would have it's own email alias - which would be a full gmail account that any member can send/receive from. Creating a kind of transparent-by-default email address. Not only useful for transparency within the team, but also useful for collaborating with external teams & partners. I guess this is like an over-engineered version of shared slack channels? ha!

**How I pitched it**: After mentioning it to Andy Berndt (the SVP running the Creative Lab) he got very excited about it and told me to work on this instead of everything else, but I wasn't allowed to tell anyone. *"This is the most important project in the lab, Tom"* I remember him saying.

Honestly I'm **still** not sure what to do with that information.

I worked in secret for a few weeks assembling some rough mockups and creating a narrative pitch deck, and then I don't think I ever got a meeting with Andy again before I got kicked out of the lab. Ha.

**Why it failed**: Well, aside from the loooooong history of Google fumbling the ball with real-time chat products.... I think there's two reasons it failed. Firstly, I was pitching it inside the Google Creative Lab and the lab hated working on anything that wasn't consumer facing (remember this was before Slack launched - and Slack kind of pioneered the consumerization of B2B software).

Secondly, I wish I'd had a basic prototype, even a basic clickable demo I think could have been powerful. Showing a little space where you can have chat, docs and shared calendar/gmail in one place... I pitched it by mocking up the UI instead of mocking up the work-flow. I think showing a sample project in-flow would have been more powerful than presenting static mocks of UI (and back then my design skills were much worse than they are now).

If you look at what Google Workspaces is today - it's actually a fairly faithful execution of what I had envisaged. But it's clunky and doesn't put **chat channels** as primary. In hindsight, if I'd pitched this with a stronger focus on mobile, real-time chat and lightweight ephemeral channels vs big heavy *projects* I think it could have gained a bit more steam.

## Idea 2 - Google Maps Search 2.0

*"Use maps to search, not just navigate"*

**The idea**: I remember one night at 9pm asking myself "where can I get a HDMI cable right now". Searching Google didn't give me the answer. Searching Google Maps told me I had to walk a mile to best buy. But the next day I noticed that Rite Aid 100 yards from my apartment sold them. Huh. This was the kernel of an idea - that Google Maps could be a far more powerful search engine, especially for non-navigational queries - driving consumer adoption of commercial queries in Google Maps would in turn unlock a huge revenue potential in Google Maps ads (something that's still anemic in Google today).

The idea I mocked up was basically a reverse web-index, indexing not just the local businesses but indexing their websites too and letting you do keyword search across it. So e.g. if you search for "lamb tagine" Google Maps should find that item on the restaurant menu (they do that a little bit today, but didn't do this at all in 2012).

This is still not a solved problem today. For example, I search for [Ethan Lipton](https://www.google.com/maps/search/ethan+lipton/@40.7054026,-74.023953,13z) on Google Maps and get a single result for Joe's Pub where Ethan Lipton *has played*, despite the fact that *he is about to play* a gig at [Barbes](https://www.barbesbrooklyn.com/) soon, near where I live.

Now, you could argue that people don't search Google Maps that way - that people use Google maps to search place names and categories (e.g. "museum of natural history" or "best brunch restaurant"). But I'd argue that **of course** people search this way - people just expect Google to work. **AND** - my argument is that IF you launch a new "Google Maps 2.0" campaign you'd get a ton more people using Google Maps in this way - driving up the commercial search volume inventory significantly.

**How I pitched it**: I pitched it by building an actual MVP. I'm still surprised I pulled this off, but I built a working prototype in Google Sheets (ha) that combined the Google Maps API and a web-crawler to mash up local results with an index of what was indexed on their websites to provide an MVP for certain categories of search (e.g. I managed this for restaurant menu items and some ecommerce categories).

It actually worked pretty well which I was amazed by and the underlying technology was simple - just combining the Google Maps places info with the Google Search crawl info of what was available.

**Why it failed**: The MVP worked remarkably well, but I *wish* I'd built a pretty front end on the prototype... Especially trying to get this idea through the stakeholders within the Creative Lab - every time I showed my spreadsheet prototype everyone laughed at me. The lab was so used to world class design that they simply didn't know what to do with a spreadsheet prototype.

Today - I have the skills to build a front end design on top of the data but back then I didn't have the skills...

In hindsight I think I'd have pitched it with three clear, distinct arguments:

1. A functional demo of the prototype, with a nicely designed front end. Probably recorded as a series of 60 second videos.
2. A business case - looking at the size of the Google Maps Ads revenue and the volume of commercial queries and estimating some potential revenue opportunity. The Creative Lab would have hated this kind of analysis but I think you could make a clear business case for the idea
3. A launch campaign. Part of the magic here is that it's as much about the new technology as it is about an excuse to re-introduce Google Maps search to consumers (and re-introduce Google Maps Ads to businesses). If you'd unveiled a "new kind of maps search" I think it would have done very well.

Apple Maps would launch later that year (and completely bomb) - maybe Google Maps wasn't seen as a big area of strategic priority...

## Idea 3 - Google Designer

*"A Google design tool with real time collaboration in your browser"*

**The idea:** When I was working on my pitch for Google Workspaces, I built my design and mockups on my own in secret. And I built them in Google Slides. Remember this is *years* before Figma launched - I didn't know how to use Adobe illustrator or the like, but I loved how you could resize a Google Slides canvas and do all kinds of basic design right there in your browser. I wrote [this post back in 2015 about using Google Slides as a basic design tool](https://tomcritchlow.com/2015/04/20/google-slides/).

Sure, using Google Slides as a design tool is a TERRIBLE idea, but on the other hand it's lightning quick, in the browser, free and, importantly, real-time collaborative!

My pitch was basically launch a basic design tool as part of the Google Docs suite:

- Microsoft Word : Docs
- Microsoft Excel: Sheets
- Microsoft Powerpoint: Slides
- Adobe illustrator: Designer

**How I pitched it:** This was the first big idea I had outside of the Creative Lab. I felt like I had more time to pitch the idea around but also less authority and access to senior leadership... So I pitched this one the only way I know how - I built a blog visible inside Google (hosted on an internal appengine instance) and wrote up my pitch. It was pretty similar to that blog post I linked above - showing how I use it, why opening up access to design is important etc.

**Why it failed:** This idea actually had some support - a few senior folks inside the Google Docs team felt like it would be a good idea and gave me a little encouragement but it never turned into anything more. I don't think it was seen as strategically important vs upgrades to the core docs suite...

Ultimately I wonder if I should have pitched this more like Canva than Figma. While personally I'd love to see a full featured Figma competitor from Google, maybe the better analogy is Canva - more like cloud hosted lightweight asset creation than full design product.

Some things I might have done differently with hindsight:

1. Focused on how big the opportunity is. I focused on how cool it would be but perhaps a bit more commercial analysis of Adobe could have given me some bigger numbers to throw around.
2. I wish I'd thought of the analogy of "We want to do for design in the browser what Gmail did for email in the browser". I think that wraps up so much of the idea in a way Googlers would have been excited about.
3. When I spoke with PMs on the Slides team they were mostly very unimpressed - not only did I have zero design background personally but also they felt like slides wasn't a vector based design tool so would need to be rebuilt from the ground up. Maybe starting with some senior designers inside Google would have been better than trying to win over PMs...

Still, even today I think if Google launched a serious real-time collaborative design tool in the browser it would be pretty cool. And it would seriously change the brand image of the Google Docs / Drive suite with something cool to talk about.

## Idea 4 - Google Cube

*"A physical assistant that can project light and scan docs"*

**The idea:** Ok, this one might not have been very practical but weirdly was perhaps my most promising idea. Basically it was a little device (we sketched it as a little black cube) that could sit on your kitchen table - it had voice commands and it had a tiny short throw projector so that it could project light onto the surface around it. Combined with vision recognition this allowed the device to project a basic UI onto a surface and let you speak and tap to interact with it.

This was heavily inspired by the work [Berg had just done for Google on smart lamps](http://berglondon.com/blog/2012/12/19/lamps/). In some sense adding the voice & document scanning was just a practical application that allowed all of the cool Berg work to come to life.

Honestly in hindsight I'm not quite sure how I missed the idea of a speaker. I'm an idiot I guess - when Alexa launched a few months later I was like *"oooooh right of course you just want to talk to it, and play music, that's 95% of the value"*. Still, I still like the idea of projecting light onto a surface. Some things this device could do beyond respond to audio controls:

- Scan documents (projecting light to the corners of the document so you know it's capturing correctly)
- Project UI controls onto a surface so you don't need to talk to it all the time
- Project things like recipes onto a countertop - essentially giving you a big, low res screen

**How I pitched it**: Umm, some sketches!? Honestly this idea has grown on me over time but at the time I thought it was just too far fetched to imagine that I could pitch a hardware product to Google and have them fund it... I made some concept sketches, did some explorations with short throw projectors and got a few people excited.

The core utility of projecting light / visual recognition - especially for scanning documents - got people excited, especially within the Docs team.

**Why it failed:** Again, in hindsight I missed the idea of a full voice assistant by a whisker. I think if I'd actually pushed for it I could have gotten some budget and a small team to build a prototype. At the time though the team I was working with was so focused on the Jamboard that it felt like a distraction. Maybe my biggest regret is not exploring a patent for the idea. Might have been something there and that would have been a nice status symbol...

⏱️⏱️⏱️

Anyway. I'm still wistful for what could have been. I think all these ideas had some kind of viable kernel. It's easy to look back with the virtue of hindsight, but it's interesting to me to note the timing:

1. Google Workspace, pitched in 2012, Slack launched in 2013
2. Maps Search, pitched early 2012, Apple Maps launched and flopped in Sep 2012
3. Google Designer, pitched in 2014, Figma launched in 2016
4. Google Cube, pitched early 2014, Alexa launched Nov 2014

I'm not really sure what to make of all that. Maybe my timing was just terrible? Or maybe my timing was amazing. Either way I certainly could have pitched some of these more strongly - it's a good reminder to actually put some conviction behind your ideas. At the time getting resistance felt like it shut the whole idea down but now, looking back I can see how I could have easily built out much more robust pitches and business cases for each of these.

Anyway, thanks for coming to my therapy session.