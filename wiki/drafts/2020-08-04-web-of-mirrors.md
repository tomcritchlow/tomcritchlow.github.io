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

video{
width:100%;
}
</style>




What if we have a little row of circles at the top of people reading the essay right now?? like insta?

<div class="w-100">
<div class="videowrapper">
<h2 class="red absolute"><marquee>Who do you want to be?</marquee></h2>
<video autoplay="true" id="videoElement"></video>
</div>
</div>

We strive for identity. We seek meaning reflected back at ourselves.

But our sense of identity is undermined. The mirror is a funhouse. Our selves are reflected in a distorted way.

What space can we be ourselves?


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