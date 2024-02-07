<script setup lang="ts">
    import { ref } from "vue";
    const props = defineProps(['waifu_data']);
    const ml = ref(props.waifu_data['characterSummary'].length > 45);
    const empty = ref(props.waifu_data['characterSummary'].length == 0);
    const link = ref('https://bgm.tv/character/'+props.waifu_data['characterId']);
</script>
<template>
    <div class="flex flex-col flex-wrap space-y-1 h-full p-4">
        <div role="button" class="avatar w-full flex justify-center mb-1 mt-2">
            <div class="lazy-image-wrapper p-1 justify-center flex">
                <img :src="waifu_data['characterAvatar']" class="shadow rounded-full lazy-image" :alt="waifu_data['characterName']" >
            </div>
        </div>
        <div class="w-full text-center text-2xl font-medium"><a :href="link" target="_blank">{{ waifu_data['characterName'] }}</a></div>
        <div class="w-full text-center leading-5 font-thin" style="font-size: 16px;"><span>{{ waifu_data['characterSummary'].slice(0,45) }}
        <span v-if="empty">没有介绍哦~</span>
        <span v-if="ml">...</span></span>
        </div>
    </div>
</template>

<style scoped>
.lazy-image-wrapper {
    width: 90%;
    height: 0;
    padding-bottom: 66.67%;
    position: relative;
}
.lazy-image {
    width: 100%;
    position: absolute;
}
</style>