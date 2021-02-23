module.exports = {
  title: '前端文档库',
  description: '多立恒前端文档仓库',
  head: [
    ['link', { rel: 'icon', href: '/hero.png' }]
  ],
  base: process.env.NODE_ENV === 'development' ? '/' :'/docs/',
  themeConfig: {
    displayAllHeaders: false,
    sidebar: 'auto',
    sidebarDepth: 2,
    logo: '/hero.png',
    nav: [
      {
        text: '项目文档',
        items: [
          { text: '一键订气', link: '/projects/weixin/' },
          { text: '美气多', link: '/projects/meiqiduo/' },
          { text: '兴华燃气', link: '/projects/xinhua/' },
          { text: '微信审批', link: '/projects/line/' },
          { text: '燃气宝', link: '/projects/rqb/' },
        ]
      },
      {
        text: '架构模板',
        items: [
          { text: 'vue-pc-template', link: '/template/vue-pc-template/' },
          { text: 'vue-h5-template', link: '/template/vue-h5-template/' },
          // { text: 'uni-app-template', link: '/template/uni-app-template/' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '前端代码规范', link: '/others/codeSpec/' }
        ]
      },
    ],
    lastUpdated: '最后更新时间', // string | boolean
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    require('./plugins/404')
  ]
}
