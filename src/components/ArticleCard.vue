<script setup lang="ts">
function formatTime(time:any){
  let currentTime = new Date();
  let currentTimestamp = currentTime.getTime() / 1000;
  let t = new Date(time);
  let oldTimestamp = t.getTime() / 1000; let oldY = t.getFullYear();
  let oldM = t.getMonth() + 1; let oldD = t.getDate();
  let oldH = t.getHours(); let oldi = t.getMinutes(); let olds = t.getSeconds();
  // gap unit:(s)
  let timestampDiff = currentTimestamp - oldTimestamp;
  // console.log(timestampDiff);
  if (timestampDiff < 60) { // in recent 1 min 
    return "刚刚";
  }
  if (timestampDiff < 60 * 60) { // in recent 1 hr
    return Math.floor(timestampDiff / 60) + '分钟前'; }
  //Today
  if (oldY === currentTime.getFullYear() && oldM === (currentTime.getMonth() + 1) && oldD === currentTime.getDate()) {
    return `${zeroize(oldH)}:${zeroize(oldi)}`; }
  if (timestampDiff < 60 * 60 * 24 * 30) { // in recent 30 days
    return Math.ceil(timestampDiff / 60 / 60 / 24) + '天前'; }
  //beyond 30 days
  return `${oldY}-${zeroize(oldM)}-${zeroize(oldD)}`;
  function zeroize(num:number) { return num < 10 ? "0" + num : num; }
}
const props = defineProps(['post']);
</script>

<template>
  <div v-if="post.frontmatter.cover" class="w-full h-full max-w-4xl block munderline mb-8 
    dark:after:border-white">
    <a :href="post.href" class="block relative w-full h-full hover:shadow-xl">
      <div class="absolute top-0 left-0 w-full h-full z-10">
        <div :style="'background-image:url(' + post.frontmatter.cover + ')'" 
        class="bg-no-repeat bg-cover bg-center w-full h-full shadow"></div>
      </div>
      <div class="cover px-6 nl:px-10 pb-10 pt-32 relative z-20 
        text-white w-full h-full space-y-3 nl:space-y-5">
        <div class="inline-flex w-full flex-nowrap"><h3 class="font-semibold text-3xl">{{ post.title }}</h3></div>
        <div class="text-sm font-semibold" v-if="post.frontmatter.lastUpdated">更新于 · {{ formatTime(post.frontmatter.lastUpdated) }} - 发布于 · {{ formatTime(post.date) }} - 浏览量 · {{ post.frontmatter.visitors }}次 </div>
        <div class="text-sm font-semibold" v-else>更新于 · {{ formatTime(post.meta.lastUpdated) }} - 发布于 · {{ formatTime(post.date) }} - 浏览量 · {{ post.frontmatter.visitors }}次 </div>
        <h4 class="font-medium text-base"  style="word-wrap: break-word;"> {{ post.meta.excerpt }} </h4>
      </div>
    </a>
  </div>
  <div v-else class="w-full max-w-4xl munderline mb-8
    after:border-black dark:after:border-white">
    <a :href="post.href" class="block relative w-full h-full">
    <div class="bg-slate-100 dark:bg-slate-800 dark:text-white w-full px-6 nl:px-10 shadow hover:shadow-xl">
      <div class="pb-8 pt-10 relative z-20 w-full h-full space-y-3 nl:space-y-5">
        <h3 class="font-semibold text-3xl">{{ post.title }}</h3>
        <div class="text-sm font-semibold">更新于 · {{ formatTime(post.frontmatter.lastUpdated) }} - 发布于 · {{ formatTime(post.date) }} - 浏览量 · {{ post.frontmatter.visitors }}次 </div>
        <h4 class="font-medium text-base" style="word-wrap: break-word;"> {{ post.meta.excerpt }} </h4>
      </div>
    </div>
    </a>
  </div>
</template>

