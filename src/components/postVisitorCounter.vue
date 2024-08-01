<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { usePageView } from '@/composables/useUmami'

const props = defineProps(['link'])
const counter = ref<number | null>(null)
onMounted(async () => {
  counter.value = await usePageView(props.link)
})
</script>

<template>
  <i v-if="counter === null" class="fa-solid fa-spinner animate-spin" />
  <span v-else>{{ counter }}</span>
</template>
