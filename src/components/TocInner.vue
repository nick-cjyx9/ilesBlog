<template>
    <ul class="table-of-contents card py-5 pl-5 rounded-lg h-fit
 max-h-[450px] text-[14px] overflow-auto space-y-1">
        <span class="w-full mr-72"></span>
        <span @click="close" role="button" class="top-5 right-2 absolute hint float-right mr-2 mt-0.5">关闭目录</span>
        <li class="w-full">
            <HeadTitle class="!text-base !ml-1.5 w-fit">目录</HeadTitle>
        </li>
        <li v-for="node in nodes" :key="node.slug" class="w-full" :id="'toc-' + node.slug"
            :style="{ marginLeft: (node.level - 1.5) * 17 + 'px' }">
            <a :style="{ color: currentSection === node.slug ? '#1f6dda' : 'inherit' }" :href="'#' + node.slug"
                @click.prevent="scrollToNode(node)">{{ node.title }}</a>
        </li>
    </ul>
</template>
  
<script setup lang="ts">
import Node from '@/type/node';
import { ref, onMounted } from 'vue';
const props = defineProps(['nodes']);
function scrollToNode(node: Node) {
    const targetElement = document.getElementById(node.slug);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}
const emit = defineEmits<{(e: 'close'): void}>();
function close() {emit('close');}
const currentSection = ref<string|null>(null);
onMounted(()=>{
  const handleScroll = ()=>{
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if(props.nodes){
      for(const node of props.nodes){
        const targetElement = document.getElementById(node.slug);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          const offsetBottom = offsetTop + targetElement.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection.value = node.slug;
            break;
          }
        }
      }
    }
  }
  window.addEventListener('scroll', handleScroll);
});
</script> 
