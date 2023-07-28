<template layout="base">
  <div class="card justify-center py-16 lg:px-20 sm:px-10 rounded-xl">
    <div class="flex justify-center flex-wrap">
      <h1 class="font-bold munderline px-3 text-3xl lg:text-4xl " role="button" title="我是标题~">{{ frontmatter.title }}</h1>
      <ul class="time-info flex space-x-4 w-full mt-5 mb-3
       text-gray-600 flex-wrap px-8 justify-center dark:text-gray-300"
        style="font-size: 14.3px;">
        <li v-if="$meta.lastUpdated"><i class="fa-solid fa-clock-rotate-left"></i>
          <span class="ml-1.5">{{ formatDate(meta.lastUpdated) }}</span>
        </li>
        <li><i class="fa-solid fa-clock"></i>
          <span class="ml-1.5">{{ formatDate(frontmatter.date) }}</span>
        </li>
        <li v-for="tag in frontmatter.tags"><i class="fa-solid fa-tag"></i>
          <a :href="'../tag/'+tag" target="_blank"><span class="ml-1.5 munderline 
            border-gray-600 after:border-b-2" :title="'跳转到标签：' + tag">{{ tag }}</span></a>
        </li>
      </ul>
    </div>
    <AIabstract v-if="frontmatter.summary" :content="frontmatter.summary" />
    <article class="px-8 w-full markdown-body" id="artibody">
      <slot/>
      <hr/>
    </article>
    <ArticleFooter :is-a-i-generated="frontmatter.isAIGenerated?true:false" 
    :is-licensed="frontmatter.noLicense?false:true"/>
  </div>
  <GiscusComment />
</template>
<style>
@import '@/styles/github-markdown-light.css';
@import '@/styles/github-markdown-dark.css';
</style>
<script setup lang="ts">
const page = usePage();
const { frontmatter, meta } = page;
frontmatter.description ||= meta.excerpt;
function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}
</script>
