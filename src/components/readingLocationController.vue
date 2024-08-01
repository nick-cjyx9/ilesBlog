<script lang="ts" client:load>
function getScrollPercentage() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  )
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  // 获取窗口的高度
  const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100
  return scrollPercentage
}

const dataHolder = document.getElementById('scrollHolder')
document.addEventListener('scroll', () => {
  const percenLoc = getScrollPercentage()
  dataHolder!.textContent = `${Math.round(percenLoc >= 100 ? 100 : percenLoc).toString()}%`
})
document.getElementById('topper')!.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <div class="text-sm hidden md:block mt-[1px]">
    <i id="topper" class="fa-up-circle badge" role="button" aria-label="totop" />
    <span id="scrollHolder" class="text-minor text-sm font-mono">0%</span>
  </div>
</template>
