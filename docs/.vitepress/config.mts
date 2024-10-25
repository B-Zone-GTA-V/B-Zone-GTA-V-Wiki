import { defineConfig } from 'vitepress'

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
        text: 'ℹ️ Informatii Generale',
        items: [
          { text: 'Cont și Caracter', link: '/server/info/account' },
          // { text: 'RolePlay Test', link: '/server/info/rptest' },
          { text: 'Tutorial', link: '/server/info/tutorial' },
          { text: 'Meniul de Setări', link: '/server/info/settings' },
          { text: 'Inventar', link: '/server/info/inventory' },
          { text: 'Document', link: '/server/info/updatedoc' },
          { text: 'Sistemul de Garaje', link: '/server/info/garage' },
          { text: 'Sistemul de Animații', link: '/server/info/animation' },
          { text: 'ATM', link: '/server/info/atm' },
          { text: 'Rematul Vehiculelor', link: '/server/info/remat' },
          { text: 'Stații', link: '/server/info/walkietalkie' },
          { text: 'Licențe', link: '/server/info/licenses' },
          { text: 'Amenzi', link: '/server/info/fines' },
          { text: 'Jobs', link: '/server/info/jobs' },
          { text: 'Căutatul în Gunoi', link: '/server/info/trashsearch' },
          { text: 'Telefon', link: '/server/info/phone' },
          { text: 'Sistemul de Cărți', link: '/server/info/books' },
          { text: 'Sală', link: '/server/info/gym' },
        ]
      },
      {
        text: '✒️ Locuri de munca',
        items: [
          { text: '📝 Joburi', link: '/server/jobs/applications' },
          { text: '♻️ Gunoier', link: '/server/jobs/garbageman' },
          { text: '⛏️ Miner', link: '/server/jobs/miner' },
          { text: '🛵 McBeeDelivery', link: '/server/jobs/mcbee' },
          { text: '👷‍♂️ Electrician', link: '/server/jobs/electrician' },
          { text: '🚛 Camionagiu', link: '/server/jobs/trucker' },
          { text: '🚌 Șofer De Autobuz / Autocar', link: '/server/jobs/bus_driver' },
          { text: '🚚 GoPostal', link: '/server/jobs/gopostal' },
        ]
      },
      {
        text: '🎣 Hobby',
        items: [
          { text: 'Pescar', link: '/server/hobby/fisherman' },
          { text: 'B-Taxi', link: '/server/hobby/taxi' },
          { text: 'Croitor', link: '/server/hobby/tailor' },
          { text: 'Tăietor de Lemne', link: '/server/hobby/lumberjack'},
        ]
      },
      {
        text: '🛒 Magazine / Shops',
        items: [
          { text: 'Dealership', link: '/server/shops/dealership' },
          { text: 'Magazin 24/7', link: '/server/shops/247' },
          { text: 'Magazin de Haine', link: '/server/shops/clothing' },
          { text: 'Magazin de Arme ALbe', link: '/server/shops/meleeweapon' },
          { text: 'Frizerii', link: '/server/shops/hairstyle' },
          { text: 'Salon de Tatuaje', link: '/server/shops/tattoo' },
          { text: 'Tuning Shop', link: '/server/shops/tuning' },
          { text: 'Benzinării', link: '/server/shops/gasstation' },
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
  }
})
