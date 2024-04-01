import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "B-Zone V Wiki",
  description: "Wiki page for B-Zone V Roleplay",
  base: '/repo/',
  themeConfig: {
    logo: '/logo.svg',
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
          return `https://github.com/acme/monorepo/edit/main/${filePath}`
        } else {
          return `https://github.com/acme/monorepo/edit/main/docs/${filePath}`
        }
      }
    }
  }
})
