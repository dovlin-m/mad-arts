import{u as m}from"./asyncData.Bnzth0zo.js";import{C as v,D as l,E as d,y as g,G as f,H as y,f as h,I as _,J as w,z as C,B as p}from"./entry.DyOtKDnc.js";import{q as P,w as c,e as $,s as x,j as N,u as E}from"./query.B8KmQ-Iz.js";import{u as T}from"./preview.BOLnrXv-.js";import{_ as j}from"./nuxt-link.BpCs4mKw.js";const D="$s";function S(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=D+n,r=d(),i=v(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(l(s))return r.payload.state[a]=s,s;i.value=s}return i}const b=async t=>{const{content:e}=g().public;typeof(t==null?void 0:t.params)!="function"&&(t=P(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${$(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(x())return(await y(()=>import("./client-db.B-iHvXs4.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:N(n),previewToken:T().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},R=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=_(t),n=w(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&S("dd-navigation").value){const{navigation:a}=E();return{navigation:a}}const{data:o}=await m(`content-navigation-${f(n.value)}`,()=>b(n.value));return{navigation:o}},render(t){const e=C(),{navigation:n}=t,o=i=>p(j,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),G=R;export{G as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.B-iHvXs4.js","./entry.DyOtKDnc.js","./query.B8KmQ-Iz.js","./preview.BOLnrXv-.js","./index.BsYmvPZw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
