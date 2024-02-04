import feed from '@islands/feed';
import prism from '@islands/prism';
import headings from '@islands/headings';
import { defineConfig } from 'iles';
import excerpt from '@islands/excerpt';
import lastUpdated from './modules/lastUpdated';

export default defineConfig({
  turbo: false,
  modules: [
    headings(),
    prism(),
    feed(),
    excerpt(),
    lastUpdated(),
    // the order matters
  ],
  async extendFrontmatter(frontmatter, filename) {
    if (filename.includes('/post/')) {
      frontmatter.layout ||= 'post';
    } else if (filename.includes('/hidden/')) {
      frontmatter.layout ||= 'post';
    }
  },
  markdown: {
    remarkPlugins: ['remark-gfm','remark-math'],
    rehypePlugins: ['rehype-external-links', 'rehype-katex'],
  },
  siteUrl: 'https://www.nickchen.top/',
})
