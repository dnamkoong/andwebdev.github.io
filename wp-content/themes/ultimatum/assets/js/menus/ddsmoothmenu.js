var ddsmoothmenu={arrowimages:{},transition:{overtime:300,outtime:300},shadow:{enable:!1,offsetx:3,offsety:3},showhidedelay:{showdelay:100,hidedelay:200},detectwebkit:-1!=navigator.userAgent.toLowerCase().indexOf("applewebkit"),detectie6:document.all&&!window.XMLHttpRequest,css3support:window.msPerformance||!document.all&&document.querySelector,getajaxmenu:function(e,t){var s=e("#"+t.contentsource[0]);s.html("Loading Menu..."),e.ajax({url:t.contentsource[1],async:!0,error:function(e){s.html("Error fetching content. Server Response: "+e.responseText)},success:function(o){s.html(o),ddsmoothmenu.buildmenu(e,t)}})},buildmenu:function(e,t){var s=ddsmoothmenu,o=e("#"+t.mainmenuid+">ul");o.parent().get(0).className=t.classname||"ddsmoothmenu";var i=o.find("ul").parent();if(i.hover(function(){e(this).children("a:eq(0)").addClass("selected")},function(){e(this).children("a:eq(0)").removeClass("selected")}),i.each(function(o){var i=e(this).css({zIndex:100-o}),n=e(this).find("ul:eq(0)").css({display:"block"});if(n.data("timers",{}),this._dimensions={w:this.offsetWidth,h:this.offsetHeight,subulw:n.outerWidth(),subulh:n.outerHeight()},this.istopheader=1==i.parents("ul").length?!0:!1,n.css({top:this.istopheader&&"v"!=t.orientation?this._dimensions.h+"px":0}),s.shadow.enable&&!s.css3support){if(this._shadowoffset={x:this.istopheader?n.offset().left+s.shadow.offsetx:this._dimensions.w,y:this.istopheader?n.offset().top+s.shadow.offsety:i.position().top},this.istopheader)$parentshadow=e(document.body);else{var d=i.parents("li:eq(0)");$parentshadow=d.get(0).$shadow}this.$shadow=e('<div class="ddshadow'+(this.istopheader?" toplevelshadow":"")+'"></div>').prependTo($parentshadow).css({left:this._shadowoffset.x+"px",top:this._shadowoffset.y+"px"})}i.hover(function(){var o=n,d=i.get(0);clearTimeout(o.data("timers").hidetimer),o.data("timers").showtimer=setTimeout(function(){d._offsets={left:i.offset().left,top:i.offset().top};var n=d.istopheader&&"v"!=t.orientation?0:d._dimensions.w;if(n=d._offsets.left+n+d._dimensions.subulw>e(window).width()?d.istopheader&&"v"!=t.orientation?-d._dimensions.subulw+d._dimensions.w:-d._dimensions.w:n,o.queue().length<=1&&(o.css({left:n+"px",width:d._dimensions.subulw+"px"}).animate({height:"show",opacity:"show"},ddsmoothmenu.transition.overtime),s.shadow.enable&&!s.css3support)){var a=d.istopheader?o.offset().left+ddsmoothmenu.shadow.offsetx:n,h=d.istopheader?o.offset().top+s.shadow.offsety:d._shadowoffset.y;!d.istopheader&&ddsmoothmenu.detectwebkit&&d.$shadow.css({opacity:1}),d.$shadow.css({overflow:"",width:d._dimensions.subulw+"px",left:a+"px",top:h+"px"}).animate({height:d._dimensions.subulh+"px"},ddsmoothmenu.transition.overtime)}},ddsmoothmenu.showhidedelay.showdelay)},function(){var e=n,t=i.get(0);clearTimeout(e.data("timers").showtimer),e.data("timers").hidetimer=setTimeout(function(){e.animate({height:"hide",opacity:"hide"},ddsmoothmenu.transition.outtime),s.shadow.enable&&!s.css3support&&(ddsmoothmenu.detectwebkit&&t.$shadow.children("div:eq(0)").css({opacity:0}),t.$shadow.css({overflow:"hidden"}).animate({height:0},ddsmoothmenu.transition.outtime))},ddsmoothmenu.showhidedelay.hidedelay)})}),s.shadow.enable&&s.css3support)for(var n=e("#"+t.mainmenuid+" ul li ul"),d=parseInt(s.shadow.offsetx)+"px "+parseInt(s.shadow.offsety)+"px 5px #aaa",a=["boxShadow","MozBoxShadow","WebkitBoxShadow","MsBoxShadow"],h=0;h<a.length;h++)n.css(a[h],d);o.find("ul").css({display:"none",visibility:"visible"})},init:function(e){if("object"==typeof e.customtheme&&2==e.customtheme.length){var t="#"+e.mainmenuid,s="v"==e.orientation?t:t+", "+t;document.write('<style type="text/css">\n'+s+" ul li a {background:"+e.customtheme[0]+";}\n"+t+" ul li a:hover {background:"+e.customtheme[1]+";}\n</style>")}this.shadow.enable=document.all&&!window.XMLHttpRequest?!1:this.shadow.enable,jQuery(document).ready(function(t){"object"==typeof e.contentsource?ddsmoothmenu.getajaxmenu(t,e):ddsmoothmenu.buildmenu(t,e)})}};