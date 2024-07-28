<template>
  <div @click="toggleDark" role="button" class="badge">
    <i class="fa-sun" v-if="isLight"></i>
    <i class="fa-moon" v-else></i>
  </div>
</template>
<script setup lang="ts">
import { toggleDark, useTheme } from "@/composables/useTheme";
import { computed } from 'vue'
const isLight = computed(()=>useTheme().store.value==='light')
</script>