import{c as d,a as l,h as u}from"./vendor-vue.293b4cb6.js";var f=e=>document.getElementById(e)||console.error(`Missing #${e}, could not mount island.`);function p(e,r,n,a,t){const o=f(n);o&&(e(r,n,o,a,t),o.setAttribute("hydrated",""))}async function m(e,r,n,a,t){const[o,c]=await Promise.all([e(),r()]);p(o,c,n,a,t)}function v(e,r,n,a,t){(window.requestIdleCallback||setTimeout)(()=>m(e,r,n,a,t))}var y=l;function b(e,r,n,a,t){const o=t&&Object.fromEntries(Object.entries(t).map(([i,s])=>[i,()=>d(s)]));y({render:()=>u(e,a,o)}).mount(n,!!t)}const g=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));var h=e=>typeof e=="function";async function j(e,r,n,a,t){h(e)&&await e(n,a,t)}export{v as a,j as b,b as c,p as h,g as v};