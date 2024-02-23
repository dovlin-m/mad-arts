import{_ as k,u as B,a as j,b as z}from"./usePortfolio.CmlqMxNp.js";import{f as h,r as p,g as S,h as P,o as n,c as o,b as f,n as E,u,a as r,i as v,j as H,_ as N,k as A,t as g,F as x,l as w,w as I,m as L,q as M,s as U}from"./entry.BTtNlZh4.js";import{u as V}from"./asyncData.CT9YA914.js";import"./vue.f36acd1f.Dj210vBD.js";import"./nuxt-link.CfhuDUmW.js";import"./query.BQII5E9f.js";import"./preview.CxLPevvd.js";const q=h({__name:"Banner",setup(l){const t=p(null),s=p(null),c=p();S(()=>{window.addEventListener("scroll",i)}),P(()=>{window.removeEventListener("scroll",i)});const i=()=>{var e;const a=window.scrollY,m=((e=c.value)==null?void 0:e.$el.clientHeight)||0;t.value=t.value?t.value:m,s.value=Math.max(0,t.value-a)};return(a,m)=>{const e=k;return n(),o("section",{class:"overflow-hidden transition-[height] duration-300 ease-out",style:E({height:`${u(s)}px`})},[f(e,{ref_key:"banner",ref:c,src:"/assets/images/banner.webp",class:"w-full h-full max-h-[425px] object-cover",alt:"banner monk and old woman",sizes:"640 md:1024 lg:1280",placeholder:"",preload:""},null,512)],4)}}}),D=["src","alt"],F=h({__name:"Image",props:{img:{type:String,required:!0},customClass:String},setup(l){var a;const t=p(!1),s=p(Math.max(((a=document==null?void 0:document.documentElement)==null?void 0:a.clientWidth)||0,(window==null?void 0:window.innerWidth)||0)),c=()=>{t.value=s.value<768?!1:!t.value},i=H();return(m,e)=>(n(),o("div",{class:v(["cursor-pointer",[l.customClass||"sm:col-span-4"]]),onClick:e[0]||(e[0]=y=>c())},[r("div",{class:v(["flex flex-col items-center justify-center transition-all duration-300",{"bg-transparent":!u(t),"fixed inset-0 overflow-auto m-0 bg-black/50":u(t)}])},[r("img",{src:`${u(i).public.baseUrl}assets/images/portfolio/${l.img}.jpg`,loading:"lazy",class:v({"sm:h-56 lg:h-96 w-full object-cover":!u(t),"h-auto w-auto max-h-[70vh] max-w-[70vh] object-contain":u(t)}),alt:l.img},null,10,D)],2)],2))}}),W={},R={class:"grid-wrapper grid grid-cols-12 row"};function Y(l,t){return n(),o("div",R,[A(l.$slots,"default",{class:"col"})])}const G=N(W,[["render",Y]]),J={class:"container py-8 sm:py-12 lg:py-16"},K=["textContent"],O=["id"],Q={class:"flex items-center mb-6"},T=["textContent"],X={class:"flex flex-col gap-y-2 mt-4"},Z=["textContent"],tt=["textContent"],et=h({__name:"Portfolio",setup(l){const t=B();return(s,c)=>{const i=j,a=F,m=G;return n(),o("section",J,[r("h1",{class:"text-4xl text-yellow-50",textContent:g(s.$t("pages.portfolio.title"))},null,8,K),r("div",null,[(n(!0),o(x,null,w(u(t),({title:e,date:y,_path:_,images:b,id:$})=>(n(),o("div",{id:$,key:e,class:"bg-zinc-700 rounded-xl p-2 sm:p-4 mt-8"},[r("div",Q,[f(i,{"logo-min":"",large:"",class:"mr-3 sm:mr-4"}),r("h2",{class:"text-yellow-50",textContent:g(e)},null,8,T)]),f(m,{class:"gap-y-4 gap-x-4"},{default:I(()=>[(n(!0),o(x,null,w(b,d=>(n(),L(a,{key:d,img:`${_==null?void 0:_.split("/")[(_==null?void 0:_.split("/").length)-1]}/${d.split(" ")[0]}`,"custom-class":d.split(" ")[1]},null,8,["img","custom-class"]))),128))]),_:2},1024),r("div",X,[(n(!0),o(x,null,w(s.$tm(`portfolio.${$}`),(d,C)=>(n(),o(x,null,[d?(n(),o("p",{key:C,class:"text-yellow-50 text-sm",textContent:g(s.$rt(d))},null,8,Z)):M("",!0)],64))),256)),r("p",{class:"text-sm text-right text-zinc-400",textContent:g(y)},null,8,tt)])],8,O))),128))])])}}}),nt={class:"mt-14 lg:mt-[72px]"},mt=h({__name:"index",async setup(l){let t,s;const c=z();return[t,s]=U(()=>V("portfolio",()=>c())),await t,s(),(i,a)=>{const m=q,e=et;return n(),o("div",nt,[f(m),f(e)])}}});export{mt as default};
