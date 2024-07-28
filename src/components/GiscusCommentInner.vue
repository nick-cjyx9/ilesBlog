<template>
    <Giscus id="comments" repo="nick-cjyx9/ilesBlog" repo-id="R_kgDOJ8YYJA" category="General"
          category-id="DIC_kwDOJ8YYJM4CYSYn" mapping="pathname" reactions-enabled="1"
          emit-metadata="0" input-position="top" :theme="theme" lang="zh-CN" loading="lazy" class="w-full"/>
</template>

<script setup lang="ts">
import Giscus from '@giscus/vue';
import { useTheme } from "@/composables/useTheme";
const theme = useTheme();
</script>
