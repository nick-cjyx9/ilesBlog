// iles.config.ts
import feed from '@islands/feed';
import prism from '@islands/prism';
import headings from '@islands/headings';
import { defineConfig } from 'iles';
import excerpt from '@islands/excerpt';
import lastUpdated from './modules/lastUpdated';
// import AIabstract from "./modules/AIabstract";
import axios from "axios";
const wid = 'f1e56e6a-ea92-4228-b77e-e448f719a75b';
const api_base = 'https://umami.nickchen.top/api/';
const start_time = 1688745600000;
// website start timestamp unit:ms
// 网站开始统计时间戳，单位毫秒，直接用要修改
const end_time = new Date().getTime();
const headers = {
  'Authorization': 'Bearer 1BtienyC0Jt/UOuG6Npas/nr2ZAuLPOB1kVAsnpNlNxR8VR6Ghkm9QZ9HZ93DS/hDyKR/ftZhFYmFfqWHSRMWNZyyz71z9762VcdMcEjp7pi0HEVm1CJw0kAJ+ogac0b4Kvm3rIb5nMHh59Rck95Pcp+huK5lK19a3NYceyBv4aUexKlGMx0NNKJbVIBRhGGyfMlrszBgKsj28slyjh2bH+pdCUb5gu1o+0y15SJMNjP8YPK+UOK29exQ6eABhEuzTVlHf+G+Wt8ItwXai01rH6MYn8kMSdip3sFiatuBUPJ5ASKj04PS/LS1PfP6s1ZNTjlV9HcHxHVlV2Pbko+Gcf1EfATLbnaIw==',
  'Access-Control-Allow-Origin': '*',
  'Accept': 'application/json'
};
// This token is only used for api requesting.And it's view only!
const instance = axios.create({
  baseURL: api_base,
  timeout: 20000,
  headers: headers
});
async function usePageView(params: object) {
  try {
    console.log(params);
    const response = await instance.get('websites/' + wid + '/pageviews', {
      params: params
    });
    let array = response.data['pageviews'];
    // delete params;
    return array;
  } catch (error) {
    console.error(error);
    return ['-1'];
  }
}

export default defineConfig({
  turbo: false,
  modules: [
    headings(),
    prism(),
    feed(),
    // AIabstract(),
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
    if (filename.includes('/pages/')) {
      var params = {
        'startAt': start_time,
        'endAt': end_time,
        'url': filename.substring(filename.lastIndexOf('\/pages/') + 6, filename.lastIndexOf('.')).toLowerCase(),
        'unit': 'day',
        'timezone': 'Asia/Shanghai',
      };
      const visitors = await usePageView(params);
      if (!visitors.includes('-1')) {
        let count = 0;
        for (let i = 0; i < visitors.length; i++) {
          const element = visitors[i];
          count += element['y'];
        }
        console.log(params['url'], ':', count);
        frontmatter.visitors = count;
      };
    }
  },
  markdown: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['rehype-external-links', 'rehype-katex'],
  },
  siteUrl: 'https://www.nickchen.top/',
})
