/* eslint-disable regexp/no-super-linear-backtracking */
/* eslint-disable regexp/no-misleading-capturing-group */
/* eslint-disable regexp/optimal-quantifier-concatenation */
import { readFile } from 'node:fs/promises'
import feed from '@islands/feed'
import headings from '@islands/headings'
import { defineConfig } from 'iles'
import excerpt from '@islands/excerpt'
import images, { hdPreset } from '@islands/images'
// import {
//   transformerNotationDiff,
//   transformerNotationErrorLevel,
//   transformerNotationHighlight,
// } from '@shikijs/transformers'
import rehypeShiki from '@shikijs/rehype'
import lastUpdated from './modules/lastUpdated'
import remarkBiliLink from './src/unified/remarkBili'

function removeMd(md: string) {
  // https://github.com/stiang/remove-markdown/blob/main/index.js
  const listUnicodeChar = false
  const stripListLeaders = true
  const gfm = true
  const useImgAltText = true
  const abbr = false
  const replaceLinksWithURL = false
  const htmlTagsToSkip = ['Heimu']
  let output = md || ''
  output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}/gm, '')
  try {
    if (stripListLeaders) {
      if (listUnicodeChar)
        output = output.replace(/^(\s*)([*\-+]|\d+\.)\s+/gm, `${listUnicodeChar} $1`)
      else
        output = output.replace(/^(\s*)([*\-+]|\d+\.)\s+/gm, '$1')
    }
    if (gfm) {
      output = output
        .replace(/\n={2,}/g, '\n')
        .replace(/~{3}.*\n/g, '')
        .replace(/~~/g, '')
        .replace(/`{3}.*\n/g, '')
    }
    if (abbr) {
      output = output.replace(/\*\[.*\]:.*\n/, '')
    }
    output = output
      .replace(/<[^>]*>/g, '')
    let htmlReplaceRegex = /<[^>]*>/g
    if (htmlTagsToSkip.length > 0) {
      const joinedHtmlTagsToSkip = `(?!${htmlTagsToSkip.join('|')})`
      htmlReplaceRegex = new RegExp(
        `<${
        joinedHtmlTagsToSkip
        }[^>]*>`,
        'gi',
      )
    }
    output = output
      .replace(htmlReplaceRegex, '')
      .replace(/^[=\-]{2,}\s*$/g, '')
      .replace(/\[\^.+?\](: .*$)?/g, '')
      .replace(/\s{0,2}\[.*?\]: .*$/g, '')
      .replace(/!\[(.*?)\][[(].*?[\])]/g, useImgAltText ? '$1' : '')
      .replace(/\[([^\]]*)\][[(].*?[\])]/g, replaceLinksWithURL ? '$2' : '$1')
      .replace(/^(\n)?\s{0,3}>\s?/gm, '$1')
      .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
      .replace(/^(\n)?\s*#{1,6}\s*( (.+))? +#+$|^(\n)?\s*#{1,6}\s*( (.+))?$/gm, '$1$3$4$6')
      .replace(/(\*+)(\S)(.*?\S)??\1/g, '$2$3')
      .replace(/(^|\W)(_+)(\S)(.*?\S)??\2($|\W)/g, '$1$3$4$5')
      .replace(/(`{3,})(.*?)\1/g, '$2')
      .replace(/`(.+?)`/g, '$1')
      .replace(/~(.*?)~/g, '$1')
  }
  catch (e) {
    console.error(e)
    return md
  }
  return output
}

const api_base = 'https://dynablog.nickchen.top/api/'

export default defineConfig({
  turbo: false,
  modules: [
    headings(),
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

    }),
  ],
  markdown: {
    withImageSrc(src) {
      // Example: If no preset was manually specified, use the `narrow` preset.
      if (!src.includes('?'))
        return `${src}?preset=post`
    },
    remarkPlugins: ['remark-gfm', 'remark-math', remarkBiliLink],
    rehypePlugins: ['rehype-external-links', 'rehype-katex', [rehypeShiki, {
      // transformers: [
      //   transformerNotationErrorLevel(),
      //   transformerNotationDiff(),
      //   transformerNotationHighlight(),
      // ],
      themes: {
        light: 'rose-pine-dawn',
        dark: 'material-theme-ocean',
      },
    }]],
  },
  async extendFrontmatter(frontmatter, filename) {
    if (filename.includes('/post/') || filename.includes('/hidden/')) {
      frontmatter.layout ||= 'post'
      let withSummary = false
      const resp: any = await (await fetch(`${api_base}blog/context?path=${frontmatter.title}`)).json()
      if (resp.exist) {
        frontmatter.id = resp.blog.id
        if (resp.blog.aiSummary)
          withSummary = true
      }
      else {
        const resp2: any = await (await fetch(`${api_base}blog/bind_new?post_link=${frontmatter.title}&title=${frontmatter.title}`, { method: 'POST',
        })).json()
        if (!resp2.success) {
          console.error(`failed to bind blog: ${frontmatter.title}`)
        }
        else {
          frontmatter.id = resp2.value.id
        }
      }
      if (!withSummary) {
        const raw = removeMd((await readFile(filename, { encoding: 'utf-8' }))).replace(/[\r\n]/g, '').replace(/^---(.+?)---/s, '').replace(/ +/g, '')
        const resp3: any = await (await fetch(`${api_base}blog/${frontmatter.id}/onBuild/genAISummary`, {
          method: 'POST',
          body: JSON.stringify({
            content: raw.slice(0, 5001),
          }),
        })).json()

        if (!resp3.success) {
          console.error(`failed to gen summary: ${frontmatter.title}`)
        }
      }
    }
  },
  siteUrl: 'https://www.nickchen.top/',
})
