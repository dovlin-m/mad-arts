(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{347:function(n,e,t){n.exports={}},351:function(n,e,t){"use strict";t(347)},574:function(n,e,t){"use strict";t.r(e);var l=t(0),r=Object(l.b)({name:"TemplatesSectionsBanner",data:function(){return{defaultBannerHeight:null,bannerImageHeight:null}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var n,e,t=window.scrollY,l=(null===(e=null===(n=this.$refs)||void 0===n?void 0:n.banner)||void 0===e?void 0:e.clientHeight)||0;this.defaultBannerHeight=this.defaultBannerHeight?this.defaultBannerHeight:l,this.bannerImageHeight=Math.max(0,this.defaultBannerHeight-t)}}}),o=(t(351),t(44)),component=Object(o.a)(r,(function(){var n=this,e=n._self._c;n._self._setupProxy;return e("section",{staticClass:"wrapper-banner",style:{height:"".concat(n.bannerImageHeight,"px")}},[e("img",{ref:"banner",staticClass:"banner",attrs:{src:"/assets/banner.webp",alt:"banner monk and old woman"}})])}),[],!1,null,null,null);e.default=component.exports}}]);