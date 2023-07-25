<script setup lang="ts">
  import { usePosts } from '@/composables/usePosts';
  const posts = usePosts();
</script>

<template layout="base">
  <article v-for="post of posts" class="w-full flex justify-center">
    <ArticleCard :post="post"></ArticleCard>
  </article>
</template>
