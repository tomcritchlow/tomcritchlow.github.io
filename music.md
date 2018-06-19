---
layout: page
title: Music I like
---



<ul>
{% for link in site.music %}

<li><a href="{{link.href}}">{{link.title}}</a> by {{link.artist}} <span class="fr f5">{% for tag in link.tags %}{{tag}},{% endfor %}</span></li>


{% endfor %}
</ul>

<iframe src="https://open.spotify.com/embed/user/jarrettfuller/playlist/3kLWSTNaXyElvlOTyNiGEm" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>s