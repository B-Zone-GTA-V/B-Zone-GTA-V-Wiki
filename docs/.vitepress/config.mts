import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "B-Zone V Wiki",
  description: "Wiki page for B-Zone V Roleplay",
  base: '/B-Zone-GTA-V-Wiki/',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '🎮 Despre Server',
        items: [
          { text: 'RAGE Multiplayer', link: '/server/rage' },
          { text: 'Regulament Server', link: '/server/regulament' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/B-Zone-GTA-V' }
    ],
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        }
      }
    },
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('packages/')) {
          return `https://github.com/B-Zone-GTA-V/B-Zone-GTA-V-Wiki/edit/master/${filePath}`
        } else {
          return `https://github.com/B-Zone-GTA-V/B-Zone-GTA-V-Wiki/edit/master/docs/${filePath}`
        }
      }
    },
    lastUpdated: {
      text: 'Actualizat la',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    footer: {
      copyright: 'Copyright © 2024 B-Zone V'
    }
  }
})
