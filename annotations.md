---
layout: blog-sidebar-nav
title: Annotations
---

*I use Hypothesis to annotate and bookmark websites. You can see my profile here: [@tomcritchlow](https://hypothes.is/users/tomcritchlow)*

<div id="annotations"></div>

<script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

<script>
fetch("https://api.hypothes.is/api/search?user=tomcritchlow")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (var i = 0; i < data.rows.length; i++) {
      var quotetext = data?.rows[i]?.target[0]?.selector?.[2]?.exact;
      if(quotetext){
      var div = document.createElement("div");
      var url = data.rows[i].uri;
      let domain = (new URL(url));
      domain = domain.hostname;
      div.innerHTML = `<div class="annotation">
        <div class="annotation-comment">
        <div class="annotation-author"><img src="https://tomcritchlow.com/images/tomsmall.jpg" >@tomcritchlow ${data.rows[i].created}</div>
        <p>${data.rows[i].text}</p></div>
        <div class="portal-container">
        <div class="portal-head">
        <div class="portal-metadata">
        <div class="portal-title">
        <div class="portal-author"></div>
        <div class="title-wrapper"><span class="portal-text-title">${data.rows[i].document.title}</span></div>
        </div>              
        </div>
        <div class="portal-backlink"><a target="_blank" href="${data.rows[i].links.incontext}" class="portal-arrow">${domain} <span class="right-arrow">→</span></a></div>
        </div>
        <div id="portal-parent-{{include.anchor}}" class="portal-parent">
        <div class="portal-content">${data.rows[i].target[0].selector[2].exact}
        </div>       
        </div>    
        </div>
        </div>
      `
      document.getElementById("annotations").appendChild(div);  
      };
    }
  });
</script>

<style>
    .annotation{
        border:1px solid #f3f3f3;

    }

    .annotation-author img{
        border-radius:100%;
        width:20px;
    }

    .annotation-comment{

    }

    .portal-container{background-color:white;font-family:-apple-system, system-ui, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";text-rendering:optimizeLegibility;border:1px solid #C2DFE3;border-radius:8px;margin-bottom:25px;max-width:800px;-webkit-transition:all 0.2s ease;-moz-transition:all 0.2s ease;-ms-transition:all 0.2s ease;-o-transition:all 0.2s ease;transition:all 0.2s ease}.portal-container:hover{transform:translateY(-3px);box-shadow:0px 6px 20px 0px rgba(0,0,0,0.15);border:1px solid #9DB8BF}.portal-container .portal-head{border-bottom:1px solid #C2DFE3;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:stretch;-webkit-transition:all 0.2s ease;-moz-transition:all 0.2s ease;-ms-transition:all 0.2s ease;-o-transition:all 0.2s ease;transition:all 0.2s ease}.portal-container .portal-head .portal-metadata{padding:15px;min-width:0px}.portal-container .portal-head .portal-author{font-size:14px;color:black;font-weight:600;margin-bottom:4px}.portal-container .portal-head .portal-title{font-size:14px;color:#9DB8BF;max-width:100%}.portal-container .portal-head .portal-title .title-wrapper{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.portal-container .portal-head .portal-title .title-wrapper .portal-text-title{font-weight:600;color:#5C6D73}.portal-container .portal-head .portal-backlink{display:flex;flex-shrink:1;align-items:center;min-width:80px;padding:0px 15px;border-left:1px solid #C2DFE3}.portal-container .portal-head .portal-backlink .portal-arrow{font-size:14px;color:#9DB8BF;text-decoration:none;-webkit-transition:opacity 0.1s ease;-moz-transition:opacity 0.1s ease;-ms-transition:opacity 0.1s ease;-o-transition:opacity 0.1s ease;transition:opacity 0.1s ease}.portal-container .portal-head .portal-backlink .portal-arrow:hover{opacity:.5}.portal-container .portal-iframe{overflow:hidden}.portal-container .portal-parent{overflow:hidden;position:relative;width:100%;box-sizing:border-box}.portal-container .portal-parent .portal-parent-text{padding:15px;color:#5C6D73;z-index:40}.portal-container .portal-parent .portal-content{padding:15px;color:#464A4D;line-height:140%}
/*# sourceMappingURL=quote.css.map */
</style>