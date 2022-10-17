---
layout: pagewide
metatitle: Digital Strategy Consulting from Tom Critchlow
title: Executive Consulting
clients:
 - name: Client one
    description: How to
    length: 13 months
 - name: Client two
    description: A client
    length: 3 months
---

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