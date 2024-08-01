<script setup lang="ts">
import { computed } from 'vue'
import { toggleDark, useTheme } from '@/composables/useTheme'

const isLight = computed(() => useTheme().store.value === 'light')
</script>

<template>
  <div role="button" class="badge" @click="toggleDark">
    <i v-if="isLight" class="fa-sun" />
    <i v-else class="fa-moon" />
  </div>
</template>
