<script setup lang="ts">
import { type Ref, onMounted, ref } from 'vue'
import { type ContextDataType, getBlogContext } from '@/composables/useDynablog'

const props = defineProps({
  id: Number,
})

const data: Ref<ContextDataType | null> = ref(null)

onMounted(async () => {
  if (props.id)
    data.value = await getBlogContext(props.id)
})
</script>

<template>
  <div class="rounded-lg mx-auto max-w-[90%] mt-6 p-5 w-full border-gray-300 border-2">
    <HeadTitle class="!text-lg">
      AI 生成的摘要
    </HeadTitle><br>
    <span class="w-full text-gray-600 dark:text-gray-300" style="font-size: 14.5px;">{{ data?.aiSummary }}</span>
  </div>
</template>
