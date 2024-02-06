<style>
@import '~/styles/base.css';
@import '~/styles/fontello.css';
</style>
<template>
  <BackToTop client:idle/>
  <NavigationBar client:load />
  <main class="flex justify-center flex-wrap px-4 lg:px-32 xlg:px-52 py-8 w-full h-full">
    <slot />
  </main>
  <TheFooter client:idle/>
</template>
