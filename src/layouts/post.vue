<script client:load lang="ts">
import Viewer from 'viewerjs'
import AiSummary from '@/components/AiSummary.vue'

let mviewer
const container = document.getElementById('articleBody')
if (container !== null)
  // eslint-disable-next-line unused-imports/no-unused-vars
  mviewer = new Viewer(container)
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import { useFetch } from '@vueuse/core'

const page = usePage()
const { frontmatter, meta } = page
frontmatter.description ||= meta.excerpt
// -----------------------------------------------//
function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}
useHead({
  meta: [{
    property: 'og:image',
    content: `https://api.nickchen.top/get_cover?title=《${frontmatter.title}》`,
  }, {
    property: 'twitter:image:src',
    content: `https://api.nickchen.top/get_cover?title=《${frontmatter.title}》`,
  }, {
    property: 'twitter:card',
    content: 'summary_large_image',
  }, {
    property: 'og:image:width',
    content: '1200',
  }, {
    property: 'og:image:height',
    content: '800',
  }],
})

const id = frontmatter.id
const api_base = `https://dynablog.nickchen.top/api/blog/${id}/context`

interface DataType {
  title: string
  id: number
  postLink: string
  likes: string
  aiSummary: string
  comments: object[]
}
const { isFetching, data } = useFetch<DataType>(api_base)
</script>

<template layout="base">
  <div class="w-full flex">
    <div class="holder shadow dark:text-white h-fit flex-col py-12 w-full">
      <div class="flex justify-center flex-wrap">
        <h1 class="px-6 text-[24pt] text-important">
          {{ frontmatter.title }}
        </h1>
        <ul
          class="text-minor flex space-x-4 w-full my-3
        text-[10.5pt] flex-wrap px-8 justify-center"
        >
          <li v-if="$frontmatter.lastUpdated">
            <i class="fa-back-in-time" />
            <span class="ml-1">{{ formatDate(frontmatter.lastUpdated) }}</span>
          </li>
          <li>
            <i class="fa-clock" />
            <span class="ml-1">{{ formatDate(frontmatter.date) }}</span>
          </li>
          <li>
            <i class="fa-eye" />
            <a :href="`https://umami.nickchen.top/share/ofBFLDZwCthMZzRP/blog?url=${meta.href}`" target="_blank">
              <span
                class="ml-1
              border-gray-600 after:border-b-2"
              ><PostVisitorCounter :link="meta.href" client:idle /></span>
            </a>
          </li>
          <li v-for="tag in frontmatter.tags" :key="tag">
            <i class="fa-tag" />
            <a :href="`../tag/${tag}`"><span
              class="ml-1 munderline
              border-gray-600 after:border-b-2" :title="`跳转到标签：${tag}`"
            >{{ tag }}</span></a>
          </li>
        </ul>
      </div>
      <AiSummary v-if="!isFetching" :content="data!.aiSummary" />
      <div id="articleBody" class="md:px-10 markdown-body h-fit">
        <slot />
        <hr>
      </div>
      <br>

      <ArticleFooter
        :is-a-i-generated="frontmatter.isAIGenerated ? true : false"
        :is-licensed="frontmatter.licensed" client:idle
      />
    </div>
    <div />
  </div>
  <GiscusComment class="shadow" />
</template>

<style>
@import '@/styles/github-markdown.css';
@import url('https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css');
@import '@/styles/viewer.css';
</style>
