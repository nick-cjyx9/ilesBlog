import { defineApp } from "iles";

export default defineApp({
  head() {
    return {
      htmlAttrs: { lang: 'zh-cn' },
      meta: [
        {
          name: "viewport",
          content: "width=device-width",
        }
      ],
      script: [
        {
          async: true,
          src: 'https://umami.nickchen.top/script.js',
          'data-website-id': 'f1e56e6a-ea92-4228-b77e-e448f719a75b',
          'data-domains': "ikanata.eu.org,ilesblog.pages.dev,nickchen.top",
        },{
          children: `(() => {
            let dark;
            try {
              const theme = localStorage && localStorage.getItem('vueuse-color-scheme');
              if (theme === 'dark') dark = true;
              else if (theme === 'light') dark = false;
              else dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            } catch (e) {
              dark = false;
            }
            document.documentElement.classList.add(dark ? 'dark' : 'light');
          })()`.replace(/\s+/g, ' '),
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC&family=Source+Code+Pro&display=swap",
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

