"use strict";var customSearch,apFixed,scrollCorrection=70,scrollToElement=function(e,t){t=t||scrollCorrection;var a=e.href?$(e.getAttribute("href")):$(e);$("html, body").animate({scrollTop:a.offset().top-t},500)},initCustomSearch=function(){"google"===CONFIG.search_service?customSearch=new GoogleCustomSearch({apiKey:GOOGLE_CUSTOM_SEARCH_API_KEY,engineId:GOOGLE_CUSTOM_SEARCH_ENGINE_ID,imagePath:"/images/"}):"algolia"===CONFIG.search_service?customSearch=new AlgoliaSearch({apiKey:ALGOLIA_API_KEY,appId:ALGOLIA_APP_ID,indexName:ALGOLIA_INDEX_NAME,imagePath:"/images/"}):"hexo"===CONFIG.search_service?customSearch=new HexoSearch({imagePath:"/images/"}):"azure"===CONFIG.search_service?customSearch=new AzureSearch({serviceName:AZURE_SERVICE_NAME,indexName:AZURE_INDEX_NAME,queryKey:AZURE_QUERY_KEY,imagePath:"/images/"}):"baidu"===CONFIG.search_service&&(customSearch=new BaiduSearch({apiId:BAIDU_API_ID,imagePath:"/images/"}))},initHeaderMenu=function(){var a=$("header .menu"),n=a.find(".underline");function t(e,t){e=e||a.find("li a.active"),(t=void 0===t||!!t)||n.addClass("disable-trans"),e&&e.length?(e.addClass("active").siblings().removeClass("active"),n.css({left:e.position().left,width:e.innerWidth()})):n.css({left:0,width:0}),t||setTimeout(function(){n.removeClass("disable-trans")},0)}a.on("mouseenter","li",function(e){t($(e.currentTarget))}),a.on("mouseout",function(){t()});var e=null;if("/"===location.pathname||location.pathname.startsWith("/page/"))e=$(".nav-home",a);else{var i=location.pathname,o=(i="/"===i[i.length-1]?i:i+"/").match(/\/(.*?)\//);1<o.length&&(e=$(".nav-"+o[1],a))}t(e,!1)},initHeaderMenuPhone=function(){var t=$(".l_header .switcher .s-menu");t.click(function(e){e.stopPropagation(),$("body").toggleClass("z_menu-open"),t.toggleClass("active")}),$(document).click(function(e){$("body").removeClass("z_menu-open"),t.removeClass("active")})},initHeaderSearch=function(){var e=$(".l_header .switcher .s-search"),t=$(".l_header"),a=$(".l_header .m_search");0!==e.length&&(e.click(function(e){e.stopPropagation(),t.toggleClass("z_search-open"),a.find("input").focus()}),$(document).click(function(e){t.removeClass("z_search-open")}),a.click(function(e){e.stopPropagation()}))},initHeaderIconTop=function(){var e=$("header .wrapper");$(".s-top",e).click(function(){return scrollToElement(document.body)})},initHeaderIconDown=function(){var e=$("header .wrapper"),t=$(".s-down",e),a=$("#footer");t.click(function(e){e.preventDefault(),e.stopPropagation(),scrollToElement(a)})},initHeaderIconComment=function(){var e=$("header .wrapper"),t=$(".s-comment",e),a=$(".s-down",e),n=$(".comment");n.length?(a.hide(),t.unbind("click"),t.show(),t.click(function(e){e.preventDefault(),e.stopPropagation(),scrollToElement(n)})):(t.hide(),a.show())},initHeader=function(){var e=$("header .menu").find("li a.active");if(e&&e.length&&e.removeClass("active"),window.subData){var a=$("header .wrapper");a.find(".nav-sub .logo").text(window.subData.title);var n=document.body.scrollTop;$(document,window).scroll(function(){var e=$(window).scrollTop(),t=e-n;50<=t&&100<e?(n=e,a.addClass("sub")):t<=-50&&(n=e,a.removeClass("sub"))})}},initWaves=function(){Waves.attach(".flat-btn",["waves-button"]),Waves.attach(".float-btn",["waves-button","waves-float"]),Waves.attach(".float-btn-light",["waves-button","waves-float","waves-light"]),Waves.attach(".flat-box",["waves-block"]),Waves.attach(".float-box",["waves-block","waves-float"]),Waves.attach(".waves-image"),Waves.init()},initReveal=function(){if(0!==$(".reveal").length){var e=ScrollReveal({distance:"0px",easing:"ease-in"});e.destroy(),e.reveal(".reveal")}},initToc=function(){$(".toc-wrapper").length&&($(".toc-wrapper a").unbind("click"),$(".toc-wrapper a").on("click",function(e){e.preventDefault(),e.stopPropagation(),scrollToElement(this)}))},initEssay=function(){$("#digest, #open").fadeOut(1e3,function(){$("#content").fadeIn(1e3)})},initSince=function e(){window.setTimeout(function(){e()},1e3);var t=new Date(CONFIG.since),a=((new Date).getTime()-t.getTime())/864e5,n=Math.floor(a),i=24*(a-n),o=Math.floor(i),r=60*(i-o),c=Math.floor(60*(i-o)),l=Math.floor(60*(r-c));$("#since").html(n+"天"+o+"时"+c+"分"+l+"秒")},initEvanyou=function(){if(document.getElementById("evanyou")){var i,e=function(e,t){r.beginPath(),r.moveTo(e.x,e.y),r.lineTo(t.x,t.y);var a=t.x+(2*m()-.25)*l,n=o(t.y);r.lineTo(a,n),r.closePath(),u-=d/-50,r.fillStyle="#"+(127*h(u)+128<<16|127*h(u+d/3)+128<<8|127*h(u+d/3*2)+128).toString(16),r.fill(),i[0]=i[1],i[1]={x:a,y:n}},o=function e(t){var a=t+(2*m()-1.1)*l;return c<a||a<0?e(t):a},t=document.getElementById("evanyou"),r=t.getContext("2d"),a=window.devicePixelRatio||1,n=window.innerWidth,c=window.innerHeight,l=90,s=Math,u=0,d=2*s.PI,h=s.cos,m=s.random;t.width=n*a,t.height=c*a,r.scale(a,a),r.globalAlpha=.6,function(){for(r.clearRect(0,0,n,c),i=[{x:0,y:.7*c+l},{x:0,y:.7*c-l}];i[1].x<n+l;)e(i[0],i[1])}()}},initAplayer=function(){document.getElementById("aplayer-fixed")&&((apFixed=new APlayer({element:document.getElementById("aplayer-fixed"),mutex:!0,order:"list",lrcType:3,fixed:!0})).lrc.hide(),$.ajax({url:"https://api.i-meto.com/meting/api?server=netease&type=playlist&id=2663347612",success:function(e){apFixed.list.add(JSON.parse(JSON.stringify(e)))}}))},initCount=function(e){var t,a=[((t=e).match(/[\u4E00-\u9FA5]/g)||[]).length,(t.replace(/[\u4E00-\u9FA5]/g,"").match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g)||[]).length],n=a[0]+a[1],i=n<1e3?n:Math.round(n/100)/10+"k",o=a[0]/300+a[1]/160,r=o<1?"1":parseInt(o,10);$("#wordcount").text(i),$("#min2read").text(r)},lazyImage=function(){$("img").not(".avatar").each(function(){var e=$(this),t=e.attr("src");e.attr("data-original")||(e.attr("class")&&!e.hasClass("lazy")?e.attr("class",e.attr("class")+" lazy"):e.attr("class","lazy"),e.attr("data-original",t),e.removeAttr("src"))})},wrapImage=function(){$("img").not(".avatar").not(".thumb").each(function(){var e=$(this);if(!e.attr("data-src")){var t=e.attr("alt"),a=e.parent("a");if(a.length<1){var n=e.attr("data-original");if(null==n)return;var i=n.lastIndexOf("?");-1!==i&&(n=n.substring(0,i)),a=e.wrap('<a href="'+n+'"></a>').parent("a")}a.attr("data-fancybox","gallery"),t&&a.attr("data-caption",t)}})},loadImage=function(){$("img.lazy").lazyload({effect:"fadeIn",threshold:50})},initImage=function(){location.pathname.startsWith("/blog/gallery/")||(lazyImage(),wrapImage(),loadImage())},initGallery=function(){if(location.pathname.startsWith("/blog/gallery/")){var t=[],r=document.getElementById("gallery"),a=function(e){var t=document.createElement("img");t.setAttribute("src",e.url);var a=document.createElement("div"),n="flex-grow:"+100*e.width/e.height+";flex-basis:"+200*e.width/e.height+"px;";a.setAttribute("style",n);var i=document.createElement("i"),o="padding-bottom:"+e.height/e.width*100+"%";i.setAttribute("style",o),a.appendChild(i),a.appendChild(t),r.appendChild(a)};fetch("/blog/gallery/data.json").then(function(e){return e.json()}).then(function(e){t=e.pics,function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(r),t.forEach(a),document.body.scrollTop=0,lazyImage(),wrapImage(),loadImage()})}},init=function(){initCustomSearch(),initHeader(),initHeaderIconTop(),initHeaderIconDown(),initHeaderIconComment(),initHeaderMenu(),initHeaderMenuPhone(),initHeaderSearch(),initWaves(),initReveal(),initToc(),initGallery(),initImage(),initSince(),initAplayer(),initEvanyou()},pjax_init=function(){initHeader(),initHeaderIconComment(),initHeaderMenu(),initWaves(),initReveal(),initToc(),initGallery(),initImage(),initEvanyou()};