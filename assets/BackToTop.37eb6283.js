import{o as n,b as i,i as e,f as c}from"./vendor-vue.746631c3.js";import{a}from"./vite.1299367e.js";const d={data(){return{elTop:0,isShow:!1}},mounted(){window.addEventListener("scroll",this.scrolling)},methods:{scrollTop(){window.scrollTo({top:0,behavior:"smooth"})},scrolling(){const s=window.pageYOffset,o=s-this.elTop;this.elTop=s,o<0&&this.elTop<1200?this.isShow=!1:this.isShow=!0}}},p={key:0,class:"z-50 fixed right-9 bottom-9 rounded-full p-0.5 lg:p-1.5 shadow-md toTop"},h=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"})],-1),f=[h];function m(s,o,w,u,r,t){return r.isShow?(n(),i("div",p,[e("div",{class:"font-semibold p-2.5 rounded-sm bg-accent-success text-primary-lg hover:bg-accent-y cursor-pointer transition",onClick:o[0]||(o[0]=(...l)=>t.scrollTop&&t.scrollTop(...l))},f)])):c("v-if",!0)}const _=a(d,[["render",m]]);export{_ as default};
