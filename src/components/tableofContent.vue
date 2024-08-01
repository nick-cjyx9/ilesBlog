<script setup lang="ts">
defineProps(['nodes'])
</script>

<template>
  <div class="w-full holder mt-2 dark:text-white shadow">
    <TocInner :nodes="nodes" />
  </div>
</template>
