<template layout="base">
  <div class="card justify-center py-16 lg:px-20 sm:px-10 rounded-xl">
    <div class="flex justify-center flex-wrap">
      <h1 class="text-4xl font-extrabold">{{ frontmatter.title }}</h1>
      <ul class="time-info flex space-x-3 w-full mb-6 mt-8 font-medium text-gray-600 flex-wrap px-3 justify-center"
        style="font-size: 16px;">
        <li v-if="$meta.lastUpdated"><i class="fa-solid fa-clock-rotate-left"></i>
          <span class="ml-1.5">{{ formatDate(meta.lastUpdated) }}</span>
        </li>
        <li><i class="fa-solid fa-clock"></i>
          <span class="ml-1.5">{{ formatDate(frontmatter.date) }}</span>
        </li>
        <li v-for="tag in frontmatter.tags"><i class="fa-solid fa-tag"></i>
          <a class="hover:underline" :href="'../tag/'+tag" target="_blank"><span class="ml-1.5">{{ tag }}</span></a>
        </li>
      </ul>
    </div>
    <article class="px-6 w-full markdown-body">
      <slot />
    </article>
  </div>

  <div class="card mt-12 py-9 px-6 rounded-xl">
    <Giscus id="comments" repo="nick-cjyx9/nick-cjyx9.github.io" repo-id="R_kgDOIu_Wyg" category="General"
      category-id="DIC_kwDOIu_Wys4CXaix" mapping="pathname" term="Welcome to my blog!" reactions-enabled="1"
      emit-metadata="0" input-position="top" theme="light" lang="zh-CN" loading="lazy" client:only class="w-full"/>
  </div>
</template>

<script setup lang="ts">
import Giscus from '@giscus/vue';
import 'github-markdown-css';
const page = usePage();
const { frontmatter, meta } = page;
frontmatter.description ||= meta.excerpt;
function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}
</script>
