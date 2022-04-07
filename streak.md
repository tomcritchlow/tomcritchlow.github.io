---
---
{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}



<script>
var now = Math. round((new Date()). getTime() / 1000);
var dates = [{% for post in site.posts %}{{post.date | date: '%s'}}{% if forloop.last == true %}{% else %},{% endif %}{% endfor %}];

var streak = 0;

for (let i = 0; i < (dates.length -1); i++) {
  if(now - dates[i] < 604800){
    now = dates[i];
    streak++;
  }
  console.log(now-dates[i]);
}



</script>



Now: {{nowunix}}

{% for post in site.posts %}

{{post.title}} - {{post.date | date: '%s'}}

{% endfor %}