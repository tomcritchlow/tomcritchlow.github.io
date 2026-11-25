(function(){
  function rng(seed){var s=seed>>>0||1;return function(){s=(s*1664525+1013904223)>>>0;return s/4294967296}}
  function hash(str){var h=2166136261;for(var i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
  function draw(el){
    var old=el.querySelector('svg');if(old)old.remove();
    var w=el.offsetWidth+14,h=el.offsetHeight+10,r=rng(hash(el.textContent)),j=function(a){return (r()-.5)*a};
    var d='';
    if(el.dataset.mark==='circle'){
      var cx=w/2,cy=h/2+1,rx=w/2-2,ry=h/2-3,pts=[];
      for(var i=0;i<=30;i++){var t=-2.6+i/30*(Math.PI*2+.55);var k=1+j(.07)+(i/30)*.05;pts.push([cx+Math.cos(t)*rx*k,cy+Math.sin(t)*ry*k])}
      d='M'+pts[0][0].toFixed(1)+','+pts[0][1].toFixed(1);
      for(var p=1;p<pts.length-1;p++){var mx=(pts[p][0]+pts[p+1][0])/2,my=(pts[p][1]+pts[p+1][1])/2;d+=' Q'+pts[p][0].toFixed(1)+','+pts[p][1].toFixed(1)+' '+mx.toFixed(1)+','+my.toFixed(1)}
    }else{
      var y=h-6;
      d='M'+(5+j(3)).toFixed(1)+','+(y+j(2)).toFixed(1)+' Q'+(w*.35).toFixed(1)+','+(y+j(4)-1).toFixed(1)+' '+(w*.62).toFixed(1)+','+(y+j(3)).toFixed(1)+' T'+(w-5+j(3)).toFixed(1)+','+(y+j(3)).toFixed(1)
        +' M'+(w-9+j(3)).toFixed(1)+','+(y+3.5+j(1.5)).toFixed(1)+' Q'+(w*.5).toFixed(1)+','+(y+3+j(3)).toFixed(1)+' '+(w*.22+j(8)).toFixed(1)+','+(y+4+j(2)).toFixed(1);
    }
    var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 '+w+' '+h);svg.setAttribute('preserveAspectRatio','none');svg.setAttribute('aria-hidden','true');
    var path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',d);path.setAttribute('pathLength','1');svg.appendChild(path);el.appendChild(svg);
  }
  function marks(){document.querySelectorAll('.mark').forEach(draw)}
  document.addEventListener('DOMContentLoaded',function(){
    (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(marks);
    addEventListener('resize',marks);

    // the pond
    var el=document.getElementById('pond'),ROWS=15,g,h,v,n,tick=0;
    var names=['Of Termites & Tokens','Featured on People & Blogs','Taking Blogging Seriously','Google is Grounded','3,573 Days On The Road'];
    var ramp=[' ',' ','.','·',':','~','≈'],float=[];
    function init(){
      el.textContent='';g=asciiGrid(el,ROWS);n=g.cols*g.rows;h=new Float32Array(n);v=new Float32Array(n);
      float=names.map(function(t,i){return {t:t,x:(g.cols/names.length)*i+3,y:2+((i*5)%(ROWS-4)),s:.035+.02*((i*7)%3)}});
    }
    function poke(cx,cy,a){for(var dy=-1;dy<=1;dy++)for(var dx=-2;dx<=2;dx++){var x=cx+dx,y=cy+dy;if(x>0&&y>0&&x<g.cols-1&&y<g.rows-1)h[y*g.cols+x]+=a/(1+Math.abs(dx)+Math.abs(dy))}}
    el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect(),st=getComputedStyle(el);poke(Math.floor((e.clientX-r.left-parseFloat(st.paddingLeft))/g.cw),Math.floor((e.clientY-r.top)/g.ch),1.5)});
    function esc(c){return c==='&'?'&amp;':c==='<'?'&lt;':c}
    function step(){
      tick++;
      if(tick%9===0)poke(2+Math.floor(Math.random()*(g.cols-4)),1+Math.floor(Math.random()*(g.rows-2)),1.1);
      for(var pass=0;pass<2;pass++){
        for(var y=1;y<g.rows-1;y++)for(var x=1;x<g.cols-1;x++){var i=y*g.cols+x;v[i]=(v[i]+((h[i-1]+h[i+1]+h[i-g.cols]*2+h[i+g.cols]*2)/6-h[i])*.42)*.965}
        for(var k=0;k<n;k++)h[k]+=v[k];
      }
      var rows=[],bold=[];
      for(var yy=0;yy<g.rows;yy++){var line=[],b=[];for(var xx=0;xx<g.cols;xx++){var a=Math.abs(h[yy*g.cols+xx]);line.push(ramp[Math.min(ramp.length-1,Math.floor(a*15))]);b.push(0)}rows.push(line);bold.push(b)}
      float.forEach(function(f){
        f.x+=f.s;if(f.x>g.cols+2)f.x=-f.t.length;
        for(var c=0;c<f.t.length;c++){var x=Math.floor(f.x)+c;if(x<0||x>=g.cols)continue;var yy=f.y+Math.round(Math.max(-1,Math.min(1,h[f.y*g.cols+x]*1.7)));yy=Math.max(0,Math.min(g.rows-1,yy));rows[yy][x]=f.t[c];bold[yy][x]=1}
      });
      var out='';
      for(var r2=0;r2<g.rows;r2++){var open=false;for(var c2=0;c2<g.cols;c2++){if(bold[r2][c2]&&!open){out+='<b>';open=true}else if(!bold[r2][c2]&&open){out+='</b>';open=false}out+=esc(rows[r2][c2])}if(open)out+='</b>';out+='\n'}
      el.innerHTML=out;
    }
    function warm(){for(var i=0;i<7;i++)poke(4+Math.floor(Math.random()*(g.cols-8)),2+Math.floor(Math.random()*(g.rows-4)),1.6);for(var k=0;k<10;k++)step()}
    init();warm();var lastW=el.clientWidth;new ResizeObserver(function(){if(Math.abs(el.clientWidth-lastW)>8){lastW=el.clientWidth;init();warm()}}).observe(el);asciiLoop(el,step,24);
  });
})();
