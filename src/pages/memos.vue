<template layout="base">
    寄了
    <!-- <div class="card justify-center p-6 lg:px-20 rounded-xl">
        <h1 class="text-center font-semibold munderline px-3 text-3xl mt-8" role="button" title="我是标题~"><del>也许是日寄(加载不出来请刷新)</del></h1>

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
    <GiscusComment /> -->
</template>
<!-- 
<script setup lang="ts">
useHead({
    link: [
        { type: 'text/css', rel: 'stylesheet', href: '/styles/memos_style.css' },
        { type: 'text/css', rel: 'stylesheet', href: '/styles/APlayer.min.css' },
        { type: 'text/css', rel: 'stylesheet', href: '/styles/highlight.github.min.css' },
        { type: 'text/css', rel: 'stylesheet', href: '/styles/memos_custom.css' },
    ]
});
const { frontmatter, meta } = usePage();
</script>
<script lang="ts" client:load>
let scripts = [
    { src: '/assets/js/lazyload.min.js', type:'text/javascript' },
    { src: '/assets/js/marked.min.js', type:'text/javascript' },
    { src: '/assets/js/view-image.min.js', type:'text/javascript' },
    { src: '/assets/js/moment.min.js', type:'text/javascript' },
    { src: '/assets/js/moment.twitter.js', type:'text/javascript' },
    { src: '/assets/js/APlayer.min.js', type:'text/javascript' },
    { src: '/assets/js/Meting.min.js', type:'text/javascript' },
    { src: '/assets/js/main.js', type:'text/javascript' },
    { src: '/assets/js/custom.js', type:'text/javascript' },
];
scripts.forEach(ele => {
    let script = document.createElement('script');
    script.setAttribute('src',ele['src']);
    script.setAttribute('type',ele['type']);
    document.body.appendChild(script);
});
</script> -->
