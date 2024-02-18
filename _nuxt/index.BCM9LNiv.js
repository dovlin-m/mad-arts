import{_ as k,u as B,a as j,b as z}from"./usePortfolio.DKLPE8ys.js";import{f as h,r as p,g as S,h as P,o as e,c as s,b as f,n as E,u as d,a as c,i as v,_ as H,j as N,t as g,F as x,k as w,w as A,l as I,m as L,q as M}from"./entry.DC_iO5vD.js";import{u as V}from"./asyncData.Dslww47h.js";import"./vue.f36acd1f.Cb43iTxm.js";import"./nuxt-link.u5595h6V.js";import"./query.C5jr8gjV.js";import"./preview.DfMWplRo.js";const q=h({__name:"Banner",setup(a){const t=p(null),n=p(null),i=p();S(()=>{window.addEventListener("scroll",r)}),P(()=>{window.removeEventListener("scroll",r)});const r=()=>{var o;const m=window.scrollY,l=((o=i.value)==null?void 0:o.$el.clientHeight)||0;t.value=t.value?t.value:l,n.value=Math.max(0,t.value-m)};return(m,l)=>{const o=k;return e(),s("section",{class:"overflow-hidden transition-[height] duration-300 ease-out",style:E({height:`${d(n)}px`})},[f(o,{ref_key:"banner",ref:i,src:"/assets/images/banner.webp",class:"w-full h-full object-cover",alt:"banner monk and old woman",sizes:"640 md:1024 lg:1280",placeholder:"",preload:""},null,512)],4)}}}),D=["src","alt"],F=h({__name:"Image",props:{img:{type:String,required:!0},customClass:String},setup(a){var r;const t=p(!1),n=p(Math.max(((r=document==null?void 0:document.documentElement)==null?void 0:r.clientWidth)||0,(window==null?void 0:window.innerWidth)||0)),i=()=>{t.value=n.value<768?!1:!t.value};return(m,l)=>(e(),s("div",{class:v(["cursor-pointer",[a.customClass||"sm:col-span-4"]]),onClick:l[0]||(l[0]=o=>i())},[c("div",{class:v(["flex flex-col items-center justify-center transition-all duration-300",{"bg-transparent":!d(t),"fixed inset-0 overflow-auto m-0 bg-black/50":d(t)}])},[c("img",{src:`/assets/images/portfolio/${a.img}.jpg`,loading:"lazy",class:v({"sm:h-56 lg:h-96 w-full object-cover":!d(t),"h-auto w-auto max-h-[70vh] max-w-[70vh] object-contain":d(t)}),alt:a.img},null,10,D)],2)],2))}}),U={},W={class:"grid-wrapper grid grid-cols-12 row"};function Y(a,t){return e(),s("div",W,[N(a.$slots,"default",{class:"col"})])}const G=H(U,[["render",Y]]),J={class:"container py-8 sm:py-12 lg:py-16"},K=["textContent"],O=["id"],Q={class:"flex items-center mb-6"},R=["textContent"],T={class:"flex flex-col gap-y-2 mt-4"},X=["textContent"],Z=["textContent"],tt=h({__name:"Portfolio",setup(a){const t=B();return(n,i)=>{const r=j,m=F,l=G;return e(),s("section",J,[c("h1",{class:"text-4xl text-yellow-50",textContent:g(n.$t("pages.portfolio.title"))},null,8,K),c("div",null,[(e(!0),s(x,null,w(d(t),({title:o,date:$,_path:u,images:b,id:y})=>(e(),s("div",{id:y,key:o,class:"bg-zinc-700 rounded-xl p-2 sm:p-4 mt-8"},[c("div",Q,[f(r,{"logo-min":"",large:"",class:"mr-3 sm:mr-4"}),c("h2",{class:"text-yellow-50",textContent:g(o)},null,8,R)]),f(l,{class:"gap-y-4 gap-x-4"},{default:A(()=>[(e(!0),s(x,null,w(b,_=>(e(),I(m,{key:_,img:`${u==null?void 0:u.split("/")[(u==null?void 0:u.split("/").length)-1]}/${_.split(" ")[0]}`,"custom-class":_.split(" ")[1]},null,8,["img","custom-class"]))),128))]),_:2},1024),c("div",T,[(e(!0),s(x,null,w(n.$tm(`portfolio.${y}`),(_,C)=>(e(),s(x,null,[_?(e(),s("p",{key:C,class:"text-yellow-50 text-sm",textContent:g(n.$rt(_))},null,8,X)):L("",!0)],64))),256)),c("p",{class:"text-sm text-right text-zinc-400",textContent:g($)},null,8,Z)])],8,O))),128))])])}}}),et={class:"mt-14 lg:mt-[72px]"},it=h({__name:"index",async setup(a){let t,n;const i=z();return[t,n]=M(()=>V("hello",()=>i())),await t,n(),(r,m)=>{const l=q,o=tt;return e(),s("div",et,[f(l),f(o)])}}});export{it as default};