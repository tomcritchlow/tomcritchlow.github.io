---
layout: blog
title: The Web of Mirrors
subtitlte: Reflections of our digital selves
---








<div class="videowrapper">
<video autoplay="true" id="videoElement"></video>
</div>




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