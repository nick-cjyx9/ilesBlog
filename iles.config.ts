import feed from '@islands/feed';
import prism from '@islands/prism';
import headings from '@islands/headings';
import { defineConfig } from 'iles';
import excerpt from '@islands/excerpt';
import generateData from './modules/fuseProvider';
import lastUpdated from './modules/lastUpdated';
import images, { hdPreset } from '@islands/images'

export default defineConfig({
  turbo: false,
  modules: [
    headings(),
    prism({
      showLineNumbers:true
    }),
    feed(),
    excerpt(),
    lastUpdated(),
    images({
      post: hdPreset({
        class: 'img post',
        loading: 'lazy',
        widths: [400, 800],
        formats: {
          avif: { quality: 40 },
          original: {},
        },
      }),
      cover: hdPreset({
        class: 'div cover',
        loading: 'lazy',
        widths: [1048],
        formats: {
          avif: { quality: 50 },
          original: {},
        },
      }),

    })
  ],
  async extendFrontmatter(frontmatter, filename) {
    if (filename.includes('/post/')) {
      frontmatter.layout ||= 'post';
    } else if (filename.includes('/hidden/')) {
      frontmatter.layout ||= 'post';
    }
  },
  markdown: {
    withImageSrc(src, file) {
      // Example: If no preset was manually specified, use the `narrow` preset.
      if (!src.includes('?'))
        return `${src}?preset=post`
    },
    remarkPlugins: ['remark-gfm', 'remark-math'],
    rehypePlugins: ['rehype-external-links', 'rehype-katex'],
  },
  siteUrl: 'https://www.nickchen.top/',
  ssg:{
    onSiteRendered: generateData
  }
})
