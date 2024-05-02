<style>
@import '~/styles/base.css';
@import '~/styles/fontello.css';
</style>
<template>
  <div class="content-holder md:grid md:px-12 lg:px-16">
    <NavigationBar />
    <main class="pl-3 py-6 w-full h-full">
      <slot />
    </main>
  </div>
  <BackToTop client:idle />
  <TheFooter client:visible />
</template>
