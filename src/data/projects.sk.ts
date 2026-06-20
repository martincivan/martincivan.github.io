import type { Project } from './projects';

export const projectsSk: Project[] = [
  {
    name: 'NASES — platforma e-Governmentu',
    category: 'Platform & Infrastructure',
    role: 'DevSecOps & Platform inžinier',
    year: '2024 — súčasnosť',
    status: 'current',
    featured: true,
    blurb:
      'Cloud-native základ pod slovensko.sk: multi-cluster OpenShift nasadený ako kód naprieč Oracle Private Cloud Appliances a holým železom, riadený cez samo-spravujúce ArgoCD, s kompletnou observability, správou tajomstiev, identitou a politikami na suverénnej infraštruktúre.',
    stack: ['OpenShift', 'Terraform', 'ArgoCD', 'Cilium', 'Vault', 'Go'],
  },
  {
    name: 'Lapz — F1 AR pre Apple Vision Pro',
    category: 'Products',
    role: 'Spoluzakladateľ & tech líder',
    year: '2024',
    status: 'sunset',
    featured: true,
    blurb:
      'Priestorová aplikácia k Formule 1, natívne vo Swifte pre visionOS. Forbes ju označil za „najlepší dôvod kúpiť si Vision Pro". Ukončená po cease-and-desist od F1 a po zrušení Vision Pro Applom.',
    stack: ['Swift', 'visionOS', 'RealityKit'],
    link: {
      href: 'https://www.forbes.com/sites/barrycollins/2024/10/02/this-incredible-f1-app-is-the-best-reason-yet-to-buy-a-vision-pro/',
      label: 'Článok vo Forbes',
    },
  },
  {
    name: 'Logram.ai',
    category: 'AI / ML',
    role: 'Spolutvorca',
    year: '2025 — súčasnosť',
    status: 'current',
    featured: true,
    blurb:
      'AI-native platforma na tvorbu značiek a log, ktorá generuje editovateľné vektorové identity. Pracujem na generatívnej časti — fine-tuning OmniSVG na riaditeľný SVG výstup.',
    stack: ['Next.js', 'OmniSVG', 'Fine-tuning', 'SVG'],
    link: { href: 'https://www.logram.ai/', label: 'logram.ai' },
  },
  {
    name: 'Medical Navigator',
    category: 'Products',
    role: 'Inžinier (projekt pre klienta)',
    year: '2025',
    status: 'shipped',
    blurb:
      'Viacjazyčný katalóg zdravotníckych zariadení — vyhľadávanie lekárov/kliník s fasetovým filtrovaním, rankingom a cenami — postavený na Drupal 11 a nasadený na AWS ECS Fargate za ALB cez multi-account Terraform riadený GitHub Actions.',
    stack: ['Drupal 11', 'PHP', 'AWS ECS', 'Terraform'],
  },
  {
    name: 'ViaJet',
    category: 'Products',
    role: 'Sólo vedľajší projekt',
    year: '2025',
    status: 'unlaunched',
    blurb:
      'B2B2C marketplace na charter súkromných lietadiel — charterové firmy publikujú empty-leg lety, zákazníci hľadajú, porovnávajú a rezervujú. Aplikácia je v podstate hotová; spustenie čaká na biznisovú a regulačnú stránku charterovej prevádzky.',
    stack: ['Python', 'TypeScript', 'PostgreSQL'],
  },
  {
    name: 'Segmentácia MRI mozgu',
    category: 'AI / ML',
    role: 'Diplomová práca',
    year: '2021',
    status: 'shipped',
    blurb:
      '3D plne konvolučné siete na segmentáciu subkortikálnych štruktúr mozgu z volumetrického MRI, validované oproti expertným anotáciám a porovnané s FreeSurfer/FSL — motivované diagnostikou neurodegeneratívnych ochorení.',
    stack: ['PyTorch', '3D FCN', 'MRI / NIfTI'],
  },
  {
    name: 'treeplanner',
    category: 'Demos & Experiments',
    role: 'WebGL demo',
    year: '2024',
    status: 'demo',
    blurb:
      'Prehliadačový 3D experiment: vykresľovanie stromov z Gaussian-splat a 3DS modelov pomocou three.js vrátane WebXR/AR režimu. Postavené na skúmanie real-time 3D a priestorového snímania na webe.',
    stack: ['three.js', 'WebGL', 'WebXR', 'Gaussian splatting'],
    link: { href: '/treeplanner/', label: 'Živé demo' },
  },
  {
    name: 'YardSight',
    category: 'Demos & Experiments',
    role: 'Prototyp',
    year: '2025',
    status: 'demo',
    blurb:
      'Prototyp platformy „yard intelligence" na správu areálov s dovezenými vozidlami — skúmanie TypeScript/Bun + PostgreSQL stacku od začiatku po koniec.',
    stack: ['TypeScript', 'Bun', 'PostgreSQL'],
  },
];
