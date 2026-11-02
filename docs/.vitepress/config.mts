import { defineConfig } from 'vitepress'
import Git from 'simple-git'

const git = Git({
  maxConcurrentProcesses: 200
})

export default defineConfig({
  title: "B-Zone V Wiki",
  description: "Wiki page - B-Zone V Roleplay",
  base: '/',
  appearance: 'force-dark', 
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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
        text: '🕹️ FIVEM',
        items: [
          { text: 'FiveM', link: '/server/fivem/fivem' },
          { text: 'Probleme FIVEM',
            collapsed: false,
            items: [
              { text: 'Probleme generale', link: '/server/fivem/probleme_generale' },
              { text: 'Probleme la conectare', link: '/server/fivem/probleme_conectare' },
              { text: 'Probleme la microfon', link: '/server/fivem/probleme_microfon' },
            ]
           },
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
          // { text: '☀️Eveniment Vară', link: '/server/info/summer' },
          {
            text: 'Activități',
            collapsed: false,
            items: [
              { text: 'VR Arena', link: '/server/info/vr_arena' },
              { text: 'Market', link: '/server/info/market' },
              { text: 'Sală', link: '/server/info/gym' },
              { text: 'Cărți', link: '/server/info/books' },
              { text: 'Roata Norocului', link: '/server/info/wheel_of_fortune' },
              { text: 'Poker', link: '/server/info/poker' },
              { text: 'Plătirea amenzilor', link: '/server/info/fines' },
              { text: 'Culegător de Ciuperci', link: '/server/info/mushrooms' },
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
              { text: 'Colecții de haine', link: '/server/info/clothing-collection' },
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
              { text: '🚛 Transporter', link: '/server/jobs/transporter' },
              { text: '🚌 Șofer De Autobuz', link: '/server/jobs/bus_driver' },
              { text: '🛵 McBeeDelivery', link: '/server/jobs/mcbee' },
              { text: '🚚 GoPostal', link: '/server/jobs/gopostal' },
              { text: '🧑‍🌾 Fermier', link: '/server/jobs/farmer' },
              { text: '👷‍♂️ Electrician', link: '/server/jobs/electrician' },
              { text: '♻️ Gunoier', link: '/server/jobs/garbageman' },
              { text: '⛏️ Miner', link: '/server/jobs/miner' },
              { text: '🤿 Miner Subacvatic', link: '/server/jobs/underwater_miner' },
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

const GITHUB_REPO = 'B-Zone-GTA-V/B-Zone-GTA-V-Wiki'

interface Contributor {
  name: string
  commits: number
  avatar: string
  githubUrl: string
}

// Se calculeaza o singura data per build, nu pentru fiecare pagina
let contributorsPromise: Promise<Contributor[]> | null = null

function getContributors(): Promise<Contributor[]> {
  if (!contributorsPromise) contributorsPromise = loadContributors()
  return contributorsPromise
}

async function loadContributors(): Promise<Contributor[]> {
  try {
    const fromGithub = await getGithubContributors()
    if (fromGithub.length) return fromGithub
  } catch (e) {
    console.warn('[contributors] GitHub API indisponibil, folosesc git log:', e)
  }
  return getGitContributors()
}

// Sursa principala: GitHub API -> avatar GitHub, link profil, commit-uri adunate pe cont
async function getGithubContributors(): Promise<Contributor[]> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'b-zone-wiki-build'
  }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contributors?per_page=100`, { headers })
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`)

  const data: any[] = await res.json()
  return data
    .filter((c) => c.type !== 'Bot')
    .map((c) => ({
      name: c.login,
      commits: c.contributions,
      avatar: `${c.avatar_url}${c.avatar_url.includes('?') ? '&' : '?'}s=120`,
      githubUrl: c.html_url
    }))
    .sort((a, b) => b.commits - a.commits)
}

// Fallback: git log, grupat pe email, cu commit-urile numarate corect
async function getGitContributors(): Promise<Contributor[]> {
  try {
    const logOutput = await git.raw(['log', '--pretty=format:%an|%ae'])
    if (!logOutput.trim()) return []

    const byEmail: Record<string, Contributor> = {}
    for (const line of logOutput.split('\n')) {
      const [name, rawEmail] = line.split('|')
      const email = rawEmail?.trim().toLowerCase()
      if (!email) continue

      if (!byEmail[email]) {
        // ex: 150546396+Pant1limon@users.noreply.github.com
        const noreply = email.match(/^(?:(\d+)\+)?([^@]+)@users\.noreply\.github\.com$/)
        byEmail[email] = {
          name: noreply ? noreply[2] : name,
          commits: 0,
          avatar: noreply?.[1]
            ? `https://avatars.githubusercontent.com/u/${noreply[1]}?s=120`
            : noreply
              ? `https://github.com/${noreply[2]}.png?size=120`
              : 'https://github.com/ghost.png?size=120',
          githubUrl: noreply ? `https://github.com/${noreply[2]}` : `https://github.com/${GITHUB_REPO}/commits?author=${encodeURIComponent(email)}`
        }
      }
      byEmail[email].commits++
    }

    return Object.values(byEmail).sort((a, b) => b.commits - a.commits)
  } catch (e) {
    console.error('Error fetching contributors:', e)
    return []
  }
}
