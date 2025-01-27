<script setup lang="ts">
import { ref } from 'vue'

const nav_data = ref({
  主页: { link: '/', icon: 'fa-home' },
  归档: { link: '/archive/updated', icon: 'fa-archive' },
  标签: { link: '/tags', icon: 'fa-tag' },
  // 二次元: { link: '/girls', icon: 'fa-user-woman' },
  频道: { link: 'https://memos.nickchen.top/', icon: 'fa-home' },
  友链: { link: '/links', icon: 'fa-users' },
  关于: { link: '/about', icon: 'fa-guidedog' },
})
</script>

<script client:load lang="ts">
if (window.location.search.includes('uwu') || window.location.search.includes('kawaii')) {
  const avatar = document.getElementById('avatar') as HTMLImageElement
  avatar.src = '/uwu.png'
  avatar.width = 200
}
</script>

<template>
  <aside id="sidebar" class="sticky z-50 shadow-lg md:top-3 flex flex-col mb-4">
    <div class="shadow w-full h-fit py-2 md:py-3 space-y-1 justify-center min-w-[350px] holder">
      <div id="profile" class="text-center space-y-0.5">
        <img
          id="avatar" src="/avatar.png"
          width="120" class="rounded-full ml-auto mr-auto my-2 md:block hidden" alt="avatar"
        >
        <div class="text-important text-xl md:p-0 p-1">
          <!-- <div class="animate-bounce inline-block text-xl mr-0.5">👋</div> -->
          <b class="font-serif"><div class="text-red-400 inline-block">N</div>ick <div class="text-red-400 inline-block">C</div>hen</b>'s Blog!
        </div>
        <div class="text-minor text-sm mx-4">
          感受生命与艺术之美
        </div>
      </div>
      <ul class="md:justify-start justify-center flex md:flex-col md:px-6 w-full">
        <li /><li v-for="(k, v) in nav_data" :key="v" class="inline-block py-0.5">
          <a :href="k.link" class="text-minor-link px-2 w-full inline-block py-1 md:py-1.5 text-sm">
            <i :class="k.icon" class="mr-1 md:inline-block" hidden />
            {{ v }}
          </a>
        </li>
      </ul>
      <div class="flex justify-center !-mt-1 md:!mt-0">
        <DarkModeSwitcher client:idle class=" inline-flex" />
        <a href="/feed.xml" class="fa-rss-squared badge mt-[1.2px]" aria-label="subscribe RSS here" />
        <a href="/search" class="fa-search badge mt-[1px]" aria-label="searching" />
        <ReadingLocationController />
      </div>
    </div>
    <TableofContent v-if="$meta.href.search(/\/(post|about|hidden)/) !== -1" :nodes="$meta.headings" client:load class="h-[320px] md:h-[250px]" />
  </aside>
</template>
