import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "B-Zone V Wiki",
  description: "Wiki page for B-Zone V Roleplay",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Despre Server',
        items: [
          { text: 'Regulament', link: '/regulament' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/B-Zone-GTA-V' }
    ]
  }
})
