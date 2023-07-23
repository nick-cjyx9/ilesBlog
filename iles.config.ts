// iles.config.ts
import feed from '@islands/feed';
import prism from '@islands/prism';
import { defineConfig } from 'iles';
import excerpt from '@islands/excerpt';
import lastUpdated from './modules/lastUpdated';

export default defineConfig({
  turbo: true,
  modules: [
    excerpt(),
    lastUpdated(),
    feed(),
    prism(),
  ],
  async extendFrontmatter(frontmatter, filename) {
    if (filename.includes('/post/')) {
      frontmatter.layout ||= 'post';
    } else if (filename.includes('/hidden/')) {
      frontmatter.layout ||= 'post';
    }
  },
  markdown: {
    remarkPlugins: ['remark-gfm'],
  },
  siteUrl: 'https://ilesblog.pages.dev/',
})
