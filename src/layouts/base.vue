<style>
@import '~/styles/base.css';
@import '~/styles/fontello.css';
</style>
<template>
  <div class="content-holder md:grid md:px-24 lg:px-32">
    <NavigationBar class="h-fit"/>
    <main class="md:pl-2 py-3 w-full h-full">
      <slot />
    </main>
  </div>
  <div class="Canvas" style="position: fixed; right: 0px; bottom: 0px;z-index: 99999999; margin-bottom: -168px;" id="L2dCanvas"></div>
  <TheFooter client:visible />
</template>