// Character headline engine. One <pre id="eat"> per page, configured with data attributes:
//   data-wide / data-narrow   the headline, lines separated by |
//   data-fill="hash|words"    what the letters are made of; data-words supplies the text for "words"
//   data-mode="eat|swarm"     eat: termites chew holes that grow back. swarm: characters fly into place and scatter from the pointer
(function(){
  document.addEventListener('DOMContentLoaded',function(){
    var el=document.getElementById('eat');if(!el)return;
    var cfg=el.dataset,MODE,WORDS,FILL;function conf(){MODE=cfg.mode||'eat';WORDS=(cfg.words||'').replace(/\s+/g,'');FILL=cfg.fill==='words'&&WORDS?'words':'hash'}conf();
    var g,n,mask,glyph,eaten,p,ants=[],parts=[],tick=0,ptr=null;
    var STILL=window.REDUCED||/shot=/.test(location.search);
    var DX=[1,1,0,-1,-1,-1,0,1],DY=[0,1,1,1,0,-1,-1,-1],ramp=[' ',' ','.',':','+'];
    function esc(c){return c==='&'?'&amp;':c==='<'?'&lt;':c}
    function init(){
      conf();el.textContent='';el.style.height='';g=asciiGrid(el,1);
      var W=g.cols*g.cw,lines=(W<720?(cfg.narrow||cfg.wide):cfg.wide||"Hey, I'm Tom.").split('|');
      var c=document.createElement('canvas'),x=c.getContext('2d'),face='800 100px "Bricolage Grotesque",system-ui,sans-serif';
      x.font=face;var widest=Math.max.apply(null,lines.map(function(l){return x.measureText(l).width}));
      var fs=Math.min(lines.length>1?230:300,100*(W*.97)/widest),lh=fs*.86,H=lh*lines.length+fs*.16;
      g.rows=Math.ceil(H/g.ch)+3;n=g.cols*g.rows;c.width=Math.ceil(W);c.height=Math.ceil(g.rows*g.ch);
      x.font=face.replace('100px',fs+'px');x.textBaseline='alphabetic';x.fillStyle='#000';
      lines.forEach(function(l,i){x.fillText(l,W*.005,fs*.78+lh*i+g.ch)});
      var data=x.getImageData(0,0,c.width,c.height).data;mask=new Uint8Array(n);glyph=new Array(n);eaten=new Int32Array(n);p=new Float32Array(n);
      var k=0;parts=[];
      for(var r=0;r<g.rows;r++)for(var q=0;q<g.cols;q++){
        var px=Math.min(c.width-1,Math.floor((q+.5)*g.cw)),py=Math.min(c.height-1,Math.floor((r+.5)*g.ch)),i=r*g.cols+q;
        if(data[(py*c.width+px)*4+3]>110){mask[i]=1;glyph[i]=FILL==='words'?esc(WORDS[k++%WORDS.length]):'#';
          if(MODE==='swarm')parts.push({x:STILL?q:q+(Math.random()-.5)*70,y:STILL?r:r+(Math.random()-.5)*26,tx:q,ty:r,ch:glyph[i]})}
      }
      el.style.height=(g.rows*g.ch)+'px';ants=[];
      if(MODE==='eat'){var count=cfg.ants==='0'?0:cfg.trails==='off'?Math.max(8,Math.round(n/520)):Math.max(14,Math.round(n/260));for(var a=0;a<count;a++)ants.push({x:Math.random()*g.cols,y:Math.random()*g.rows,d:Math.floor(Math.random()*8)})}
    }
    function bite(cx,cy,r,ticks){for(var dy=-r;dy<=r;dy++)for(var dx=-r*2;dx<=r*2;dx++){var X=cx+dx,Y=cy+dy;if(X<0||Y<0||X>=g.cols||Y>=g.rows)continue;if(dx*dx/4+dy*dy<=r*r)eaten[Y*g.cols+X]=tick+ticks+Math.floor(Math.random()*14)}}
    el.addEventListener('pointermove',function(e){var b=el.getBoundingClientRect(),cx=(e.clientX-b.left)/g.cw,cy=(e.clientY-b.top)/g.ch;ptr={x:cx,y:cy,t:tick};if(MODE==='eat')bite(Math.floor(cx),Math.floor(cy),3,50)});
    el.addEventListener('pointerleave',function(){ptr=null});

    function stepEat(){
      for(var i=0;i<n;i++)p[i]*=.95;
      ants.forEach(function(a){
        if(Math.random()<.22)a.d=(a.d+(Math.random()<.5?1:7))%8;
        for(var t=-1;t<=1;t++){var d=(a.d+t+8)%8,X=Math.round(a.x+DX[d]*4),Y=Math.round(a.y+DY[d]*3);if(X>=0&&Y>=0&&X<g.cols&&Y<g.rows){var k=Y*g.cols+X;if(mask[k]&&eaten[k]<tick&&Math.random()<.5){a.d=d;break}}}
        a.x=(a.x+DX[a.d]*1.1+g.cols)%g.cols;a.y=(a.y+DY[a.d]*.7+g.rows)%g.rows;
        var j=Math.floor(a.y)*g.cols+Math.floor(a.x);p[j]=1;if(mask[j])bite(Math.floor(a.x),Math.floor(a.y),1,70);
      });
      var where=new Uint8Array(n);ants.forEach(function(a){where[Math.floor(a.y)*g.cols+Math.floor(a.x)]=1});
      var out='',open=false;
      for(var y=0;y<g.rows;y++){for(var x2=0;x2<g.cols;x2++){var k2=y*g.cols+x2,solid=where[k2]||(mask[k2]&&eaten[k2]<tick);
        if(solid&&!open){out+='<b>';open=true}else if(!solid&&open){out+='</b>';open=false}
        out+=where[k2]?'t':solid?glyph[k2]:cfg.trails==='off'?' ':ramp[Math.min(4,Math.floor(p[k2]*5))]}
        if(open){out+='</b>';open=false}out+='\n'}
      el.innerHTML=out;
    }
    function stepSwarm(){
      // an occasional gust scatters one patch so the headline never sits completely still
      var gust=(tick%150===90)?{x:Math.random()*g.cols,y:Math.random()*g.rows}:null;
      var buf=new Array(n);
      for(var i=0;i<parts.length;i++){var q=parts[i],dx=q.tx-q.x,dy=q.ty-q.y;
        q.x+=dx*.14;q.y+=dy*.14;
        if(ptr){var ex=q.x-ptr.x,ey=(q.y-ptr.y)*2,d2=ex*ex+ey*ey;if(d2<260){var f=(260-d2)/260*3.2,dd=Math.sqrt(d2)+.01;q.x+=ex/dd*f;q.y+=ey/dd*f*.5}}
        if(gust){var gx=q.x-gust.x,gy=(q.y-gust.y)*2;if(gx*gx+gy*gy<500){q.x+=(Math.random()-.5)*40;q.y+=(Math.random()-.5)*14}}
        var X=Math.round(q.x),Y=Math.round(q.y);if(X>=0&&Y>=0&&X<g.cols&&Y<g.rows)buf[Y*g.cols+X]=q.ch}
      var out='',open=false;
      for(var y=0;y<g.rows;y++){for(var x2=0;x2<g.cols;x2++){var ch=buf[y*g.cols+x2];
        if(ch&&!open){out+='<b>';open=true}else if(!ch&&open){out+='</b>';open=false}
        out+=ch||' '}
        if(open){out+='</b>';open=false}out+='\n'}
      el.innerHTML=out;
    }
    function step(){tick++;if(MODE==='swarm')stepSwarm();else stepEat()}
    function start(){init();var lastW=el.clientWidth;new ResizeObserver(function(){if(Math.abs(el.clientWidth-lastW)>8){lastW=el.clientWidth;init();step()}}).observe(el);asciiLoop(el,step,24);el.addEventListener('reconfig',function(){init();step()})}
    (document.fonts&&document.fonts.load?document.fonts.load('800 100px "Bricolage Grotesque"').then(start,start):start());

    // a walking divider: a ruled line of dots with one termite crossing it
    document.querySelectorAll('.walk').forEach(function(w){
      var gw=asciiGrid(w,1),pos=0;
      asciiLoop(w,function(){pos=(pos+1)%gw.cols;var s='';for(var i=0;i<gw.cols;i++)s+=i===pos?'t':(i<pos&&i>pos-9?' ':(i%2?'·':' '));w.textContent=s},10);
    });
  });
})();
