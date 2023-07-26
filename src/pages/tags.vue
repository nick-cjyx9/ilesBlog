<template layout="base">
    <div class="w-full flex space-x-4 flex-wrap card p-6 lg:p-12 rounded-lg">
        <h1 class="w-full text-4xl font-semibold m-3 mb-4 
        before:w-full before:border-black dark:before:border-white
         before:border-x-2 before:mr-2">标签</h1>
        <div v-for="tag in tags">
            <TagCard :tag="tag" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useTagsCounter } from '@/composables/useTags';
const tags = ref(useTagsCounter())
</script>
