<template layout="base">
    <div class="card rounded-xl h-full w-full flex justify-center py-10 px-4 nl:px-24">
        <div class="relative flex w-1/2 ">
            <img src="/mygo.png" alt="意义不明的logo">
        </div>
        <div class="flex w-full">
            <img src="/rana.png" alt="意义不明的猫猫" class="w-1/3">
            <div class="flex h-full w-full p-6 flex-col space-y-3">
                <span class="text-xl font-bold w-full">⭐ Ciallo~ 你来到了分叉(Mygo)路口，<br/>🎵 你可以在这儿听听歌<br/>🤩 这里有：</span>
                <ul class="list-none flex w-full h-full flex-col space-y-3">
                    <a target="_blank" href="/girls" class="h-1/3 w-full rounded-md border-2 border-slate-300 p-3"><li class="w-full h-full">
                        <span class="text-xl font-medium">🤤 Nick喜欢的二次元角色</span><br/>
                        <span class="text-lg font-thin p-6">从班固米上的收藏人物搬过来的页面~</span>
                    </li></a>
                    <a target="_blank" href="https://space.bilibili.com/418309536/favlist?fid=2902073436" class="h-1/3 w-full rounded-md border-2 border-slate-300 p-3"><li class="w-full h-full">
                        <span class="text-xl font-medium">🥵 Mygo二创</span><br/>
                        <span class="text-lg font-thin p-6">刷b站的时候收藏的部分二创~</span>
                    </li></a>
                    <a target="_blank" href="https://bgm.tv/index/54612" class="h-1/3 w-full rounded-md border-2 border-slate-300 p-3"><li class="w-full h-full">
                        <span class="text-xl font-medium">👍 私の一番好</span><br/>
                        <span class="text-lg font-thin p-6">会推荐给别人了解的作品~</span>
                    </li></a>
                </ul>
            </div>
        </div>
    </div>
    <meting-js
        server="netease"
        type="playlist"
        id="9233062244"
        fixed="true"
        autoplay="true"
    >
    </meting-js>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css");
</style>

<script client:load lang="ts">
import "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js";
import "https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js";
</script>