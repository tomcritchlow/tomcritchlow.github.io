(function(){
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.chip').forEach(function(b){b.addEventListener('click',function(){var n=document.getElementById(b.getAttribute('aria-controls'));var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})});

    var el=document.getElementById('colony');if(!el)return;var host=el.parentElement,g,p,n,ants=[];
    var DX=[1,1,0,-1,-1,-1,0,1],DY=[0,1,1,1,0,-1,-1,-1],ramp=[' ',' ','.','·',':','+','*','#'];
    function init(){
      el.textContent='';g=asciiGrid(el,1);g.cols=Math.max(g.cols,Math.ceil(1700/g.cw));g.rows=Math.max(10,Math.floor(host.clientHeight/g.ch));n=g.cols*g.rows;p=new Float32Array(n);ants=[];
      var count=Math.round(g.cols*g.rows/90);
      for(var i=0;i<count;i++)ants.push({x:Math.random()*g.cols,y:Math.random()*g.rows,d:Math.floor(Math.random()*8)});
      for(var k=0;k<6;k++)blob(Math.floor(Math.random()*g.cols),Math.floor(Math.random()*g.rows),.7,4);
    }
    function blob(cx,cy,a,r){for(var dy=-r;dy<=r;dy++)for(var dx=-r*2;dx<=r*2;dx++){var x=cx+dx,y=cy+dy;if(x<0||y<0||x>=g.cols||y>=g.rows)continue;var d=Math.sqrt(dx*dx/4+dy*dy);if(d<=r){var i=y*g.cols+x;p[i]=Math.min(1,p[i]+a*(1-d/r))}}}
    host.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect();blob(Math.floor((e.clientX-r.left)/g.cw),Math.floor((e.clientY-r.top)/g.ch),.55,2)});
    function at(x,y){x=(Math.round(x)+g.cols)%g.cols;y=(Math.round(y)+g.rows)%g.rows;return p[y*g.cols+x]}
    function step(){
      for(var i=0;i<n;i++)p[i]*=.978;
      ants.forEach(function(a){
        var best=a.d,bv=-1;
        for(var t=-1;t<=1;t++){var d=(a.d+t+8)%8;var s=at(a.x+DX[d]*3,a.y+DY[d]*2)+Math.random()*.18+(t===0?.04:0);if(s>bv){bv=s;best=d}}
        if(Math.random()<.06)best=(a.d+(Math.random()<.5?1:7))%8;
        a.d=best;a.x=(a.x+DX[a.d]*.9+g.cols)%g.cols;a.y=(a.y+DY[a.d]*.45+g.rows)%g.rows;
        var j=Math.floor(a.y)*g.cols+Math.floor(a.x);p[j]=Math.min(1,p[j]+.32);
      });
      var where=new Uint8Array(n);ants.forEach(function(a){where[Math.floor(a.y)*g.cols+Math.floor(a.x)]=1});
      var out='';
      for(var y=0;y<g.rows;y++){for(var x=0;x<g.cols;x++){var k=y*g.cols+x;out+=where[k]?'<b>t</b>':ramp[Math.min(7,Math.floor(p[k]*8))]}out+='\n'}
      el.innerHTML=out;
    }
    init();var lastW=host.clientWidth,lastH=host.clientHeight;new ResizeObserver(function(){if(Math.abs(host.clientWidth-lastW)>8||Math.abs(host.clientHeight-lastH)>8){lastW=host.clientWidth;lastH=host.clientHeight;init()}}).observe(host);
    if(window.REDUCED){for(var w=0;w<120;w++)step()}
    asciiLoop(el,step,18);
  });
})();
