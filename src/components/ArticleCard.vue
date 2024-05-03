<script setup lang="ts">
import { useCoverUrl } from '@/composables/useCoverUrl';
function formatTime(time:any){
  let currentTime = new Date();
  let t = new Date(time);
  let oldY = t.getFullYear();
  let oldM = t.getMonth() + 1; let oldD = t.getDate();
  return `${oldY}-${zeroize(oldM)}-${zeroize(oldD)}`;
  function zeroize(num:number) { return num < 10 ? "0" + num : num; }
}
const props = defineProps(['post']);
</script>

<template>
  <div v-if="post.frontmatter.cover" class="w-full block mb-8 ">
    <a :href="post.href" class="block relative w-full h-full">
      <div class="absolute top-0 left-0 w-full h-full z-10">
        <div :style="'background-image:url(' + useCoverUrl(post.frontmatter.cover) + ')'" 
        class="bg-no-repeat bg-cover bg-center w-full h-full"></div>
      </div>
      <div class="cover px-6 nl:px-10 pb-10 pt-32 relative z-20 
        text-white w-full h-full space-y-3 nl:space-y-5">
        <div class="inline-flex w-full flex-nowrap"><h3 class="font-semibold text-3xl">{{ post.title }}</h3></div>
        <div class="text-sm font-semibold">更新于 · {{ formatTime(post.frontmatter.lastUpdated) }} - 发布于 · {{ formatTime(post.date) }} - 浏览量 · <PostVisitorCounter :link="post.meta.href" client:idle/> 次 </div>
        <h4 class="font-medium text-base"  style="word-wrap: break-word;"> {{ post.meta.excerpt }} </h4>
      </div>
    </a>
  </div>
  <div v-else class="w-full mb-8 dark:text-white shadow dark:shadow-none dark:border-white border-[1.2px]">
    <a :href="post.href" class="block relative w-full h-full">
    <div class="holder w-full px-6 nl:px-10">
      <div class="pb-8 pt-10 relative z-20 w-full h-full space-y-3 nl:space-y-5">
        <h3 class="font-semibold text-3xl">{{ post.title }}</h3>
        <div class="text-sm font-semibold">更新于 · {{ formatTime(post.frontmatter.lastUpdated) }} - 发布于 · {{ formatTime(post.date) }} - 浏览量 · <PostVisitorCounter :link="post.meta.href" client:idle/> 次 </div>
        <h4 class="font-medium text-base" style="word-wrap: break-word;"> {{ post.meta.excerpt }} </h4>
      </div>
    </div>
    </a>
  </div>
</template>

