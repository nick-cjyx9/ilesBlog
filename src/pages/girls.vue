<script setup lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    const dataList:Ref<Array<object>> = ref([]);
    fetch('/waifu_data.json')
    .then((response)=>response.text())
    .then((text)=>{
        var data = text.toString();
        var tmpList = data.split('\n');
        for (let i = 0; i < tmpList.length-1; i++) {
            dataList.value[i] = JSON.parse(tmpList[i]);
        }
        console.log(dataList.value)
    });
</script>
<template layout="base">
    <div class="container bg-slate-100 flex justify-center">
        <div class="lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid shadow p-8 w-full h-full">
            <WaifuCard v-for="data in dataList" :waifu_data="data"></WaifuCard>
        </div>
    </div>
</template>
