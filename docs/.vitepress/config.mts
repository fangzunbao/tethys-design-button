import { defineConfig } from 'vitepress'
import path from 'path'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ThDesign',
  description: '组件库-按钮组件，采用Vue3+TypeScript开发，提供更多的按钮功能',
  head: [['link', { rel: 'icon', href: '/logo640x640.jpg' }]],
  lastUpdated: true,
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => {
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom',
      })
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../packages'),
      },
    },
  },
  // demoblock locales
  demoblock: {
    root: {
      'view-source': 'View source',
      'hide-source': 'Hide source',
      'edit-in-editor': 'Edit in Playground',
      'edit-on-github': 'Edit on GitHub',
      'copy-code': 'Copy code',
      'copy-success': 'Copy success',
      'copy-error': 'Copy error',
    },
    zh: {
      'view-source': '查看源代码',
      'hide-source': '隐藏源代码',
      'edit-in-editor': '在 Playground 中编辑',
      'edit-on-github': '在 Github 中编辑',
      'copy-code': '复制代码',
      'copy-success': '复制成功',
      'copy-error': '复制失败',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: '开始', link: '/' }],
    logo: '/logo640x640.jpg',
    sidebar: [
      {
        text: '基础',
        items: [{ text: '快速开始', link: '/start' }],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button 普通按钮', link: '/buttonDocx' },
          { text: 'ButtonGroup 按钮组', link: '/buttonGroupDocx' },
          { text: 'ButtonAnimate 动画按钮', link: '/buttonAnimateDocx' },
          { text: 'FloatButton 悬浮按钮', link: '/floatButtonDocx' },
        ],
      },
    ],
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最近更新时间',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/fangzunbao/tethys-design-button',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present fangzunbao',
    },
  },
})
