<script setup lang="ts">
defineProps(['content'])
</script>

<template>
  <div class="rounded-lg mx-3 lg:mx-10 mt-6 p-5 w-full border-gray-300 border-2">
    <HeadTitle class="!text-lg">
      AI 生成的摘要
    </HeadTitle>
    <!-- <span class="w-full text-gray-600 dark:text-gray-300" style="font-size: 14.5px;">{{ obj.output }}</span> -->
    <span class="w-full text-gray-600 dark:text-gray-300" style="font-size: 14.5px;">{{ content }}</span>
  </div>
</template>
