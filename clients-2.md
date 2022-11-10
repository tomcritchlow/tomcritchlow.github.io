---
layout: pagewide
metatitle: Digital Strategy Consulting from Tom Critchlow
title: Executive Consulting
clients:
 - name: Suitcase Clone
   description: Robin Sloan  
   length: 12 months
   year: 2022
 - name: Suitcase Clone
   description: Robin Sloan     
   length: Some months
   year: 2019
---

I work with CEOs and executive teams to build new capabilities. Whether it's a new growth team or creating an innovation function

<h3>2022</h3>
<div class="pa4">
  <div class="overflow-auto">
    <table class="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr>
          <th class="fw6 bb b--black-20 tl pb3 pr3 ">Client</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 ">Project</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3">Length</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3">ID</th>
        </tr>
      </thead>
      <tbody class="lh-copy">
      {% for client in page.clients %}
      {% if client.year == 2022 %}
        <tr>
          <td class="pv3 pr3 bb b--black-20">{{client.name}}</td>
          <td class="pv3 pr3 bb b--black-20">{{client.description}}</td>
          <td class="pv3 pr3 bb b--black-20">{{client.length}}</td>
          <td class="pv3 pr3 bb b--black-20">14419232532474</td>
        </tr>
        {% endif %}
        {% endfor %}
      </tbody>
    </table>
  </div>
  </div>

<h3>2022</h3>
<div class="pa4">
  <div class="overflow-auto">
    <table class="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr>
          <th class="fw6 bb b--black-20 tl pb3 pr3 ">Client</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3 ">Project</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3">Length</th>
          <th class="fw6 bb b--black-20 tl pb3 pr3">ID</th>
        </tr>
      </thead>
      <tbody class="lh-copy">
      {% for client in page.clients %}
        <tr>
          <td class="pv3 pr3 bb b--black-20">{{client.name}}</td>
          <td class="pv3 pr3 bb b--black-20">{{client.description}}</td>
          <td class="pv3 pr3 bb b--black-20">{{client.length}}</td>
          <td class="pv3 pr3 bb b--black-20">14419232532474</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>  
  </div>