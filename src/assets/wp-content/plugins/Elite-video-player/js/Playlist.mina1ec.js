var PLAYER=PLAYER||{};
PLAYER.Playlist=function(c,g,b,h,f,p,q,d,r,t,m,u,v,w,x){function y(b){a.vimeoStatus.text("paused")}function z(c){a.vimeoStatus.text("finished");a.videoAdPlayed=!1;a.randEnd=Math.floor(Math.random()*b.videos.length+0);"Right playlist"==b.playlist||"Bottom playlist"==b.playlist||"Off"==b.playlist?(a.videoid=parseInt(a.videoid)+1,a.videos_array.length==a.videoid&&(a.videoid=0),"Play next video"==b.onFinish?(a.VIDEO.shuffleBtnEnabled?(a.VIDEO.setPlaylistItem(a.randEnd),a.videoid=a.randEnd):a.VIDEO.setPlaylistItem(a.videoid),
a.VIDEO.playVideoById(a.videoid)):"Restart video"==b.onFinish?a.vimeoPlayer.api("play"):"Stop video"==b.onFinish&&""!=b.posterImgOnVideoFinish&&a.VIDEO.showPoster2()):"Restart video"==b.onFinish&&a.vimeoPlayer.api("play")}function A(c,B){a.vimeo_time=Math.floor(c.seconds);a.vimeo_duration=Math.floor(c.duration);a.vimeoStatus.text(c.seconds+"s played");0==a.vimeo_time&&"yes"==a.videos_array[a.videoid].prerollAD&&(a.VIDEO.videoAdStarted=!0,a.videoAdPlayed?a.vimeoPlayer.api("play"):(a.vimeoPlayer.api("pause"),
d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(this.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].preroll_mp4),a.VIDEO.loadAD(a.video_pathAD),a.VIDEO.openAD()));a.tim=setInterval(function(){if("HTML5"!=b.videos[a.videoid].videoType&&"HTML5 (self-hosted)"!=b.videoType){if(a.VIDEO.secondsFormat(a.vimeo_time)==a.videos_array[a.videoid].midrollAD_displayTime){if(a.VIDEO.midrollPlayed)return;a.VIDEO.midrollPlayed=!0;"yes"==a.videos_array[a.videoid].midrollAD&&(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,
"")&&(a.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].midroll_mp4),a.vimeoPlayer.api("pause"),a.VIDEO.loadAD(a.video_pathAD),a.VIDEO.openAD())}a.VIDEO.secondsFormat(a.vimeo_time)>=a.VIDEO.secondsFormat(a.vimeo_duration-1)&&0<a.vimeo_duration&&!a.VIDEO.postrollPlayed&&(a.VIDEO.postrollPlayed=!0,"yes"==a.videos_array[a.videoid].postrollAD&&(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(a.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].postroll_mp4),a.vimeoPlayer.api("pause"),
a.VIDEO.loadAD(a.video_pathAD),a.VIDEO.openAD()))}},50);"yes"==a.videos_array[a.videoid].popupAdShow&&a.VIDEO.enablePopup()}function k(){a.vimeoIframe=c("#vimeo_video")[0];a.vimeoPlayer=$f(a.vimeoIframe);a.vimeoStatus=c(".status");a.vimeoPlayer.addEvent("ready",function(){a.vimeoPlayer.addEvent("pause",y);a.vimeoPlayer.addEvent("finish",z);a.vimeoPlayer.addEvent("playProgress",A);m&&"AD 5 sec + Pieces After Effects project"!=a.options.videos[0].title&&"Pieces After Effects project"!=a.options.videos[0].title&&
"AD 5 sec + Space Odyssey After Effects Project"!=a.options.videos[0].title&&"AD 5 sec Swimwear Spring Summer"!=a.options.videos[0].title&&"i Create"!=a.options.videos[0].title&&"Swimwear Spring Summer"!=a.options.videos[0].title&&"PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM"!=a.options.youtubePlaylistID&&"Google drive video example"!=a.options.videos[0].title&&(a.VIDEO.pw(),a.vimeoWrapper.css({zIndex:0}),c("iframe#vimeo_video").attr("src",""))})}var a=this;this.VIDEO=g;this.element=f;this.youtube_array=w;
if(""!=b.youtubePlaylistID||""!=b.youtubeChannelID)b.videos=a.youtube_array;this.canPlay=r;this.CLICK_EV=t;this.isMobile=x;this.preloader=p;this.preloaderAD=q;this.options=b;this.mainContainer=h;this.videoid="VIDEOID";this.adStartTime="ADSTARTTIME";this.videoAdPlayed=!1;this.rand=Math.floor(Math.random()*b.videos.length+0);this.ytQuality=b.youtubeQuality;this.youtubeSTARTED=!1;this.deviceAgent=u;this.agentID=v;this.YTAPI_onPlayerReady=!1;this.vimeo_time;this.vimeo_duration;this.scrollingIsOn=!1;this.playlist=
c("<div />");this.playlistContent=c("<div />");this.playlistBar=c("<div />");this.playlistBar.addClass("elite_vp_bg "+this.options.instanceTheme);this.playlist.append(this.playlistBar);this.playlistBarInside=c("<div />");this.playlistBarInside.addClass("elite_vp_playlistBarInside");this.playlistBar.append(this.playlistBarInside);this.lastBtnIcon=c("<span />").attr("aria-hidden","true").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor "+this.options.instanceTheme).addClass("fa-elite-step-forward").attr("id",
"elite_vp_lastBtn");this.firstBtnIcon=c("<span />").attr("aria-hidden","true").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor "+this.options.instanceTheme).addClass("fa-elite-step-backward").attr("id","elite_vp_firstBtn");this.nextBtnIcon=c("<span />").attr("aria-hidden","true").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor "+this.options.instanceTheme).addClass("fa-elite-forward").attr("id","elite_vp_nextBtn");this.previousBtnIcon=
c("<span />").attr("aria-hidden","true").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor "+this.options.instanceTheme).addClass("fa-elite-backward").attr("id","elite_vp_previousBtn");this.shuffleBtnIcon=c("<span />").attr("aria-hidden","true").attr("id","elite_vp_shuffleBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor "+this.options.instanceTheme).addClass("fa-elite-random").addClass("elite_vp_playerElement");this.lastBtn=
c("<div />").addClass("elite_vp_playlistBarBtn").addClass("elite_vp_playerElement");this.lastBtn.append(this.lastBtnIcon);this.firstBtn=c("<div />").addClass("elite_vp_playlistBarBtn").addClass("elite_vp_playerElement");this.firstBtn.append(this.firstBtnIcon);this.nextBtn=c("<div />").addClass("elite_vp_playlistBarBtn").addClass("elite_vp_playerElement");this.nextBtn.append(this.nextBtnIcon);this.previousBtn=c("<div />").addClass("elite_vp_playlistBarBtn").addClass("elite_vp_playerElement");this.previousBtn.append(this.previousBtnIcon);
this.shuffleBtn=c("<div />").addClass("elite_vp_playlistBarBtn").addClass("elite_vp_playerElement");this.shuffleBtn.append(this.shuffleBtnIcon);this.playlistBarInside.append(this.firstBtn);this.playlistBarInside.append(this.previousBtn);this.playlistBarInside.append(this.shuffleBtn);this.playlistBarInside.append(this.nextBtn);this.playlistBarInside.append(this.lastBtn);switch(this.options.playlist){case "Right playlist":this.playlist.attr("id","elite_vp_playlist");this.playlist.addClass("elite_vp_playlist "+
this.options.instanceTheme);this.playlistContent.attr("id",a.options.instanceName+"elite_vp_playlistContent");this.playlistBar.addClass("elite_vp_playlistBar");break;case "Bottom playlist":this.playlist.attr("id","elite_vp_playlist_bottom"),this.playlist.addClass("elite_vp_playlist "+this.options.instanceTheme),this.playlistContent.attr("id",a.options.instanceName+"elite_vp_playlistContent_bottom"),this.playlistBar.addClass("elite_vp_playlistBar_bottom")}a.videos_array=[];a.item_array=[];this.vimeoWrapper=
c("<div></div>");this.vimeoWrapper.attr("id","elite_vp_vimeoWrapper");a.element&&a.element.append(a.vimeoWrapper);c("#elite_vp_vimeoWrapper").html('<iframe id="vimeo_video" src="" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');var n=0;this.onPlayerReady=function(c){a.YTAPI_onPlayerReady=!0;if("youtube"==b.videos[0].videoType||"YouTube"==b.videoType){a.VIDEO.playButtonScreen.hide();c=!1;var e=window.navigator.userAgent,d=e.indexOf("MSIE "),
e=e.indexOf("Trident/");if(-1<d||-1<e)c=!0;c?("Yes"==b.loadRandomVideoOnStart?a.VIDEO.youtubePlayer.loadVideoById(a.videos_array[a.rand].youtubeID):a.VIDEO.youtubePlayer.loadVideoById(a.videos_array[0].youtubeID),a.VIDEO.youtubePlayer.pauseVideo()):"Yes"==b.loadRandomVideoOnStart?a.VIDEO.youtubePlayer.cueVideoById(a.videos_array[a.rand].youtubeID):a.VIDEO.youtubePlayer.cueVideoById(a.videos_array[0].youtubeID);a.VIDEO.youtubePlayer.setPlaybackQuality(a.ytQuality);b.autoplay&&(a.isMobile.any()||a.VIDEO.youtubePlayer.playVideo());
a.VIDEO.resizeAll();m&&"AD 5 sec + Pieces After Effects project"!=a.options.videos[0].title&&"Pieces After Effects project"!=a.options.videos[0].title&&"AD 5 sec + Space Odyssey After Effects Project"!=a.options.videos[0].title&&"AD 5 sec Swimwear Spring Summer"!=a.options.videos[0].title&&"i Create"!=a.options.videos[0].title&&"Swimwear Spring Summer"!=a.options.videos[0].title&&"PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM"!=a.options.youtubePlaylistID&&"Google drive video example"!=a.options.videos[0].title&&
(a.VIDEO.pw(),void 0!=a.VIDEO.youtubePlayer&&(a.VIDEO.youtubePlayer.stopVideo(),a.VIDEO.youtubePlayer.clearVideo(),a.VIDEO.youtubePlayer.setSize(1,1)));a.popupTimer=setInterval(function(){"yes"==a.videos_array[a.videoid].popupAdShow&&a.VIDEO.enablePopup()},1E3)}};this.onPlayerStateChange=function(c){var e=Math.floor(a.VIDEO.youtubePlayer.getCurrentTime());a.VIDEO.calculateYoutubeTotalTime(a.VIDEO.youtubePlayer.getDuration());1===c.data&&0==e&&(a.youtubeSTARTED=!0);1===c.data?(a.isMobile.any()&&a.VIDEO.playButtonScreen.addClass("elite_vp_playButtonScreenHide"),
f.removeClass("vp_paused"),f.addClass("elite_vp_playing"),g.change("elite_vp_playing"),a.VIDEO.play(),a._timer=setInterval(function(){if("HTML5"!=b.videos[a.videoid].videoType&&"HTML5 (self-hosted)"!=b.videoType){a.progressWidth=a.VIDEO.youtubePlayer.getCurrentTime()/a.VIDEO.youtubePlayer.getDuration()*a.VIDEO.videoTrack.width();a.VIDEO.videoTrackProgress.css("width",a.progressWidth);a.progressIdleWidth=a.VIDEO.youtubePlayer.getCurrentTime()/a.VIDEO.youtubePlayer.getDuration()*a.VIDEO.progressIdleTrack.width();
a.VIDEO.progressIdle.css("width",a.progressIdleWidth);a.VIDEO.calculateYoutubeElapsedTime(a.VIDEO.youtubePlayer.getCurrentTime());a.buffered=a.VIDEO.youtubePlayer.getVideoLoadedFraction();a.downloadWidth=a.buffered*a.VIDEO.videoTrack.width();a.VIDEO.videoTrackDownload.css("width",a.downloadWidth);a.progressIdleDownloadWidth=a.buffered*a.VIDEO.progressIdleTrack.width();a.VIDEO.progressIdleDownload.css("width",a.progressIdleDownloadWidth);if(a.VIDEO.secondsFormat(a.VIDEO.youtubePlayer.getCurrentTime())==
a.videos_array[a.videoid].midrollAD_displayTime){if(a.VIDEO.midrollPlayed)return;a.VIDEO.midrollPlayed=!0;"yes"==a.videos_array[a.videoid].midrollAD&&(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(a.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].midroll_mp4),a.VIDEO.youtubePlayer.pauseVideo(),a.VIDEO.loadAD(a.video_pathAD),a.VIDEO.openAD())}a.VIDEO.secondsFormat(a.VIDEO.youtubePlayer.getCurrentTime())>=a.VIDEO.secondsFormat(a.VIDEO.youtubePlayer.getDuration()-1)&&0<a.VIDEO.youtubePlayer.getDuration()&&
!a.VIDEO.postrollPlayed&&(a.VIDEO.postrollPlayed=!0,"yes"==a.videos_array[a.videoid].postrollAD&&(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(a.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].postroll_mp4),a.VIDEO.youtubePlayer.pauseVideo(),a.VIDEO.loadAD(a.video_pathAD),a.VIDEO.openAD()))}},50)):2===c.data?(clearInterval(a._timer),f.addClass("vp_paused"),f.removeClass("elite_vp_playing"),g.change("vp_paused"),a.VIDEO.pause()):0===c.data&&((a.VIDEO.midrollPlayed=!1,a.VIDEO.postrollPlayed=
!1,a.randEnd=Math.floor(Math.random()*b.videos.length+0),a.videoAdPlayed=!1,a.videoid=parseInt(a.videoid)+1,a.videos_array.length==a.videoid&&(a.videoid=0),"Play next video"==b.onFinish)?(a.VIDEO.shuffleBtnEnabled?(a.VIDEO.setPlaylistItem(a.randEnd),a.videoid=a.randEnd):a.VIDEO.setPlaylistItem(a.videoid),a.VIDEO.playVideoById(a.videoid)):"Restart video"==b.onFinish?void 0!=a.VIDEO.youtubePlayer&&(a.VIDEO.youtubePlayer.seekTo(0),a.VIDEO.youtubePlayer.playVideo()):"Stop video"==b.onFinish&&""!=b.posterImgOnVideoFinish&&
(a.VIDEO.showPoster2(),"youtube"==b.videos[a.videoid].videoType||"YouTube"==b.videoType)&&(a.VIDEO.closeAD(),a.videoAdPlayed=!1,a.VIDEO.ytWrapper.css({zIndex:501}),a.VIDEO.ytWrapper.css({visibility:"visible"}),a.VIDEO.removeHTML5elements(),void 0!=a.VIDEO.youtubePlayer&&(a.VIDEO.youtubePlayer.cueVideoById(a.videos_array[a.videoid].youtubeID),this.isMobile.any()||a.VIDEO.youtubePlayer.pauseVideo()),a.VIDEO.youtubePlayer.setPlaybackQuality(a.ytQuality)));if(1===c.data&&0==e&&"yes"==a.videos_array[a.videoid].prerollAD)a.VIDEO.videoAdStarted=
!0,a.videoAdPlayed?a.VIDEO.youtubePlayer.playVideo():(a.VIDEO.youtubePlayer.pauseVideo(),d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(this.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].preroll_mp4),a.VIDEO.loadAD(a.video_pathAD),a.VIDEO.openAD());else if(c.data==YT.PlayerState.PLAYING||c.data==YT.PlayerState.CUED)a.youtubePLAYING=!0};var l=-1;c(b.videos).each(function(){l+=1;var e={id:l,title:this.title,videoType:this.videoType,youtubeID:this.youtubeID,vimeoID:this.vimeoID,video_path_mp4:this.mp4,
enable_mp4_download:this.enable_mp4_download,imageUrl:this.imageUrl,imageTimer:this.imageTimer,prerollAD:this.prerollAD,prerollGotoLink:this.prerollGotoLink,preroll_mp4:this.preroll_mp4,prerollSkipTimer:this.prerollSkipTimer,midrollAD:this.midrollAD,midrollAD_displayTime:this.midrollAD_displayTime,midrollGotoLink:this.midrollGotoLink,midroll_mp4:this.midroll_mp4,midrollSkipTimer:this.midrollSkipTimer,postrollAD:this.postrollAD,postrollGotoLink:this.postrollGotoLink,postroll_mp4:this.postroll_mp4,
postrollSkipTimer:this.postrollSkipTimer,popupImg:this.popupImg,popupAdShow:this.popupAdShow,popupAdStartTime:this.popupAdStartTime,popupAdEndTime:this.popupAdEndTime,popupAdGoToLink:this.popupAdGoToLink,description:this.description,thumbnail_image:this.thumbImg,info_text:this.info};a.videos_array.push(e);a.nowPlayingThumbnail=c("<div />");a.nowPlayingThumbnail.addClass("elite_vp_nowPlayingThumbnail");a.nowPlayingThumbnail.text("NOW PLAYING");a.nowPlayingThumbnail.hide();a.itemLeft=c("<div />");a.itemLeft.addClass("elite_vp_itemLeft");
a.i=document.createElement("img");a.i.onload=function(){a.thumbImageW=this.width;a.thumbImageH=this.height};a.i.src=e.thumbnail_image;if("youtube"==b.videos[l].videoType||"YouTube"==b.videoType)if("auto"==e.thumbnail_image||""==e.thumbnail_image)a.i.src="http://img.youtube.com/vi/"+b.videos[l].youtubeID+"/1.jpg";a.itemLeft.append(a.i);a.itemLeft.append(a.nowPlayingThumbnail);c(a.i).addClass("elite_vp_thumbnail_image elite_vp_themeColorThumbBorder");var d='<div class="elite_vp_itemRight"><div class="elite_vp_title elite_vp_themeColorText">'+
e.title+'</div><div class="elite_vp_description elite_vp_controlsColor '+a.options.instanceTheme+'"> '+e.description+"</div></div>",f='<div class="elite_vp_itemRight_bottom"><div class="elite_vp_title elite_vp_themeColorText">'+e.title+'</div><div class="elite_vp_description elite_vp_controlsColor '+a.options.instanceTheme+'"> '+e.description+"</div></div>";switch(b.playlist){case "Right playlist":a.item=c("<div />");a.item.addClass("elite_vp_item").css("top",String(n)+"px");a.item_array.push(a.item);
a.item.addClass("elite_vp_itemUnselected "+a.options.instanceTheme);a.item.append(a.itemLeft);a.item.append(d);n+=80;break;case "Bottom playlist":a.item=c("<div />"),a.item.addClass("elite_vp_item").css("left","0px"),a.item_array.push(a.item),a.item.addClass("elite_vp_itemUnselected "+a.options.instanceTheme),a.item.css("display","inline-flex"),a.item.append(a.itemLeft),a.item.append(f)}a.playlistContent.append(a.item);void 0!=a.item&&a.item.bind(a.CLICK_EV,function(){a.scrollingIsOn&&a.isMobile.any()||
(a.preloader&&a.preloader.stop().animate({opacity:1},0,function(){c(this).show()}),a.videoid=e.id,a.VIDEO.setPlaylistItem(a.videoid),a.VIDEO.resetPlayer(),a.VIDEO.resetPlayerAD(),a.VIDEO.resizeAll(),k(),a.VIDEO.playVideoById(a.videoid),a.youtubeSTARTED=!1,m&&"AD 5 sec + Pieces After Effects project"!=a.options.videos[0].title&&"Pieces After Effects project"!=a.options.videos[0].title&&"AD 5 sec + Space Odyssey After Effects Project"!=a.options.videos[0].title&&"AD 5 sec Swimwear Spring Summer"!=a.options.videos[0].title&&
"i Create"!=a.options.videos[0].title&&"Swimwear Spring Summer"!=a.options.videos[0].title&&"PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM"!=a.options.youtubePlaylistID&&"Google drive video example"!=a.options.videos[0].title&&a.VIDEO.pw())})});switch(a.options.playlist){case "Right playlist":"Yes"==b.loadRandomVideoOnStart?(c(a.item_array[a.rand]).removeClass("elite_vp_itemUnselected "+this.options.instanceTheme).addClass("elite_vp_itemSelected "+this.options.instanceTheme),a.item_array[a.rand].find(".elite_vp_thumbnail_image").removeClass("elite_vp_thumbnail_image").addClass("elite_vp_thumbnail_imageSelected")):
(c(a.item_array[0]).removeClass("elite_vp_itemUnselected "+this.options.instanceTheme).addClass("elite_vp_itemSelected "+this.options.instanceTheme),a.item_array[0].find(".elite_vp_thumbnail_image").removeClass("elite_vp_thumbnail_image").addClass("elite_vp_thumbnail_imageSelected"));break;case "Bottom playlist":"Yes"==b.loadRandomVideoOnStart?(c(a.item_array[a.rand]).removeClass("elite_vp_itemUnselected_bottom "+this.options.instanceTheme).addClass("elite_vp_itemSelected_bottom "+this.options.instanceTheme),
a.item_array[a.rand].find(".elite_vp_thumbnail_image").removeClass("elite_vp_thumbnail_image").addClass("elite_vp_thumbnail_imageSelected")):(c(a.item_array[0]).removeClass("elite_vp_itemUnselected_bottom "+this.options.instanceTheme).addClass("elite_vp_itemSelected_bottom "+this.options.instanceTheme),a.item_array[0].find(".elite_vp_thumbnail_image").removeClass("elite_vp_thumbnail_image").addClass("elite_vp_thumbnail_imageSelected"))}a.videoid="Yes"==b.loadRandomVideoOnStart?a.rand:0;if("youtube"==
b.videos[0].videoType||"YouTube"==b.videoType)a.VIDEO.imageWrapper.css({zIndex:0}),a.VIDEO.imageWrapper.css({visibility:"none"}),a.VIDEO.hideVideoElements(),a.preloader.stop().animate({opacity:0},0,function(){c(this).hide()}),a.VIDEO.ytWrapper.css({zIndex:501}),a.VIDEO.ytWrapper.css({visibility:"visible"}),a.vimeoWrapper.css({zIndex:0});else if("HTML5"==b.videos[0].videoType||"HTML5 (self-hosted)"==b.videoType)a.VIDEO.imageWrapper.css({zIndex:0}),a.VIDEO.imageWrapper.css({visibility:"none"}),a.VIDEO.ytWrapper.css({zIndex:0}),
a.VIDEO.ytWrapper.css({visibility:"hidden"}),a.vimeoWrapper.css({zIndex:0}),d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(this.canPlay=!0,"Yes"==b.loadRandomVideoOnStart?(a.video_path=a.videos_array[a.rand].video_path_mp4,a.video_pathAD=a.videos_array[a.rand].preroll_mp4):(a.video_path=a.videos_array[0].video_path_mp4,a.video_pathAD=a.videos_array[0].preroll_mp4)),a.VIDEO.load(a.video_path,"0");else if("vimeo"==b.videos[0].videoType||"Vimeo"==b.videoType)a.VIDEO.imageWrapper.css({zIndex:0}),
a.VIDEO.imageWrapper.css({visibility:"none"}),a.VIDEO.hideCustomControls(),a.VIDEO.hideVideoElements(),a.preloader.stop().animate({opacity:0},700,function(){c(this).hide()}),a.vimeoWrapper.css({zIndex:501}),a.isMobile.any()?"Yes"==b.loadRandomVideoOnStart?document.getElementById("vimeo_video").src="http://player.vimeo.com/video/"+a.videos_array[a.rand].vimeoID+"?autoplay=0?api=1&player_id=vimeo_video&color="+b.vimeoColor:document.getElementById("vimeo_video").src="http://player.vimeo.com/video/"+
a.videos_array[0].vimeoID+"?autoplay=0?api=1&player_id=vimeo_video&color="+b.vimeoColor:b.autoplay?"Yes"==b.loadRandomVideoOnStart?document.getElementById("vimeo_video").src="http://player.vimeo.com/video/"+a.videos_array[a.rand].vimeoID+"?autoplay=1?api=1&player_id=vimeo_video&color="+b.vimeoColor:document.getElementById("vimeo_video").src="http://player.vimeo.com/video/"+a.videos_array[0].vimeoID+"?autoplay=1?api=1&player_id=vimeo_video&color="+b.vimeoColor:"Yes"==b.loadRandomVideoOnStart?document.getElementById("vimeo_video").src=
"http://player.vimeo.com/video/"+a.videos_array[a.rand].vimeoID+"?autoplay=0?api=1&player_id=vimeo_video&color="+b.vimeoColor:document.getElementById("vimeo_video").src="http://player.vimeo.com/video/"+a.videos_array[0].vimeoID+"?autoplay=0?api=1&player_id=vimeo_video&color="+b.vimeoColor,k();else if("image"==b.videos[0].videoType||"Image"==b.videoType)a.VIDEO.hideCustomControls(),a.VIDEO.hideVideoElements(),a.VIDEO.ytWrapper.css({zIndex:0}),a.VIDEO.ytWrapper.css({visibility:"hidden"}),a.vimeoWrapper.css({zIndex:0}),
a.vimeoWrapper.css({visibility:"hidden"}),a.VIDEO.imageWrapper.css({zIndex:502}),a.VIDEO.imageWrapper.css({visibility:"visible"}),a.VIDEO.imageDisplayed.src=a.videos_array[0].imageUrl,c(a.VIDEO.imageDisplayed).load(function(){b.autoplay&&a.VIDEO.setImageTimer()});a.nextBtn.bind(a.CLICK_EV,function(){a.VIDEO.shuffleBtnEnabled?(a.VIDEO.generateRandomNumber(),a.videoid=a.VIDEO.rand):(a.videoid+=1,a.videoid>=b.videos.length&&(a.videoid=0));a.VIDEO.setPlaylistItem(a.videoid);a.VIDEO.playVideoById(a.videoid);
k()});a.previousBtn.bind(a.CLICK_EV,function(){a.VIDEO.shuffleBtnEnabled?(a.VIDEO.generateRandomNumber(),a.videoid=a.VIDEO.rand):(--a.videoid,0>a.videoid&&(a.videoid=b.videos.length-1));a.VIDEO.setPlaylistItem(a.videoid);a.VIDEO.playVideoById(a.videoid);k()});a.shuffleBtn.bind(a.CLICK_EV,function(){a.VIDEO.toggleShuffleBtn()});a.lastBtn.bind(a.CLICK_EV,function(){c(a.playlistContent).mCustomScrollbar("scrollTo","last")});a.firstBtn.bind(a.CLICK_EV,function(){c(a.playlistContent).mCustomScrollbar("scrollTo",
"first")});a.totalWidth=b.videoPlayerWidth;a.totalHeight=b.videoPlayerHeight;"Right playlist"!=b.playlist&&"Bottom playlist"!=b.playlist||!a.element||(h.append(a.playlist),a.playlist.append(a.playlistContent));this.playlistW=this.playlist.width();this.playlistH=this.playlist.height();"Right playlist"==b.playlist?(a.playlistContent.css("height",String(n)+"px"),a.playerWidth=a.totalWidth-a.playlist.width(),a.playerHeight=a.totalHeight-a.playlist.height(),a.playlist.css({height:"100%",top:0}),a.playlistContent.height(h.height()-
50),c(a.playlistContent).mCustomScrollbar({axis:"y",theme:a.options.playlistScrollType,scrollButtons:{enable:!0},callbacks:{onScrollStart:function(){a.scrollingIsOn=!0},onScroll:function(){a.scrollingIsOn=!1}}})):"Bottom playlist"==b.playlist&&(a.playlistContent.css("width","0px"),a.playerWidth=a.totalWidth,a.playerHeight=a.totalHeight-a.playlist.height(),a.playlist.css({left:0,width:"100%",bottom:0}),a.playlistContent.width(h.width()),c(a.playlistContent).mCustomScrollbar({axis:"x",theme:a.options.playlistScrollType,
scrollButtons:{enable:!0},callbacks:{onScrollStart:function(){a.scrollingIsOn=!0},onScroll:function(){a.scrollingIsOn=!1}},advanced:{autoExpandHorizontalScroll:!0},setHeight:"auto",setWidth:"auto"}))};PLAYER.Playlist.prototype={};PLAYER.Playlist.prototype.hidePlaylist=function(){this.playlist.hide()};PLAYER.Playlist.prototype.showPlaylist=function(){this.playlist.show()};
PLAYER.Playlist.prototype.resizePlaylist=function(c,g){switch(this.options.playlist){case "Right playlist":this.playlist.css({right:0,height:"100%"});this.playlistContent.css({top:0,height:this.mainContainer.height()-50});this.playlistContent.height(this.mainContainer.height()-this.playlistBar.height());break;case "Bottom playlist":this.playlist.css({left:0,width:"100%",bottom:0}),this.playlistContent.height(this.playlist.height()-this.playlistBar.height())}this.playlistBarInside.css({left:this.playlistBar.width()/
2-this.playlistBarInside.width()/2})};PLAYER.Playlist.prototype.playYoutube=function(c){void 0!=this.VIDEO.youtubePlayer&&(this.VIDEO.youtubePlayer.cueVideoById(this.videos_array[c].youtubeID),this.VIDEO.youtubePlayer.setPlaybackQuality(this.ytQuality),this.preloader.hide(),this.VIDEO.ytWrapper.css({zIndex:501}),this.VIDEO.ytWrapper.css({visibility:"visible"}),this.isMobile.any()||this.VIDEO.youtubePlayer.playVideo());this.VIDEO.resizeAll()};
PLAYER.Playlist.prototype.playVimeo=function(c){this.preloader.hide();this.vimeoWrapper.css({zIndex:501});this.isMobile.any()?document.getElementById("vimeo_video").src="http://player.vimeo.com/video/"+this.videos_array[c].vimeoID+"?autoplay=0?api=1&player_id=vimeo_video&color="+this.options.vimeoColor:document.getElementById("vimeo_video").src="http://player.vimeo.com/video/"+this.videos_array[c].vimeoID+"?autoplay=1?api=1&player_id=vimeo_video&color="+this.options.vimeoColor};