<template>
    <div class="card mt-12 py-9 px-6 rounded-xl">
        <GiscusCommentInner client:only class="w-full"/>
    </div>
</template>
  
<script setup lang="ts">
const page = usePage();

useHead({
    link: [
        {
            rel: 'preconnect',
            href: 'https://giscus.app',
        },
        {
            rel: 'dns-prefetch',
            href: 'https://avatars.githubusercontent.com',
        },
    ],
});
</script>
