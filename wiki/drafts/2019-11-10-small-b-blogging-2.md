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

Now let's try the old way[^1]

Ask questions.
Measure by engaged response not PVs
Put doodles in it (blogpunk)
Be weird (weird work)

Now let's try the old way[^2] [^2]: What's the deal with footnoes?

--

[^1]: Footnotes are the mind killer.  

[^2]: What's the deal with footnoes?

<script>

$( document ).ready(function() {
    var footnotes = $(".footnotes p");
    $("sup").each(function(index){
        $(this).append("<span class='sidenote'>"+footnotes[index].textContent+"</span>")
    });   
    $(".footnotes").hide()
});    


</script>

