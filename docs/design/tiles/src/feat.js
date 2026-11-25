(function(){
  document.documentElement.dataset.feat='swipe';
  document.addEventListener('DOMContentLoaded',function(){
    var swipe=document.getElementById('swipe'),count=document.getElementById('featcount');if(!swipe)return;
    var minis=[].slice.call(swipe.querySelectorAll('.mini')),w=function(){return minis[0].offsetWidth+22};
    function label(){count.textContent=(Math.min(minis.length-1,Math.round(swipe.scrollLeft/w()))+1)+' / '+minis.length}
    function step(d){swipe.scrollBy({left:d*w(),behavior:window.REDUCED?'auto':'smooth'})}
    document.getElementById('featprev').addEventListener('click',function(){step(-1)});
    document.getElementById('featnext').addEventListener('click',function(){step(1)});
    swipe.addEventListener('scroll',label,{passive:true});
    document.querySelectorAll('.mini').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault()})});
    label();
  });
})();
