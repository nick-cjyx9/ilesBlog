import{d as f,r,b as s,i as t,F as i,p as c,o as a,t as _,q as m}from"./vendor-vue.5ade2c26.js";import{u as x}from"./useTheme.535b725c.js";const p={class:"flex space-x-3 shadow flex-wrap justify-center whitespace-nowrap lg:px-24 sm:px-5 sm:flex-nowrap dark:text-white"},v=t("div",{class:"navtab font-serif font-medium"},[t("a",{href:"/",class:"text-xl","data-umami-event":"to homepage"},"Nick Chen's Blog")],-1),w={class:"flex flex-wrap flex-row w-full justify-center wp:justify-normal"},k={class:"navtab dark:hover:text-white"},b=["href"],g={class:"flex justify-center"},y={class:"navtab dark:hover:text-white"},B=["href","title"],C=t("i",{class:"fa-sun"},null,-1),j=[C],N=t("i",{class:"fa-moon"},null,-1),S=[N],$=f({__name:"NavigationBar",setup(q){const{store:l}=x(),d=r({主页:"/",归档:"/archive/updated",标签:"/tags",二次元:"/cross",友链:"/links",关于:"/about"}),h=r({搜索:["search","/search"],订阅RSS:["rss-squared","/feed.xml"]});return(D,o)=>(a(),s("nav",p,[v,t("ul",w,[(a(!0),s(i,null,c(d.value,(e,n,u)=>(a(),s("li",k,[t("a",{href:e,class:"text-base font-medium"},_(n),9,b)]))),256))]),t("ul",g,[(a(!0),s(i,null,c(h.value,(e,n,u)=>(a(),s("li",y,[t("a",{href:e[1],title:n,class:"w-full h-full"},[t("i",{class:m("fa-"+e[0])},null,2)],8,B)]))),256)),t("li",{id:"toLight",onClick:o[0]||(o[0]=e=>{l.value="light"}),role:"button",class:"navtab dark:hover:text-white"},j),t("li",{id:"toDark",onClick:o[1]||(o[1]=e=>{l.value="dark"}),role:"button",class:"navtab dark:hover:text-white"},S)])]))}});export{$ as _};
