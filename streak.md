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

var today = new Date();
var posts = [];

{% for post in site.posts %}
var object = {};
posts.push({"title":"{{post.title | escape}}","date":"{{post.date | date: "%Y-%m-%d"}}","week":"{{post.date | date: '%W'}}","year":"{{post.date | date: '%Y'}}"});
{% endfor %}

if(posts[0].week - getWeekNumber(today)[1] < 2){
  console.log("Week numbers within one");
}


var result = getWeekNumber(new Date());
console.log('It\'s currently week ' + result[1] + ' of ' + result[0]);




// From here: https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}
</script>