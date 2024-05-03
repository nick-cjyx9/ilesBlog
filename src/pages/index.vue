<template layout="base">
  <ul class="relative justify-center w-full grid">
    <li v-for="post of posts" class="w-full px-2">
        <ArticleCard :post="post"></ArticleCard>
    </li>
  </ul>
</template>
<script setup lang="ts">
  import { usePosts } from '@/composables/usePosts';
  const posts = usePosts();
</script>
