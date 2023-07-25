<template layout="base">
  <div class="w-full">
    <select v-model="option" @change="apply()" class="z-50 !max-w-4xl card mx-0.5 mb-6 p-3">
      <option value="c">Sort by Created Time</option>
      <option value="u">Sort by Updated Time</option>
      <option value="v">Sort by Visitors Counter</option>
    </select>
    <ul class="container w-full z-10">
      <li v-for="post in posts">
        <ArticleCard :post="post" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { usePosts } from '@/composables/usePosts';

let filter = useRoute().query['filter']
if(!filter){ filter = 'c'; }

function apply(){
   window.location.replace("http://"+window.location.host+"/archive?filter="+option.value);
  // see:https://stackoverflow.com/questions/64797802/what-is-this-scheme-dont-have-a-registered-handler-error
}

const option = ref(filter);
const origin_posts = usePosts();
let posts:any;
if(option.value=='c'){
  posts = ref(origin_posts.value.sort((lhs,rhs)=>{
    return rhs.date-lhs.date;
  }));
}else if(option.value=='u'){
  posts = ref(origin_posts.value.sort((lhs,rhs)=>{
    return rhs.meta.lastUpdated-lhs.meta.lastUpdated;
  }));
}else{
  posts = ref(origin_posts.value.sort((lhs,rhs)=>{
    return lhs.date-rhs.date;
  }));
}
</script>
