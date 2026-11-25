(function(){
  var POSTS=[
    ['2026-06-08','Of Termites & Tokens','Notes on the company as colony','Maybe the future of work is... termites? Let me explain.'],
    ['2025-08-22','Featured on People & Blogs','An oral history of the blog!','Thanks to Manu for featuring me on his series People & Blogs. I wrote a bit about the history of this blog and how (and why) I write online...'],
    ['2025-06-27','Taking Blogging Seriously','Finally understanding why blogging is so important to me',"It's a warm summer night in NYC and I'm walking through central park with a friend, the fireflies blink around us like an external reflection of the neurons firing in our brains as the conversation sparks."],
    ['2025-03-21','Google is Grounded and Needs to Learn How to Soar','A short proposal for the future of search',"Here's the punchline - I think Google is missing the mark with their AI search efforts."],
    ['2024-09-03','3,573 Days On The Road','The Last Installment',"Every year on the 24th October I've written a reflection on the last year of my independent consulting. This would have been my 10th issue, but is instead a special issue, for reasons that will become apparent."],
    ['2024-04-16','Working With Founders Who Have Conviction and Taste','Opening up a few spots for my active advisory practice','Consulting can be easy money. Fleecing clients for cheap tricks. Clients have problems, you have powerpoints.'],
    ['2024-03-27',"LinkedIn is not a social or professional network, it's a learning network",'The world of work needs a new script','The world of work is changing.'],
    ['2024-03-20',"A Lil' Website Refresh",'New design, new pages and more',"Welcome to tomcritchlow.com version.... 19? 25? Honestly there have been so many iterations over the years who even knows. The point is there's a new coat of paint."]
  ];
  document.addEventListener('DOMContentLoaded',function(){
    function el(tag,text,cls){var e=document.createElement(tag);if(text!=null)e.textContent=text;if(cls)e.className=cls;return e}
    catalogue();rail();garden();
    function catalogue(){
    var rows=document.getElementById('rows');if(!rows)return;var pane=document.getElementById('pane'),filter=document.getElementById('filter'),sel=0,shown=[];
    function el_unused(tag,text,cls){var e=document.createElement(tag);if(text!=null)e.textContent=text;if(cls)e.className=cls;return e}
    function paint(){
      var p=POSTS[shown[sel]];pane.textContent='';if(!p){pane.appendChild(el('p','No posts match that filter.','sub'));return}
      pane.appendChild(el('time',p[0]));pane.appendChild(el('h1',p[1]));pane.appendChild(el('p',p[2],'sub'));pane.appendChild(el('p',p[3],'open'));
      var a=el('a','Read post','btn');a.href='#';a.appendChild(el('kbd','enter'));a.addEventListener('click',function(e){e.preventDefault()});pane.appendChild(a);
      rows.querySelectorAll('button').forEach(function(b,i){b.setAttribute('aria-selected',i===sel)});
    }
    function build(){
      var q=filter.value.trim().toLowerCase();shown=[];rows.textContent='';
      POSTS.forEach(function(p,i){if(q&&(p[1]+' '+p[2]).toLowerCase().indexOf(q)<0)return;shown.push(i);
        var li=el('li'),b=el('button');b.setAttribute('role','option');b.appendChild(el('time',p[0]));b.appendChild(el('b',p[1]));
        var k=shown.length-1;b.addEventListener('pointerenter',function(){sel=k;paint()});b.addEventListener('focus',function(){sel=k;paint()});li.appendChild(b);rows.appendChild(li)});
      sel=0;paint();
    }
    filter.addEventListener('input',build);
    addEventListener('keydown',function(e){
      if(e.target===filter){if(e.key==='Escape')filter.blur();return}
      if(e.metaKey||e.ctrlKey||e.altKey)return;
      if(e.key==='j'){sel=Math.min(shown.length-1,sel+1);paint()}
      else if(e.key==='k'){sel=Math.max(0,sel-1);paint()}
      else if(e.key==='/'){e.preventDefault();filter.focus()}
    });
    build();
    }

    // context rail: link previews dock here instead of floating
    function rail(){
    var peek=document.getElementById('peek');if(!peek)return;var idle=peek.innerHTML;
    document.querySelectorAll('.reader a[data-t]').forEach(function(a){
      function on(){peek.textContent='';peek.appendChild(el('b',a.dataset.t));peek.appendChild(el('i',a.dataset.s));peek.appendChild(el('span',a.dataset.d));peek.classList.add('live')}
      function off(){peek.innerHTML=idle;peek.classList.remove('live')}
      a.addEventListener('pointerenter',on);a.addEventListener('focus',on);a.addEventListener('pointerleave',off);a.addEventListener('blur',off);
    });
    var note=document.getElementById('note1');
    document.getElementById('ref1').addEventListener('click',function(){note.classList.add('flash');setTimeout(function(){note.classList.remove('flash')},900)});

    }

    // the garden: posts per year
    function garden(){
    var g=document.getElementById('garden');if(!g)return;var cap=document.getElementById('gcap'),capIdle=cap.textContent;
    var COUNTS=[2,1,4,13,18,19,27,36,41,11,25,9,13,3,1],H=10,t=0,hover=-1,gust=0,grid;
    function col(i){return 1+i*2}
    g.addEventListener('pointermove',function(e){var r=g.getBoundingClientRect();var c=Math.round(((e.clientX-r.left)/grid.cw-1)/2);hover=(c>=0&&c<COUNTS.length)?c:-1;gust=1;cap.textContent=hover<0?capIdle:(2012+hover)+': '+COUNTS[hover]+(COUNTS[hover]===1?' post':' posts')});
    g.addEventListener('pointerleave',function(){hover=-1;cap.textContent=capIdle});
    function step(){
      t+=.09;gust*=.96;var W=COUNTS.length*2+1,buf=[],bold=[];
      for(var y=0;y<H+3;y++){buf.push(new Array(W).fill(' '));bold.push(new Array(W).fill(0))}
      COUNTS.forEach(function(n,i){
        var hgt=Math.max(1,Math.round(n/41*H));
        for(var r=0;r<hgt;r++){
          var lean=Math.sin(t*1.4+i*.8+r*.45)*(.35+gust*.9)*(r/H)*1.6;var dx=Math.round(lean);
          var x=Math.max(0,Math.min(W-1,col(i)+dx)),y=H-1-r;
          buf[y][x]=r===hgt-1?(n>20?'@':'*'):(dx>0?'/':dx<0?'\\':'|');if(i===hover)bold[y][x]=1;
        }
        buf[H][col(i)]='▔';var yr=String(2012+i);buf[H+1][col(i)]=yr[2];buf[H+2][col(i)]=yr[3];if(i===hover){bold[H+1][col(i)]=1;bold[H+2][col(i)]=1}
      });
      var out='';for(var y2=0;y2<buf.length;y2++){for(var x2=0;x2<W;x2++){var ch=buf[y2][x2]==='<'?'&lt;':buf[y2][x2];out+=bold[y2][x2]?'<b>'+ch+'</b>':ch}out+='\n'}
      g.innerHTML=out;
    }
    grid=asciiGrid(g,13);asciiLoop(g,step,16);
    }
  });
})();
