# Details

Date : 2023-07-28 11:14:24

Directory e:\\dev\\RinaBlog

Total : 53 files,  6999 codes, 102 comments, 1051 blanks, all 8152 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.github/workflows/build.yml](/.github/workflows/build.yml) | YAML | 22 | 2 | 4 | 28 |
| [README.md](/README.md) | Markdown | 31 | 0 | 17 | 48 |
| [components.d.ts](/components.d.ts) | TypeScript | 26 | 3 | 3 | 32 |
| [composables.d.ts](/composables.d.ts) | TypeScript | 8 | 2 | 3 | 13 |
| [iles.config.ts](/iles.config.ts) | TypeScript | 30 | 1 | 2 | 33 |
| [misc/AIabstract/ai.py](/misc/AIabstract/ai.py) | Python | 49 | 1 | 6 | 56 |
| [misc/AIabstract/data.json](/misc/AIabstract/data.json) | JSON | 1 | 0 | 0 | 1 |
| [misc/pattren.mdx](/misc/pattren.mdx) | MDX | 12 | 0 | 2 | 14 |
| [misc/waifu/util_new.py](/misc/waifu/util_new.py) | Python | 69 | 8 | 14 | 91 |
| [misc/waifu/waifu_data.json](/misc/waifu/waifu_data.json) | JSON | 51 | 0 | 1 | 52 |
| [modules/AIabstract.ts](/modules/AIabstract.ts) | TypeScript | 23 | 1 | 1 | 25 |
| [modules/lastUpdated.ts](/modules/lastUpdated.ts) | TypeScript | 20 | 0 | 3 | 23 |
| [package.json](/package.json) | JSON | 35 | 0 | 1 | 36 |
| [pnpm-lock.yaml](/pnpm-lock.yaml) | YAML | 3,574 | 0 | 452 | 4,026 |
| [postcss.config.js](/postcss.config.js) | JavaScript | 6 | 0 | 1 | 7 |
| [src/app.ts](/src/app.ts) | TypeScript | 30 | 0 | 3 | 33 |
| [src/components/AIabstract.vue](/src/components/AIabstract.vue) | vue | 8 | 0 | 1 | 9 |
| [src/components/ArticleCard.vue](/src/components/ArticleCard.vue) | vue | 56 | 0 | 3 | 59 |
| [src/components/ArticleFooter.vue](/src/components/ArticleFooter.vue) | vue | 13 | 0 | 1 | 14 |
| [src/components/BackToTop.vue](/src/components/BackToTop.vue) | vue | 47 | 0 | 2 | 49 |
| [src/components/GirlsIntro.mdx](/src/components/GirlsIntro.mdx) | MDX | 6 | 0 | 6 | 12 |
| [src/components/GiscusComment.vue](/src/components/GiscusComment.vue) | vue | 20 | 0 | 3 | 23 |
| [src/components/GiscusCommentInner.vue](/src/components/GiscusCommentInner.vue) | vue | 10 | 0 | 2 | 12 |
| [src/components/HeadTitle.vue](/src/components/HeadTitle.vue) | vue | 5 | 0 | 1 | 6 |
| [src/components/Heimu.vue](/src/components/Heimu.vue) | vue | 5 | 0 | 1 | 6 |
| [src/components/NavigationBar.vue](/src/components/NavigationBar.vue) | vue | 45 | 0 | 2 | 47 |
| [src/components/NotFound.vue](/src/components/NotFound.vue) | vue | 23 | 0 | 3 | 26 |
| [src/components/NotGenerateByAI.vue](/src/components/NotGenerateByAI.vue) | vue | 73 | 0 | 1 | 74 |
| [src/components/TagCard.vue](/src/components/TagCard.vue) | vue | 11 | 0 | 2 | 13 |
| [src/components/TheFooter.vue](/src/components/TheFooter.vue) | vue | 5 | 0 | 1 | 6 |
| [src/components/WaifuCard.vue](/src/components/WaifuCard.vue) | vue | 19 | 0 | 1 | 20 |
| [src/composables/usePosts.ts](/src/composables/usePosts.ts) | TypeScript | 3 | 5 | 1 | 9 |
| [src/composables/useTags.ts](/src/composables/useTags.ts) | TypeScript | 30 | 0 | 2 | 32 |
| [src/composables/useTheme.ts](/src/composables/useTheme.ts) | TypeScript | 36 | 0 | 3 | 39 |
| [src/layouts/base.vue](/src/layouts/base.vue) | vue | 20 | 0 | 3 | 23 |
| [src/layouts/post.vue](/src/layouts/post.vue) | vue | 42 | 1 | 1 | 44 |
| [src/pages/404.vue](/src/pages/404.vue) | vue | 6 | 0 | 2 | 8 |
| [src/pages/about.mdx](/src/pages/about.mdx) | MDX | 39 | 0 | 8 | 47 |
| [src/pages/archive/[page].vue](/src/pages/archive/%5Bpage%5D.vue) | vue | 59 | 0 | 2 | 61 |
| [src/pages/feed.vue](/src/pages/feed.vue) | vue | 34 | 0 | 6 | 40 |
| [src/pages/girls.vue](/src/pages/girls.vue) | vue | 73 | 0 | 2 | 75 |
| [src/pages/index.vue](/src/pages/index.vue) | vue | 11 | 0 | 2 | 13 |
| [src/pages/post/Hello_World.mdx](/src/pages/post/Hello_World.mdx) | MDX | 84 | 0 | 35 | 119 |
| [src/pages/post/ai_abstract.mdx](/src/pages/post/ai_abstract.mdx) | MDX | 10 | 0 | 3 | 13 |
| [src/pages/post/trip_to_panzhihua.mdx](/src/pages/post/trip_to_panzhihua.mdx) | MDX | 51 | 1 | 26 | 78 |
| [src/pages/tag/[tag].vue](/src/pages/tag/%5Btag%5D.vue) | vue | 38 | 0 | 3 | 41 |
| [src/pages/tags.vue](/src/pages/tags.vue) | vue | 13 | 0 | 1 | 14 |
| [src/site.ts](/src/site.ts) | TypeScript | 11 | 0 | 1 | 12 |
| [src/styles/base.css](/src/styles/base.css) | CSS | 397 | 68 | 69 | 534 |
| [src/styles/github-markdown-dark.css](/src/styles/github-markdown-dark.css) | CSS | 839 | 0 | 168 | 1,007 |
| [src/styles/github-markdown-light.css](/src/styles/github-markdown-light.css) | CSS | 838 | 0 | 168 | 1,006 |
| [tailwind.config.js](/tailwind.config.js) | JavaScript | 17 | 2 | 2 | 21 |
| [tsconfig.json](/tsconfig.json) | JSON with Comments | 15 | 7 | 0 | 22 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)