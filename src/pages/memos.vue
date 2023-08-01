<template layout="base">
    <div class="card justify-center p-6 lg:px-20 rounded-xl">
        <h1 class="text-center font-semibold munderline px-3 text-3xl mt-8" role="button" title="我是标题~"><del>也许是日寄</del></h1>

        <div id="memos" class="memos">
        </div>

        <div class="total w-full opacity-70 
            mb-7 ml-4">Total <span id="total">0</span> Memos 🎉
            <a :href="'https://umami.nickchen.top/share/ofBFLDZwCthMZzRP/blog?url=' + meta.href"
                :data-umami-event-id="'goto umami:' + frontmatter.title" target="_blank">
                <span class="hover:underline"> PV: {{ frontmatter.visitors }}</span>
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
const { frontmatter, meta } = usePage();
useHead({
    link: [
        { type: 'text/css', rel: 'stylesheet', href: '/styles/memos_style.css' },
        { type: 'text/css', rel: 'stylesheet', href: '/styles/APlayer.min.css' },
        { type: 'text/css', rel: 'stylesheet', href: '/styles/highlight.github.min.css' },
        { type: 'text/css', rel: 'stylesheet', href: '/styles/memos_custom.css' },
    ],
    script: [
        { src: '/assets/js/lazyload.min.js' },
        { src: '/assets/js/marked.min.js' },
        { src: '/assets/js/view-image.min.js' },
        { src: '/assets/js/moment.min.js' },
        { src: '/assets/js/moment.twitter.js' },
        { src: '/assets/js/APlayer.min.js' },
        { src: '/assets/js/Meting.min.js' },
        { src: '/assets/js/highlight.min.js' },
        { src: '/assets/js/main.js' },
        { src: '/assets/js/custom.js' },
    ]
})
</script>
