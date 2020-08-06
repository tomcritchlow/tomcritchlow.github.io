---
layout: custom
title: A Web of Mirrors
subtitle: Reflections of our digital selves
---

<style>
.posttitle{
-webkit-box-reflect: below 0px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(0%, transparent), to(rgba(255, 255, 255, 0.2)));
margin-bottom:100px;
font-family:Inconsolata;
font-weight:100;
}

.reflection{
-webkit-box-reflect: below 0px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(0%, transparent), to(rgba(255, 255, 255, 0.2)));    
}

video{
width:100%;
}
</style>

We strive for identity and escape the shadows of ourselves. But digital spaces are unfluid and unspaced, unbounded and unescaped. This idea creates a dissonance between our behaviors and our actions.

What should be

<div class="bg-grey">
For the best reading experience this essay requires access to your webcam for some special effects. Please activate here.
</div>

What if we have a little row of circles at the top of people reading the essay right now?? like insta?

<div class="w-50 center reflection">
<div class="videowrapper">
<h2 class="red absolute"><marquee>Who do you want to be?</marquee></h2>
<video autoplay="true" id="videoElement"></video>
</div>
</div>

We strive for identity. We seek meaning reflected back at ourselves.

But our sense of identity is undermined. The mirror is a funhouse. Our selves are reflected in a distorted way.

What space can we be ourselves?


<iframe src="https://giphy.com/embed/l4hLRAwCyCjXiPbos" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cinemagraph-cinemagraphs-l4hLRAwCyCjXiPbos">via GIPHY</a></p>

<script>
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
navigator.mediaDevices.getUserMedia({ video: true })
.then(function (stream) {
video.srcObject = stream;
})
.catch(function (err0r) {
console.log("Something went wrong!");
});
}</script>