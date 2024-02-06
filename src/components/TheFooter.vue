<template>
  <footer class="footer text-center flex items-center flex-col 
    py-4 shadow mt-4 mb-12 bg-slate-100 dark:bg-slate-800 lg:px-96 nl:px-64 sm:px-36 px-12">
    <nav class="flex flex-wrap text-sm font-medium space-x-6 my-6 dark:text-white opacity-80">
      <a href="https://home.nickchen.top/" class="inline-block munderline after:border-b-2 ">
        <i class="fa-home"></i>
        主页</a><a href="mailto:i@nickchen.top" class="inline-block munderline after:border-b-2 ">
        <i class="fa-mail-alt"></i>
        邮箱</a>
      <a href="https://github.com/nick-cjyx9/ilesBlog" class="inline-block munderline after:border-b-2 ">
        <i class="fa-github"></i>
        Github</a>
      <a href="/feed.xml" class="inline-block munderline after:border-b-2 ">
        <i class="fa-rss-squared"></i>
        RSS</a>
    </nav>

      <ul class="text-start opacity-80 text-sm dark:text-white w-full space-y-0.5">
        <li>
          <i class="fa-signal w-5 text-center"></i> <span>有 <i class="fa-spinner animate-spin" v-if="active===null"></i><span v-else>{{ active }}</span>
          个小伙伴在线</span>
        </li>
        <li>
          <i class="fa-eye w-5 text-center"></i> <span>共 
            <i class="fa-spinner animate-spin" v-if="pv===null"></i> 
            <span v-else>{{ pv }}</span> 次总浏览量</span>
        </li>
        <li>
          <i class="fa-user w-5 text-center"></i> <span>共 
            <i class="fa-spinner animate-spin" v-if="uv===null"></i>
            <span v-else>{{ uv }}</span> 个访客到达过这里</span>
        </li>
        <li>
          <i class="fa-location w-5 text-center"></i> <span>你可以到
          <a data-umami-event="goto umami share" href="https://umami.nickchen.top/share/ofBFLDZwCthMZzRP/blog"
            target="_blank" class="underline">这里</a> 看看博客的数据。</span>
        </li>
      </ul>
      <!-- fontawesome 吃相难看，早日润 iconify -->

    <span class="font-serif dark:text-white w-full text-end opacity-50 pr-2 my-4">&copy; 2024 <a
        data-umami-event="goto my github profile" class="font-serif inline-block munderline after:border-b-2 "
        href="https://github.com/nick-cjyx9" target="_blank">Nick Chen</a></span>
  </footer>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useActive, useAllTimeStats } from '@/composables/useUmami';
const uv = ref<number | null>(null);
const pv = ref<number | null>(null);
const active = ref<number | null>(null);
onMounted(async()=>{
  const p = await useActive();
  const q = await useAllTimeStats();
  active.value = p;
  pv.value = q['pageviews']['value'];
  uv.value = q['uniques']['value'];
});
</script>