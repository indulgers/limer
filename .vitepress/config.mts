import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Limer`s Messy World",
  base: '/limer/',
  description: "My werid diary, welcome to share and grow with me.",
  head: [['link', { rel: 'icon', href: 'favicon.ico' }],
['link', { rel: 'icon', type: 'image/png', href: 'favicon-32x32.png' }],
['link', { rel: 'icon', type: 'image/png', href: 'favicon-16x16.png' }],
['link', { rel: 'manifest', href: 'site.webmanifest' }],
['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' }],
],
  themeConfig: {
    logo:'logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🙋🏻 About Me', link: '/docs/about' },
      { text: '📓 Blogs',link:'/docs/blogs'},
      { text: '🦄 Projects', link: '/docs/projects'},
      { text: '👫 Community', link: '/docs/friends'},
    ],

    sidebar: [
      {
        text: '📚 Frontend Dev',
        collapsed: true,
        items: [
          { text: 'React', link: '/docs/react' },
          { text: 'Vue', link: '/docs/vue' },
          { text: 'JavaScript', link: '/docs/javascript' },
          { text: 'TypeScript', link: '/docs/typescript' },
          { text: 'Node.js', link: '/docs/node',
            items:[
            { text: 'Express', link: '/docs/node/express' },
            { text: 'NestJS', link: '/docs/node/nest' },
            { text: 'Koa', link: '/docs/node/koa' },
          ] },
          { text: 'Webpack', link: '/docs/webpack' },
          { text: 'Vite', link: '/blogs/vite' },
        ]
      }
    ],

    socialLinks: [

      { icon:'bilibili', link: 'https://space.bilibili.com/153428800' },
      { icon: 'github', link: 'https://github.com/indulgers' },
      // { icon: 'csdn',link:'https://blog.csdn.net/weixin_60895836?spm=1000.2115.3001.5343'},
      { icon: 'juejin',link:'https://juejin.cn/user/1629890315031623'},
    ],
    search: {
      provider: 'local',
      options:{
        detailedView: true,
      }
    }
  },
  lastUpdated: true
})
