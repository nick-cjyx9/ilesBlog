<template>
  <nav class="flex space-x-3 shadow flex-wrap justify-center 
  whitespace-nowrap lg:px-24 sm:px-5 sm:flex-nowrap">
    <div class="navtab font-serif font-medium">
      <a href='/' class="text-xl">Nick Chen's Blog</a>
    </div>
    <ul class="flex flex-wrap flex-row w-full justify-center wp:justify-normal">
      <li v-for="(value,key,index) in nav_data" class="navtab">
        <a :href='value' class="text-base font-medium">{{ key }}</a>
      </li>
    </ul>
    <ul class="flex justify-center">
      <li v-for="(value,key,index) in icon_data"
        class="navtab">
        <a :href='value[1]' :title="key"><i :class="'w-full h-full fa-'+value[0]"></i></a>
      </li>
      <DarkModeSwitcher class="inline-flex" client:idle/>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { ref } from "vue";
const nav_data = ref({
  "主页":"/",
  // "哔哔":"/memos",
  "归档":"/archive/updated",
  "标签":"/tags",
  "二次元":"/cross",
  "友链":"/links",
  "关于":"/about"
});
const icon_data = ref({
  "搜索":["search","/search"],
  "订阅RSS":["rss-squared","/feed.xml"],
  // "title":["fa-icon","link"]
})
</script>
