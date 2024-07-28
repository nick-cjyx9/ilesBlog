<template>
    <div class="text-sm hidden md:block mt-[1px]">
        <i class="fa-up-circle badge" role="button" aria-label="totop" id="topper"></i>
        <span id="scrollHolder" class="text-minor text-sm font-mono">0%</span>
    </div>
</template>
<script lang="ts" client:load>
function getScrollPercentage() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // 获取窗口的高度
    let scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    return scrollPercentage;
}

const documentHeight = document.documentElement.offsetHeight - window.innerHeight
const dataHolder = document.getElementById('scrollHolder')
document.addEventListener('scroll', () => {
    let percenLoc = getScrollPercentage();
    dataHolder!.innerText = Math.round(percenLoc >= 100 ? 100 : percenLoc).toString() + '%'
})
document.getElementById('topper')!.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
</script>