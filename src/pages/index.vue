<script setup lang="ts">
  import { usePosts } from '@/composables/usePosts';
  const posts = usePosts();
</script>

<template layout="base">
  <ul class="relative ml-auto mr-auto w-full">
    <li v-for="post of posts">
        <ArticleCard :post="post" class="w-full"></ArticleCard>
    </li>
  </ul>
</template>
