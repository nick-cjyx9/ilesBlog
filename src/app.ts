import { defineApp } from "iles";
import VueViewer from 'v-viewer'

export default defineApp({
  enhanceApp ({ app, head, router }) {
    app.use(VueViewer)
  },
  head() {
    return {
      htmlAttrs: { lang: 'zh-cn' },
      meta: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,maximum-scale=1",
        }
      ],
      script: [
        {
          async: true,
          src: 'https://umami.nickchen.top/script.js',
          'data-website-id': 'f1e56e6a-ea92-4228-b77e-e448f719a75b',
          'data-domains': "ikanata.eu.org,ilesblog.pages.dev,nickchen.top",
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          integrity: "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        },
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "Nick Chen's Blog",
          href: "/feed.xml"
        }
      ]
    };
  }
});

