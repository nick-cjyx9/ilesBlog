import{c as s,a as p,h as d}from"./vendor-vue.4a81fcfe.js";var u=t=>document.getElementById(t)||console.error(`Missing #${t}, could not mount island.`);function I(t,i,n,a,e){const o=u(n);o&&(t(i,n,o,a,e),o.setAttribute("hydrated",""))}var f=p;function b(t,i,n,a,e){const o=e&&Object.fromEntries(Object.entries(e).map(([r,c])=>[r,()=>s(c)]));f({render:()=>d(t,a,o)}).mount(n,!!e)}var l=t=>typeof t=="function";async function v(t,i,n,a,e){l(t)&&await t(n,a,e)}export{v as a,b as c,I as h};
