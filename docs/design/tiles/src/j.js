(function(){
  document.addEventListener('DOMContentLoaded',function(){
    // the green dissolves into the page through an ordered dither that also fades out.
    // On the homepage it ripples slowly and gives a little under the pointer; on essays it is small and still.
    var B8=[[0,32,8,40,2,34,10,42],[48,16,56,24,50,18,58,26],[12,44,4,36,14,46,6,38],[60,28,52,20,62,30,54,22],[3,35,11,43,1,33,9,41],[51,19,59,27,49,17,57,25],[15,47,7,39,13,45,5,37],[63,31,55,23,61,29,53,21]];
    document.querySelectorAll('canvas.fade').forEach(function(cv){
      var H=+cv.dataset.h||100,CELL=+cv.dataset.cell||4,UP=cv.dataset.dir==='up',LIVE=cv.hasAttribute('data-live')&&!window.REDUCED,ctx=cv.getContext('2d'),W=0,dpr=1,px=1,color='#0a0',t=0,ptr=null;
      cv.style.height=H+'px';
      function size(){dpr=window.devicePixelRatio||1;W=cv.clientWidth;px=Math.max(1,Math.round(CELL*dpr));cv.width=Math.ceil(W*dpr);cv.height=Math.round(H*dpr);color=getComputedStyle(cv).getPropertyValue('--green').trim()||'#0a0';draw()}
      function draw(){
        var cols=Math.ceil(cv.width/px),rows=Math.ceil(cv.height/px);ctx.clearRect(0,0,cv.width,cv.height);ctx.fillStyle=color;
        for(var y=0;y<rows;y++){var yy=UP?rows-1-y:y,base=1-(yy+.5)/rows,a=Math.min(1,.12+base*1.15);ctx.globalAlpha=a;
          for(var x=0;x<cols;x++){var d=base;
            if(LIVE){d+=Math.sin(x*.035+t)*.07*Math.sin(Math.PI*base)+Math.sin(x*.009-t*.6)*.05*Math.sin(Math.PI*base);
              if(ptr){var ex=x-ptr.x,ey=(y-ptr.y)*1.4,e2=ex*ex+ey*ey;if(e2<900)d-=(900-e2)/900*.22}}
            if(yy===0||d>(B8[y&7][x&7]+.5)/64)ctx.fillRect(x*px,y*px,px,px)}}
        ctx.globalAlpha=1;
      }
      if(LIVE){cv.addEventListener('pointermove',function(e){var b=cv.getBoundingClientRect();ptr={x:(e.clientX-b.left)*dpr/px,y:(e.clientY-b.top)*dpr/px}});cv.addEventListener('pointerleave',function(){ptr=null})}
      size();var lw=cv.clientWidth;new ResizeObserver(function(){if(Math.abs(cv.clientWidth-lw)>2){lw=cv.clientWidth;size()}}).observe(cv);
      addEventListener('themechange',function(){setTimeout(size,0)});
      if(window.matchMedia)matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){setTimeout(size,0)});
      if(LIVE&&!/shot=/.test(location.search))asciiLoop(cv,function(){t+=.06;draw()},12);
    });

    // search: every post title and subtitle, from the / key or the Search button
    var POSTS=window.POSTS||[],scrim=document.createElement('div');scrim.className='scrim';scrim.hidden=true;
    scrim.innerHTML='<div class="palette" role="dialog" aria-modal="true" aria-label="Search posts"><input id="q" type="search" placeholder="Search '+POSTS.length+' posts" autocomplete="off" aria-controls="qr"><ul id="qr" role="listbox"></ul><div class="palfoot"><span id="qc"></span><span>\u2191 \u2193 move \u00b7 enter open \u00b7 esc close</span></div></div>';
    document.body.appendChild(scrim);
    var q=scrim.querySelector('#q'),list=scrim.querySelector('#qr'),count=scrim.querySelector('#qc'),sel=0,shown=[],opener=null;
    function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;')}
    function mark(text,terms){var out=esc(text);terms.forEach(function(t){if(!t)return;var re=new RegExp('('+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')(?![^<]*>)','ig');out=out.replace(re,'<mark>$1</mark>')});return out}
    function run(){
      var terms=q.value.toLowerCase().split(/\s+/).filter(Boolean),scored=[];
      POSTS.forEach(function(p,i){var t=p[1].toLowerCase(),s=(p[2]||'').toLowerCase(),score=0;
        for(var k=0;k<terms.length;k++){var w=terms[k];if(t.indexOf(w)===0)score+=6;else if(new RegExp('\\b'+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).test(t))score+=4;else if(t.indexOf(w)>=0)score+=3;else if(s.indexOf(w)>=0||p[0].indexOf(w)===0)score+=1;else return}
        scored.push([score,i])});
      scored.sort(function(a,b){return b[0]-a[0]||a[1]-b[1]});shown=scored.slice(0,terms.length?30:8).map(function(x){return x[1]});sel=0;
      count.textContent=terms.length?scored.length+' of '+POSTS.length+' posts':'Latest '+shown.length+' of '+POSTS.length+' posts';
      list.innerHTML=shown.length?shown.map(function(i,k){var p=POSTS[i];return '<li role="option" data-k="'+k+'"><time>'+p[0]+'</time><span><b>'+mark(p[1],terms)+'</b>'+(p[2]?'<i>'+mark(p[2],terms)+'</i>':'')+'</span></li>'}).join(''):'<li class="none">No posts match. Try a single word from the title.</li>';
      paint();
    }
    function paint(){[].forEach.call(list.children,function(li,k){li.setAttribute('aria-selected',k===sel);if(k===sel&&li.scrollIntoView)li.scrollIntoView({block:'nearest'})})}
    function open(from){opener=from||document.activeElement;scrim.hidden=false;q.value='';run();q.focus()}
    function close(){scrim.hidden=true;if(opener&&opener.focus)opener.focus()}
    document.querySelectorAll('[data-search]').forEach(function(b){b.addEventListener('click',function(){open(b)})});
    q.addEventListener('input',run);
    var pq=new URLSearchParams(location.search).get('q');if(pq){open();q.value=pq;run()}
    scrim.addEventListener('pointerdown',function(e){if(e.target===scrim)close()});
    list.addEventListener('pointermove',function(e){var li=e.target.closest('li[data-k]');if(li&&+li.dataset.k!==sel){sel=+li.dataset.k;paint()}});
    addEventListener('keydown',function(e){
      if(scrim.hidden){if((e.key==='/'&&!/INPUT|TEXTAREA/.test(e.target.tagName))||((e.metaKey||e.ctrlKey)&&e.key==='k')){e.preventDefault();open()}return}
      if(e.key==='Escape'){e.preventDefault();close()}
      else if(e.key==='ArrowDown'){e.preventDefault();sel=Math.min(shown.length-1,sel+1);paint()}
      else if(e.key==='ArrowUp'){e.preventDefault();sel=Math.max(0,sel-1);paint()}
      else if(e.key==='Tab'){e.preventDefault();q.focus()}
    },true);
  });
})();
