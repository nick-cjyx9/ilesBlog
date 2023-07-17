<template layout="base">
  <div class="flex justify-center">
    <div class="shadow w-full my-10 lg:mx-72 sm:mx-0 py-10 px-20" style="background-color: #eff3f7;">
      <div class="flex justify-center flex-wrap mt-10">
        <h1 class="text-4xl font-extrabold">{{ frontmatter.title }}</h1>
        <ul class="time-info flex space-x-3 w-full mb-12 mt-10 font-medium text-gray-600 flex-wrap px-3 justify-center" style="font-size: 16px;">
          <li><i class="fa-solid fa-clock-rotate-left"></i>
            <span class="ml-1.5">{{ formatDate(meta.lastUpdated) }}</span></li>
          <li><i class="fa-solid fa-clock"></i>
            <span class="ml-1.5">{{ formatDate(frontmatter.date) }}</span></li>
          <li v-for="tag in frontmatter.tags"><i class="fa-solid fa-tag"></i>
            <span class="ml-1.5">{{ tag }}</span></li>
        </ul>
      </div>
      <div>
        <slot />
      </div>
      <div class="mt-10">
      <Giscus
        id="comments"
        repo="nick-cjyx9/nick-cjyx9.github.io"
        repo-id="R_kgDOIu_Wyg"
        category="General"
        category-id="DIC_kwDOIu_Wys4CXaix"
        mapping="title"
        term="Welcome to my blog!"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        theme="light"
        lang="zh-CN"
        loading="lazy" client:only/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Giscus from '@giscus/vue';
const page = usePage();
const { frontmatter, meta } = page;
frontmatter.description ||= meta.excerpt;
function formatDate(date:string){
  return new Date(date).toLocaleDateString(undefined,{year: 'numeric',month:'long',day:'numeric'});
}
</script>
