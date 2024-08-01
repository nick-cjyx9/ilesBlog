<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import type Node from '@/type/node'

const props = defineProps(['nodes'])
function scrollToNode(node: Node) {
  const targetElement = document.getElementById(node.slug)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
const { y } = useWindowScroll()
const currentSection = ref('')
onMounted(() => {
  const handleScroll = () => {
    if (props.nodes) {
      for (const node of props.nodes) {
        const targetElement = document.getElementById(node.slug)
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 1
          const offsetBottom = offsetTop + targetElement.offsetHeight
          if (y.value >= offsetTop && y.value < offsetBottom) {
            currentSection.value = node.slug
            break
          }
        }
      }
    }
  }
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <ul class="py-4 overflow-auto h-full">
    <span class="ml-4">文章目录</span>
    <li
      v-for="node in nodes" :id="`toc-${node.slug}`" :key="node.slug"
      class="list-none text-minor-link px-6 py-1 text-sm" :style="{ marginLeft: `${(node.level - 1) * 12}px` }"
      @click.prevent="scrollToNode(node)"
    >
      <a :style="{ color: currentSection === node.slug ? '#47a2e0' : 'inherit' }" :href="`#${node.slug}`">{{ node.title
      }}</a>
    </li>
  </ul>
</template>
