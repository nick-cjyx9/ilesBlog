import{f as u,r as s,b as c,d as a,t as n,k as f,e as o,o as r}from"./vendor-vue.1cd41dc4.js";const m={class:"flex flex-col flex-wrap space-y-1 h-full p-4"},h={role:"button",class:"avatar w-full flex justify-center mb-1 mt-2"},_=["src"],v={class:"w-full text-center text-2xl font-medium"},w=["href","data-umami-event-id"],p={class:"w-full text-center leading-5 font-thin",style:{"font-size":"16px"}},x={key:0},y={key:1},N=u({__name:"WaifuCard",props:["waifu_data"],setup(t){const e=t,l=s(e.waifu_data.characterSummary.length>45),i=s(e.waifu_data.characterSummary.length==0),d=s("https://bgm.tv/character/"+e.waifu_data.characterId);return(g,k)=>(r(),c("div",m,[a("div",h,[a("img",{src:t.waifu_data.characterAvatar,class:"w-20 rounded-full shadow p-1 hover:shadow-md"},null,8,_)]),a("div",v,[a("a",{href:d.value,target:"_blank","data-umami-event-id":"goto bgm:"+t.waifu_data.characterName},n(t.waifu_data.characterName),9,w)]),a("div",p,[a("span",null,[f(n(t.waifu_data.characterSummary.slice(0,45))+" ",1),i.value?(r(),c("span",x,"没有介绍哦~")):o("v-if",!0),l.value?(r(),c("span",y,"...")):o("v-if",!0)])])]))}});export{N as _};
