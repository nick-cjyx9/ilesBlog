import{d as m,e as c,f,_ as w,b as p,i as o,o as b}from"./vendor-vue.b95f88b6.js";const v=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},[o("path",{fill:"currentColor",d:"M8 4.207v8.237c0 .307-.224.556-.5.556s-.5-.249-.5-.556V4.207L2.904 8.303a.5.5 0 0 1-.707-.707l4.242-4.242a1.5 1.5 0 0 1 2.122 0l4.242 4.242a.5.5 0 1 1-.707.707z"})],-1),_=[v],x=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[o("path",{fill:"currentColor",d:"M3 17v-2h14v2zm0-4v-2h14v2zm0-4V7h14v2zm17 8q-.425 0-.712-.288T19 16t.288-.712T20 15t.713.288T21 16t-.288.713T20 17m0-4q-.425 0-.712-.288T19 12t.288-.712T20 11t.713.288T21 12t-.288.713T20 13m0-4q-.425 0-.712-.288T19 8t.288-.712T20 7t.713.288T21 8t-.288.713T20 9"})],-1),T=[x],y=m({__name:"FunctionButtons",setup(g){function l(){window.scrollTo({top:0,behavior:"smooth"})}function a(t){const e=t.getBoundingClientRect();return e.bottom>0&&e.top<window.innerHeight||e.bottom>=0&&e.top<=0}const n=c(),s=c();return f(()=>{var r;const t=document.querySelector("#sidebar"),e=document.querySelector("#toc");if(t&&e&&s.value){(r=s.value)==null||r.addEventListener("click",()=>{t.classList.toggle("toc-slide-down")});const u=()=>{var i,d;a(e)?((d=n.value)==null||d.classList.remove("btn-slide-up"),setTimeout(()=>{t.classList.remove("toc-slide-down")},1e3)):(i=n.value)==null||i.classList.add("btn-slide-up")},h=w.debounce(u,80);window.addEventListener("scroll",h)}}),(t,e)=>(b(),p("div",{id:"btnContainer",ref_key:"a",ref:n,class:"md:hidden fixed right-6 space-y-[8px] flex flex-col z-50"},[o("a",{role:"button",class:"w-10 h-10 font-bold holder border-[1px] border-zinc-600 dark:border-white dark:text-white flex items-center justify-center rounded-full",onClick:l},_),o("a",{id:"expandToc",ref_key:"b",ref:s,role:"button",class:"font-bold border-[1px] border-zinc-600 dark:border-white w-10 h-10 holder dark:text-white items-center justify-center rounded-full flex opacity-0"},T,512)],512))}});export{y as _};
