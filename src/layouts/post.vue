<template layout="base">
  <div class="w-full flex space-x-2" id="base-container">
    <TableofContent :nodes="meta.headings" class="h-fit top-8 sticky z-50 flex-1" v-if="needToc" client:load/>
    <div class="card rounded-xl h-fit items-center flex-col py-16">
    <div class="flex justify-center flex-wrap">
      <h1 class="px-6 text-3xl text-important">{{ frontmatter.title }}</h1>
      
      <ul class="text-minor flex space-x-4 w-full mt-5 mb-3 flex-wrap px-8 justify-center"
        style="font-size: 14.3px;">
        <li v-if="$frontmatter.lastUpdated"><i class="fa-back-in-time"></i>
          <span class="ml-1">{{ formatDate(frontmatter.lastUpdated) }}</span>
        </li>
        <li><i class="fa-clock"></i>
          <span class="ml-1">{{ formatDate(frontmatter.date) }}</span>
        </li>
        <li><i class="fa-eye"></i>
          <a :href="'https://umami.nickchen.top/share/ofBFLDZwCthMZzRP/blog?url=' + meta.href" target="_blank">
          <span class="ml-1
            border-gray-600 after:border-b-2"><PostVisitorCounter :link="meta.href" client:idle/></span>
          </a>
        </li>
        <li v-for="tag in frontmatter.tags"><i class="fa-tag"></i>
          <a :href="'../tag/'+tag"><span class="ml-1 munderline 
            border-gray-600 after:border-b-2" :title="'跳转到标签：' + tag">{{ tag }}</span></a>
        </li>
      </ul>
      
    </div>
    <article class="!px-8 w-full markdown-body h-fit" id="articleBody">
      <slot/>
      <hr/>
    </article>
    
    <br/>
    <ArticleFooter :is-a-i-generated="frontmatter.isAIGenerated?true:false" 
    :is-licensed="frontmatter.licensed" client:idle/>
    </div>
  </div>
  <GiscusComment />
</template>

<style>
@import '@/styles/github-markdown.css';
@import '@/styles/codeblock.css';
@import url('https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css');
@import '@/styles/viewer.css';
</style>
<script client:load lang="ts">
import Viewer from 'viewerjs';
const container = document.getElementById('articleBody')
if(container!==null){new Viewer(container);}
</script>
<script setup lang="ts">
const page = usePage();
const { frontmatter, meta } = page;
const needToc = $computed(()=> frontmatter.toc==false?false:true);
frontmatter.description ||= meta.excerpt;
//-----------------------------------------------//
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