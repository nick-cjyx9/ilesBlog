<page>
title: 我的老婆们！
date: 2023-07-19
</page>
<template layout="post">
<!-- <div v-if="dataList.length==0">Loading... <br><p class="inline" v-if="errLog!==null">{{ errLog }} <a onclick="location.reload();" href="javascript:void(0)">重试</a></p></div> -->
<div class="lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 grid w-full h-full">
    <WaifuCard v-for="data in dataList" :waifu_data="data" client:visible></WaifuCard>
</div>
<hr/>
<ul>
    <li>数据来源：我的bangumi！</li>
    <li>理论上来讲，这里只收录二次元女生，但是这不妨碍我喜欢真寻?(</li>
</ul>
<hr>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
const dataList:Ref<Array<object>>=ref([]);
const errLog:Ref<String|null>=ref(null);
try{
    const r = await fetch('https://cdn.jsdelivr.net/gh/nick-cjyx9/ilesBlog/public/waifu_data.json');
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
</script>
