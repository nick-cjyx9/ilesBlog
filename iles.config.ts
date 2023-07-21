// iles.config.ts
import { defineConfig } from 'iles'
import excerpt from '@islands/excerpt';
export default defineConfig({
  modules: [
    excerpt(),
  ],
  async extendFrontmatter(frontmatter, filename) {
    if (filename.includes('/post/')) {
      frontmatter.layout ||= 'post';
    } else if (filename.includes('/hidden/')) {
      frontmatter.layout ||= 'post';
    }
  },
  siteUrl: 'https://ilesblog.pages.dev/',
})
