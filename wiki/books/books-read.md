---
books:
 - title: Finite & Infinite Games
   author: James Carse
   link: https://www.amazon.com/dp/B004W3FM4A/
   date_finished: 1/10/2019
   notes: Great unique book, wonderful analogy to finite and infinite writing....
 - title: The Power
   author: Naomi Alderman
   link: https://www.amazon.com/dp/B01N0Z1EY0
   date_finished: 12/30/2018
   notes: Provocative premise but I felt it squandered an opportunity at a deeper political and/or emotional exploration of what would happen if teenage girls gained a new incredible power. Somehow it resorted to.... fucking and fighting?
pinned: true
---

{% for book in page.books | sort:"date_finished" %}
<div class="pa2 bb dib">

<div class="w-25 fl pa4">
{% assign bookimage = book.link | split:"/" %}
  <img src="http://images.amazon.com/images/P/{{bookimage | last}}.01.LZZZZZZ.jpg" />
</div>

<div class="w-75 fl pa4">
  <h2 class="ma0">{{book.title}}</h2>
  <h3 class="ma0">by {{book.author}}</h3>
  <div class="gray f5">Finished on {{book.date_finished}}</div>
  <p class="mt2">{{book.notes}}</p>
</div>


</div>
{% endfor %}