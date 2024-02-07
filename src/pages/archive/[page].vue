<template layout="base">
    <div class="card flex justify-center w-full ml-auto mr-auto p-6 lg:p-12 rounded-lg space-y-3">
        <header class="flex w-full mb-2">
            <HeadTitle class="!w-1/2 float-left">{{ props.desc }}分类</HeadTitle>
            <div class="float-right w-1/2 text-end text-sm space-x-1 p-3 mt-auto">
                <a href="./updated" v-if="props.sort!='u'" class="munderline after:border-b-2 inline-block hint">按更新时间</a>
                <a href="./created" v-if="props.sort!='c'" class="munderline after:border-b-2 inline-block hint">按创建时间</a>
                <a href="./visitors" v-if="props.sort!='v'" class="munderline after:border-b-2 inline-block hint">按浏览量</a>
            </div>
        </header>
        <div class="w-full justify-center">
            <ul class="container w-full z-10">
                <li v-for="post in posts">
                    <ArticleCard :post="post" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { usePosts } from '@/composables/usePosts';
export default definePageComponent({
    getStaticPaths() {
        return ([{
            params: { page: 'updated' },
            props: { sort: 'u',desc:'按更新时间' },
        }, {
            params: { page: 'created' },
            props: { sort: 'c',desc:'按创建时间' },
        }, {
            params: { page: 'visitors' },
            props: { sort: 'v',desc:'按浏览量(TODO)' },
        }])
    },
}
)
</script>
  
<script setup lang="ts">
const props = defineProps<{
    sort: string,
    desc: string
}>();
let origin_posts = usePosts();
let posts:any;
if(props.sort=='c'){
  posts = ref(origin_posts.value.sort((lhs,rhs)=>{
    return rhs.date-lhs.date;
  }));
}else if(props.sort=='u'){
  posts = ref(origin_posts.value.sort((lhs,rhs)=>{
    return rhs.frontmatter.lastUpdated-lhs.frontmatter.lastUpdated;
  }));
}else{
  posts = ref(origin_posts.value.sort((lhs,rhs)=>{
    return rhs.frontmatter.visitors-lhs.frontmatter.visitors;
  }));
}
</script>
