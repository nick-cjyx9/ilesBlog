<script setup lang="ts">
  function formatDate(date:string){
    return new Date(date).toLocaleDateString(undefined,{year: 'numeric',month:'long',day:'numeric'});
  }
  const props = defineProps(['post']);
</script>
<template>
  <div class="card rounded-s-md p-8 my-4 flex flex-wrap">
    <!-- <div v-if="{{ post.frontmatter.img }}"></div> -->
    <a :href="post.href"><h1 class="w-full text-4xl font-extrabold">{{ post.title }}</h1></a>
    <ul class="time-info flex space-x-3 w-full mt-2 font-medium text-gray-600 flex-wrap">
      <li><i class="fa-solid fa-clock-rotate-left"></i>
        <span class="ml-1.5">{{ formatDate(post.meta.lastUpdated) }}</span></li>
      <li><i class="fa-solid fa-clock"></i>
        <span class="ml-1.5">{{ formatDate(post.date) }}</span></li>
      <li v-for="tag in post.frontmatter.tags"><i class="fa-solid fa-tag"></i>
        <span class="ml-1.5">{{ tag }}</span></li>
    </ul>
    <div class="content w-full mt-2">
      <component :is="post" excerpt/>
    </div>
  </div>
</template>
