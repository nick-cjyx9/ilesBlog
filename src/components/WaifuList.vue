<!-- <script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'

const dataList: Ref<Array<{
  characterName: string
  characterId: string
  characterAvatar: string
  characterImg: {
    small: string
    medium: string
    large: string
  }
  characterSummary: string
  characterInfo: object[]
} | null>> = ref([])
const errLog: Ref<string | null> = ref(null)
onMounted(async () => {
  try {
    const r = await fetch('/cross/waifu_data.json')
    if (!r.ok) {
      errLog.value = `HTTP 请求错误：${r.status}`
      throw new Error(`HTTP 请求错误：${r.status}`)
    }
    const text_data = await r.text()
    const native_data = text_data.split('\n')
    for (let i = 0; i < native_data.length; i++) {
      try {
        dataList.value[i] = JSON.parse(native_data[i])
      }
      catch {
        dataList.value[i] = null
      }
    }
  }
  catch (err) {
    console.error(err)
  }
})
</script> -->

<template>
  <!-- <div v-if="dataList.length === 0">
    Loading... <br><p v-if="errLog !== null" class="inline">
      {{ errLog }} <a onclick="location.reload();" href="javascript:void(0)">重试</a>
    </p>
  </div>
  <div v-else class="grid-cols-2 md:grid-cols-4 grid w-full h-full">
    <WaifuCard v-for="data in dataList" :key="data?.characterId" :waifu_data="data" />
  </div> -->
  This page is under construction.
</template>
