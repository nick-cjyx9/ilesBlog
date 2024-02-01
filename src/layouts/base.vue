<template>
  <BackToTop client:load/>
  <NavigationBar client:load />
  <main class="flex justify-center flex-wrap px-4 lg:px-32 xlg:px-52 py-8 w-full h-full">
    <slot />
  </main>
  <TheFooter client:idle/>
</template>

<style>
@import '~/styles/base.css';
</style>
