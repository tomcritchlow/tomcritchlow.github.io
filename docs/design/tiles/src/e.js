(function(){
  document.addEventListener('DOMContentLoaded',function(){
    var rows=[].slice.call(document.querySelectorAll('#catrows a'));if(!rows.length)return;var sel=-1;
    function pick(i){sel=Math.max(0,Math.min(rows.length-1,i));rows.forEach(function(r,k){r.classList.toggle('sel',k===sel)});rows[sel].focus({preventScroll:true})}
    addEventListener('keydown',function(e){if(e.metaKey||e.ctrlKey||e.altKey||/INPUT|TEXTAREA/.test(e.target.tagName))return;if(e.key==='j')pick(sel+1);else if(e.key==='k')pick(sel-1)});
  });
})();
