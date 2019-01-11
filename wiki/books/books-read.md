---
books:
 - title: Finite & Infinite Games
   author: James Carse
   link: https://www.amazon.com/dp/B004W3FM4A/
   date_finished: 1/10/2019
   notes: Great unique book, wonderful analogy to finite and infinite writing....
pinned: true
---

{% for book in page.books | sort:"date_finished" %}
<div class="pa2 bb">

<div class="w-25 fl pa4">
  <img class="src="http://images.amazon.com/images/P/B004W3FM4A.01.LZZZZZZ.jpg" />
</div>

<div class="w-75 fl pa4">
  <h2>{{book.title}}</h2>
  <h3>{{book.author}}</h3>
  <div class="gray f5">Finished on {{book.date_finished}}</div>
  {{book.notes}}
</div>


</div>
{% endfor %}