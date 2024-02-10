<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints({
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})
const laptop = breakpoints.between('laptop', 'desktop')
console.log(laptop)
</script>
<template>
    hello world
</template>