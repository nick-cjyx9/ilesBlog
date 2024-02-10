<template>
<div class="fixed z-50 bottom-24 right-9 !w-12 h-12 shadow-md rounded-full card flex items-center" @click="display" role="button" v-show="!show">
    <i class="text-center font-thin w-full fa-menu"></i>
</div>
</template>
<script setup lang="ts">
import { useVModel } from '@vueuse/core';
const props = defineProps<{
  showToc: boolean;
}>();
const emit = defineEmits<{
  (e: 'update:showToc', value: boolean): void;
}>();
const show = useVModel(props, 'showToc', emit);
function display(){
    show.value = true;
    console.log(show.value);
}
</script>