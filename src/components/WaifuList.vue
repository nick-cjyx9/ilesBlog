<template>
    <div v-if="dataList.length==0">Loading... <br><p class="inline" v-if="errLog!==null">{{ errLog }} <a onclick="location.reload();" href="javascript:void(0)">重试</a></p></div>
    <div class="lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 grid w-full h-full" v-else>
        <WaifuCard v-for="data in dataList" :waifu_data="data"></WaifuCard>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
const dataList:Ref<Array<object>>=ref([]);
const errLog:Ref<String|null>=ref(null);
onMounted(async ()=>{
try{
    const r = await fetch('/waifu_data.json');
    if (!r.ok) {
        errLog.value=`HTTP 请求错误：${r.status}`;
        throw new Error(`HTTP 请求错误：${r.status}`);
    }
    const text_data = await r.text()
    let native_data = text_data.split('\n');
    for (let i = 0; i < native_data.length; i++) {
        dataList.value[i] = JSON.parse(native_data[i]);
    }
}catch(err){
    console.log(err);
}
})
</script>
