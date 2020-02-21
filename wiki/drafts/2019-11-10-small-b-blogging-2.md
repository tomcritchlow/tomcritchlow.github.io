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

[^1]: Footnotes are the mind killer.  

Ask questions.
Measure by engaged response not PVs
Put doodles in it (blogpunk)
Be weird (weird work)
Ask questions.
Measure by engaged response not PVs
Put doodles in it (blogpunk)
Be weird (weird work)
Ask questions.
Measure by engaged response not PVs
Put doodles in it (blogpunk)
Be weird (weird work)[^3]

[^3]: Now what happens with *Markdown in markdown* footnotes? E.g. ![](https://tomcritchlow.com/images/year-5-chart.png)


Now let's try the old way[^2]

[^2]: What's the deal with footnoes?


<script>

$( document ).ready(function() {
    var footnotes = $(".footnotes p");
    $("sup").each(function(index){
        $(this).replaceWith("<label for='"+index+"' class='margin-toggle sidenote-number'></label><input type='checkbox' id='"+index+"' class='margin-toggle'/><span class='sidenote'>"+footnotes[index].textContent.slice(0,-2)+"</span>")  
    });   
    $(".footnotes").hide()
});    


</script>

