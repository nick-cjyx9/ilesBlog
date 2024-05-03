<template>
    <div class="text-sm hidden md:block">
        <i class="fa-up-circle badge" role="button" aria-label="totop" id="topper"></i>
        <span id="scrollHolder" class="text-minor text-sm">0%</span>
    </div>
</template>
<script lang="ts" client:load>
const documentHeight = document.documentElement.offsetHeight - window.innerHeight
const dataHolder = document.getElementById('scrollHolder')
document.addEventListener('scroll',()=>{
    let percenLoc = window.scrollY/documentHeight*100
    dataHolder!.innerText = Math.round(percenLoc>=100?100:percenLoc).toString()+'%'
    // console.log(window.scrollY)
})
document.getElementById('topper')!.addEventListener('click', ()=>{
    window.scrollTo({top:0,behavior:'smooth'});
})
</script>