<script setup lang="ts">
  import { usePosts } from '@/composables/usePosts';
  const posts = usePosts();
</script>

<template layout="base">
  <ul class="container w-full">
    <li v-for="post of posts">
        <ArticleCard :post="post" class="w-full flex justify-center"></ArticleCard>
    </li>
  </ul>
</template>
