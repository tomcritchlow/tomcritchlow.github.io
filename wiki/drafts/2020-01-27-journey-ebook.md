---
layout: blog
title: Building an ebook version of Journey to the End of the Night for Erin
subtitle: Technical specs, challenges and creative sparks
---

I'm so proud of Erin for completing her [kids book Kickstarter](https://www.kickstarter.com/projects/erinprz/journey-to-the-end-of-the-night-a-childrens-book) last year. Successfully completing a Kickstarter is a wild feeling but in hindsight it feels as much like the start of a race not the end!

Erin spent much of last year buried deep in logistics - print proofing, file layout, shipping research, packaging design and so much more to bring the project to life. Then we spent a mad 72 hours shipping out the physical copies.

Ironically, the ebook version of the book ended up shipping after the physical one did, and that falls on my shoulders... (btw [the physical version of the book and art prints are available to purchase on Etsy](https://www.etsy.com/shop/ErinprzArt) now if you missed the Kickstarter!)

*TL;DR I had fun building the ebook, sorry it's late and if you don't care for the theory and just want to [skip straight to the ebook launch it here](http://erinprz.com/ebook/)!*

## A Personal Creative Coding Challenge

I thought it would be fun to add an ebook option to the Kickstarter and as a way to have a digital reference for the book. A way to support Erin's Kickstarter and scratch my itch for a creative coding project at the same time.

I've spent much of my spare moments over the past 2-3 months working on this and honestly it's still not perfectly polished. About 70% of the way through the project I realized that my default assumption of being able to build a landscape web HTML experience was flawed on iOS. It's just not possible. Still I persevered...

*Reminder: I am a self-taught duct-tape coder and designer not trained or even practiced in either!*

It's refreshing though to have creative projects where there's some expectation - I've done this a few times: this blog, [our art business](https://www.fiercelycurious.com/) and the ebook - projects where it's a creative outlet but there's at least *some* external pressures and expectations. That pressure helps to force a way through creative blocks that I might otherwise abandon...

## The Ebook!

I'm pretty happy with how this came out! Launch the ebook here: [erinprz.com/ebook](http://erinprz.com/ebook/).

It works mostly fine on both mobile and desktop:

![](/images/ebook-screenshots.png)

The biggest design decision in porting from print to web was deciding to split out the text onto it's own screen. It's just not possible on the screen to experience the text in the same way you can in print - especially on small phone screens!

So we decided to split it out, compare the digital layout (left) with the print layout (right) here:

![](/images/ebook-spreads.png)

Let's call this launch a beta shall we? See any bugs hit me up.

## Lessons Learned & Limitations

Here's some observations from building this project:

### 1) Apple's Web-Hostile Stance

Honestly let's talk about the elephant in the room. If you try and launch the ebook on an iphone you might get this:

![](/images/ebook-ios.png)

Ick.

Now I'm no pro developer but this is squarely Apple's fault (as if I needed more reason to dislike Apple). There's no ability to launch a fullscreen HTML experience on iOS and they make it very difficult to create a PWA experience.

Yes - there's the PWA option that allows for fullscreen but this just isn't natural for users and Apple doesn't make it easy.

It makes me sad how web-hostile Apple is. And yes, this probably would have been a great project to learn Swift but honestly - oof trying to learn new skills from scratch when you've got a full time job and two kiddos and family commitments...

### 2) Embracing hyperlinked code comments

Honestly I'm not sure why I didn't do this earlier in my coding "career" but...

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Love commenting my code! (am I doing it right?) <a href="https://t.co/VISUeGtpG8">pic.twitter.com/VISUeGtpG8</a></p>&mdash; Tom Critchlow (@tomcritchlow) <a href="https://twitter.com/tomcritchlow/status/1202771799462875136?ref_src=twsrc%5Etfw">December 6, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Sticking the stackoverflow URL into my code as a comment is a great way to easily refer back to the source! And let's be honest for all my coding projects I'm heavily relying on SO!

### 3) SwiperJS :(

At the beginning of the project I thought I could use [swiper.js](https://swiperjs.com/) to power the swipe experience but after building it I found out that the way the library handles offscreen canvas just overwhelmed mobile devices. Too many full screen image swipes and it chokes out and crashes.

There's a chance that this was my poor implementation (disclaimer: not a coder) but I did try a few different ways including lazy-loading the images and more but just couldn't get it to work.

The end result is that a) I ended up building my own screen advance script and b) I abandoned any swipe based interaction. Especially when navigating between full-screen and drag to refresh etc on small screens the swipe interaction is just too problematic....


## Stories format and digital books

Finally - where does this leave us and what did I learn about porting a picture book to the web?

From Robin Sloan's [FISH: a tap essay](https://www.robinsloan.com/fish/) to the [NYPL experimenting](https://www.nypl.org/blog/2018/08/22/instanovels) with posting entire books into the Instagram story format I remain convinced that tappable stories are a magical format and can support long-form narrative.

Unfortunately the web's ability to create tappable stories is **still** underwhelming. We're making progress but it feels like it's moving at a snail's pace.

If we'd had more time and infinite creative capacity I'd have loved to try and port Erin's book into a portrait screen orientation and power the whole thing in a tappable format - perhaps building it in AMP stories and using [AMP image pan effects](https://amp.dev/documentation/examples/visual-effects/ken_burns/preview/?format=websites) and maybe even an audio reading of the book too!

But alas time is not infinite and this ebook is already late... So here we are. I hope you enjoy it - I'm happy that this ebook reflects faithfully to Erin's magical print book and shows off Erin's art for more people to see.

Of course... to really support the project there's always [the actual book on Etsy](https://www.etsy.com/listing/737130607/journey-to-the-end-of-the-night?ref=shop_home_active_1) :) 