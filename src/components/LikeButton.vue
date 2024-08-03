<script setup lang="ts">
import { type Ref, onMounted, ref } from 'vue'
import { type ContextDataType, getBlogContext } from '@/composables/useDynablog'
import { like } from '@/composables/useDynablog'

const props = defineProps({
  id: Number,
})

const data: Ref<ContextDataType | null> = ref(null)
const likes = ref(0)
const liked = ref(-1)

async function handleLike() {
  const result = await like(props.id as number)
  if (result.success && liked.value !== 1) {
    liked.value = 1
    likes.value++
  }
  else {
    // eslint-disable-next-line no-alert
    alert('You have already liked this post')
  }
}

onMounted(async () => {
  if (props.id)
    data.value = await getBlogContext(props.id)
  if (data.value) {
    const likesCount = data.value.likes.split(',').filter(x => x !== '').length
    likes.value = likesCount > 0 ? likesCount : 0
  }
})
</script>

<template>
  <!-- https://codepen.io/aaroniker/pen/NWqRRLq -->
  <div role="button" class="float-right mr-10 hover flex rounded-sm w-[80px] h-[35px] border-[1px] dark:border-white border-zinc-600 items-center px-1 hover:bg-red-200" @click="handleLike">
    <div class="w-3/4 text-center">
      Like
    </div>
    <div class="w-1/4">
      {{ likes }}
    </div>
  </div>
</template>
