<template layout="base">
    <div class="w-full">
        <div v-for="tag in tags">
            <TagCard :tag="tag" />
        </div>
    </div>
    </template>
<script setup>
import { ref } from 'vue';
import { useTagsCounter } from '@/composables/useTags';
const tags = ref(useTagsCounter())
</script>
