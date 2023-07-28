// iles.config.ts
import feed from '@islands/feed';
import prism from '@islands/prism';
import headings from '@islands/headings';
import { defineConfig } from 'iles';
import excerpt from '@islands/excerpt';
import lastUpdated from './modules/lastUpdated';
import AIabstract from "./modules/AIabstract";

export default defineConfig({
  turbo: false,
  modules: [
    excerpt(),
    headings(),
    prism(),
    feed(),
    AIabstract(),
    lastUpdated(),
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
    rehypePlugins: ['rehype-external-links','rehype-katex'],
  },
  siteUrl: 'https://ikanata.eu.org',
})
