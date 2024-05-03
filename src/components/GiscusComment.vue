<template>
    <div class="holder mt-2 py-9 px-6">
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
