<template>
  <nav class="flex space-x-4 shadow flex-wrap justify-center 
  whitespace-nowrap lg:px-24 sm:px-5 py-0.5 sm:flex-nowrap">
    <div class="navtab font-serif">
      <a href='/' class="font-medium text-xl">Rina Chan's Blog</a>
    </div>
    <ul class="flex flex-wrap flex-row w-full justify-center wp:justify-normal">
      <li v-for="(value,key,index) in nav_data" class="navtab hover:text-blue-400">
        <a :href='value' class="text-base font-normal">{{ key }}</a>
      </li>
    </ul>
    <ul class="flex justify-center">
      <li v-for="(value,key,index) in icon_data"
        class="rounded-lg p-3 hover:bg-indigo-100 flex items-center hover:text-blue-400">
        <a :href='value[1]' :aria-label="key"><i :class="'fa-solid fa-'+value[0]"></i></a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
const nav_data = ref({
  "主页":"/",
  "归档":"/archive",
  "标签":"/tags",
  "二次元":"/girls",
  "关于":"/about"
});
const icon_data = ref({
  "搜索":["magnifying-glass","/search"],
  "订阅RSS":["square-rss","/feed.rss"],
  // "aria-label":["fa-icon","link"]
})
</script>
