<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'

const posts = usePosts()
</script>

<template layout="base">
  <ul class="relative justify-center w-full grid">
    <li v-for="post of posts" :key="post.title" class="w-full px-2">
      <ArticleCard :post="post" />
    </li>
  </ul>
</template>
