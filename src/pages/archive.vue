<template layout="base">
    <select v-model="option" @change="apply()">
        <option value="c">Sort by Created Time</option>
        <option value="u">Sort by Updated Time</option>
        <option value="v">Sort by Visitors Counter</option>
    </select>
    <ul class="container w-full">
        <li v-for="post in posts">
            <ArticleCard :post="post" />
        </li>
    </ul>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { usePosts } from '@/composables/usePosts';
function getQueryVariable(variable:string){
var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if(pair[0] == variable){return pair[1];}
  }
  return(false);
}
let filter = getQueryVariable("filter");
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
