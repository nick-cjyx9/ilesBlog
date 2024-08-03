import{b as a,k as r,j as e,F as n,o}from"./vendor-vue.4185510e.js";import{a as t}from"./vite.1299367e.js";const c={};function i(s,d){return o(),a(n,null,[r(` <div v-if="dataList.length === 0">\r
    Loading... <br><p v-if="errLog !== null" class="inline">\r
      {{ errLog }} <a onclick="location.reload();" href="javascript:void(0)">重试</a>\r
    </p>\r
  </div>\r
  <div v-else class="grid-cols-2 md:grid-cols-4 grid w-full h-full">\r
    <WaifuCard v-for="data in dataList" :key="data?.characterId" :waifu_data="data" />\r
  </div> `),e(" This page is under construction. ")],2112)}const m=t(c,[["render",i]]);export{m as c};
