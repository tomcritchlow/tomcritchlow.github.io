---
---
{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}



<script>

var dates = [{% for post in site.posts %}{{post.date | date: '%s'}}{% if forloop.last %}{% else %},{% endif %}{% endfor %}];

</script>



Now: {{nowunix}}

{% for post in site.posts %}

{{post.title}} - {{post.date | date: '%s'}}

{% endfor %}