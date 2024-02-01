<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePageView } from '@/composables/useUmami';
const props = defineProps(['link']);
const counter = ref<number|null>(null);
onMounted(async () =>{
    counter.value = await usePageView(props.link);
});
</script>
<template>
    <i class="fa-solid fa-spinner animate-spin" v-if="counter===null"></i>
    <span v-else>{{ counter }}</span>
</template>
