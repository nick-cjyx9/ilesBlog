<script client:load lang="ts">
import BackToTop from '@/components/BackToTop.vue';
import useTheme from "@/composables/useTheme";
import { toDark, toLight } from "@/composables/useTheme";
if (import.meta.env.PROD)
  console.log('Powered by îles 🏝', 'https://iles-docs.netlify.app')
const { store: theme } = useTheme();
if(theme.value=='dark'){toDark();}else{toLight();}
</script>

<template>
  <BackToTop />
  <NavigationBar client:load />
  <main class="flex justify-center flex-wrap px-4 nl:px-52 xlg:px-72 py-8 w-full h-full">
    <slot />
  </main>
  <TheFooter />
</template>

<style>
@import '~/styles/base.css';
</style>
