---
layout: blog
title: The Web of Mirrors
subtitlte: Reflections of our digital selves
---








<div class="videowrapper">
<h2 class="red absolute">Who do you want to be?</h2>
<video autoplay="true" id="videoElement"></video>
</div>




<style>
video{
    width:
}
</style>

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