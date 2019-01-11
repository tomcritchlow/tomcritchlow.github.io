---
books:
 - title: Finite & Infinite Games by James Carse
   link: https://www.amazon.com/dp/B004W3FM4A/
   date_finished: 1/10/2019
pinned: true
---

{% for book in page.books | sort:"date_finished" %}
<div class="">
{{book.title}}

</div>