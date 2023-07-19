<!-- {
    'id': 7, 
    'characterName': '雪平一果',
    'characterId': '100857',
    'characterInfo': '{
        "birth_mon":null,
        "gender":"female",
        "birth_day":null,
        "birth_year":null,
        "blood_type":null,
        "images":{
            "small":"https://lain.bgm.tv/r/100/pic/crt/l/c3/9d/100857_crt_vaJNj.jpg?r=1649882222",
            "grid":"https://lain.bgm.tv/r/200/pic/crt/l/c3/9d/100857_crt_vaJNj.jpg?r=1649882222",
            "large":"https://lain.bgm.tv/pic/crt/l/c3/9d/100857_crt_vaJNj.jpg?r=1649882222",
            "medium":"https://lain.bgm.tv/r/400/pic/crt/l/c3/9d/100857_crt_vaJNj.jpg?r=1649882222"
        },
        "summary":"納野家に居候をする、緑松の看板娘。\\r\\n仕事ぶりから、和の父より正式な跡継ぎとして認められているほど。\\r\\n突如、戻ってきた和のことをライバル視する。",
        "name":"雪平一果",
        "infobox":[{"key":"简体中文名","value":"雪平一果"},
            {"key":"别名","value":[{"k":"纯假名","v":"ゆきひら いつか"},{"k":"罗马字","v":"Yukihira Itsuka"}]},
            {"key":"性别","value":"女"}],
        "stat":{"comments":90,"collects":275},
        "id":100857,
        "locked":false,
        "type":1,
        "nsfw":false
    }'
} -->
<script setup lang="ts">
  import { ref } from "vue";
  const props = defineProps(['waifu_data']);
  const ml = ref(props.waifu_data['characterInfo']['summary'].length > 45);
  const link = ref('https://bgm.tv/character/'+props.waifu_data['characterId']);
</script>
<template>
    <div class="flex flex-col flex-wrap space-y-1 h-full p-4">
        <div class="avatar w-full flex justify-center mb-1 mt-2">
            <img role="button" :src="waifu_data['characterAvatar']" class="w-20 rounded-full shadow p-1 hover:shadow-md">
        </div>
        <div class="w-full text-center text-xl"><a :href="link" target="_blank">{{ waifu_data['characterName'] }}</a></div>
        <div class="w-full text-center text-sm"><span>{{ waifu_data['characterInfo']['summary'].slice(0,45) }}
        <span v-if="ml">...</span></span>
        </div>
    </div>
</template>
