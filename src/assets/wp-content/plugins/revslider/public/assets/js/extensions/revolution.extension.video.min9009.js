/********************************************
 * REVOLUTION 5.4.2 EXTENSION - VIDEO FUNCTIONS
 * @version: 2.1.6 (15.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";function f(a){return void 0==a?-1:jQuery.isNumeric(a)?a:a.split(":").length>1?60*parseInt(a.split(":")[0],0)+parseInt(a.split(":")[1],0):a}var b=jQuery.fn.revolution,c=b.is_mobile(),d=b.is_android(),e={alias:"Video Min JS",name:"revolution.extensions.video.min.js",min_core:"5.4.5",version:"2.1.6"};jQuery.extend(!0,b,{preLoadAudio:function(a,c){if("stop"===b.compare_version(e).check)return!1;a.find(".tp-audiolayer").each(function(){var a=jQuery(this),d={};0===a.find("audio").length&&(d.src=void 0!=a.data("videomp4")?a.data("videomp4"):"",d.pre=a.data("videopreload")||"",void 0===a.attr("id")&&a.attr("audio-layer-"+Math.round(199999*Math.random())),d.id=a.attr("id"),d.status="prepared",d.start=jQuery.now(),d.waittime=1e3*a.data("videopreloadwait")||5e3,"auto"!=d.pre&&"canplaythrough"!=d.pre&&"canplay"!=d.pre&&"progress"!=d.pre||(void 0===c.audioqueue&&(c.audioqueue=[]),c.audioqueue.push(d),b.manageVideoLayer(a,c)))})},preLoadAudioDone:function(a,b,c){b.audioqueue&&b.audioqueue.length>0&&jQuery.each(b.audioqueue,function(b,d){a.data("videomp4")!==d.src||d.pre!==c&&"auto"!==d.pre||(d.status="loaded")})},resetVideo:function(a,d,e){var g=a.data();switch(g.videotype){case"youtube":g.player;try{if("on"==g.forcerewind){var i=f(a.data("videostartat"));1===g.bgvideo||a.find(".tp-videoposter").length;void 0!=g.player&&(i=-1==i?0:i,g.player.seekTo(i),g.player.pauseVideo())}}catch(a){}0==a.find(".tp-videoposter").length&&1!==g.bgvideo&&!0!==e&&punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"vimeo":var l=$f(a.find("iframe").attr("id"));try{if("on"==g.forcerewind){var i=f(g.videostartat);1===g.bgvideo||a.find(".tp-videoposter").length;i=-1==i?0:i,l.api("seekTo",i),l.api("pause")}}catch(a){}0==a.find(".tp-videoposter").length&&1!==g.bgvideo&&!0!==e&&punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"html5":if(c&&1==g.disablevideoonmobile)return!1;var n="html5"==g.audio?"audio":"video",o=a.find(n),p=o[0];if(punchgs.TweenLite.to(o,.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"on"==g.forcerewind&&!a.hasClass("videoisplaying"))try{var i=f(g.videostartat);p.currentTime=-1==i?0:i}catch(a){}("mute"==g.volume||b.lastToggleState(a.videomutetoggledby)||!0===d.globalmute)&&(p.muted=!0)}},isVideoMuted:function(a,b){var c=!1,d=a.data();switch(d.videotype){case"youtube":try{c=d.player.isMuted()}catch(a){}break;case"vimeo":try{$f(a.find("iframe").attr("id"));"mute"==d.volume&&(c=!0)}catch(a){}break;case"html5":var g="html5"==d.audio?"audio":"video";a.find(g)[0].muted&&(c=!0)}return c},muteVideo:function(a,b){var c=a.data();switch(c.videotype){case"youtube":try{c.player.mute()}catch(a){}break;case"vimeo":try{var e=$f(a.find("iframe").attr("id"));a.data("volume","mute"),e.api("setVolume",0)}catch(a){}break;case"html5":var f="html5"==c.audio?"audio":"video";a.find(f)[0].muted=!0}},unMuteVideo:function(a,b){if(!0!==b.globalmute){var c=a.data();switch(c.videotype){case"youtube":try{c.player.unMute()}catch(a){}break;case"vimeo":try{var e=$f(a.find("iframe").attr("id"));a.data("volume","1"),e.api("setVolume",1)}catch(a){}break;case"html5":var f="html5"==c.audio?"audio":"video";a.find(f)[0].muted=!1}}},stopVideo:function(a,b){var c=a.data();switch(b.leaveViewPortBasedStop||(b.lastplayedvideos=[]),b.leaveViewPortBasedStop=!1,c.videotype){case"youtube":try{var d=c.player;if(2===d.getPlayerState()||5===d.getPlayerState())return;d.pauseVideo(),c.youtubepausecalled=!0,setTimeout(function(){c.youtubepausecalled=!1},80)}catch(a){console.log("Issue at YouTube Video Pause:"),console.log(a)}break;case"vimeo":try{$f(a.find("iframe").attr("id")).api("pause"),c.vimeopausecalled=!0,setTimeout(function(){c.vimeopausecalled=!1},80)}catch(a){console.log("Issue at Vimeo Video Pause:"),console.log(a)}break;case"html5":var f="html5"==c.audio?"audio":"video",g=a.find(f),h=g[0];void 0!=g&&void 0!=h&&h.pause()}},playVideo:function(a,c){clearTimeout(a.data("videoplaywait"));var d=a.data();switch(d.videotype){case"youtube":if(0==a.find("iframe").length)a.append(a.data("videomarkup")),i(a,c,!0);else if(void 0!=d.player.playVideo){var e=f(a.data("videostartat")),h=d.player.getCurrentTime();1==a.data("nextslideatend-triggered")&&(h=-1,a.data("nextslideatend-triggered",0)),-1!=e&&e>h&&d.player.seekTo(e),!0!==d.youtubepausecalled&&d.player.playVideo()}else a.data("videoplaywait",setTimeout(function(){!0!==d.youtubepausecalled&&b.playVideo(a,c)},50));break;case"vimeo":if(0==a.find("iframe").length)a.append(a.data("videomarkup")),i(a,c,!0);else if(a.hasClass("rs-apiready")){var j=a.find("iframe").attr("id"),k=$f(j);void 0==k.api("play")?a.data("videoplaywait",setTimeout(function(){!0!==d.vimeopausecalled&&b.playVideo(a,c)},50)):setTimeout(function(){k.api("play");var b=f(a.data("videostartat")),c=a.data("currenttime");1==a.data("nextslideatend-triggered")&&(c=-1,a.data("nextslideatend-triggered",0)),-1!=b&&b>c&&k.api("seekTo",b)},510)}else a.data("videoplaywait",setTimeout(function(){!0!==d.vimeopausecalled&&b.playVideo(a,c)},50));break;case"html5":var l="html5"==d.audio?"audio":"video",m=a.find(l),n=m[0];if(1!=m.parent().data("metaloaded"))g(n,"loadedmetadata",function(a){b.resetVideo(a,c),n.play();var d=f(a.data("videostartat")),e=n.currentTime;1==a.data("nextslideatend-triggered")&&(e=-1,a.data("nextslideatend-triggered",0)),-1!=d&&d>e&&(n.currentTime=d)}(a));else{n.play();var e=f(a.data("videostartat")),h=n.currentTime;1==a.data("nextslideatend-triggered")&&(h=-1,a.data("nextslideatend-triggered",0)),-1!=e&&e>h&&(n.currentTime=e)}}},isVideoPlaying:function(a,b){var c=!1;return void 0!=b.playingvideos&&jQuery.each(b.playingvideos,function(b,d){a.attr("id")==d.attr("id")&&(c=!0)}),c},removeMediaFromList:function(a,b){n(a,b)},prepareCoveredVideo:function(a,c,d){var e=d.find("iframe, video"),f=a.split(":")[0],g=a.split(":")[1],h=d.closest(".tp-revslider-slidesli"),i=h.width()/h.height(),j=f/g,k=i/j*100,l=j/i*100;i>j?punchgs.TweenLite.to(e,.001,{height:k+"%",width:"100%",top:-(k-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.to(e,.001,{width:l+"%",height:"100%",left:-(l-100)/2+"%",top:"0px",position:"absolute"}),e.hasClass("resizelistener")||(e.addClass("resizelistener"),jQuery(window).resize(function(){clearTimeout(e.data("resizelistener")),e.data("resizelistener",setTimeout(function(){b.prepareCoveredVideo(a,c,d)},30))}))},checkVideoApis:function(a,b,c){location.protocol;if((void 0!=a.data("ytid")||a.find("iframe").length>0&&a.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(b.youtubeapineeded=!0),(void 0!=a.data("ytid")||a.find("iframe").length>0&&a.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&0==c.addedyt){b.youtubestarttime=jQuery.now(),c.addedyt=1;var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var f=document.getElementsByTagName("script")[0],g=!0;jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(g=!1)}),g&&f.parentNode.insertBefore(e,f)}if((void 0!=a.data("vimeoid")||a.find("iframe").length>0&&a.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(b.vimeoapineeded=!0),(void 0!=a.data("vimeoid")||a.find("iframe").length>0&&a.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&0==c.addedvim){b.vimeostarttime=jQuery.now(),c.addedvim=1;var h=document.createElement("script"),f=document.getElementsByTagName("script")[0],g=!0;h.src="https://secure-a.vimeocdn.com/js/froogaloop2.min.js",jQuery("head").find("*").each(function(){"https://secure-a.vimeocdn.com/js/froogaloop2.min.js"==jQuery(this).attr("src")&&(g=!1)}),g&&f.parentNode.insertBefore(h,f)}return c},manageVideoLayer:function(a,d,h,j){if("stop"===b.compare_version(e).check)return!1;var k=a.data(),m=k.videoattributes,n=k.ytid,o=k.vimeoid,p="auto"===k.videopreload||"canplay"===k.videopreload||"canplaythrough"===k.videopreload||"progress"===k.videopreload?"auto":k.videopreload,q=k.videomp4,r=k.videowebm,s=k.videoogv,t=k.allowfullscreenvideo,u=k.videocontrols,v="http",w="loop"==k.videoloop?"loop":"loopandnoslidestop"==k.videoloop?"loop":"",x=void 0!=q||void 0!=r?"html5":void 0!=n&&String(n).length>1?"youtube":void 0!=o&&String(o).length>1?"vimeo":"none",y="html5"==k.audio?"audio":"video",z="html5"==x&&0==a.find(y).length?"html5":"youtube"==x&&0==a.find("iframe").length?"youtube":"vimeo"==x&&0==a.find("iframe").length?"vimeo":"none";switch(w=!0===k.nextslideatend?"":w,k.videotype=x,z){case"html5":"controls"!=u&&(u="");var y="video";"html5"==k.audio&&(y="audio",a.addClass("tp-audio-html5"));var A=d.fallbacks.allowHTML5AutoPlayOnAndroid?"muted playsinline":"",B="<"+y+" "+A+' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" '+w+' preload="'+p+'">';"auto"==p&&(d.mediapreload=!0),void 0!=r&&"firefox"==b.get_browser().toLowerCase()&&(B=B+'<source src="'+r+'" type="video/webm" />'),void 0!=q&&(B=B+'<source src="'+q+'" type="video/mp4" />'),void 0!=s&&(B=B+'<source src="'+s+'" type="video/ogg" />'),B=B+"</"+y+">";var C="";"true"!==t&&!0!==t||(C='<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'),"controls"==u&&(B=B+'<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+C+"</div>"),a.data("videomarkup",B),a.append(B),(c&&1==a.data("disablevideoonmobile")||b.isIE(8))&&a.find(y).remove(),a.find(y).each(function(c){var e=this,f=jQuery(this);f.parent().hasClass("html5vid")||f.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'),1!=f.parent().data("metaloaded")&&g(e,"loadedmetadata",function(a){l(a,d),b.resetVideo(a,d)}(a))});break;case"youtube":v="https","none"==u&&(m=m.replace("controls=1","controls=0"),-1==m.toLowerCase().indexOf("controls")&&(m+="&controls=0")),!0!==k.videoinline&&"true"!==k.videoinline&&1!==k.videoinline||(m+="&playsinline=1");var D=f(a.data("videostartat")),E=f(a.data("videoendat"));-1!=D&&(m=m+"&start="+D),-1!=E&&(m=m+"&end="+E);var F=m.split("origin="+v+"://"),G="";F.length>1?(G=F[0]+"origin="+v+"://",self.location.href.match(/www/gi)&&!F[1].match(/www/gi)&&(G+="www."),G+=F[1]):G=m;var H="true"===t||!0===t?"allowfullscreen":"";a.data("videomarkup",'<iframe type="text/html" src="'+v+"://www.youtube.com/embed/"+n+"?"+G+'" '+H+' width="100%" height="100%" style="opacity:0;visibility:hidden;width:100%;height:100%"></iframe>');break;case"vimeo":v="https",a.data("videomarkup",'<iframe src="'+v+"://player.vimeo.com/video/"+o+"?autoplay=0&"+m+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:hidden;100%;height:100%"></iframe>')}var I=c&&"on"==a.data("noposteronmobile");if(void 0!=k.videoposter&&k.videoposter.length>2&&!I)0==a.find(".tp-videoposter").length&&a.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url('+k.videoposter+'); background-size:cover;background-position:center center;"></div>'),0==a.find("iframe").length&&a.find(".tp-videoposter").click(function(){if(b.playVideo(a,d),c){if(1==a.data("disablevideoonmobile"))return!1;punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})}});else{if(c&&1==a.data("disablevideoonmobile"))return!1;0!=a.find("iframe").length||"youtube"!=x&&"vimeo"!=x||(a.append(a.data("videomarkup")),i(a,d,!1))}"none"!=a.data("dottedoverlay")&&void 0!=a.data("dottedoverlay")&&1!=a.find(".tp-dottedoverlay").length&&a.append('<div class="tp-dottedoverlay '+a.data("dottedoverlay")+'"></div>'),a.addClass("HasListener"),1==a.data("bgvideo")&&punchgs.TweenLite.set(a.find("video, iframe"),{autoAlpha:0})}});var g=function(a,b,c){a.addEventListener?a.addEventListener(b,c,{capture:!1,passive:!0}):a.attachEvent(b,c,{capture:!1,passive:!0})},h=function(a,b,c){var d={};return d.video=a,d.videotype=b,d.settings=c,d},i=function(a,d,e){var g=a.data(),i=a.find("iframe"),l="iframe"+Math.round(1e5*Math.random()+1),o=g.videoloop,p="loopandnoslidestop"!=o;if(o="loop"==o||"loopandnoslidestop"==o,1==a.data("forcecover")){a.removeClass("fullscreenvideo").addClass("coverscreenvideo");var q=a.data("aspectratio");void 0!=q&&q.split(":").length>1&&(console.log("i"),b.prepareCoveredVideo(q,d,a))}if(1==a.data("bgvideo")){var q=a.data("aspectratio");void 0!=q&&q.split(":").length>1&&(console.log("ak"),b.prepareCoveredVideo(q,d,a))}if(i.attr("id",l),e&&a.data("startvideonow",!0),1!==a.data("videolistenerexist"))switch(g.videotype){case"youtube":var r=new YT.Player(l,{events:{onStateChange:function(c){var e=a.closest(".tp-simpleresponsive"),q=(g.videorate,a.data("videostart"),k());if(c.data==YT.PlayerState.PLAYING)punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==a.data("volume")||b.lastToggleState(a.data("videomutetoggledby"))||!0===d.globalmute?r.mute():(r.unMute(),r.setVolume(parseInt(a.data("volume"),0)||75)),d.videoplaying=!0,m(a,d),p?d.c.trigger("stoptimer"):d.videoplaying=!1,d.c.trigger("revolution.slide.onvideoplay",h(r,"youtube",a.data())),b.toggleState(g.videotoggledby);else{if(0==c.data&&o){var s=f(a.data("videostartat"));-1!=s&&r.seekTo(s),r.playVideo(),b.toggleState(g.videotoggledby)}q||0!=c.data&&2!=c.data||!("on"==a.data("showcoveronpause")&&a.find(".tp-videoposter").length>0||1===a.data("bgvideo")&&a.find(".rs-fullvideo-cover").length>0)||(1===a.data("bgvideo")?punchgs.TweenLite.to(a.find(".rs-fullvideo-cover"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(a.find(".tp-videoposter"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find("iframe"),.1,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),-1!=c.data&&3!=c.data&&(d.videoplaying=!1,d.tonpause=!1,n(a,d),e.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",h(r,"youtube",a.data())),void 0!=d.currentLayerVideoIsPlaying&&d.currentLayerVideoIsPlaying.attr("id")!=a.attr("id")||b.unToggleState(g.videotoggledby)),0==c.data&&1==a.data("nextslideatend")?(j(),a.data("nextslideatend-triggered",1),d.c.revnext(),n(a,d)):(n(a,d),d.videoplaying=!1,e.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",h(r,"youtube",a.data())),void 0!=d.currentLayerVideoIsPlaying&&d.currentLayerVideoIsPlaying.attr("id")!=a.attr("id")||b.unToggleState(g.videotoggledby))}},onReady:function(b){var d=g.videorate;a.data("videostart");if(a.addClass("rs-apiready"),void 0!=d&&b.target.setPlaybackRate(parseFloat(d)),a.find(".tp-videoposter").unbind("click"),a.find(".tp-videoposter").click(function(){c||r.playVideo()}),a.data("startvideonow")){g.player.playVideo();var h=f(a.data("videostartat"));-1!=h&&g.player.seekTo(h)}a.data("videolistenerexist",1)}}});a.data("player",r);break;case"vimeo":for(var w,s=i.attr("src"),t={},u=s,v=/([^&=]+)=([^&]*)/g;w=v.exec(u);)t[decodeURIComponent(w[1])]=decodeURIComponent(w[2]);s=void 0!=t.player_id?s.replace(t.player_id,l):s+"&player_id="+l;try{s=s.replace("api=0","api=1")}catch(a){}s+="&api=1",i.attr("src",s);var r=a.find("iframe")[0],y=(jQuery("#"+l),$f(l));y.addEvent("ready",function(){if(a.addClass("rs-apiready"),y.addEvent("play",function(c){a.data("nextslidecalled",0),punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),d.c.trigger("revolution.slide.onvideoplay",h(y,"vimeo",a.data())),d.videoplaying=!0,m(a,d),p?d.c.trigger("stoptimer"):d.videoplaying=!1,"mute"==a.data("volume")||b.lastToggleState(a.data("videomutetoggledby"))||!0===d.globalmute?y.api("setVolume","0"):y.api("setVolume",parseInt(a.data("volume"),0)/100||.75),b.toggleState(g.videotoggledby)}),y.addEvent("playProgress",function(b){var c=f(a.data("videoendat"));if(a.data("currenttime",b.seconds),0!=c&&Math.abs(c-b.seconds)<.3&&c>b.seconds&&1!=a.data("nextslidecalled"))if(o){y.api("play");var e=f(a.data("videostartat"));-1!=e&&y.api("seekTo",e)}else 1==a.data("nextslideatend")&&(a.data("nextslideatend-triggered",1),a.data("nextslidecalled",1),d.c.revnext()),y.api("pause")}),y.addEvent("finish",function(c){n(a,d),d.videoplaying=!1,d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",h(y,"vimeo",a.data())),1==a.data("nextslideatend")&&(a.data("nextslideatend-triggered",1),d.c.revnext()),void 0!=d.currentLayerVideoIsPlaying&&d.currentLayerVideoIsPlaying.attr("id")!=a.attr("id")||b.unToggleState(g.videotoggledby)}),y.addEvent("pause",function(c){("on"==a.data("showcoveronpause")&&a.find(".tp-videoposter").length>0||1===a.data("bgvideo")&&a.find(".rs-fullvideo-cover").length>0)&&(1===a.data("bgvideo")?punchgs.TweenLite.to(a.find(".rs-fullvideo-cover"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(a.find(".tp-videoposter"),.1,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find("iframe"),.1,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),d.videoplaying=!1,d.tonpause=!1,n(a,d),d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",h(y,"vimeo",a.data())),void 0!=d.currentLayerVideoIsPlaying&&d.currentLayerVideoIsPlaying.attr("id")!=a.attr("id")||b.unToggleState(g.videotoggledby)}),a.find(".tp-videoposter").unbind("click"),a.find(".tp-videoposter").click(function(){if(!c)return y.api("play"),!1}),a.data("startvideonow")){y.api("play");var e=f(a.data("videostartat"));-1!=e&&y.api("seekTo",e)}a.data("videolistenerexist",1)})}else{var z=f(a.data("videostartat"));switch(g.videotype){case"youtube":e&&(g.player.playVideo(),-1!=z&&g.player.seekTo());break;case"vimeo":if(e){var y=$f(a.find("iframe").attr("id"));y.api("play"),-1!=z&&y.api("seekTo",z)}}}},j=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},k=function(){try{if(void 0!==window.fullScreen)return window.fullScreen;var a=5;return jQuery.browser.webkit&&/Apple Computer/.test(navigator.vendor)&&(a=42),screen.width==window.innerWidth&&Math.abs(screen.height-window.innerHeight)<a}catch(a){}},l=function(a,e,i){if(c&&1==a.data("disablevideoonmobile"))return!1;var l=a.data(),o="html5"==l.audio?"audio":"video",p=a.find(o),q=p[0],r=p.parent(),s=l.videoloop,t="loopandnoslidestop"!=s;if(s="loop"==s||"loopandnoslidestop"==s,r.data("metaloaded",1),1!=a.data("bgvideo")||"none"!==l.videoloop&&!1!==l.videoloop||(t=!1),void 0==p.attr("control")&&(0!=a.find(".tp-video-play-button").length||c||a.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),a.find("video, .tp-poster, .tp-video-play-button").click(function(){a.hasClass("videoisplaying")?q.pause():q.play()})),1==a.data("forcecover")||a.hasClass("fullscreenvideo")||1==a.data("bgvideo"))if(1==a.data("forcecover")||1==a.data("bgvideo")){r.addClass("fullcoveredvideo");var u=a.data("aspectratio")||"4:3";b.setSize(e),b.prepareCoveredVideo(u,e,a)}else r.addClass("fullscreenvideo");var v=a.find(".tp-vid-play-pause")[0],w=a.find(".tp-vid-mute")[0],x=a.find(".tp-vid-full-screen")[0],y=a.find(".tp-seek-bar")[0],z=a.find(".tp-volume-bar")[0];void 0!=v&&g(v,"click",function(){1==q.paused?q.play():q.pause()}),void 0!=w&&g(w,"click",function(){0==q.muted?(q.muted=!0,w.innerHTML="Unmute"):(q.muted=!1,w.innerHTML="Mute")}),void 0!=x&&x&&g(x,"click",function(){q.requestFullscreen?q.requestFullscreen():q.mozRequestFullScreen?q.mozRequestFullScreen():q.webkitRequestFullscreen&&q.webkitRequestFullscreen()}),void 0!=y&&(g(y,"change",function(){var a=q.duration*(y.value/100);q.currentTime=a}),g(y,"mousedown",function(){a.addClass("seekbardragged"),q.pause()}),g(y,"mouseup",function(){a.removeClass("seekbardragged"),q.play()})),g(q,"canplaythrough",function(){b.preLoadAudioDone(a,e,"canplaythrough")}),g(q,"canplay",function(){b.preLoadAudioDone(a,e,"canplay")}),g(q,"progress",function(){b.preLoadAudioDone(a,e,"progress")}),g(q,"timeupdate",function(){var b=100/q.duration*q.currentTime,c=f(a.data("videoendat")),d=q.currentTime;if(void 0!=y&&(y.value=b),0!=c&&-1!=c&&Math.abs(c-d)<=.3&&c>d&&1!=a.data("nextslidecalled"))if(s){q.play();var g=f(a.data("videostartat"));-1!=g&&(q.currentTime=g)}else 1==a.data("nextslideatend")&&(a.data("nextslideatend-triggered",1),a.data("nextslidecalled",1),e.just_called_nextslide_at_htmltimer=!0,e.c.revnext(),setTimeout(function(){e.just_called_nextslide_at_htmltimer=!1},1e3)),q.pause()}),void 0!=z&&g(z,"change",function(){q.volume=z.value}),g(q,"play",function(){a.data("nextslidecalled",0);var c=a.data("volume");c=void 0!=c&&"mute"!=c?parseFloat(c)/100:c,d||(!0===e.globalmute?q.muted=!0:q.muted=!1,c>1&&(c/=100),"mute"==c?q.muted=!0:void 0!=c&&(q.volume=c)),a.addClass("videoisplaying");var f="html5"==l.audio?"audio":"video";m(a,e),t&&"audio"!=f?(e.videoplaying=!0,e.c.trigger("stoptimer"),e.c.trigger("revolution.slide.onvideoplay",h(q,"html5",l))):(e.videoplaying=!1,"audio"!=f&&e.c.trigger("starttimer"),e.c.trigger("revolution.slide.onvideostop",h(q,"html5",l))),punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find(f),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});var g=a.find(".tp-vid-play-pause")[0],i=a.find(".tp-vid-mute")[0];void 0!=g&&(g.innerHTML="Pause"),void 0!=i&&q.muted&&(i.innerHTML="Unmute"),b.toggleState(l.videotoggledby)}),g(q,"pause",function(c){var d="html5"==l.audio?"audio":"video";!k()&&a.find(".tp-videoposter").length>0&&"on"==a.data("showcoveronpause")&&!a.hasClass("seekbardragged")&&(punchgs.TweenLite.to(a.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(a.find(d),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),a.removeClass("videoisplaying"),e.videoplaying=!1,n(a,e),"audio"!=d&&e.c.trigger("starttimer"),e.c.trigger("revolution.slide.onvideostop",h(q,"html5",a.data()));var g=a.find(".tp-vid-play-pause")[0];void 0!=g&&(g.innerHTML="Play"),void 0!=e.currentLayerVideoIsPlaying&&e.currentLayerVideoIsPlaying.attr("id")!=a.attr("id")||b.unToggleState(l.videotoggledby)}),g(q,"ended",function(){j(),n(a,e),e.videoplaying=!1,n(a,e),"audio"!=o&&e.c.trigger("starttimer"),e.c.trigger("revolution.slide.onvideostop",h(q,"html5",a.data())),!0===a.data("nextslideatend")&&q.currentTime>0&&(1==!e.just_called_nextslide_at_htmltimer&&(a.data("nextslideatend-triggered",1),e.c.revnext(),e.just_called_nextslide_at_htmltimer=!0),setTimeout(function(){e.just_called_nextslide_at_htmltimer=!1},1500)),a.removeClass("videoisplaying")})},m=function(a,c){void 0==c.playingvideos&&(c.playingvideos=new Array),a.data("stopallvideos")&&void 0!=c.playingvideos&&c.playingvideos.length>0&&(c.lastplayedvideos=jQuery.extend(!0,[],c.playingvideos),jQuery.each(c.playingvideos,function(a,d){b.stopVideo(d,c)})),c.playingvideos.push(a),c.currentLayerVideoIsPlaying=a},n=function(a,b){void 0!=b.playingvideos&&jQuery.inArray(a,b.playingvideos)>=0&&b.playingvideos.splice(jQuery.inArray(a,b.playingvideos),1)}}(jQuery);