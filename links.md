---
layout: blog
title: Links I Find Interesting
links:
  - date: "05.23.2016"
    link: "I found this article great"
  - date: "05.22.2016"
    link: "This is interesting" 
---

{% for link in links %}
hello
{{link.date}} - {{link.link}}

{% endfor %}


