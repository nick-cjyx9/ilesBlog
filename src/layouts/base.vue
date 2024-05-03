<style>
@import '~/styles/base.css';
@import '~/styles/fontello.css';
</style>
<template>
  <div class="content-holder md:grid md:px-24 lg:px-32">
    <div class="left-side mb-5">
      <NavigationBar />
    </div>
    <main class="md:pl-3 py-6 w-full h-full">
      <slot />
    </main>
  </div>
  <TheFooter client:visible />
</template>
