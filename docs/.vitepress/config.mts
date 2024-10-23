import { defineConfig } from 'vitepress'

import Git from 'simple-git'

const git = Git({
  maxConcurrentProcesses: 200
})

async function getContributorsAt(path: string) {
  try {
    const list = (
      await git.raw(['log', '--pretty=format:"%an|%ae"', '--', path])
    )
      .split('\n')
      .map((i) => i.slice(1, -1).split('|') as [string, string])
    const map: Record<string, { name: string; count: number }> = {}

    list
      .filter((i) => i[1])
      .forEach((i) => {
        if (!map[i[1]]) {
          map[i[1]] = {
            name: i[0],
            count: 0
          }
        }
        map[i[1]].count++
      })

    return Object.values(map)
      .sort((a, b) => b.count - a.count)
      .map((i) => i.name)
  } catch (e) {
    console.error(e)
    return []
  }
}

export default defineConfig({
  title: "B-Zone V Wiki",
  description: "Wiki page - B-Zone V Roleplay",
  base: '/B-Zone-GTA-V-Wiki/',
  appearance: 'force-dark', 
  head: [
    ['link', { rel: 'icon', href: '/B-Zone-GTA-V-Wiki/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/assets/images/logo.png',
    nav: [
      { 
        text: 'Linkuri',
        items: [
          { text: 'UCP', link: 'https://v.b-zone.ro' },
          { text: 'RAGEMP', link: 'https://rage.mp' },
        ]
      },
    ],
    sidebar: [
      {
        text: '🕹️ RAGEMP',
        items: [
          { text: 'RAGE Multiplayer', link: '/server/rage/rage' },
          { text: 'Probleme RAGE', link: '/server/rage/probleme_rage' },
        ]
      },
      {
        text: '📖 Regulamente',
        items: [
          { text: 'Regulament (Romana)', link: '/server/rules' },
          { text: 'Cod Penal (Romana)', link: '/server/rules/penal_code' },
          { text: 'Rules (English)', link: '/server/rules/rulesen' },
          { text: 'Penal Code (English)', link: '/server/rules/penal_code_en' },
        ]
      },
      {
        text: 'ℹ️ Informatii Generale / General Info',
        items: [
          { text: 'Account & Character Creation', link: '/server/info/account' },
          { text: 'RolePlay Test', link: '/server/info/rptest' },
          { text: 'Tutorial', link: '/server/info/tutorial' },
          { text: 'Settings & Hotkeys', link: '/server/info/settings' },
          { text: 'Inventory & Backpack', link: '/server/info/inventory' },
          { text: 'Update your document', link: '/server/info/updatedoc' },
          { text: 'Garage System', link: '/server/info/garage' },
          { text: 'Animation System', link: '/server/info/animation' },
          { text: 'ATM', link: '/server/info/atm' },
          { text: 'Vehicle Recycle Center', link: '/server/info/remat' },
          { text: 'Walkie-Talkie', link: '/server/info/walkietalkie' },
          { text: 'Licenses', link: '/server/info/licenses' },
          { text: 'Paying Fines', link: '/server/info/fines' },
          { text: 'Jobs', link: '/server/info/jobs' },
          { text: 'Search in trash bins', link: '/server/info/trashsearch' },
          { text: 'Phone', link: '/server/info/phone' },
          { text: 'Books', link: '/server/info/books' },
          { text: 'Gym / Sală', link: '/server/info/gym' },
        ]
      },
      {
        text: '🛒 Magazine / Shops',
        items: [
          { text: 'Dealership', link: '/server/shops/dealership' },
          { text: '24/7', link: '/server/shops/247' },
          { text: 'Clothing Store', link: '/server/shops/clothing' },
          { text: 'White Weapon Shop', link: '/server/shops/meleeweapon' },
          { text: 'Hairstyle Shop', link: '/server/shops/hairstyle' },
          { text: 'Tattoo Shop', link: '/server/shops/tattoo' },
          { text: 'Tuning Shop', link: '/server/shops/tuning' },
          { text: 'Gas Station & Jerry can', link: '/server/shops/gasstation' },
        ]
      },
      {
        text: '🛍️ Factiuni / Factions',
        items: [
          { text: 'Los Santos Medical Department', link: '/server/factions/medics' },
          { text: 'Los Santos Police Department', link: '/server/factions/police' },
          { text: 'Los Santos Mechanics', link: '/server/factions/mechanics' },
        ]
      },
      {
        text: '✒️ Locuri de munca / Jobs',
        items: [
          { text: 'Job Applications', link: '/server/jobs/applications' },
          { text: 'Gunoier / Garbageman', link: '/server/jobs/garbageman' },
          { text: 'Miner', link: '/server/jobs/miner' },
          { text: 'McBeeDelivery', link: '/server/jobs/mcbee' },
          { text: 'Electrician', link: '/server/jobs/electrician' },
          { text: 'Trucker', link: '/server/jobs/trucker' },
          { text: 'Șofer De Autobuz / Bus Driver', link: '/server/jobs/bus_driver' },
        ]
      },
      {
        text: '🎣 Hobby',
        items: [
          { text: 'Fisherman', link: '/server/hobby/fisherman' },
          { text: 'B-Taxi', link: '/server/hobby/taxi' },
          { text: 'Tailoring', link: '/server/hobby/tailor' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://b-zone.ro/rage' },
      { icon: 'github', link: 'https://github.com/B-Zone-GTA-V' },
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
  },
  async transformPageData({ relativePath }) {
    return { contributors: await getContributorsAt(relativePath) }
  }
})
