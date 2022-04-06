---
---
{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

Now: {{nowunix}}

{% for post in site.posts %}

{{post.title}} - {{post.date | date: '%s'}}

{% endfor %}