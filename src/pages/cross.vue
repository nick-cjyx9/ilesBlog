<template layout="base">
    <div class="card rounded-xl h-full w-full flex justify-center py-10 px-4 nl:px-24">
        <div class="relative flex w-3/4 sm:w-1/2">
            <img src="/mygo.png" alt="意义不明的logo">
        </div>
        <div class="flex w-full">
            <img src="/rana.png" alt="意义不明的猫猫" class="hidden sm:visible sm:w-1/3">
            <div class="flex h-full w-full p-6 flex-col space-y-3">
                <span class="sm:text-xl font-bold w-full">⭐ Ciallo~ 你来到了分叉(Mygo)路口，<br/>🎵 你可以在这儿听听歌<br/>🤩 这里有：</span>
                <ul class="list-none flex w-full h-full flex-col space-y-3">
                    <a target="_blank" href="/girls" class="h-1/3 w-full rounded-md border-2 border-slate-300 p-3"><li class="w-full h-full">
                        <span class="sm:text-xl font-medium">🤤 Nick喜欢的二次元角色</span><br/>
                        <span class="sm:text-lg font-thin p-6">从班固米上的收藏人物搬过来的页面~</span>
                    </li></a>
                    <a target="_blank" href="https://space.bilibili.com/418309536/favlist?fid=2902073436" class="h-1/3 w-full rounded-md border-2 border-slate-300 p-3"><li class="w-full h-full">
                        <span class="sm:text-xl font-medium">🥵 Mygo二创</span><br/>
                        <span class="text-sm sm:text-lg font-thin p-6">刷b站的时候收藏的部分二创~</span>
                    </li></a>
                    <a target="_blank" href="https://bgm.tv/index/54612" class="h-1/3 w-full rounded-md border-2 border-slate-300 p-3"><li class="w-full h-full">
                        <span class="sm:text-xl font-medium">👍 私の一番好</span><br/>
                        <span class="text-sm sm:text-lg font-thin p-6">会推荐给别人了解的作品~</span>
                    </li></a>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css");
</style>
<script lang="ts" client:load>
let scripts = [
    { src: 'https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js', type:'text/javascript' },
    { src: 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js', type:'text/javascript' }
];
scripts.forEach(ele => {
    let script = document.createElement('script');
    script.setAttribute('src',ele['src']);
    script.setAttribute('type',ele['type']);
    document.body.appendChild(script);
});
window.setTimeout(() => {
    let player = document.createElement('meting-js');
    player.setAttribute("server","netease");
    player.setAttribute("type","playlist");
    player.setAttribute("id","9233062244");
    player.setAttribute("fixed","true");
    player.setAttribute("autoplay","true");
    document.querySelector("#app")?.appendChild(player);
}, 500);
</script>