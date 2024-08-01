<script setup lang="ts">
import { ref } from 'vue'
import { useTagsCounter } from '@/composables/useTags'

const tags = ref(useTagsCounter())
</script>

<template layout="base">
  <div class="w-full flex space-x-4 flex-wrap holder dark:text-white p-6 lg:p-12 shadow">
    <HeadTitle>标签</HeadTitle>
    <div v-for="tag in tags" :key="tag[0]">
      <TagCard :tag="tag" />
    </div>
  </div>
</template>
