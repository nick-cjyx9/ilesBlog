import{d as _,r,b as e,g as t,F as i,i as c,u as d,f as a,t as x,n as m}from"./vendor-vue.a62292c3.js";import{u as p,t as v,a as g}from"./useTheme.76923dd4.js";const w={class:"flex space-x-3 shadow flex-wrap justify-center whitespace-nowrap lg:px-24 sm:px-5 py-0.5 sm:flex-nowrap dark:text-white"},b=t("div",{class:"navtab font-serif font-medium"},[t("a",{href:"/",class:"text-xl"},"Rina Chan's Blog")],-1),k={class:"flex flex-wrap flex-row w-full justify-center wp:justify-normal"},y={class:"navtab dark:hover:text-white"},B=["href"],C={class:"flex justify-center"},j={class:"navtab dark:hover:text-white"},D=["href","aria-label"],L=t("i",{class:"fa-solid fa-sun"},null,-1),S=[L],F=t("i",{class:"fa-solid fa-moon"},null,-1),N=[F],E=_({__name:"NavigationBar",setup(R){const{store:l}=p(),f=r({主页:"/",归档:"/archive/updated",标签:"/tags",二次元:"/girls",关于:"/about"}),u=r({搜索:["magnifying-glass","/search"],订阅RSS:["square-rss","/feed.rss"]});return($,o)=>(a(),e("nav",w,[b,t("ul",k,[(a(!0),e(i,null,c(f.value,(s,n,h)=>(a(),e("li",y,[t("a",{href:s,class:"text-base font-medium"},x(n),9,B)]))),256))]),t("ul",C,[(a(!0),e(i,null,c(u.value,(s,n,h)=>(a(),e("li",j,[t("a",{href:s[1],"aria-label":n},[t("i",{class:m("fa-solid fa-"+s[0])},null,2)],8,D)]))),256)),t("li",{id:"toLight",onClick:o[0]||(o[0]=s=>{l.value="light",d(v)()}),role:"button",class:"navtab dark:hover:text-white"},S),t("li",{id:"toDark",onClick:o[1]||(o[1]=s=>{l.value="dark",d(g)()}),role:"button",class:"navtab dark:hover:text-white"},N)])]))}});export{E as _};
