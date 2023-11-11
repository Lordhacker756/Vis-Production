function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(function(){var t,e;t=window.jQuery,e=t(window),t.fn.stick_in_parent=function(i){var o,s,n,r,a,l,c,u,d,p,h,f,g;for(null==i&&(i={}),g=i.sticky_class,l=i.inner_scrolling,f=i.recalc_every,h=i.parent,d=i.offset_top,u=i.spacer,n=i.bottoming,null==d&&(d=0),null==h&&(h=void 0),null==l&&(l=!0),null==g&&(g="is_stuck"),o=t(document),null==n&&(n=!0),p=function(t){var e,i;return window.getComputedStyle?(t[0],e=window.getComputedStyle(t[0]),i=parseFloat(e.getPropertyValue("width"))+parseFloat(e.getPropertyValue("margin-left"))+parseFloat(e.getPropertyValue("margin-right")),"border-box"!==e.getPropertyValue("box-sizing")&&(i+=parseFloat(e.getPropertyValue("border-left-width"))+parseFloat(e.getPropertyValue("border-right-width"))+parseFloat(e.getPropertyValue("padding-left"))+parseFloat(e.getPropertyValue("padding-right"))),i):t.outerWidth(!0)},r=function(i,s,r,a,c,y,k,v){var m,w,_,b,C,x,V,P,F,S,j,z;if(!i.data("sticky_kit")){if(i.data("sticky_kit",!0),C=o.height(),V=i.parent(),null!=h&&(V=V.closest(h)),!V.length)throw"failed to find stick parent";if(_=!1,m=!1,j=null!=u?u&&i.closest(u):t("<div />"),j&&j.css("position",i.css("position")),P=function(){var t,e,n;if(!v)return C=o.height(),t=parseInt(V.css("border-top-width"),10),e=parseInt(V.css("padding-top"),10),s=parseInt(V.css("padding-bottom"),10),r=V.offset().top+t+e,a=V.height(),_&&(_=!1,m=!1,null==u&&(i.insertAfter(j),j.detach()),i.css({position:"",top:"",width:"",bottom:""}).removeClass(g),n=!0),c=i.offset().top-(parseInt(i.css("margin-top"),10)||0)-d,y=i.outerHeight(!0),k=i.css("float"),j&&j.css({width:p(i),height:y,display:i.css("display"),"vertical-align":i.css("vertical-align"),float:k}),n?z():void 0},P(),y!==a)return b=void 0,x=d,S=f,z=function(){var t,p,h,w,F,z;if(!v)return h=!1,null!=S&&(S-=1)<=0&&(S=f,P(),h=!0),h||o.height()===C||(P(),h=!0),w=e.scrollTop(),null!=b&&(p=w-b),b=w,_?(n&&(F=w+y+x>a+r,m&&!F&&(m=!1,i.css({position:"fixed",bottom:"",top:x}).trigger("sticky_kit:unbottom"))),w<c&&(_=!1,x=d,null==u&&("left"!==k&&"right"!==k||i.insertAfter(j),j.detach()),t={position:"",width:"",top:""},i.css(t).removeClass(g).trigger("sticky_kit:unstick")),l&&(z=e.height(),y+d>z&&(m||(x-=p,x=Math.max(z-y,x),x=Math.min(d,x),_&&i.css({top:x+"px"}))))):w>c&&(_=!0,t={position:"fixed",top:x},t.width="border-box"===i.css("box-sizing")?i.outerWidth()+"px":i.width()+"px",i.css(t).addClass(g),null==u&&(i.after(j),"left"!==k&&"right"!==k||j.append(i)),i.trigger("sticky_kit:stick")),_&&n&&(null==F&&(F=w+y+x>a+r),!m&&F)?(m=!0,"static"===V.css("position")&&V.css({position:"relative"}),i.css({position:"absolute",bottom:s,top:"auto"}).trigger("sticky_kit:bottom")):void 0},F=function(){return P(),z()},w=function(){if(v=!0,e.off("touchmove",z),e.off("scroll",z),e.off("resize",F),t(document.body).off("sticky_kit:recalc",F),i.off("sticky_kit:detach",w),i.removeData("sticky_kit"),i.css({position:"",bottom:"",top:"",width:""}),V.position("position",""),_)return null==u&&("left"!==k&&"right"!==k||i.insertAfter(j),j.remove()),i.removeClass(g)},e.on("touchmove",z),e.on("scroll",z),e.on("resize",F),t(document.body).on("sticky_kit:recalc",F),i.on("sticky_kit:detach",w),setTimeout(z,0)}},a=0,c=this.length;a<c;a++)s=this[a],r(t(s));return this}}).call(this);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}();!function(t){var e=function(){function e(){_classCallCheck(this,e),this.top=20,this.setupValue(),this.initSticky()}return _createClass(e,[{key:"setupValue",value:function(){if(t("#main").outerHeight()<t("#secondary").outerHeight)return!1;this.top=20;var e=t("#wpadminbar"),i=t(".osf-sticky-active");e.length>0&&(this.top+=e.height()),i.length>0&&(this.top+=i.height()),t("#give-sidebar-left").wrapInner('<div class="inner"></div>')}},{key:"initSticky",value:function(){var e=this,i=t(window).width();i<992?jQuery("#secondary > .inner, #give-sidebar-left > .inner, .elementor-widget-opal-schedules .schedules-style-2 .schedules-day").trigger("sticky_kit:detach"):this._makeStickyKit(),t(window).resize(function(){i=t(window).width(),i<992?jQuery("#secondary > .inner, #give-sidebar-left > .inner, .elementor-widget-opal-schedules .schedules-style-2 .schedules-day").trigger("sticky_kit:detach"):e._makeStickyKit()})}},{key:"_makeStickyKit",value:function(){if(t("#main").outerHeight()<t("#secondary .inner").outerHeight())return!1;t("#secondary > .inner").stick_in_parent({parent:"#content > .wrap",offset_top:this.top}),t("#give-sidebar-left > .inner").stick_in_parent({parent:"#give-wrap > div > div",offset_top:this.top}),t(".elementor-widget-opal-schedules .schedules-style-2 .schedules-day").stick_in_parent({parent:".elementor-schedules-item",offset_top:this.top})}}]),e}();t(document).ready(function(){new e})}(jQuery);