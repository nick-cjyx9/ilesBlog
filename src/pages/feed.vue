<page>
  path: /feed.xml
</page>

<script setup lang="ts">
import type { FeedItem, FeedOptions } from '@islands/feed'
import { usePosts } from '@/composables/usePosts'

const { site } = usePage()
const url = site.url

const options: FeedOptions = {
  title: 'Nick\'s webspace!',
  description: '',
  id: url,
  link: url,
  language: 'zh-CN',
  image: 'https://avatars.githubusercontent.com/u/119087246',
  favicon: `${url}/favicon.ico`,
  copyright:
    'Copyright (c) 2024 Nick Chen.',
}

const posts = $(usePosts())
const items = $computed(() => posts.map(async (doc) => {
  const post = await doc.component()
  return {
    title: post.title,
    link: `${url}${post.href}`,
    date: post.date,
    description: () => post.excerpt,
    content: post,
  } as FeedItem
}))
</script>

<template>
  <RenderFeed format="rss" v-bind="{ options, items }" />
</template>
