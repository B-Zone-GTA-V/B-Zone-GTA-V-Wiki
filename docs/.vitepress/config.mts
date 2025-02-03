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
          { text: 'Discord', link: 'https://b-zone.ro/rage' },
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
        text: 'ℹ️ General',
        items: [
          { 
            text: 'Caracter',
            collapsed: false,
            items: [
              { text: 'Cont și Caracter', link: '/server/info/account' },
              { text: 'Documente', link: '/server/info/documents' },
              { text: 'Inventar', link: '/server/info/inventory' },
              { text: 'Setări și Taste rapide', link: '/server/info/settings' },            
            // { text: 'Tutorial', link: '/server/info/tutorial' },
            // { text: 'RolePlay Test', link: '/server/info/rptest' },
            // { text: 'Referral', link: '/server/info/referral' },
            ]
          },
          {
            text: 'Activități',
            collapsed: true,
            items: [
              { text: 'Căutarea în tomberoane', link: '/server/info/trashsearch' },
              { text: 'Cărți', link: '/server/info/books' },
              { text: 'Sală', link: '/server/info/gym' },
              { text: 'Plătirea amenzilor', link: '/server/info/fines' },
            ]
          },
          {
            text: 'Sisteme',
            collapsed: true,
            items: [
              { text: 'Meniu ESC', link: '/server/info/esc-menu' },
              { text: 'Garaje', link: '/server/info/garage' },
              { text: 'Animații', link: '/server/info/animation' },
              { text: 'BNN', link: '/server/info/bnn' },
              { text: 'ATM', link: '/server/info/atm' },
              { text: 'Remat de Vehicule', link: '/server/info/remat' },
              { text: 'Walkie-Talkie', link: '/server/info/walkietalkie' },
              { text: 'Licențe', link: '/server/info/licenses' },
              { text: 'Telefon', link: '/server/info/phone' },
            ]
          },
          {
            text: 'Magazine',
            collapsed: true,
            items: [
              { text: 'Dealer Auto', link: '/server/shops/dealership' },
              { text: '24/7', link: '/server/shops/247' },
              { text: 'Tuning', link: '/server/shops/tuning' },
              { text: 'Frizerii', link: '/server/shops/hairstyle' },
              { text: 'Benzinării', link: '/server/shops/gasstation' },
              { text: 'Magazin de Haine', link: '/server/shops/clothing' },
              { text: 'Magazin de Arme Albe', link: '/server/shops/meleeweapon' },
              { text: 'Magazin de Tatuaje', link: '/server/shops/tattoo' },
            ]
          }
        ]
      },
      {
        text: '💸 Economie',
        items: [
          { text: '📝 Aplicatul la Joburi', link: '/server/jobs/applications' },
          {
            text: '✒️ Locuri de munca / Jobs',
            collapsed: false,
            items: [
              { text: '♻️ Gunoier', link: '/server/jobs/garbageman' },
              { text: '⛏️ Miner', link: '/server/jobs/miner' },
              { text: '🛵 McBeeDelivery', link: '/server/jobs/mcbee' },
              { text: '👷‍♂️ Electrician', link: '/server/jobs/electrician' },
              { text: '🚛 Camionagiu', link: '/server/jobs/trucker' },
              { text: '🚌 Șofer De Autobuz', link: '/server/jobs/bus_driver' },
              { text: '🚚 GoPostal', link: '/server/jobs/gopostal' },
            ]
          },
          {
            text: '🎣 Hobby',
            collapsed: false,
            items: [
              { text: '🐟 Fisherman', link: '/server/hobby/fisherman' },
              { text: '🚕 B-Taxi', link: '/server/hobby/taxi' },
              { text: '🪡 Tailoring', link: '/server/hobby/tailor' },
              { text: '🪓 Tăietor de lemne', link: '/server/hobby/lumberjack' },
              { text: '🧑‍🔧 Mecanic', link: '/server/hobby/mechanic' },
            ]
          }
        ]
      },
      // {
      //   text: '🛍️ Factiuni / Factions',
      //   items: [
      //     { text: 'Los Santos Medical Department', link: '/server/factions/medics' },
      //     { text: 'Los Santos Police Department', link: '/server/factions/police' },
      //   ]
      // },
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
