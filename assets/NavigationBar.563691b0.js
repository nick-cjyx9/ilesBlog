import{d as u,r as i,e as s,f as t,F as r,n as c,b as a,t as _,p as m}from"./vendor-vue.666d8e07.js";import{u as x}from"./useTheme.b4fe48e2.js";const p={class:"flex space-x-3 shadow flex-wrap justify-center whitespace-nowrap lg:px-24 sm:px-5 sm:flex-nowrap dark:text-white"},v=t("div",{class:"navtab font-serif font-medium"},[t("a",{href:"/",class:"text-xl","data-umami-event":"to homepage"},"Nick Chen's Blog")],-1),w={class:"flex flex-wrap flex-row w-full justify-center wp:justify-normal"},k={class:"navtab dark:hover:text-white"},g=["href"],b={class:"flex justify-center"},y={class:"navtab dark:hover:text-white"},B=["href","title"],C=t("i",{class:"fa-solid fa-sun"},null,-1),j=[C],N=t("i",{class:"fa-solid fa-moon"},null,-1),S=[N],q=u({__name:"NavigationBar",setup(D){const{store:l}=x(),d=i({主页:"/",归档:"/archive/updated",标签:"/tags",二次元:"/cross",友链:"/links",关于:"/about"}),f=i({搜索:["magnifying-glass","/search"],订阅RSS:["square-rss","/feed.xml"]});return(F,o)=>(a(),s("nav",p,[v,t("ul",w,[(a(!0),s(r,null,c(d.value,(e,n,h)=>(a(),s("li",k,[t("a",{href:e,class:"text-base font-medium"},_(n),9,g)]))),256))]),t("ul",b,[(a(!0),s(r,null,c(f.value,(e,n,h)=>(a(),s("li",y,[t("a",{href:e[1],title:n},[t("i",{class:m("fa-solid fa-"+e[0])},null,2)],8,B)]))),256)),t("li",{id:"toLight",onClick:o[0]||(o[0]=e=>{l.value="light"}),role:"button",class:"navtab dark:hover:text-white"},j),t("li",{id:"toDark",onClick:o[1]||(o[1]=e=>{l.value="dark"}),role:"button",class:"navtab dark:hover:text-white"},S)])]))}});export{q as _};
