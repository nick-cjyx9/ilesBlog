import{f as m,r,b as s,d as t,F as l,j as d,u as c,o as a,t as _,n as v}from"./vendor-vue.4a81fcfe.js";import{u as x,t as p,a as g}from"./useTheme.f3a49e6d.js";const w={class:"flex space-x-3 shadow flex-wrap justify-center whitespace-nowrap lg:px-24 sm:px-5 sm:flex-nowrap dark:text-white"},k=t("div",{class:"navtab font-serif font-medium"},[t("a",{href:"/",class:"text-xl","data-umami-event":"to homepage"},"Nick Chen's Blog")],-1),b={class:"flex flex-wrap flex-row w-full justify-center wp:justify-normal"},y={class:"navtab dark:hover:text-white"},j=["href","data-umami-event"],B={class:"flex justify-center"},C={class:"navtab dark:hover:text-white"},D=["href","title","data-umami-event"],L=t("i",{class:"fa-solid fa-sun"},null,-1),N=[L],S=t("i",{class:"fa-solid fa-moon"},null,-1),F=[S],R=m({__name:"NavigationBar",setup($){const{store:i}=x(),u=r({主页:"/",哔哔:"/memos",归档:"/archive/updated",标签:"/tags",二次元:"/girls",关于:"/about"}),f=r({搜索:["magnifying-glass","/search"],订阅RSS:["square-rss","/feed.rss"]});return(q,o)=>(a(),s("nav",w,[k,t("ul",b,[(a(!0),s(l,null,d(u.value,(e,n,h)=>(a(),s("li",y,[t("a",{href:e,class:"text-base font-medium","data-umami-event":"goto "+e},_(n),9,j)]))),256))]),t("ul",B,[(a(!0),s(l,null,d(f.value,(e,n,h)=>(a(),s("li",C,[t("a",{href:e[1],title:n,"data-umami-event":"goto "+e},[t("i",{class:v("fa-solid fa-"+e[0])},null,2)],8,D)]))),256)),t("li",{id:"toLight",onClick:o[0]||(o[0]=e=>{i.value="light",c(p)()}),role:"button",class:"navtab dark:hover:text-white"},N),t("li",{id:"toDark",onClick:o[1]||(o[1]=e=>{i.value="dark",c(g)()}),role:"button",class:"navtab dark:hover:text-white"},F)])]))}});export{R as _};
