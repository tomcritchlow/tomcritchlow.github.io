---
---
{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}



<script>
var firstmonday = Date.parse("2000-02-14"); // from matt webb code? https://gist.github.com/genmon/c75480d3e525b43c2e1e135d7cbb697f
const msPerDay = 24 * 60 * 60 * 1000;

var today = Date.parse(new Date());


var stringdates = [{% for post in site.posts %}"{{post.date | date: "%Y-%m-%d"}}"{% if forloop.last == true %}{% else %},{% endif %}{% endfor %}];

var weeknumbers = []

for (let i = 0; i < (stringdates.length); i++) {
  weeknumbers.push(Math.floor(((Date.parse(stringdates[i]) - firstmonday)/msPerDay) / 7) + 1);
}

var streak = 0;

for (let i = 0; i < (weeknumbers.length); i++) {
  if(weeknumbers[i] - weeknumbers[i+1] < 2){
    streak = weeknumbers[i] - weeknumbers[i+1];
  }else{
    break;
  }
}





</script>



Now: {{nowunix}}

{% for post in site.posts %}

{{post.title}} - {{post.date | date: "%Y-%m-%d"}} - {{post.date | date: '%s'}}

{% endfor %}