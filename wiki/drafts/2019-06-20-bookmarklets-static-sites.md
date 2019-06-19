---
title: Using Bookmarklets to Script Static Sites
subtitle: Auto-generating text snippets using a little javascript and bookmarklet magic
layout: blog
---



<a class="bookmarklet" href="javascript:(function()%7Bfunction%20getSelectionText()%20%7Bvar%20text%20%3D%20%22%22%3Bif%20(window.getSelection)%20%7Btext%20%3D%20window.getSelection().toString()%3B%7D%20else%20if%20(document.selection%20%26%26%20document.selection.type%20!%3D%20%22Control%22)%20%7Btext%20%3D%20document.selection.createRange().text%3B%7Dreturn%20text%3B%7Dfunction%20blogquote()%20%7Bvar%20title%20%3D%20document.title%3Bvar%20url%20%3D%20document.location%3Bvar%20host%20%3D%20location.hostname%3Bvar%20quote%20%3D%20getSelectionText()%3Bvar%20mdfile%20%3D%20%22%3E%22%2Bquote%2B%22%5Cn%5Cnsource%3A%20%5B%22%2Btitle%2B%22%5D(%22%2Burl%2B%22)%22%3Bprompt(%22copy%22%2Cmdfile)%3B%7Dblogquote()%7D)()">this link</a>


[Quote text](javascript:(function()%7Bfunction%20getSelectionText()%20%7Bvar%20text%20%3D%20%22%22%3Bif%20(window.getSelection)%20%7Btext%20%3D%20window.getSelection().toString()%3B%7D%20else%20if%20(document.selection%20%26%26%20document.selection.type%20!%3D%20%22Control%22)%20%7Btext%20%3D%20document.selection.createRange().text%3B%7Dreturn%20text%3B%7Dfunction%20blogquote()%20%7Bvar%20title%20%3D%20document.title%3Bvar%20url%20%3D%20document.location%3Bvar%20host%20%3D%20location.hostname%3Bvar%20quote%20%3D%20getSelectionText()%3Bvar%20mdfile%20%3D%20%22%3E%22%2Bquote%2B%22%5Cn%5Cnsource%3A%20%5B%22%2Btitle%2B%22%5D(%22%2Burl%2B%22)%22%3Bprompt(%22copy%22%2Cmdfile)%3B%7Dblogquote()%7D)())