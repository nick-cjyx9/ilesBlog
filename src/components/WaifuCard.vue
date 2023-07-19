<script setup lang="ts">
    import { ref } from "vue";
    const props = defineProps(['waifu_data']);
    const ml = ref(props.waifu_data['characterInfo']['summary'].length > 45);
    const link = ref('https://bgm.tv/character/'+props.waifu_data['characterId']);
</script>
<template>
    <div class="flex flex-col flex-wrap space-y-1 h-full p-4">
        <div role="button" class="avatar w-full flex justify-center mb-1 mt-2">
            <img :src="waifu_data['characterAvatar']" class="w-20 rounded-full shadow p-1 hover:shadow-md">
        </div>
        <div class="w-full text-center text-xl"><a :href="link" target="_blank">{{ waifu_data['characterName'] }}</a></div>
        <div class="w-full text-center text-sm"><span>{{ waifu_data['characterInfo']['summary'].slice(0,45) }}
        <span v-if="ml">...</span></span>
        </div>
    </div>
</template>
