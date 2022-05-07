---
---
{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}

<div id="streak"></div>

<script>

var firstmonday = Date.parse("2000-02-14"); // from matt webb code? https://gist.github.com/genmon/c75480d3e525b43c2e1e135d7cbb697f
const msPerDay = 24 * 60 * 60 * 1000;

var today = Date.parse(new Date());


var stringdates = [{% for post in site.posts %}"{{post.date | date: "%Y-%m-%d"}}"{% if forloop.last == true %}{% else %},{% endif %}{% endfor %}];

var weeknumbers = []

weeknumbers.push(Math.floor(((today - firstmonday)/msPerDay) / 7) + 1)

for (let i = 0; i < (stringdates.length); i++) {
  weeknumbers.push(Math.floor(((Date.parse(stringdates[i]) - firstmonday)/msPerDay) / 7) + 1);
}

var streak = 0;

for (let i = 0; i < (weeknumbers.length); i++) {
  if(weeknumbers[i] - weeknumbers[i+1] < 2){
    streak += weeknumbers[i] - weeknumbers[i+1];
  }else{
    break;
  }
}

if(streak > 0){
  streak += 1;
  document.getElementById("streak").innerHTML = streak;
};

</script>

Visualize blogging streak somehow like this?

⬜⬜⬜⬜⬜⬜⬜
⬜⬜🟩⬜⬜⬜⬜
⬜🟩🟩⬜⬜⬜⬜
⬜🟩🟩⬜⬜⬜⬜
🟩🟩🟩⬜⬜⬜⬜
🟩🟩🟩⬜🟩⬜⬜
⬜⬜⬜⬜⬜⬜⬜
⬜⬜🟨⬜⬜⬜⬜



Now: {{nowunix}}

{% for post in site.posts %}

{{post.title}} - {{post.date | date: "%Y-%m-%d"}} - {{post.date | date: '%s'}}

{% endfor %}

--

{% assign postsByWeek = site.posts | group_by_exp:"post", "post.date | date: '%W, %Y' " %}

{% for week in postsByWeek %}
<h1>{{ week.name }}</h1>
<ul>
{% for post in week.items %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
{% endfor %}

<script>

var posts = [];

{% for post in site.posts %}
var object = {};
posts.push({"title":"{{post.title | escape}}","week":"{{post.date | date: '%W'}}"},"year":"{{post.date | date: '%Y'}}");
{% endfor %}


</script>