---
layout: blog
title: Privacy Glitch
subtitle: A digital art project exploring the relationship between the visible and invisible in media.
---

As we browse around the web we are constantly tracked. Unknown entities watch us like a million invisible CCTV cameras logging our every movement. *Privacy Glitch* is a digital art project designed to make these invisible power structures visible.

*Note: I originally did this work in 2015 but never got around to publishing. Digging back through my archives I found the glitched images of Trump and Clinton arresting and decided to get it up on my blog. Enjoy.*

I'm using a process known as *glitching* (and more specifically the process of *data-bending*). The source images are photos and screenshots taken from popular media sites and the characters inserted into those image files to produce the glitch effects are the contents of the tracking cookies generated when I visited these sites in my browser.

The final product is a series of images at once stark, abstract, colorful and broken. These images represent a visual manifestation of the invisible web of tracking cookies designed to erode our privacy.   

*Please note - because of the image handling capabilities of various browsers I recommend using the Chrome browser to view this page, other browsers may distort the images in interesting ways but I have curated these works to be best displayed in Chrome. Thank you.*

## The Thinking Behind Privacy Glitch

The thinking here is to use glitch art techniques to expose the contrast between the visible and invisible - through the lens of mainstream news culture. What is said and not said? What is visible and not visible? How do these structures play out and in particular how much do we suffer from hidden power structures that exist beyond our line of sight? This is a small project to try and begin to answer the question of how we talk about and think about these hidden network effects.

## nyt_glitch_studies

The New York Times generated 78 cookies when I visited the site. Inserting them into images and screenshots of the New York Times website I got the below series.

The first series of glitch studies are taken from screenshots of the New York Times. These images are more digital in nature and often wildly more colorful than other types of image:

nyt_glitch_studies_01:

<div class="slider">

<img src="/images/glitchstudies/glitchcookiecover.jpg" />
<img src="/images/glitchstudies/glitch cookies.png" />
<img src="/images/glitchstudies/nyt1.png" />

</div>

The second series is taken from individual images, in high resolution, taken from current affiars photo journalism on the New York Times.

nyt_glitch_studies_02:

<div class="slider">

<img src="/images/glitchstudies/driver-985-glitched.jpg" />
<img src="/images/glitchstudies/clinton-414-glitched.jpg" />
<img src="/images/glitchstudies/clinton-347-glitched.jpg" />
<img src="/images/glitchstudies/trumpnyt-811-glitched.jpg" />
<img src="/images/glitchstudies/nyt-harris-926-glitched.jpg" />
<img src="/images/glitchstudies/wallst-404-glitched.jpg" />

</div>

The third series is taken from a specific article on the [biggest art sales of the decade](http://www.nytimes.com/interactive/2015/05/12/arts/design/top-art-auction-sales.html). The juxtaposition of art imagery and glitch effects produces something that draws the eye from the physical to the digital, blurring boundaries and notions of offline and online.

nyt_glitch_studies_03:

<div class="slider">

<img src="/images/glitchstudies/art1.png" />
<img src="/images/glitchstudies/art2.png" />
<img src="/images/glitchstudies/art3.png" />
<img src="/images/glitchstudies/art4.png" />
<img src="/images/glitchstudies/art5.png" />

</div>


## The Wall Street Journal

The WSJ dropped 39 cookies on me.

This study is of a drawing of Ross Ulbricht, founder of the anonymous marketplace Silk Road. The double face that emerges reminds us of the many facets to this story and the idea of multiple personalities - Ross himself created a persona (the dread pirate roberts) to hide behind and claimed that it wasn't a single identity but rather one run by many people:

wsj_glitch_studies_01:

<div class="slider">

<img src="/images/glitchstudies/wsj-silkroad-182-glitched.jpg" />
<img src="/images/glitchstudies/wsj-silkroad-205-glitched.jpg" />
<img src="/images/glitchstudies/wsj-silkroad-316-glitched.jpg" />
<img src="/images/glitchstudies/wsj-silkroad-466-glitched.jpg" />

</div>


## The Making of Glitch Cookies

As a creative tinkerer I owe a huge debt of gratitude to those that have come before me. Most of the code for this project was copied and pasted from code found online. In honor of the remix culture on the web here is a step by step guide on producing your own privacy glitch: 

Step 1) Get a screenshot of the homepage of the New York Times (12.28pm May 13th, 2015). (Achieved using the Google Drive Chrome plugin to capture the whole page - interestingly we're already seeing digital artefacts start to emerge in the image).

Step 2) Collect all the cookies dropped (12:20pm Wed May 13th, 2015). I did this by copy and pasting from the Chrome resources window: 

![](/images/glitchstudies/cookies.png)

Step 3) Modify the glitch python code found here, to insert all the cookies randomly within the jpg file.
https://github.com/artofwhatever/glitch-art-maker/blob/master/glitch.py

A sincere gratitude of debt is due to artofwhatever for their wonderful python code without which this project would not have been possible.

Step 4) Run code several times to generate new glitch artworks and choose the most interesting. Note that many of them will not render properly in the mac preview window.

## Signed Prints & Commissions?

If anyone wants a signed print of one of these privacy glitch prints drop me an email! tjcritchlow@gmail.com I'd also consider a commission too if you want to email me your own screenshots and the contents of the cookies I'll whip up some images for you.