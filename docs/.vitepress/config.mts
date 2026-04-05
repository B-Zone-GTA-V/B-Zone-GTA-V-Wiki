import { defineConfig } from 'vitepress'
import crypto from 'crypto'
import Git from 'simple-git'

const git = Git({
  maxConcurrentProcesses: 200
})

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
          { text: 'UCP', link: 'https://gta5.ro' },
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
        text: '📖 Server Info',
        items: [
          { 
            text: 'Regulamente',
            collapsed: false,
            items: [
              { text: 'Regulament General', link: '/server/rules' },
              { text: 'Regulament Mafii/Grupari', link: '/server/rules/mafii' },
              { text: 'Regulament Jafuri', link: '/server/rules/jafuri' },
              { text: 'Regulament Zone', link: '/server/rules/zones' },
              { text: 'Regulament Programe Interzise', link: '/server/rules/hacking' }
            ]
          },
          { text: 'Cod Penal', link: '/server/rules/penal_code' },
        ]
      },
      {
        text: '🚗 Vehicule Server',
        items: [
          { text: 'Vehicule', link: '/server/rules/vehicles' },
        ]
      },
      {
        text: 'ℹ️ General',
        items: [
          { text: '🐇Eveniment Paște', link: '/server/info/easter' },
          // { text: '🍂Eveniment Toamnă', link: '/server/info/autumn' },
          // { text: '🎃Eveniment Halloween', link: '/server/info/halloween' },
          // { text: '🎄Eveniment Iarnă', link: '/server/info/christmas' },
          {
            text: 'Activități',
            collapsed: false,
            items: [
              { text: 'Market', link: '/server/info/market' },
              { text: 'Sală', link: '/server/info/gym' },
              { text: 'Cărți', link: '/server/info/books' },
              { text: 'Roata Norocului', link: '/server/info/wheel_of_fortune' },
              { text: 'Poker', link: '/server/info/poker' },
              { text: 'Plătirea amenzilor', link: '/server/info/fines' },
              { text: 'Culegător de Ciuperci', link: '/server/info/mushrooms' },
              { text: 'Căutatul în tomberoane', link: '/server/info/trashsearch' },
            ]
          },
          { 
            text: 'Caracter',
            collapsed: true,
            items: [
              { text: 'Cont și Caracter', link: '/server/info/account' },
              { text: 'Documente', link: '/server/info/documents' },
              { text: 'Inventar', link: '/server/info/inventory' },
              { text: 'Referral', link: '/server/info/referal' }, 
              { text: 'Setări și Taste rapide', link: '/server/info/settings' },
              { text: 'Indicatorii de Stare', link: '/server/info/stats' }, 
            // { text: 'Tutorial', link: '/server/info/tutorial' },
            // { text: 'RolePlay Test', link: '/server/info/rptest' },
            // { text: 'Referral', link: '/server/info/referral' },
            ]
          },
          {
            text: 'Sisteme',
            collapsed: true,
            items: [
              { text: 'Cutii', link: '/server/info/clothing-case' },
              { text: 'BNN', link: '/server/info/bnn' },
              { text: 'ATM', link: '/server/info/atm' },
              { text: 'Licențe', link: '/server/info/licenses' },
              { text: 'Telefon', link: '/server/info/phone' },
              { text: 'Tabletă', link: '/server/info/tablet' },
              { text: 'Garaje', link: '/server/info/garage' },
              { text: 'Animații', link: '/server/info/animation' },
              { text: 'Meniu ESC', link: '/server/info/esc-menu' },
              { text: 'Walkie-Talkie', link: '/server/info/walkietalkie' },
              { text: 'Remat de Vehicule', link: '/server/info/remat' },
            ]
          },
          {
            text: 'Magazine',
            collapsed: true,
            items: [
              { text: '24/7', link: '/server/shops/247' },
              { text: 'Tuning', link: '/server/shops/tuning' },
              { text: 'Frizerii', link: '/server/shops/hairstyle' },
              { text: 'Benzinării', link: '/server/shops/gasstation' },
              { text: 'Dealer Auto', link: '/server/shops/dealership' },
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
              { text: '🚛 Camionagiu', link: '/server/jobs/trucker' },
              { text: '🚌 Șofer De Autobuz', link: '/server/jobs/bus_driver' },
              { text: '🛵 McBeeDelivery', link: '/server/jobs/mcbee' },
              { text: '🚚 GoPostal', link: '/server/jobs/gopostal' },
              { text: '🧑‍🌾 Fermier', link: '/server/jobs/farmer' },
              { text: '👷‍♂️ Electrician', link: '/server/jobs/electrician' },
              { text: '♻️ Gunoier', link: '/server/jobs/garbageman' },
              { text: '⛏️ Miner', link: '/server/jobs/miner' },
              { text: '✈️ Pilot', link: '/server/jobs/pilot' },
            ]
          },
          {
            text: '🎣 Hobby',
            collapsed: false,
            items: [
              { text: '🚕 B-Taxi', link: '/server/hobby/taxi' },
              { text: '🪡 Tailoring', link: '/server/hobby/tailor' },
              { text: '🐟 Fisherman', link: '/server/hobby/fisherman' },
              { text: '🧑‍🔧 Mecanic', link: '/server/hobby/mechanic' },
              { text: '🪓 Tăietor de lemne', link: '/server/hobby/lumberjack' },
              { text: '🔪 Bucătar', link: '/server/hobby/cooking' },
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
  },
  async transformPageData() {
    return { contributors: await getContributors() }
  }
})

async function getContributors() {
  try {
    const logOutput = await git.raw(['log', '--pretty=format:%an|%ae']);

    if (!logOutput.trim()) {
      console.warn('No commits found in the repository');
      return [];
    }

    const list = logOutput
      .split('\n')
      .map((line) => line.split('|') as [string, string]);

    const contributorsMap: Record<string, { name: string; email: string; commits: number }> = {};
    const uniqueNames: Set<string> = new Set();

    list.forEach(([name, email]) => {
      if (!email || uniqueNames.has(name)) return;

      if (!contributorsMap[email]) {
        contributorsMap[email] = { name, email, commits: 0 };
        uniqueNames.add(name);
      }
      contributorsMap[email].commits++;
    });

    return Object.values(contributorsMap)
      .sort((a, b) => b.commits - a.commits)
      .map((contributor) => ({
        name: contributor.name,
        commits: contributor.commits,
        avatar: `https://www.gravatar.com/avatar/${crypto
          .createHash('md5')
          .update(contributor.email.trim().toLowerCase())
          .digest('hex')}?s=100&d=identicon`,
      }));
  } catch (e) {
    console.error('Error fetching contributors:', e);
    return [];
  }
}