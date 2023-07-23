<script client:load lang="ts">
if (import.meta.env.PROD)
  console.log('Powered by îles 🏝', 'https://iles-docs.netlify.app')
</script>

<template>
  <NavigationBar client:load />
  <main class="flex justify-center px-4 lg:px-60 py-8 flex-wrap">
    <slot />
  </main>
  <TheFooter />
</template>

<style lang="scss">
@import '~/styles/base.css';
</style>
