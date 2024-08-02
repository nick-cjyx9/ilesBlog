<script setup lang="ts">
import { onMounted, ref } from 'vue'

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function isElementInViewport(el: Element) {
  const rect = el.getBoundingClientRect()
  return (rect.bottom > 0 && rect.top < window.innerHeight) || (rect.bottom >= 0 && rect.top <= 0)
}

const a = ref<HTMLDivElement>()
const b = ref<HTMLButtonElement>()

onMounted(() => {
  const aside = document.querySelector('#sidebar')
  const toc = document.querySelector('#toc')
  if (aside && toc) {
    if (b.value) {
      b.value?.addEventListener('click', () => {
        aside.classList.toggle('toc-slide-down')
      })
      window.addEventListener('scroll', () => {
        if (!isElementInViewport(toc)) {
          a.value?.classList.add('btn-slide-up')
        }
        else {
          a.value?.classList.remove('btn-slide-up')
          setTimeout(() => {
            aside.classList.remove('toc-slide-down')
          }, 1000)
        }
      })
    }
  }
})
</script>

<template>
  <div id="btnContainer" ref="a" class="fixed right-5 space-y-1 flex flex-col shadow-2xl">
    <a role="button" class="w-10 h-10 holder dark:text-white flex items-center justify-center rounded-full" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 4.207v8.237c0 .307-.224.556-.5.556s-.5-.249-.5-.556V4.207L2.904 8.303a.5.5 0 0 1-.707-.707l4.242-4.242a1.5 1.5 0 0 1 2.122 0l4.242 4.242a.5.5 0 1 1-.707.707z" /></svg>
    </a>
    <a id="expandToc" ref="b" role="button" class="shadow-2xl w-10 h-10 holder dark:text-white items-center justify-center rounded-full flex opacity-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17v-2h14v2zm0-4v-2h14v2zm0-4V7h14v2zm17 8q-.425 0-.712-.288T19 16t.288-.712T20 15t.713.288T21 16t-.288.713T20 17m0-4q-.425 0-.712-.288T19 12t.288-.712T20 11t.713.288T21 12t-.288.713T20 13m0-4q-.425 0-.712-.288T19 8t.288-.712T20 7t.713.288T21 8t-.288.713T20 9" /></svg>
    </a>
  </div>
</template>
