!function(){var n={userInfo:{account:"",loginType:1,nickname:"",head:"",skey:""}},t=navigator.userAgent.match(/MicroMessenger/),i=function(n){var t,i,e,c={};{if(!(n.indexOf("?")>=0))return c;n=n.split("?")[1]}for(i=n.split("&"),t=0;t<i.length;t++)e=i[t].split("="),c[e[0]]=e[1];return c}(window.location.search);if(t)if(i.code){var e={};e.code=i.code,$.get("https://interactive.html5.qq.com/getWXInfo",e,function(t){if(0==t.code){t.data;n.userInfo.nickname=t.data.nickname,n.userInfo.head=t.data.headimgurl,n.userInfo.account=t.data.openid,n.userInfo.unionid=t.data.unionid,n.userInfo.skey=t.data.access_token,n.userInfo.loginType=2,_sdi.share.init({img_url:"http://res.imtt.qq.com/nazhao/wx/resources/image/share-logo.png",link:"http://res.imtt.qq.com/nazhao/wx/index.html",desc:"跟着兴趣走下去",title:"探索星空，快来发现命名属于你的星球！"},function(n){},function(n){});var i={time:Date.now(),value:n.userInfo};window.localStorage&&localStorage.setItem("wxUserInfo",JSON.stringify(i))}else c()})}else c();function c(){var n={};n.state=i.state||"",n.url=encodeURIComponent(window.location.href),$.get("https://interactive.html5.qq.com/OAuth",n,function(n,t,i){0===n.code&&window.location.replace(n.data)})}var o,a,f,u,s,r="?v=01091500",p=function(n,t){setTimeout(function(){var i="resources/"+n,e=new Image;e.src=i,e.complete?t&&t():e.onload=function(){t&&t(),e.onload=null}},100)},m=function(n,t){p("gif/"+n+".gif"+r,t),$(".sec-wrap.gif_"+n+" img").attr("src","resources/gif/"+n+".gif"+r)},l=function(n,t){var i=$(".sec-wrap.gif_"+n);i.show(),k.hide(),t&&t(i)},d=function(n,t){var i=$(".sec-wrap.gif_"+n);i.css("z-index","1").hide(),t&&setTimeout(function(){i.find("img").removeAttr("src").attr("src","resources/gif/"+n+".gif"+r)})},w=function(){var n=$(window).width(),t=$(window).height(),i=t/n,e=417/235,c=$("#gif_style");if(e>i){c.html(".sec-wrap img {width: 100%;}")}else{c.html(".sec-wrap img {width: "+t/e+"px;}")}},h=function(){m("1",function(){var n,t;v(),document.querySelector(".process").style.display="none",n=function(){setTimeout(function(){p("image/icon_dot.png"),p("image/icon_star.png"),m("2",function(){m("3"),m("4"),m("5"),m("4fan"),m("3fan"),m("6",function(){m("7"),m("8"),m("9"),m("8fan"),m("7fan"),m("10",function(){m("11"),m("12"),m("13"),m("12fan"),m("11fan"),m("14",function(){m("15"),m("16"),m("17"),m("16fan"),m("15fan"),m("18",function(){m("19"),m("20"),m("21"),m("20fan"),m("19fan"),m("22",function(){m("23"),m("24"),m("25",function(){p("image/share.png")})})})})})})})})},(t=$("#music")).attr("src","resources/mp3/Infinite_Space.mp3"),"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?document.addEventListener("WeixinJSBridgeReady",function(){t[0].play(),t[0].oncanplay=function(){n&&n()}},!1):(t[0].play(),n&&n())})},g=function(n){var t=n.find(".text"),i=n.find(".btn.back");t.css("opacity","0"),i.css("opacity","0").hide(),t.animate({opacity:1},4e3,function(){i.show().animate({opacity:1},500)})},b=function(n,t){var i=n.find("a.btn.fun");i.hide(),i.css("opacity","0"),setTimeout(function(){i.show().animate({opacity:1},500,function(){i.addClass("animate")})},1e3*t)},k=(a=-1,f=[{t:12,start:0,end:110,unit:"千米"},{t:10,start:0,end:58e6,unit:"千米"},{t:9,start:0,end:16e3,unit:"万光年"},{t:9,start:16e3,end:2e4,unit:"光年"},{t:15,start:0,end:3e8,unit:"光年"},{t:6,start:3e8,end:6e9,unit:"亿光年"}],{increase:function(){a++,clearInterval(o);var n=0,t=f[a],i=t.t,e=t.start,c=(t.end-e)/i,r=$(".instance-text");o=setInterval(function(){if(n<i){e+=c,n++;var u=function(n){for(var t=(n=""+n).length-3;t>0;t-=3)n=n.substring(0,t)+","+n.substr(t);return n}(Math.round(e))+t.unit;r.text(u+"左右")}else clearInterval(o),a>=f.length-1&&s()},333.33),u()},show:u=function(){$(".instance-wrap").show()},hide:s=function(){$(".instance-wrap").hide()}}),v=function(){l(1,function(n){var t=n.find(".text.a"),i=n.find(".text.b");n.find(".text").css("opacity","0"),t.animate({opacity:1},4e3,function(){t.animate({opacity:0},2e3,function(){i.animate({opacity:1},4e3,function(){i.animate({opacity:0},2e3)})})})}),setTimeout(function(){d(1),l(2,function(n){b(n,3),k.increase()})},14040)},_=function(){l(5,function(n){g(n)})},y=function(){l(9,function(n){g(n)})},T=function(){l(13,function(n){g(n)})},x=function(){l(17,function(n){g(n)})},I=function(){l(21,function(n){g(n)})},q=function(n){n.css({zIndex:3,opacity:1})},z=function(){$(".pop-wrap").css({zIndex:1,opacity:0})};$(document).ready(function(){h(),w(),$(window).resize(function(){w()}),$(".music-wrap .music-btn.on").click(function(){$(this).removeClass("show"),$(".music-wrap .music-btn.off").addClass("show"),$("#music")[0].pause()}),$(".music-wrap .music-btn.off").click(function(){$(this).removeClass("show"),$(".music-wrap .music-btn.on").addClass("show"),$("#music")[0].play()}),$(".sec-wrap.gif_2 .btn.fun.a").click(function(){d(2),l(3),setTimeout(function(){d(3,!0),l(4),setTimeout(function(){d(4,!0),_()},1040)},1080)}),$(".sec-wrap.gif_2 .btn.fun.b").click(function(){d(2),l(6,function(n){b(n,5),k.increase()})}),$(".sec-wrap.gif_5 .btn.back").click(function(){d(5,!0),l("4fan"),setTimeout(function(){d("4fan",!0),l("3fan"),setTimeout(function(){d("3fan",!0),l(2,function(){k.show()})},1080)},1040)}),$(".sec-wrap.gif_6 .btn.fun.a").click(function(){d(6),l(7),setTimeout(function(){d(7,!0),l(8),setTimeout(function(){d(8,!0),y()},1080)},1080)}),$(".sec-wrap.gif_6 .btn.fun.b").click(function(){d(6),l(10,function(n){b(n,2),k.increase()})}),$(".sec-wrap.gif_9 .btn.back").click(function(){d(9,!0),l("8fan"),setTimeout(function(){d("8fan",!0),l("7fan"),setTimeout(function(){d("7fan",!0),l(6,function(){k.show()})},1080)},1080)}),$(".sec-wrap.gif_10 .btn.fun.a").click(function(){d(10),l(11),setTimeout(function(){d(11,!0),l(12),setTimeout(function(){d(12,!0),T()},2070)},1080)}),$(".sec-wrap.gif_10 .btn.fun.b").click(function(){d(10),l(14,function(n){b(n,2),k.increase()})}),$(".sec-wrap.gif_13 .btn.back").click(function(){d(13,!0),l("12fan"),setTimeout(function(){d("12fan",!0),l("11fan"),setTimeout(function(){d("11fan",!0),l(10,function(){k.show()})},1080)},2070)}),$(".sec-wrap.gif_14 .btn.fun.a").click(function(){d(14),l(15),setTimeout(function(){d(15,!0),l(16),setTimeout(function(){d(16,!0),x()},1e3)},2e3)}),$(".sec-wrap.gif_14 .btn.fun.b").click(function(){d(14),l(18,function(n){b(n,2),k.increase()})}),$(".sec-wrap.gif_17 .btn.back").click(function(){d(17,!0),l("16fan"),setTimeout(function(){d("16fan",!0),l("15fan"),setTimeout(function(){d("15fan",!0),l(14,function(){k.show()})},2e3)},1e3)}),$(".sec-wrap.gif_18 .btn.fun.a").click(function(){d(18),l(19),setTimeout(function(){d(19,!0),l(20),setTimeout(function(){d(20,!0),I()},90)},1080)}),$(".sec-wrap.gif_18 .btn.fun.b").click(function(){d(18),l(22,function(){k.increase()}),setTimeout(function(){d(22),l(23,function(n){k.show(),setTimeout(function(){k.hide()},500),g(n),b(n,4)})},2e3)}),$(".sec-wrap.gif_21 .btn.back").click(function(){d(21,!0),l("20fan"),setTimeout(function(){d("20fan",!0),l("19fan"),setTimeout(function(){d("19fan",!0),l(18,function(){k.show()})},1080)},90)}),$(".sec-wrap.gif_23 .btn.fun.b").click(function(){d(23),l(24,function(n){var t=n.find(".text");t.css("opacity","0"),t.animate({opacity:1},1e3)})}),$(".sec-wrap.gif_24 .anc").click(function(){d(24),l(25,function(){setTimeout(function(){z(),q($(".pop-wrap.name"))},4030)})}),$(".sec-wrap.gif_25 .pop-wrap.name .pop-btn-name").click(function(){z(),q($(".pop-wrap.form"))}),$(".sec-wrap.gif_25 .pop-wrap.form .form-submit").click(function(){!function(){var t=$(".pop-wrap.form .form-input").val().trim();if(t.length>0)if(function(n){for(var t=0,i=0;i<n.length;i++)n[i].charCodeAt()>128?t+=2:t++;return!(t>20)}(t)){_sdi.share.init({img_url:"http://res.imtt.qq.com/nazhao/wx/resources/image/share-logo.png",link:"http://res.imtt.qq.com/nazhao/wx/index.html",desc:"快来探索发现你的守护星",title:n.userInfo.nickname+"正在星际穿越，还发现了"+t+"星！"},function(n){},function(n){});var i=$(".pop-wrap.result"),e=[3,5,8,10,15,18][Math.floor(6*Math.random())];i.find(".star-name").text(t),i.find(".star-instance").text(e),z(),q(i),$(".pop-share-wrap").show()}else alert("对不起，命名长度超过限制，最多可输入20个字节，中文占2字节，英文占1字节");else alert("请为星球命名")}()}),$(".pop-share-wrap .pop-share").click(function(){$(".pop-share-wrap").hide()})})}();