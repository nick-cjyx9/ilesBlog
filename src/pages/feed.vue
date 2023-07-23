<page>
    path: /feed.rss
    </page>
    
    <script setup lang="ts">
    import type { FeedOptions, FeedItem } from '@islands/feed'
    import { usePosts } from '@/composables/usePosts';
    
    const { site } = usePage()
    const url = site.url
    
    const options: FeedOptions = {
      title: "Rina Blog-Nick's webspace!",
      description: '',
      id: url,
      link: url,
      language: 'zh',
      image: 'https://avatars.githubusercontent.com/u/119087246',
      favicon: `${url}/favicon.ico`,
      copyright:
        'Copyright (c) 2023 Nick Chen.',
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
      <RenderFeed format="rss" v-bind="{ options, items }"/>
    </template>
