(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(t,e,n){t.exports={}},212:function(t,e,n){t.exports={}},231:function(t,e,n){"use strict";n.r(e),n.d(e,"NavMenu",(function(){return o}));var o=[];e.default={NavMenu:o}},235:function(t,e,n){"use strict";var o=n(0),r=Object(o.b)({name:"DefaultPage"}),l=n(43),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",{staticClass:"darker"},[e("organisms-header"),t._v(" "),e("nuxt"),t._v(" "),e("organisms-footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{OrganismsHeader:n(341).default,OrganismsFooter:n(342).default})},236:function(t,e,n){"use strict";n(11);var o={header:{portfolio:"Portfolio",resume:"Resume",menu:"Menu"},pages:{portfolio:{title:"Portfolio"},about:{title:"I'm Mariia",subtitle:"an art illustrator"},resume:{title:"Resume"}},links:{detailed:"More detailed"},footer:{email:"email"}};e.a=function(){return new Promise((function(t){return t(o)}))}},243:function(t,e,n){n(244),t.exports=n(245)},297:function(t,e,n){t.exports={}},299:function(t,e,n){"use strict";n(211)},300:function(t,e,n){"use strict";n(212)},341:function(t,e,n){"use strict";n.r(e);n(11),n(34);var o=n(0),r=n(231),l=Object(o.b)({name:"OrganismsHeader",data:function(){return{menu:r.NavMenu}},computed:{menuLocale:function(){var t=this;return this.$i18n.locales.map((function(t){return t.code})).reduce((function(e,n){var o=t.$route,r=o.query,l=o.params,c={name:t.getRouteBaseName(),params:l,query:r};return e[n]=t.localePath(c,n),e}),{})}}}),c=(n(299),n(43)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"container"},[e("header",{staticClass:"d-flex align-items-center jc-space-between py-4 py-lg-6"},[e("div",{staticClass:"d-flex align-items-center"},[e("atoms-logo",{staticClass:"mr-8"}),t._v(" "),e("molecules-card-menu-dropdown")],1),t._v(" "),e("div",{staticClass:"d-flex align-items-center row-gap-3"},[e("div",{staticClass:"d-flex jc-center column-gap-2"},[t._l(t.$i18n.locales,(function(n){return[e(n.code===t.$i18n.locale?"span":"nuxt-link",{key:n.code,tag:"component",staticClass:"link-locale link-none text-uppercase text-body",class:{"text-bold":n.code===t.$i18n.locale},attrs:{href:n.code===t.$i18n.locale?null:t.menuLocale[n.code],to:n.code===t.$i18n.locale?null:t.menuLocale[n.code]},domProps:{textContent:t._s(n.code)}})]}))],2),t._v(" "),t._l(t.menu,(function(n){var o=n.id,r=n.nuxtHref;return e("nuxt-link",{key:o,staticClass:"text-body ml-2 mb-0",attrs:{to:t.localePath(r),"active-class":"active"},domProps:{textContent:t._s(t.$t("header.".concat(o)))}})}))],2)])])])}),[],!1,null,"db21a838",null);e.default=component.exports},342:function(t,e,n){"use strict";n.r(e);var o=n(0),r=Object(o.b)({name:"OrganismsFooter",data:function(){return{}}}),l=(n(300),n(43)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"gray"},[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex jc-center column-gap-6 pa-6 pa-sm-8 pa-lg-12"},[e("a",{staticClass:"text-body text-darker",attrs:{href:"mailto:mariia@antipov.me"},domProps:{textContent:t._s("mariia@antipov.me")}}),t._v(" "),e("a",{staticClass:"text-body text-darker",attrs:{href:"tel:79814435892"},domProps:{textContent:t._s("+7 (981) 443 58 92")}}),t._v(" "),e("p",{staticClass:"text-body",domProps:{textContent:t._s("Artstation")}})])])])}),[],!1,null,"6d1f9c92",null);e.default=component.exports}},[[243,9,1,10]]]);