(function(){
  var root=document.documentElement;
  var q=new URLSearchParams(location.search).get('theme');
  var dark=window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme=q||(dark?'dark':'light');
  window.REDUCED=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('DOMContentLoaded',function(){
    if(new URLSearchParams(location.search).get('shot')==='post'){var labels=document.querySelectorAll('.screenlabel'),nd=labels[0];while(nd&&nd!==labels[1]){var nx=nd.nextElementSibling;nd.remove();nd=nx}}
    var btn=document.getElementById('themebtn');
    function label(){btn.textContent=root.dataset.theme==='dark'?'Switch to light':'Switch to dark'}
    btn.addEventListener('click',function(){root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';label();window.dispatchEvent(new Event('themechange'))});
    label();

    // hover / focus link previews
    var card=document.createElement('div');card.className='preview';card.setAttribute('role','tooltip');document.body.appendChild(card);
    function show(a,force){
      if(a.closest('[data-rail]'))return;if(!force&&root.dataset.links&&root.dataset.links!=='card')return;
      card.innerHTML='<b></b><i></i><span></span>';
      card.children[0].textContent=a.dataset.t||'';card.children[1].textContent=a.dataset.s||'';card.children[2].textContent=a.dataset.d||'';
      var r=a.getBoundingClientRect();var x=Math.min(Math.max(16,r.left+scrollX),scrollX+innerWidth-316);
      card.style.left=x+'px';card.style.top=(r.bottom+scrollY+10)+'px';card.classList.add('on');
    }
    function hide(){card.classList.remove('on')}
    window.showLinkCard=function(a){show(a,true)};window.hideLinkCard=hide;
    document.querySelectorAll('a[data-t]').forEach(function(a){
      a.addEventListener('pointerenter',function(){show(a)});a.addEventListener('focus',function(){show(a)});
      a.addEventListener('pointerleave',hide);a.addEventListener('blur',hide);
      a.addEventListener('click',function(e){e.preventDefault()});
    });

    // reveal-on-view for marks
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('seen');io.unobserve(e.target)}})},{threshold:.6});
    document.querySelectorAll('[data-reveal]').forEach(function(el){io.observe(el)});
  });
  // run an ASCII loop only while its element is on screen
  window.asciiLoop=function(el,step,fps){
    var on=false,last=0,iv=1000/(fps||24);
    function frame(t){if(!on)return;if(t-last>=iv){last=t;step()}requestAnimationFrame(frame)}
    new IntersectionObserver(function(es){var v=es[0].isIntersecting;if(v&&!on&&!window.REDUCED){on=true;requestAnimationFrame(frame)}else if(!v){on=false}}).observe(el);
    step();
  };
  window.asciiGrid=function(el,rows){
    var probe=document.createElement('span');probe.textContent='MMMMMMMMMM';probe.style.visibility='hidden';el.appendChild(probe);
    var cw=probe.getBoundingClientRect().width/10||7.8;el.removeChild(probe);
    return {cols:Math.max(20,Math.floor(el.clientWidth/cw)),rows:rows,cw:cw,ch:parseFloat(getComputedStyle(el).lineHeight)||16};
  };
})();
