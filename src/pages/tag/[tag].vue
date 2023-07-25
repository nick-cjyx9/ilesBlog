<template layout="base">
<h1 class="text-4xl font-extrabold">{{ page.frontmatter.title }}</h1>
<ul class="container w-full">
    <li v-for="post of posts_fltd">
        <ArticleCard :post="post" class="w-full flex justify-center"></ArticleCard>
    </li>
  </ul>
</template>

<script>
import { useTags } from '@/composables/useTags';
const tags = useTags();
export default definePageComponent({
  getStaticPaths() {
      return tags.map((tag) => ({
        params: { tag },
        props: { tag },
    }));
  }
});
</script>

<script setup>
import { ref } from 'vue';
import { usePosts } from '@/composables/usePosts';
const props = defineProps(['tag']);
const page = usePage();
page.frontmatter.title = `标签: ${props.tag}`;
const posts = usePosts().value;
const posts_fltd = ref([]);
posts.forEach(post => {
    post.frontmatter.tags.forEach(tag => {
        if (tag==props.tag) {
            posts_fltd.value.push(post);
        }
    })
});
</script>
