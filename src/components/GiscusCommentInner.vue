<template>
    <Giscus id="comments" repo="nick-cjyx9/nick-cjyx9.github.io" repo-id="R_kgDOIu_Wyg" category="General"
          category-id="DIC_kwDOIu_Wys4CXaix" mapping="pathname" term="Welcome to my blog!" reactions-enabled="1"
          emit-metadata="0" input-position="top" :theme="theme" lang="zh-CN" loading="lazy" class="w-full"/>
</template>

<script setup lang="ts">
import Giscus from '@giscus/vue';
import useTheme from "@/composables/useTheme";
const theme = useTheme();
</script>
