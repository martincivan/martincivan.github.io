import type { Lang } from './utils';

interface Pillar { tag: string; title: string; body: string; stack: string[] }
interface Featured { name: string; kind: string; blurb: string; link?: string; linkLabel?: string; accent?: boolean }

export interface Dict {
  nav: { home: string; about: string; projects: string; blog: string };
  footer: { tagline: string };
  home: {
    kicker: string; h1a: string; h1accent: string; lead: string;
    ctaWork: string; ctaAbout: string;
    pillars: Pillar[];
    selectedTitle: string; selectedAll: string; featured: Featured[];
  };
  about: {
    kicker: string; h1: string; bio: string[];
    experience: string; skills: string; education: string;
    languagesTitle: string; beyondTitle: string; beyond: string;
  };
  projects: { kicker: string; h1: string; intro: string };
  blog: { kicker: string; h1: string; intro: string; empty: string; all: string; min: string; readMin: string };
  skillGroups: Record<string, string>;
}

export const ui: Record<Lang, Dict> = {
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', blog: 'Blog' },
    footer: { tagline: 'Bratislava, Slovakia' },
    home: {
      kicker: 'Platform & DevSecOps Engineer · Technical founder',
      h1a: 'I build and run the cloud-native platform behind',
      h1accent: 'Slovakia’s national e-government.',
      lead: 'From bare-metal and OpenShift up through GitOps, security and observability — and, on the side, shipping products and applied AI. Currently DevSecOps engineer at NASES and building Logram.ai.',
      ctaWork: 'View selected work', ctaAbout: 'About & CV',
      pillars: [
        { tag: 'Platform & Cloud-Native', title: 'Infrastructure behind a nation', body: 'I design and run the Kubernetes platform under slovensko.sk — Slovakia’s national e-government. Automated OpenShift provisioning on Oracle PCA and bare-metal, a 40+ component GitOps stack on ArgoCD, supply-chain-secured CI/CD, and real network engineering across F5, Fortinet and Cilium.', stack: ['OpenShift', 'Terraform', 'ArgoCD', 'GitLab CI', 'Cilium', 'Go'] },
        { tag: 'Product & Architecture', title: 'Shipping, end to end', body: 'Years architecting and leading LiveAgent (helpdesk SaaS at scale), co-founder and technical lead of Lapz. I’ve owned products from data model to deployment — backend, frontend, mobile, and the infrastructure underneath.', stack: ['TypeScript', 'PHP', 'Python', 'Swift', 'AWS', 'PostgreSQL'] },
        { tag: 'Applied AI / ML', title: 'From MRI to vector graphics', body: 'Master’s thesis on 3D deep learning for subcortical brain MRI segmentation, benchmarked against clinical tooling. Today I’m building Logram.ai and fine-tuning OmniSVG for AI-native vector generation.', stack: ['PyTorch', '3D FCN', 'Fine-tuning', 'OmniSVG', 'Gemini'] },
      ],
      selectedTitle: 'Selected work', selectedAll: 'all projects →',
      featured: [
        { name: 'NASES — National e-Government Platform', kind: 'Platform Engineering · current', blurb: 'The cloud-native foundation under slovensko.sk: multi-cluster OpenShift provisioned as code across Oracle Private Cloud Appliances and bare-metal, GitOps-driven via self-managing ArgoCD, with end-to-end observability, secrets, identity and policy.', accent: true },
        { name: 'Lapz — F1 AR for Apple Vision Pro', kind: 'Co-founder & Tech Lead · 2024', blurb: 'A spatial Formula 1 companion app, native in Swift. Featured by Forbes as “the best reason yet to buy a Vision Pro.” Sunset after an F1 cease-and-desist and Apple discontinuing the Vision Pro.', link: 'https://www.forbes.com/sites/barrycollins/2024/10/02/this-incredible-f1-app-is-the-best-reason-yet-to-buy-a-vision-pro/', linkLabel: 'Read the Forbes feature →' },
        { name: 'Medical Navigator', kind: 'Client product', blurb: 'A multilingual healthcare directory — search, faceted filtering, ranking and pricing — built on Drupal 11 and deployed to AWS ECS Fargate with a multi-account Terraform setup driven by GitHub Actions.' },
      ],
    },
    about: {
      kicker: 'About',
      h1: 'Platform engineer who likes to ship — from kernel-level networking to native apps and applied AI.',
      bio: [
        'I’m Martin, a Bratislava-based engineer. By day I design and run the Kubernetes platform behind slovensko.sk, Slovakia’s national e-government — provisioning clusters as code, building the GitOps and security underneath, and dragging critical infrastructure into a modern, automated way of working.',
        'Before that I spent years leading and building product: architecting a help-desk SaaS at scale, and co-founding Lapz, a Vision Pro app Forbes called “the best reason yet to buy a Vision Pro.” On the side I build products and stay close to AI — from a deep-learning master’s thesis in medical imaging to fine-tuning generative models for Logram.ai today.',
      ],
      experience: 'Experience', skills: 'Skills', education: 'Education',
      languagesTitle: 'Languages', beyondTitle: 'Beyond work',
      beyond: 'Mountain biking in the Little Carpathians, skiing, and motorcycles. Most of my “rest” still ends up being a side project.',
    },
    projects: {
      kicker: 'Projects',
      h1: 'Things I’ve built, run, or broken on purpose.',
      intro: 'A lot of my best work lives on private and on-prem GitLab rather than public GitHub — so this is the honest tour, labelled by what each thing actually is.',
    },
    blog: {
      kicker: 'Blog', h1: 'Notes on platform engineering, DevOps & AI.',
      intro: 'Occasional writing about the systems I build and the lessons that don’t fit in a commit message.',
      empty: 'No posts yet — coming soon.', all: '← all posts', min: 'min', readMin: 'min read',
    },
    skillGroups: {},
  },

  sk: {
    nav: { home: 'Domov', about: 'O mne', projects: 'Projekty', blog: 'Blog' },
    footer: { tagline: 'Bratislava, Slovensko' },
    home: {
      kicker: 'Platform & DevSecOps inžinier · Technický spoluzakladateľ',
      h1a: 'Staviam a prevádzkujem cloud-native platformu, na ktorej stojí',
      h1accent: 'slovenský e-Government.',
      lead: 'Od holého železa a OpenShiftu cez GitOps, bezpečnosť až po observability — a popri tom stavám produkty a aplikovanú AI. Aktuálne DevSecOps inžinier v NASES a budujem Logram.ai.',
      ctaWork: 'Pozri vybrané práce', ctaAbout: 'O mne & CV',
      pillars: [
        { tag: 'Platforma & Cloud-Native', title: 'Infraštruktúra pod štátom', body: 'Navrhujem a prevádzkujem Kubernetes platformu pod slovensko.sk — portálom slovenského e-Governmentu. Automatizované nasadzovanie OpenShiftu na Oracle PCA aj holé železo, GitOps stack so 40+ komponentmi nad ArgoCD, CI/CD so zabezpečeným dodávateľským reťazcom a reálny network engineering naprieč F5, Fortinet a Cilium.', stack: ['OpenShift', 'Terraform', 'ArgoCD', 'GitLab CI', 'Cilium', 'Go'] },
        { tag: 'Produkt & Architektúra', title: 'Doručené, od začiatku po koniec', body: 'Roky architektúry a vedenia LiveAgentu (helpdesk SaaS vo veľkom), spoluzakladateľ a technický líder Lapz. Vlastnil som produkty od dátového modelu po nasadenie — backend, frontend, mobil aj infraštruktúru pod tým.', stack: ['TypeScript', 'PHP', 'Python', 'Swift', 'AWS', 'PostgreSQL'] },
        { tag: 'Aplikovaná AI / ML', title: 'Od MRI po vektorovú grafiku', body: 'Diplomová práca o 3D hlbokom učení na segmentáciu subkortikálnych štruktúr mozgu z MRI, porovnaná s klinickými nástrojmi. Dnes budujem Logram.ai a fine-tunujem OmniSVG na AI generovanie vektorovej grafiky.', stack: ['PyTorch', '3D FCN', 'Fine-tuning', 'OmniSVG', 'Gemini'] },
      ],
      selectedTitle: 'Vybrané práce', selectedAll: 'všetky projekty →',
      featured: [
        { name: 'NASES — platforma slovenského e-Governmentu', kind: 'Platform Engineering · aktuálne', blurb: 'Cloud-native základ pod slovensko.sk: multi-cluster OpenShift nasadený ako kód naprieč Oracle Private Cloud Appliances a holým železom, riadený cez samo-spravujúce ArgoCD, s kompletnou observability, správou tajomstiev, identitou a politikami.', accent: true },
        { name: 'Lapz — F1 AR pre Apple Vision Pro', kind: 'Spoluzakladateľ & technický líder · 2024', blurb: 'Priestorová aplikácia k Formule 1, natívne vo Swifte. Forbes ju označil za „najlepší dôvod kúpiť si Vision Pro". Ukončená po cease-and-desist od F1 a po tom, čo Apple zrušil Vision Pro.', link: 'https://www.forbes.com/sites/barrycollins/2024/10/02/this-incredible-f1-app-is-the-best-reason-yet-to-buy-a-vision-pro/', linkLabel: 'Článok vo Forbes →' },
        { name: 'Medical Navigator', kind: 'Produkt pre klienta', blurb: 'Viacjazyčný katalóg zdravotníckych zariadení — vyhľadávanie, fasetové filtrovanie, ranking a ceny — postavený na Drupal 11 a nasadený na AWS ECS Fargate cez multi-account Terraform riadený GitHub Actions.' },
      ],
    },
    about: {
      kicker: 'O mne',
      h1: 'Inžinier, ktorý rád doručuje — od sieťovania na úrovni kernelu cez natívne appky až po aplikovanú AI.',
      bio: [
        'Som Martin, inžinier z Bratislavy. Cez deň navrhujem a prevádzkujem Kubernetes platformu pod slovensko.sk, portálom slovenského e-Governmentu — nasadzujem klastre ako kód, staviam GitOps a bezpečnosť pod tým a ťahám kritickú infraštruktúru do moderného, automatizovaného sveta.',
        'Predtým som roky viedol a staval produkty: architektúra helpdesk SaaS vo veľkom a spoluzaloženie Lapz, aplikácie pre Vision Pro, ktorú Forbes nazval „najlepším dôvodom kúpiť si Vision Pro". Popri tom stavám produkty a držím sa blízko AI — od diplomovej práce o hlbokom učení v medicínskom zobrazovaní po fine-tuning generatívnych modelov pre Logram.ai.',
      ],
      experience: 'Skúsenosti', skills: 'Zručnosti', education: 'Vzdelanie',
      languagesTitle: 'Jazyky', beyondTitle: 'Mimo práce',
      beyond: 'Horská cyklistika v Malých Karpatoch, lyžovanie a motorky. Väčšina môjho „oddychu" aj tak skončí ako vedľajší projekt.',
    },
    projects: {
      kicker: 'Projekty',
      h1: 'Veci, ktoré som postavil, prevádzkujem alebo zámerne pokazil.',
      intro: 'Veľa mojej najlepšej práce žije na súkromnom a on-prem GitLabe, nie na verejnom GitHube — toto je teda úprimná prehliadka, kde je každá vec označená podľa toho, čím naozaj je.',
    },
    blog: {
      kicker: 'Blog', h1: 'Poznámky o platform engineeringu, DevOps a AI.',
      intro: 'Občasné písanie o systémoch, ktoré stavám, a o ponaučeniach, ktoré sa nezmestia do commit message.',
      empty: 'Zatiaľ žiadne príspevky — už čoskoro.', all: '← všetky príspevky', min: 'min', readMin: 'min čítania',
    },
    skillGroups: {
      'Platform & Infrastructure': 'Platforma & Infraštruktúra',
      'Cloud & Observability': 'Cloud & Observability',
      'Languages': 'Jazyky',
      'Web & Frameworks': 'Web & Frameworky',
      'Data & Messaging': 'Dáta & Messaging',
      'AI / ML': 'AI / ML',
    },
  },
};

export const useTranslations = (lang: Lang): Dict => ui[lang];
