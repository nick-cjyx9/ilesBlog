<template>
    <TocInner :nodes="nodes" v-if="display" @close="display=false;"/>
    <TocSwitcher v-model:show-toc="display"/>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useBreakpoints } from '@vueuse/core';
const display = ref(true);
const mobile = ref(false);
const breakpoints = useBreakpoints({
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})
if(breakpoints.isSmallerOrEqual('laptop')){
  display.value = false;
  mobile.value = true;
}
defineProps(['nodes']);
</script> 


