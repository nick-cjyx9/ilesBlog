<script lang="ts">
import { ref } from 'vue'
import { useTags } from '@/composables/useTags'

const tags = useTags()
export default definePageComponent({
  getStaticPaths() {
    return tags.map(tag => ({
      params: { tag },
      props: { tag },
    }))
  },
})
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import { usePosts } from '@/composables/usePosts'

const props = defineProps(['tag'])
const page = usePage()
page.frontmatter.title = `标签: ${props.tag} 下的文章`
const posts = usePosts().value
const posts_fltd = ref(new Array<Document>())
posts.forEach((post) => {
  post.frontmatter.tags.forEach((tag: string) => {
    if (tag === props.tag) {
      posts_fltd.value.push(post)
    }
  })
})
</script>

<template layout="base">
  <div class="holder shadow dark:text-white w-full ml-auto mr-auto p-6 lg:p-12">
    <headTitle>{{ page.frontmatter.title }}</headTitle>
    <ul class="relative mt-6 w-full space-y-3">
      <li v-for="post of posts_fltd" :key="post.title">
        <ArticleCard :post="post" class="w-full" />
      </li>
    </ul>
  </div>
</template>
