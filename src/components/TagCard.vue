<script setup lang="ts">
const props = defineProps(['tag']);
</script>

<template>
<div class="tag text-black flex">
    <a :href="'../tag/'+tag[0]">
        <i class="fa fa-tag"></i><span>{{ tag[0] }}</span><small>{{ tag[1] }}</small>
    </a>
</div>
</template>
