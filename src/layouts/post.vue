<template layout="base">
  <div class="card justify-center py-16 lg:px-20 sm:px-10 rounded-xl" id="articontainer">
    <div class="flex justify-center flex-wrap">
      <h1 class="font-bold munderline px-3 text-3xl" role="button" title="我是标题~">{{ frontmatter.title }}</h1>
      <ul class="time-info flex space-x-4 w-full mt-5 mb-3
       text-gray-600 flex-wrap px-8 justify-center dark:text-gray-300"
        style="font-size: 14.3px;">
        <li v-if="$frontmatter.lastUpdated"><i class="fa-solid fa-clock-rotate-left"></i>
          <span class="ml-1.5">{{ formatDate(frontmatter.lastUpdated) }}</span>
        </li>
        <li v-else><i class="fa-solid fa-clock-rotate-left"></i>
          <span class="ml-1.5">{{ formatDate(meta.lastUpdated) }}</span>
        </li>
        <li><i class="fa-solid fa-clock"></i>
          <span class="ml-1.5">{{ formatDate(frontmatter.date) }}</span>
        </li>
        <li><i class="fa-solid fa-eye"></i>
          <a :href="'https://umami.nickchen.top/share/ofBFLDZwCthMZzRP/blog?url=' + meta.href" 
          :data-umami-event-id="'goto umami:'+frontmatter.title" target="_blank">
          <span class="ml-1.5 munderline 
            border-gray-600 after:border-b-2"><PostVisitorCounter :link="meta.href" client:idle/></span>
          </a>
        </li>
        <li v-for="tag in frontmatter.tags"><i class="fa-solid fa-tag"></i>
          <a :href="'../tag/'+tag" :data-umami-event-id="'goto tag:'+tag"><span class="ml-1.5 munderline 
            border-gray-600 after:border-b-2" :title="'跳转到标签：' + tag">{{ tag }}</span></a>
        </li>
      </ul>
    </div>
    <article class="px-8 w-full markdown-body" id="artibody">
      <slot/>
      <hr/>
    </article>
    <ArticleFooter :is-a-i-generated="frontmatter.isAIGenerated?true:false" 
    :is-licensed="frontmatter.licensed"/>
    <!-- 🤣 -->
  
  </div>
  <!-- <div>
    <TableofContent :meta="meta"/>
  </div> -->
  <GiscusComment />
</template>
<style>
@import '@/styles/github-markdown.css';
@import '@/styles/viewer.css';
@import url('https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css');
</style>
<script client:load lang="ts">
import Viewer from 'viewerjs';
const container = document.getElementById('artibody')
if(container!==null){
  const gallery = new Viewer(container);
}
</script>
<script setup lang="ts">
const page = usePage();
const { frontmatter, meta } = page;
frontmatter.description ||= meta.excerpt;
function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}
useHead({
  meta:[{
    property:'og:image',
    content:'https://api.nickchen.top/get_cover?title=《'+frontmatter.title+'》'
  },{
    property:'twitter:image:src',
    content:'https://api.nickchen.top/get_cover?title=《'+frontmatter.title+'》'
  },{
    property:'twitter:card',
    content:'summary_large_image'
  },{
    property:'og:image:width',
    content:'1200'
  },{
    property:'og:image:height',
    content:'800'
  }]
});
</script>
