<template>
<li class="list-none border-2" :id="id"
:style="{borderColor:color}">
<a :href="url" target="_blank" class="hover:!no-underline">
<div class="h-20 flex">
<img :src="avatar" alt="avatar" loading="lazy" width="80" height="80" class="float-left"/>
<div class="w-full px-3 py-2 text-left">
    <p class="text-black text-base dark:text-white font-semibold !mb-1">{{ name }}</p>
    <p class="text-slate-600 dark:text-slate-400 text-sm !mb-0">{{ desc }}</p>
</div>
<div></div>
</div>
</a></li>
</template>
<script setup lang="ts">
defineProps(['url', 'avatar', 'name', 'desc', 'color', 'id'])
</script>
