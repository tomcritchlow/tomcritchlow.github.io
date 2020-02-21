---
layout: blog
title: How to Small-b-Blog
subtitle: Small B Blogging Part 2
---

How to do it.

Ask questions.
Measure by engaged response not PVs
Put doodles in it (blogpunk)
Be weird (weird work)

## Testing Footnotes

I met Jim [^jim](My old college roommate) at the station.

Inline notes will work even without the identifier:

I met Jim [^](My old college roommate) at the station.

<script>
var footnotes = $(".footnotes p");

$("sup").each(function(index){$(this).append("<span class='sidenote'>"+footnotes[index].textContent+"</span>")});

</script>

