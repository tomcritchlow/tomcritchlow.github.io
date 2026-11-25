(function(){
  document.documentElement.dataset.links='rich'; // switches off the small shared card on this page
  document.addEventListener('DOMContentLoaded',function(){
    function el(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e}
    // a tinted phrase and its margin note light up together
    document.querySelectorAll('.ann').forEach(function(a){var n=document.getElementById(a.dataset.n);if(!n)return;
      function on(){a.classList.add('hot');n.classList.add('hot')}function off(){a.classList.remove('hot');n.classList.remove('hot')}
      [a,n].forEach(function(x){x.addEventListener('pointerenter',on);x.addEventListener('pointerleave',off)})});
    // link card: shown after a short pause, so it does not fire while the pointer is just passing
    var card=el('div','linkcard');card.setAttribute('role','tooltip');document.body.appendChild(card);var timer=null;
    function fill(a){
      card.textContent='';var d=a.dataset,internal=!d.ext,meta=el('div','lc-meta');
      meta.appendChild(el('span',null,internal?'tomcritchlow.com':d.ext));meta.appendChild(el('b',null,internal?'Essay':'External link'));card.appendChild(meta);
      var body=el('div','lc-body');body.appendChild(el('p','lc-title',d.t));if(d.s)body.appendChild(el('p','lc-sub',d.s));if(d.x)body.appendChild(el('p','lc-x',d.x));card.appendChild(body);
      if(internal){var f=el('div','lc-foot');[d.date,d.words,d.read,d.back].forEach(function(v){if(v)f.appendChild(el('span',null,v))});card.appendChild(f)}
    }
    function show(a){fill(a);var r=a.getBoundingClientRect();card.style.left=Math.min(Math.max(16,r.left+scrollX),scrollX+innerWidth-416)+'px';card.style.top=(r.bottom+scrollY+10)+'px';card.classList.add('on')}
    function hide(){clearTimeout(timer);card.classList.remove('on')}
    document.querySelectorAll('.essay a[data-t]').forEach(function(a){
      a.addEventListener('pointerenter',function(){clearTimeout(timer);timer=setTimeout(function(){show(a)},220)});
      a.addEventListener('focus',function(){show(a)});a.addEventListener('pointerleave',hide);a.addEventListener('blur',hide);
    });
    var hov=new URLSearchParams(location.search).get('hover');
    if(hov){var t=document.querySelectorAll('.essay a[data-t]')[hov==='ext'?2:1];if(t){card.style.transition='none';setTimeout(function(){show(t)},80)}}
  });
})();
