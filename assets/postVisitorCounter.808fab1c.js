import{d as a,r as i,j as r,o as s,b as n,t as l}from"./vendor-vue.5532a326.js";import{b as p}from"./useUmami.e03cb388.js";import"./vite.bb3ebe06.js";const c={key:0,class:"fa-solid fa-spinner animate-spin"},u={key:1},y=a({__name:"postVisitorCounter",props:["link"],setup(o){const t=o,e=i(null);return r(async()=>{e.value=await p(t.link)}),(m,_)=>e.value===null?(s(),n("i",c)):(s(),n("span",u,l(e.value),1))}});export{y as default};
