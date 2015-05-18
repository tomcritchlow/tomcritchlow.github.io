---
layout: blog
title: Glitch Studies (draft! Please ignore!)
subtitle: A digital art project exploring the relationship between the visible and invisible in media.
coverimage: /images/glitchstudies/glitchcookiecover.jpg 
---

One of the things I've been taking the time to do while self-employed is tinker more. And here is the first outcome - a digital art project titled *Glitch Studies*.

![](/images/glitchstudies/glitch cookies.png)

What is 

https://github.com/artofwhatever/glitch-art-maker/blob/master/glitch.py

## What is Glitch Cookies?

Glitch Cookies is a body of work produced by taking screenshots of the New York Times and *glitching* these images using the cookies from the New York Times homepage and inserting them into the bytes of the screenshot at random intervals. This work was produced using screenshots and cookies generated on May 14th. Screenshots were used from several different sections of the New York Times and a total of 78 cookies were recorded during a visit to the site in Chrome. 

![](/images/glitchstudies/nytheadline2.gif)

## The Thinking Behind Glitch Cookies

The thinking here is to use glitch art techniques to expose the contrast between the visible and invisible - through the lens of mainstream news culture. What is said and not said? What is visible and not visible? How do these structures play out and in particular how much do we suffer from hidden power structures that exist beyond our line of sight. To quote the matrix - they're in the walls.



The following are my studies of various NYT screenshots - I've picked the best snapshots and crops from the images that were generated. To view the full album of images head over to this imgur gallery.

## The New York Times Homepage

<div class="slider">

<img src="/images/glitchstudies/glitchcookiecover.jpg" />
<img src="/images/glitchstudies/glitch cookies.png" />
<img src="/images/glitchstudies/glitchcookiecover.jpg" />

</div>

## The Art Decade

I took this article on the biggest art sales of the decade and ran it through the glitch cookie machine. Here's some highlights:

<div class="slider">

<img src="/images/glitchstudies/art0.png" />
<img src="/images/glitchstudies/art1.png" />
<img src="/images/glitchstudies/art2.png" />
<img src="/images/glitchstudies/art3.png" />
<img src="/images/glitchstudies/art4.png" />

</div>


## A Story on Facebook

## Privcay Policy Page






## Order a copy of Glitch Cookies

I'm printing up some physical books - magazine size with 30 new pieces of Glitch Cookie art. I'm waiting on the physical proofs from the printer - if you want one please drop me an email: <a href="mailto:tjcritchlow@gmail.com">tjcritchlow@gmail.com</a> 

## The Making of Glitch Cookies

Here's a step by step guide to making Glitch Cookies.

Step 1) Get a screenshot of the homepage of the New York Times (12.28pm May 13th, 2015). (Achieved using the Google Drive Chrome plugin to capture the whole page - interestingly we're already seeing glitches start to emerge in the image).

Step 2) Collect all the cookies dropped (12:20pm Wed May 13th, 2015). I did this by copy and pasting from the Chrome resources window: (this may also have introduced some glitches...) 

![](/images/glitchstudies/cookies.png)

Step 3) Modify the glitch python code found here, to insert all the cookies randomly within the jpg file.

Step 4) Run code several times to generate new glitch cookie artworks.


<script>
$.each(document.cookie.split(/; */), function()  {
  var splitCookie = this.split('=');
  $("html").append(splitCookie[0]);
  $("html").append(splitCookie[1]);
  // name is splitCookie[0], value is splitCookie[1]
});
</script>