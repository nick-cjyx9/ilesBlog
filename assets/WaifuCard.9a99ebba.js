import{d as f,r as s,b as c,g as a,t as n,i as u,e as o,f as r}from"./vendor-vue.5654130d.js";const h={class:"flex flex-col flex-wrap space-y-1 h-full p-4"},_={role:"button",class:"avatar w-full flex justify-center mb-1 mt-2"},m=["src"],p={class:"w-full text-center text-2xl font-medium"},w=["href"],v={class:"w-full text-center leading-5 font-thin",style:{"font-size":"16px"}},x={key:0},y={key:1},N=f({__name:"WaifuCard",props:["waifu_data"],setup(t){const e=t,l=s(e.waifu_data.characterSummary.length>45),i=s(e.waifu_data.characterSummary.length==0),d=s("https://bgm.tv/character/"+e.waifu_data.characterId);return(g,k)=>(r(),c("div",h,[a("div",_,[a("img",{src:t.waifu_data.characterAvatar,class:"w-20 rounded-full shadow p-1 hover:shadow-md"},null,8,m)]),a("div",p,[a("a",{href:d.value,target:"_blank"},n(t.waifu_data.characterName),9,w)]),a("div",v,[a("span",null,[u(n(t.waifu_data.characterSummary.slice(0,45))+" ",1),i.value?(r(),c("span",x,"没有介绍哦~")):o("v-if",!0),l.value?(r(),c("span",y,"...")):o("v-if",!0)])])]))}});export{N as _};
