import{f as h,r as l,b as a,d as t,F as r,j as d,u as c,o as s,t as _,n as x}from"./vendor-vue.ffc37e11.js";import{u as v,t as p,a as g}from"./useTheme.8d006ada.js";const k={class:"flex space-x-3 shadow flex-wrap justify-center whitespace-nowrap lg:px-24 sm:px-5 sm:flex-nowrap dark:text-white"},w=t("div",{class:"navtab font-serif font-medium"},[t("a",{href:"/",class:"text-xl","data-umami-event":"to homepage"},"Nick Chen's Blog")],-1),b={class:"flex flex-wrap flex-row w-full justify-center wp:justify-normal"},y={class:"navtab dark:hover:text-white"},j=["href","data-umami-event"],B={class:"flex justify-center"},C={class:"navtab dark:hover:text-white"},D=["href","title","data-umami-event"],L=t("i",{class:"fa-solid fa-sun"},null,-1),N=[L],S=t("i",{class:"fa-solid fa-moon"},null,-1),F=[S],R=h({__name:"NavigationBar",setup($){const{store:i}=v(),u=l({主页:"/",哔哔:"/memos",归档:"/archive/updated",标签:"/tags",二次元:"/girls",友链:"/links",关于:"/about"}),f=l({搜索:["magnifying-glass","/search"],订阅RSS:["square-rss","/feed.xml"]});return(q,o)=>(s(),a("nav",k,[w,t("ul",b,[(s(!0),a(r,null,d(u.value,(e,n,m)=>(s(),a("li",y,[t("a",{href:e,class:"text-base font-medium","data-umami-event":"goto "+e},_(n),9,j)]))),256))]),t("ul",B,[(s(!0),a(r,null,d(f.value,(e,n,m)=>(s(),a("li",C,[t("a",{href:e[1],title:n,"data-umami-event":"goto "+e[1]},[t("i",{class:x("fa-solid fa-"+e[0])},null,2)],8,D)]))),256)),t("li",{id:"toLight",onClick:o[0]||(o[0]=e=>{i.value="light",c(p)()}),role:"button",class:"navtab dark:hover:text-white"},N),t("li",{id:"toDark",onClick:o[1]||(o[1]=e=>{i.value="dark",c(g)()}),role:"button",class:"navtab dark:hover:text-white"},F)])]))}});export{R as _};