<script setup lang="ts">
defineProps(['tag'])
</script>

<template>
  <div class="tag flex-nowrap inline-block munderline after:border-b-2 hint">
    <a :href="`../tag/${tag[0]}`" class="inline-block">
      <i class="fa fa-tag text-base mr-1" /><span class="text-lg">{{ tag[0] }}</span> <small>{{ tag[1] }}</small>
    </a>
  </div>
</template>
