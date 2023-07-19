<template>
  <NavigationBar client:load />
  <main class="flex justify-center lg:px-60 sm:px-10 py-10 flex-wrap">
    <slot />
  </main>
  <TheFooter />
</template>

<style lang="scss">
@import '~/assets/base.css';
</style>
