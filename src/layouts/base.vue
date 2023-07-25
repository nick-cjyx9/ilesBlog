<script client:load lang="ts">
if (import.meta.env.PROD)
  console.log('Powered by îles 🏝', 'https://iles-docs.netlify.app')
</script>

<template>
  <NavigationBar client:load />
  <main class="px-4 nl:px-52 xlg:px-72 py-8 w-full h-full">
    <slot />
  </main>
  <TheFooter />
</template>

<style lang="scss">
@import '~/styles/base.css';
</style>
