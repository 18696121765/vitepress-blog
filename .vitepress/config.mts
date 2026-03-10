import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "王家鑫",
  description: "前端开发工程师｜4 年经验｜Vue / uni-app",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    sidebar: false,
    outline: false,
    socialLinks: [],
    footer: {
      message: '专注业务交付，也持续打磨工程化与体验。',
      copyright: '© 王家鑫'
    }
  }
})
