<template>
  <nav class="flex space-x-3 shadow flex-wrap justify-center 
  whitespace-nowrap lg:px-24 sm:px-5 sm:flex-nowrap dark:text-white">
    <div class="navtab font-serif font-medium">
      <a href='/' class="text-xl" data-umami-event="to homepage">Nick Chen's Blog</a>
    </div>
    <ul class="flex flex-wrap flex-row w-full justify-center wp:justify-normal">
      <li v-for="(value,key,index) in nav_data" class="navtab dark:hover:text-white">
        <a :href='value' class="text-base font-medium" :data-umami-event="'goto '+value">{{ key }}</a>
      </li>
    </ul>
    <ul class="flex justify-center">
      <li v-for="(value,key,index) in icon_data"
        class="navtab dark:hover:text-white">
        <a :href='value[1]' :title="key" :data-umami-event="'goto '+value[1]"><i :class="'fa-solid fa-'+value[0]"></i></a>
      </li>
      <li id="toLight" @click="theme='light';toLight();"
      role="button" class="navtab dark:hover:text-white">
        <i class="fa-solid fa-sun"></i>
      </li>
      <li id="toDark" @click="theme='dark';toDark();"
      role="button" class="navtab dark:hover:text-white">
        <i class="fa-solid fa-moon"></i>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useTheme from "@/composables/useTheme";
import { toDark, toLight } from "@/composables/useTheme";
const { store: theme } = useTheme();
const nav_data = ref({
  "主页":"/",
  "哔哔":"/memos",
  "归档":"/archive/updated",
  "标签":"/tags",
  "二次元":"/girls",
  "友链":"/links",
  "关于":"/about"
});
const icon_data = ref({
  "搜索":["magnifying-glass","/search"],
  "订阅RSS":["square-rss","/feed.xml"],
  // "title":["fa-icon","link"]
})
</script>
