import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Limer`s Messy World",
  base: '/limer/',
  description: "My werid diary, welcome to share and grow with me.",
  themeConfig: {
    logo:'logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🙋🏻 About Me', link: '/about' },
      { text: '📓 Blogs',link:'/notes'},
      { text: '🦄 Projects', link: '/projects'},
      { text: '👫 Community', link: '/friends'},
    ],

    sidebar: [
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'React', link: '/blogs/react' },
          { text: 'Vue', link: '/blogs/vue' },
          { text: 'JavaScript', link: '/blogs/javascript' },
          { text: 'TypeScript', link: '/blogs/typescript' },
          { text: 'Node.js', link: '/blogs/nodejs' },
          { text: 'Webpack', link: '/blogs/webpack' },
          { text: 'Vite', link: '/blogs/vite' },
        ]
      }
    ],

    socialLinks: [

      { icon:'bilibili', link: 'https://space.bilibili.com/153428800' },
      { icon: 'github', link: 'https://github.com/indulgers' },
      { icon: 'csdn',link:'https://blog.csdn.net/weixin_60895836?spm=1000.2115.3001.5343'},
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