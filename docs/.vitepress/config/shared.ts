import { defineConfig } from "vitepress";
import { search as zhSearch } from "./zh";

export const shared = defineConfig({
  title: "AI包包",

  base: "/aibox/",

  rewrites: {
    "en/:rest*": ":rest*",
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  // 指定站点地图中所有链接的基础域名，并确保 url 属性的值不包含字符串 migration
  sitemap: {
    hostname: "https://muzipiao.github.io/aibox/",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/aibox/img/aibox-logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'AIBox | AIBox Home' }],
    ['meta', { property: 'og:site_name', content: 'AIBox' }],
    ['meta', { property: 'og:image', content: 'https://muzipiao.github.io/aibox/img/aibox-logo.png' }],
    ['meta', { property: 'og:url', content: 'https://github.com/muzipiao/aibox' }],
    ['script', 
      {},
      `var _hmt = _hmt || [];
       (function() {
         var hm = document.createElement("script");
         hm.src = "https://hm.baidu.com/hm.js?8fcb8b082c2084468ae3d02ed7bea12f";
         var s = document.getElementsByTagName("script")[0]; 
         s.parentNode.insertBefore(hm, s);
       })();`
    ],
  ],

  themeConfig: {
    logo: { src: "/img/aibox-logo.png", width: 24, height: 24 },

    // 分享链接
    socialLinks: [
      { icon: "github", link: "https://github.com/muzipiao/aibox" },
    ],

    // minisearch 浏览器内索引进行模糊全文搜索
    search: {
      provider: "local",
      options: {
        locales: {
          ...zhSearch,
        },
      },
    },
  },
});
