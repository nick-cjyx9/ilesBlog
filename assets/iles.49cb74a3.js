import{c as f,a as p,h as b}from"./vendor-vue.d401e271.js";var d=e=>document.getElementById(e)||console.error(`Missing #${e}, could not mount island.`);function m(e,r,t,o,n){const a=d(t);a&&(e(r,t,a,o,n),a.setAttribute("hydrated",""))}async function l(e,r,t,o,n){const[a,s]=await Promise.all([e(),r()]);m(a,s,t,o,n)}function I(e,r,t,o,n){(window.requestIdleCallback||setTimeout)(()=>l(e,r,t,o,n))}function O(e,r,t,o,n){const a=d(t);if(a){const s=new IntersectionObserver(([{isIntersecting:c}])=>{c&&(i(),l(e,r,t,o,n))}),i=()=>s.disconnect();s.observe(a)}}var y=p;function v(e,r,t,o,n){const a=n&&Object.fromEntries(Object.entries(n).map(([c,u])=>[c,()=>f(u)]));y({render:()=>b(e,o,a)}).mount(t,!!n)}const g=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));var h=e=>typeof e=="function";async function j(e,r,t,o,n){h(e)&&await e(t,o,n)}export{m as a,O as b,v as c,j as d,I as h,g as v};
