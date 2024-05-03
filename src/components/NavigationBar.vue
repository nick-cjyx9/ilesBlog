<template>
  <aside id="sidebar" class="w-full h-fit py-4 justify-center
  md:sticky md:top-6 flex flex-col space-y-1">
    <div id="profile" class="text-center space-y-0.5">
      <img src="https://cravatar.cn/avatar/74ea31416d68b8ecbb828bba878327a2.png?s=200"
        class="w-24 rounded-full ml-auto mr-auto my-2" alt="avatar"/>
      <div class="text-important text-xl">
      <div class="animate-bounce inline-block text-xl mr-0.5">👋</div>Hi there! I'm <b class="font-serif"><div class="text-red-400 inline-block">N</div>ick <div class="text-red-400 inline-block">C</div>hen</b></div>
      <div class="text-minor text-sm mx-4">僕らは命に嫌われている</div>
    </div>
    <ul class="space-y-0.5 md:justify-start justify-center flex md:flex-col md:px-6 w-full">
      <li></li><li v-for="(k, v) in nav_data" class="inline-block py-0.5">
        <a :href="k.link" class="text-minor-link px-2 w-full inline-block py-1 md:py-1.5 text-sm">
          <i :class="k.icon" class="mr-1 md:inline-block" hidden></i>
          {{ v }}
        </a>
      </li>
    </ul>
    <div class="flex justify-center">  
      <DarkModeSwitcher client:idle class=" inline-flex"/>
      <a href="/feed.xml" class="fa-rss-squared badge inline-block text-minor-link w-[32px] h-[32px] text-center" aria-label="subscribe RSS here"></a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
const nav_data = ref({
  "主页": { link: "/", icon: "fa-home" },
  "归档": { link: "/archive/updated", icon: "fa-archive" },
  "标签": { link: "/tags", icon: "fa-tag" },
  "二次元": { link: "/girls", icon: "fa-user-woman" },
  "友链": { link: "/links", icon: "fa-users" },
  "关于": { link: "/about", icon: "fa-guidedog" },
});
</script>