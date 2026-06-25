import type { Work } from './work';

export const workSk: Work[] = [
  {
    name: 'NASES — platforma e-Governmentu',
    kind: 'Kontrakt',
    period: '2024 — súčasnosť',
    status: 'current',
    featured: true,
    href: 'https://www.nases.gov.sk/',
    summary:
      'Cloud-native základ pod slovensko.sk: multi-cluster OpenShift nasadený ako kód naprieč Oracle Private Cloud Appliances a holým železom, riadený cez samo-spravujúce ArgoCD, s kompletnou observability, správou tajomstiev, identitou a politikami na suverénnej infraštruktúre.',
    stack: ['OpenShift', 'Terraform', 'ArgoCD', 'GitLab CI', 'Helm', 'Go', 'Java', 'Spring', 'Cilium', 'Vault', 'Keycloak', 'Kafka', 'Oracle', 'PostgreSQL', 'Prometheus', 'Grafana'],
    link: { href: 'https://www.nases.gov.sk/', label: 'nases.gov.sk' },
  },
  {
    name: 'Logram.ai',
    kind: 'Výskum · spoluzaložené',
    period: '2026 — súčasnosť',
    status: 'current',
    featured: true,
    summary:
      'AI-native platforma na tvorbu značiek a log, ktorá generuje editovateľné vektorové identity. Pracujem na generatívnej časti — fine-tuning OmniSVG na riaditeľný SVG výstup.',
    stack: ['Next.js', 'OmniSVG', 'Fine-tuning', 'SVG'],
    link: { href: 'https://www.logram.ai/', label: 'logram.ai' },
  },
  {
    name: 'Lapz — F1 AR pre Apple Vision Pro',
    kind: 'Spoluzaložené',
    period: '2024',
    status: 'sunset',
    featured: true,
    summary:
      'Priestorová aplikácia k Formule 1, natívne vo Swifte pre visionOS. Vlastnil som celú real-time telemetriu — načítavanie, spracovanie a prehrávanie dát poháňajúce priestorovú vizualizáciu. Forbes ju označil za „najlepší dôvod kúpiť si Vision Pro". Ukončená po cease-and-desist od F1 a po zrušení Vision Pro Applom.',
    stack: ['Swift', 'Python', 'visionOS', 'RealityKit'],
    link: { href: 'https://lapz.io/', label: 'lapz.io' },
    feature: {
      source: 'Forbes',
      quote: 'Najlepší dôvod, prečo si kúpiť Vision Pro.',
      href: 'https://www.forbes.com/sites/barrycollins/2024/10/02/this-incredible-f1-app-is-the-best-reason-yet-to-buy-a-vision-pro/',
    },
  },
  {
    name: 'Medical Navigator',
    kind: 'Kontrakt',
    period: '2026',
    status: 'shipped',
    href: 'https://www.medicalnavigator.com/',
    summary:
      'Viacjazyčný katalóg zdravotníckych zariadení — vyhľadávanie lekárov/kliník s fasetovým filtrovaním, rankingom a cenami — postavený na Drupal 11 a nasadený na AWS ECS Fargate za ALB cez multi-account Terraform riadený GitHub Actions.',
    stack: ['Drupal 11', 'PHP', 'AWS ECS', 'Terraform'],
    link: { href: 'https://www.medicalnavigator.com/', label: 'medicalnavigator.com' },
  },
  {
    name: 'ViaJet',
    kind: 'Spoluzaložené',
    period: '2025 — súčasnosť',
    status: 'current',
    summary:
      'B2B2C marketplace na charter súkromných lietadiel — charterové firmy publikujú empty-leg lety, zákazníci hľadajú, porovnávajú a rezervujú. Aplikácia je v podstate hotová; spustenie čaká na biznisovú a regulačnú stránku charterovej prevádzky.',
    stack: ['Python', 'TypeScript', 'PostgreSQL'],
  },
  {
    name: 'YardSight',
    kind: 'Demo',
    period: '2026',
    status: 'demo',
    summary:
      'Prototyp platformy „yard intelligence" na správu areálov s dovezenými vozidlami — skúmanie TypeScript/Bun + PostgreSQL stacku od začiatku po koniec.',
    stack: ['TypeScript', 'Bun', 'PostgreSQL'],
  },
  {
    name: 'treeplanner',
    kind: 'Demo',
    period: '2024',
    status: 'demo',
    summary:
      'Prehliadačový 3D experiment: vykresľovanie stromov z Gaussian-splat a 3DS modelov pomocou three.js vrátane WebXR/AR režimu. Postavené na skúmanie real-time 3D a priestorového snímania na webe.',
    stack: ['three.js', 'WebGL', 'WebXR', 'Gaussian splatting'],
    link: { href: '/treeplanner/', label: 'Živé demo' },
  },
  {
    name: 'LiveAgent',
    kind: 'Kontrakt',
    period: '2017 — 2023',
    status: 'shipped',
    href: 'https://www.liveagent.com/',
    summary:
      'Pomáhal som viesť vývoj LiveAgentu, helpdesk SaaS používaného desiatkami tisíc firiem — naprieč feature prácou, architektúrou a DevOps pod tým. Dva roky súčasťou vedenia tímu — mentoroval som vývojárov a viedol prijímacie pohovory.',
    stack: ['PHP', 'JavaScript', 'Java', 'Python', 'MariaDB', 'Redis', 'ElasticSearch', 'AWS', 'Terraform'],
    link: { href: 'https://www.liveagent.com/', label: 'liveagent.com' },
  },
  {
    name: 'Segmentácia MRI mozgu',
    kind: 'Výskum',
    period: '2021',
    status: 'shipped',
    summary:
      '3D plne konvolučné siete na segmentáciu subkortikálnych štruktúr mozgu z volumetrického MRI, validované oproti expertným anotáciám a porovnané s FreeSurfer/FSL — motivované diagnostikou neurodegeneratívnych ochorení.',
    stack: ['PyTorch', '3D FCN', 'MRI / NIfTI'],
  },
  {
    name: 'DXC Technology',
    kind: 'Kontrakt',
    period: '2020',
    status: 'shipped',
    summary:
      'Postavil a nasadil som internú webovú aplikáciu na organizáciu bežeckých štafiet — registrácia bežcov, zostavovanie tímov a priraďovanie k úsekom. Dvojčlenný tím; kompletné doručenie od buildu po nasadenie.',
    stack: ['Angular', 'Python (Flask)', 'Docker', 'MySQL', 'Azure'],
  },
];
