<script setup lang="ts">
const props = defineProps(['url', 'avatar', 'name', 'desc', 'color', 'id'])
</script>
<template>
<li class="list-none"><a :href="url" target="_blank">
<div class="w-full flex h-16">
<img :src="avatar" alt="avatar" loading="lazy" width="64" height="64" class="float-left"/>

</div>
</a></li>
</template>
