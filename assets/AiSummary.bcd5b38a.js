import{o as n,b as s,l as c,d as i,r as d,j as _,e as u,w as m,i as r,t as p,g as f}from"./vendor-vue.8e09c80a.js";import{a as x}from"./vite.1299367e.js";const b={},g={class:"w-full text-3xl lg:text-4xl font-semibold m-3 mb-4 before:w-full before:border-x-2 before:mr-2 headTitle"};function h(t,e){return n(),s("span",g,[c(t.$slots,"default")])}const y=x(b,[["render",h]]);async function w(t){const e=`https://dynablog.nickchen.top/api/blog/${t}/context`;try{return await(await fetch(e)).json()}catch{return null}}const k={class:"rounded-lg mx-auto max-w-[90%] mt-6 p-5 w-full border-gray-300 border-2"},v=r("br",null,null,-1),B={class:"block text-gray-600 dark:text-gray-300 max-w-[95%] mx-auto mt-2",style:{"font-size":"14.5px"}},T=i({__name:"AiSummary",props:{id:Number},setup(t){const e=t,a=d(null);return _(async()=>{e.id&&(a.value=await w(e.id))}),(N,S)=>{var o;const l=y;return n(),s("div",k,[u(l,{class:"!text-lg"},{default:m(()=>[f(" AI 生成的摘要 ")]),_:1}),v,r("span",B,p(a.value?(o=a.value)==null?void 0:o.aiSummary:"Loading..."),1)])}}});export{T as _};
