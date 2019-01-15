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
 - title: Perdido Street Station
   author: China Mieville
   link: https://www.amazon.com/dp/B000FBFO8C/
   date_finished: 12/01/2018
   notes: A staggering, creative, filthy, engrossing tour through a world with such magical and rich depths. No one can build worlds like China.
 - title: Satin Island
   author: Tom McCarthy
   link: https://www.amazon.com/dp/B00MZWA678/
   date_finished: 03/21/2018
   notes: William Gibson meets Kafka. A corporate strategy consultant / ethnographer ponders the meaning of life and searches for the Great Report.
pinned: true
---

{% for book in page.books | sort:"date_finished" %}
<div class="pa2 bb dib" id="{{forloop.index}}">

<div class="w-25 fl pa4-l">
{% assign bookimage = book.link | split:"/" %}
  <img src="http://images.amazon.com/images/P/{{bookimage | last}}.01.LZZZZZZ.jpg" />
</div>

<div class="w-75 fl pa4-l">
  <h2 class="ma0">{{book.title}}</h2>
  <h3 class="ma0">by {{book.author}}</h3>
  <div class="gray f5 mt2 mb2">Finished on {{book.date_finished}}</div>
  <p class="">{{book.notes}}</p>
</div>


</div>
{% endfor %}