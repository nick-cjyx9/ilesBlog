<template>
  <NavigationBar client:load />
  <main>
    <slot />
  </main>
  <TheFooter />
</template>

<style lang="scss">
@import '~/assets/base.css';
</style>
