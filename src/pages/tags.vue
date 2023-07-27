<template layout="base">
    <div class="w-full flex space-x-4 flex-wrap card p-6 lg:p-12 rounded-lg">
        <HeadTitle>标签</HeadTitle>
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
