import{f as m,r,b as e,d as t,F as l,j as d,u as c,o as s,t as _,n as v}from"./vendor-vue.1cd41dc4.js";import{u as x,t as p,a as g}from"./useTheme.211f995a.js";const w={class:"flex space-x-3 shadow flex-wrap justify-center whitespace-nowrap lg:px-24 sm:px-5 py-0.5 sm:flex-nowrap dark:text-white"},b=t("div",{class:"navtab font-serif font-medium"},[t("a",{href:"/",class:"text-xl","data-umami-event-id":"to homepage"},"Rina Chan's Blog")],-1),k={class:"flex flex-wrap flex-row w-full justify-center wp:justify-normal"},y={class:"navtab dark:hover:text-white"},j=["href","data-umami-event-id"],B={class:"flex justify-center"},C={class:"navtab dark:hover:text-white"},D=["href","aria-label","data-umami-event-id"],L=t("i",{class:"fa-solid fa-sun"},null,-1),S=[L],F=t("i",{class:"fa-solid fa-moon"},null,-1),N=[F],E=m({__name:"NavigationBar",setup(R){const{store:i}=x(),u=r({主页:"/",归档:"/archive/updated",标签:"/tags",二次元:"/girls",关于:"/about"}),f=r({搜索:["magnifying-glass","/search"],订阅RSS:["square-rss","/feed.rss"]});return($,o)=>(s(),e("nav",w,[b,t("ul",k,[(s(!0),e(l,null,d(u.value,(a,n,h)=>(s(),e("li",y,[t("a",{href:a,class:"text-base font-medium","data-umami-event-id":"goto "+a},_(n),9,j)]))),256))]),t("ul",B,[(s(!0),e(l,null,d(f.value,(a,n,h)=>(s(),e("li",C,[t("a",{href:a[1],"aria-label":n,"data-umami-event-id":"goto "+a},[t("i",{class:v("fa-solid fa-"+a[0])},null,2)],8,D)]))),256)),t("li",{id:"toLight",onClick:o[0]||(o[0]=a=>{i.value="light",c(p)()}),role:"button",class:"navtab dark:hover:text-white"},S),t("li",{id:"toDark",onClick:o[1]||(o[1]=a=>{i.value="dark",c(g)()}),role:"button",class:"navtab dark:hover:text-white"},N)])]))}});export{E as _};
