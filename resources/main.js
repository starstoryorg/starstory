!function(){function n(){var n={};n.state=c.state||"",n.url=encodeURIComponent(window.location.href),$.get("https://interactive.html5.qq.com/OAuth",n,function(n,t,i){0===n.code&&window.location.replace(n.data)})}var t={userInfo:{account:"",loginType:1,nickname:"",head:"",skey:""}},i=navigator.userAgent,e=i.match(/MicroMessenger/),c=function(n){var t,i,e,c={};if(!(n.indexOf("?")>=0))return c;for(n=n.split("?")[1],i=n.split("&"),t=0;t<i.length;t++)e=i[t].split("="),c[e[0]]=e[1];return c}(window.location.search);if(e)if(c.code){var o={};o.code=c.code,$.get("https://interactive.html5.qq.com/getWXInfo",o,function(i){if(0==i.code){i.data;t.userInfo.nickname=i.data.nickname,t.userInfo.head=i.data.headimgurl,t.userInfo.account=i.data.openid,t.userInfo.unionid=i.data.unionid,t.userInfo.skey=i.data.access_token,t.userInfo.loginType=2,_sdi.share.init({img_url:"http://res.imtt.qq.com/nazhao/wx/resources/image/share-logo.png",link:"http://res.imtt.qq.com/nazhao/wx/index.html",desc:"跟着兴趣走下去",title:"探索星空，快来发现命名属于你的星球！"},function(n){},function(n){});var e={time:Date.now(),value:t.userInfo};window.localStorage&&localStorage.setItem("wxUserInfo",JSON.stringify(e))}else n()})}else n();var a=function(n){var t=$("#music");t.attr("src","resources/mp3/Infinite_Space.mp3"),"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?document.addEventListener("WeixinJSBridgeReady",function(){t[0].play(),t[0].oncanplay=function(){n&&n()}},!1):(t[0].play(),n&&n())},f=function(n,t){setTimeout(function(){var i="resources/"+n,e=new Image;e.src=i,e.complete?t&&t():e.onload=function(){t&&t(),e.onload=null}},100)},u=function(n,t){f("gif/"+n+".gif?v=01131730",t),$(".sec-wrap.gif_"+n+" img").attr("src","resources/gif/"+n+".gif?v=01131730")},s=function(n,t){var i=$(".sec-wrap.gif_"+n);i.show(),w.hide(),t&&t(i)},r=function(n,t){var i=$(".sec-wrap.gif_"+n);i.css("z-index","1").hide(),t&&setTimeout(function(){i.find("img").removeAttr("src").attr("src","resources/gif/"+n+".gif?v=01131730")})},m=function(){var n=$(window).width(),t=$(window).height(),i=t/n,e=$("#gif_style");if(417/235>i){e.html(".sec-wrap img {width: 100%;}")}else{e.html(".sec-wrap img {width: "+t/(417/235)+"px;}")}},p=function(){u("1",function(){h(),document.querySelector(".process").style.display="none",a(function(){setTimeout(function(){f("image/qqliulanqi.png"),f("image/icon_dot.png"),f("image/icon_star.png"),u("2",function(){u("3"),u("4"),u("5"),u("4fan"),u("3fan"),u("6",function(){u("7"),u("8"),u("9"),u("8fan"),u("7fan"),u("10",function(){u("11"),u("12"),u("13"),u("12fan"),u("11fan"),u("14",function(){u("15"),u("16"),u("17"),u("16fan"),u("15fan"),u("18",function(){u("19"),u("20"),u("21"),u("20fan"),u("19fan"),u("22",function(){u("23"),u("24"),u("25")})})})})})})})})})},d=function(n){var t=n.find(".text"),i=n.find(".btn.back");t.css("opacity","0"),i.css("opacity","0").hide(),t.animate({opacity:1},4e3,function(){i.show().animate({opacity:1},500)})},l=function(n,t){var i=n.find("a.btn.fun");i.hide(),i.css("opacity","0"),setTimeout(function(){i.show().animate({opacity:1},500,function(){i.addClass("animate")})},1e3*t)},w=function(){var n,t=-1,i=function(n){n=""+n;for(var t=n.length-3;t>0;t-=3)n=n.substring(0,t)+","+n.substr(t);return n},e=[{t:12,start:0,end:110,unit:"千米",width:74},{t:10,start:0,end:58e6,unit:"千米",width:124},{t:9,start:0,end:16e3,unit:"光年",width:96},{t:9,start:16e3,end:2e4,unit:"光年"},{t:15,start:0,end:3e8,unit:"光年",width:138},{t:6,start:3e8,end:6e9,unit:"光年"}],c=function(){t++,clearInterval(n);var c=0,f=e[t],u=f.t,s=f.start,r=(f.end-s)/u,m=$(".instance-text");f.width&&setTimeout(function(){m.css("width",f.width+"px")},333.33),n=setInterval(function(){if(c<u){s+=r,c++;var o=i(Math.round(s))+f.unit;m.text(o+"左右")}else clearInterval(n),t>=e.length-1&&a()},333.33),o()},o=function(){$(".instance-wrap").show()},a=function(){$(".instance-wrap").hide()};return{increase:c,show:o,hide:a}}(),h=function(){s(1,function(n){var t=n.find(".text.a"),i=n.find(".text.b");n.find(".text").css("opacity","0"),t.animate({opacity:1},4e3,function(){t.animate({opacity:0},2e3,function(){i.animate({opacity:1},4e3,function(){i.animate({opacity:0},2e3)})})})}),setTimeout(function(){r(1),s(2,function(n){l(n,3),w.increase()})},14040)},g=function(){s(3),setTimeout(function(){r(3,!0),s(4),setTimeout(function(){r(4,!0),b()},1040)},1080)},b=function(){s(5,function(n){d(n)})},v=function(){s(7),setTimeout(function(){r(7,!0),s(8),setTimeout(function(){r(8,!0),k()},1080)},1080)},k=function(){s(9,function(n){d(n)})},T=function(){s(11),setTimeout(function(){r(11,!0),s(12),setTimeout(function(){r(12,!0),_()},2070)},1080)},_=function(){s(13,function(n){d(n)})},y=function(){s(15),setTimeout(function(){r(15,!0),s(16),setTimeout(function(){r(16,!0),x()},1e3)},2e3)},x=function(){s(17,function(n){d(n)})},I=function(){s(19),setTimeout(function(){r(19,!0),s(20),setTimeout(function(){r(20,!0),q()},90)},1080)},q=function(){s(21,function(n){d(n)})},z=function(){s(22,function(){w.increase()}),setTimeout(function(){r(22),s(23,function(n){w.show(),setTimeout(function(){w.hide()},500),d(n),l(n,4)})},2e3)},C=function(n){n.css({zIndex:3,opacity:1})},M=function(){$(".pop-wrap").css({zIndex:1,opacity:0})},S=function(){M(),C($(".pop-wrap.name"))},A=function(){M(),C($(".pop-wrap.form"))},O=function(n){for(var t=0,i=0;i<n.length;i++){n[i].charCodeAt()>128?t+=2:t++}return!(t>20)},J=function(){var n=$(".pop-wrap.form .form-input").val().trim();if(n.length>0)if(O(n)){_sdi.share.init({img_url:"http://res.imtt.qq.com/nazhao/wx/resources/image/share-logo.png",link:"http://res.imtt.qq.com/nazhao/wx/index.html",desc:"快来探索发现你的守护星",title:t.userInfo.nickname+"正在星际穿越，还发现了"+n+"星！"},function(n){},function(n){});var i=$(".pop-wrap.result"),e=[3,5,8,10,15,18],c=e[Math.floor(6*Math.random())];i.find(".star-name").text(n),i.find(".star-instance").text(c),M(),C(i),$(".music-wrap").hide()}else alert("对不起，命名长度超过限制，最多可输入20个字节，中文占2字节，英文占1字节");else alert("请为星球命名")};$(document).ready(function(){p(),m(),$(window).resize(function(){m()}),$(".music-wrap .music-btn.on").click(function(){$(this).removeClass("show"),$(".music-wrap .music-btn.off").addClass("show"),$("#music")[0].pause()}),$(".music-wrap .music-btn.off").click(function(){$(this).removeClass("show"),$(".music-wrap .music-btn.on").addClass("show"),$("#music")[0].play()}),$(".sec-wrap.gif_2 .btn.fun.a").click(function(){r(2),g()}),$(".sec-wrap.gif_2 .btn.fun.b").click(function(){r(2),s(6,function(n){l(n,5),w.increase()})}),$(".sec-wrap.gif_5 .btn.back").click(function(){r(5,!0),s("4fan"),setTimeout(function(){r("4fan",!0),s("3fan"),setTimeout(function(){r("3fan",!0),s(2,function(){w.show()})},1080)},1040)}),$(".sec-wrap.gif_6 .btn.fun.a").click(function(){r(6),v()}),$(".sec-wrap.gif_6 .btn.fun.b").click(function(){r(6),s(10,function(n){l(n,2),w.increase()})}),$(".sec-wrap.gif_9 .btn.back").click(function(){r(9,!0),s("8fan"),setTimeout(function(){r("8fan",!0),s("7fan"),setTimeout(function(){r("7fan",!0),s(6,function(){w.show()})},1080)},1080)}),$(".sec-wrap.gif_10 .btn.fun.a").click(function(){r(10),T()}),$(".sec-wrap.gif_10 .btn.fun.b").click(function(){r(10),s(14,function(n){l(n,2),w.increase()})}),$(".sec-wrap.gif_13 .btn.back").click(function(){r(13,!0),s("12fan"),setTimeout(function(){r("12fan",!0),s("11fan"),setTimeout(function(){r("11fan",!0),s(10,function(){w.show()})},1080)},2070)}),$(".sec-wrap.gif_14 .btn.fun.a").click(function(){r(14),y()}),$(".sec-wrap.gif_14 .btn.fun.b").click(function(){r(14),s(18,function(n){l(n,2),w.increase()})}),$(".sec-wrap.gif_17 .btn.back").click(function(){r(17,!0),s("16fan"),setTimeout(function(){r("16fan",!0),s("15fan"),setTimeout(function(){r("15fan",!0),s(14,function(){w.show()})},2e3)},1e3)}),$(".sec-wrap.gif_18 .btn.fun.a").click(function(){r(18),I()}),$(".sec-wrap.gif_18 .btn.fun.b").click(function(){r(18),z()}),$(".sec-wrap.gif_21 .btn.back").click(function(){r(21,!0),s("20fan"),setTimeout(function(){r("20fan",!0),s("19fan"),setTimeout(function(){r("19fan",!0),s(18,function(){w.show()})},1080)},90)}),$(".sec-wrap.gif_23 .btn.fun.b").click(function(){r(23),s(24,function(n){var t=n.find(".text");t.css("opacity","0"),t.animate({opacity:1},1e3)})}),$(".sec-wrap.gif_24 .anc").click(function(){r(24),s(25,function(){setTimeout(function(){S()},4030)})}),$(".sec-wrap.gif_25 .pop-wrap.name .pop-btn-name").click(function(){A()}),$(".sec-wrap.gif_25 .pop-wrap.form .form-submit").click(function(){J()})})}();