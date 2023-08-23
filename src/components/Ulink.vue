<script setup lang="ts">
import { onMounted } from 'vue'
const props = defineProps(['url', 'avatar', 'name', 'desc', 'color', 'id'])
onMounted(()=>{
    const holder = document.querySelector("#holder-"+props.id)
    const holderText = document.querySelectorAll("#holder-"+props.id+'>p')
    let color:string
    if(!props.color)
        color = "#d9db83"
    else
        color = props.color
    holder?.setAttribute('style','')
    holderText?.forEach(element => {
        element.setAttribute('style','color:'+color)
    });
})
</script>
<template>
<a :href="url" class="!no-underline">
<div class="flex w-1/3 flex-wrap flex-row items-center justify-center text-center px-3" :id="'holder-'+id">
    <img :src="avatar" alt="avatar" class="w-3/4 my-4 rounded-full">
    <p class="text-xl">{{ name }}</p>
    <p>“{{ desc }}”</p>
</div>
</a>
</template>
