import{d,r as s,b as c,g as a,t as r,i,e as f,f as l}from"./vendor-vue.5654130d.js";const u={class:"flex flex-col flex-wrap space-y-1 h-full p-4"},h={role:"button",class:"avatar w-full flex justify-center mb-1 mt-2"},_=["src"],m={class:"w-full text-center text-xl"},w=["href"],x={class:"w-full text-center text-sm"},p={key:0},b=d({__name:"WaifuCard",props:["waifu_data"],setup(t){const e=t,o=s(e.waifu_data.characterSummary.length>45),n=s("https://bgm.tv/character/"+e.waifu_data.characterId);return(v,g)=>(l(),c("div",u,[a("div",h,[a("img",{src:t.waifu_data.characterAvatar,class:"w-20 rounded-full shadow p-1 hover:shadow-md"},null,8,_)]),a("div",m,[a("a",{href:n.value,target:"_blank"},r(t.waifu_data.characterName),9,w)]),a("div",x,[a("span",null,[i(r(t.waifu_data.characterSummary.slice(0,45))+" ",1),o.value?(l(),c("span",p,"...")):f("v-if",!0)])])]))}});export{b as _};