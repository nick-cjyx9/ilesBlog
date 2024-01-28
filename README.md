# RinaBlog

## TODO Board
- [x] umami在线人数
- [ ] TOC
- [-] prism.js copy btn
- [ ] Podcast and monument page
- [x] umami track events
- [ ] front link add to title
- [x] AI summary
- [ ] Katex

## 备忘录
新建文件 `blognew.py title filename` 

IDEA: `ainew foo` ai建议下新建.mdx部分内容+从标题翻译到路由 

更新老婆页面 `blogbgmupd.py` 

更新ai摘要 `blogsummarize.py` 

cover用本地cdn存，不然首页加载慢 


[îles]: https://github.com/ElMassimo/iles
[configuration reference]: https://iles-docs.netlify.app/config

This template should help get you started developing with [îles].

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic `PageComponent` type by default. In most cases this is fine if you don't really care about component prop types outside of templates.

However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can run `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Customize configuration

See îles [Configuration Reference].

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

