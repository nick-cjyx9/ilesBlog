<template>
  <div @click="theme = 'light';" role="button" aria-label="light mode" class="badge text-minor-link w-[32px] h-[32px] text-center">
    <i class="fa-sun"></i>
  </div>
  <div @click="theme = 'dark';" role="button" aria-label="dark mode" class="badge text-minor-link w-[32px] h-[32px] text-center">
    <i class="fa-moon"></i>
  </div>
</template>
<script setup lang="ts">
import useTheme from "@/composables/useTheme";
const { store: theme } = useTheme();
</script>