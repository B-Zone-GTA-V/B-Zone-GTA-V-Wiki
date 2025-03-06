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
          { text: 'Regulament (Română)', link: '/server/rules' },
          { text: 'Cod Penal (Română)', link: '/server/rules/penal_code' },
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
              { text: 'Referral', link: '/server/info/referal' }, 
              { text: 'Setări și Taste rapide', link: '/server/info/settings' }, 
            // { text: 'Tutorial', link: '/server/info/tutorial' },
            // { text: 'RolePlay Test', link: '/server/info/rptest' },
            // { text: 'Referral', link: '/server/info/referral' },
            ]
          },
          {
            text: 'Sisteme',
            collapsed: true,
            items: [
              { text: 'BNN', link: '/server/info/bnn' },
              { text: 'ATM', link: '/server/info/atm' },
              { text: 'Licențe', link: '/server/info/licenses' },
              { text: 'Telefon', link: '/server/info/phone' },
              { text: 'Garaje', link: '/server/info/garage' },
              { text: 'Animații', link: '/server/info/animation' },
              { text: 'Meniu ESC', link: '/server/info/esc-menu' },
              { text: 'Walkie-Talkie', link: '/server/info/walkietalkie' },
              { text: 'Remat de Vehicule', link: '/server/info/remat' },
            ]
          },
          {
            text: 'Activități',
            collapsed: true,
            items: [
              { text: 'Sală', link: '/server/info/gym' },
              { text: 'Cărți', link: '/server/info/books' },
              { text: 'Plătirea amenzilor', link: '/server/info/fines' },
              { text: 'Căutarea în tomberoane', link: '/server/info/trashsearch' },
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