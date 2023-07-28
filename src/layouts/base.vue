<script client:only lang="ts">
import BackToTop from '@/components/BackToTop.vue';
import useTheme from "@/composables/useTheme";
import { toDark, toLight } from "@/composables/useTheme";
import { useActive, useAllTimeStats } from '@/composables/useUmami';
console.log('Powered by îles 🏝', 'https://iles-docs.netlify.app')
const { store: theme } = useTheme();
console.log(theme.value);
if(theme.value=='dark'){toDark();}else{toLight();}
const p = useActive();
const q = useAllTimeStats();
p.then((active)=>{
  let holder = document.querySelector("#active");
  if(holder){
    holder.innerHTML = active;
  }
  console.log(active);
});
q.then((stats)=>{
  let pv = document.querySelector("#pv");
  let uv = document.querySelector("#uv");
  if (pv&&uv) {
    pv.innerHTML = stats['pageviews']['value'];
    uv.innerHTML = stats['uniques']['value'];
  }
  console.log(stats);
  
})
</script>

<template>
  <BackToTop client:load/>
  <NavigationBar client:load />
  <main class="flex justify-center flex-wrap px-4 nl:px-52 xlg:px-72 py-8 w-full h-full">
    <slot />
  </main>
  <TheFooter/>
</template>

<style>
@import '~/styles/base.css';
</style>
