import{d as f,s as p,e as h,f as g,o as l,b as c,F as y,v,i as m,x as u,y as k,t as w,g as x}from"./vendor-vue.4185510e.js";const B={id:"toc",class:"py-4 overflow-auto h-full"},E=m("li",{class:"w-full py-3 -mt-3 pl-4 sticky -top-4 holder"}," 文章目录 ",-1),$=["id","onClick"],I=["href"],S=f({__name:"TocInner",props:["nodes"],setup(o){const r=o;function i(n){const t=document.getElementById(n.slug);t&&t.scrollIntoView({behavior:"smooth"})}const{y:s}=p(),d=h("");return g(()=>{const n=()=>{if(r.nodes)for(const t of r.nodes){const e=document.getElementById(t.slug);if(e){const a=e.offsetTop-1,_=a+e.offsetHeight;if(s.value>=a&&s.value<_){d.value=t.slug;break}}}};window.addEventListener("scroll",n)}),(n,t)=>(l(),c("ul",B,[E,(l(!0),c(y,null,v(o.nodes,e=>(l(),c("li",{id:`toc-${e.slug}`,key:e.slug,class:"list-none text-minor-link px-6 py-1 text-sm",style:u({marginLeft:`${(e.level-1)*12}px`}),onClick:k(a=>i(e),["prevent"])},[m("a",{style:u({color:d.value===e.slug?"#47a2e0":"inherit"}),href:`#${e.slug}`},w(e.title),13,I)],12,$))),128))]))}}),T={class:"w-full holder mt-2 dark:text-white"},C=f({__name:"tableofContent",props:["nodes"],setup(o){return(r,i)=>{const s=S;return l(),c("div",T,[x(s,{nodes:o.nodes},null,8,["nodes"])])}}});export{C as _};