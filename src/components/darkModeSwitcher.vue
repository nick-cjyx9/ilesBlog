<template>
    <li @click="theme='light';"
      role="button" class="navtab">
        <i class="fa-sun"></i>
      </li>
      <li @click="theme='dark';"
      role="button" class="navtab">
        <i class="fa-moon"></i>
      </li>
</template>
<script setup lang="ts">
import useTheme from "@/composables/useTheme";
const { store: theme } = useTheme();
</script>