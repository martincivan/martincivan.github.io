import type { Lang } from './utils';

interface Tech { name: string; icon?: string }
interface PillarGroup { label: string; tech: Tech[] }
interface Pillar { tag: string; title: string; body: string; groups: PillarGroup[] }
interface Featured { name: string; kind: string; blurb: string; link?: string; linkLabel?: string; accent?: boolean }

export interface Dict {
  nav: { home: string; about: string; projects: string; blog: string };
  footer: { tagline: string };
  home: {
    roles: string[]; h1a: string; h1accent: string; lead: string;
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
  sections: {
    whatIDo: string;
    about: { eyebrow: string; title: string };
    experience: { eyebrow: string; title: string };
    skills: { eyebrow: string; title: string; lead: string };
    projects: { eyebrow: string; title: string };
    contact: { eyebrow: string; title: string; lead: string };
  };
  skillGroups: Record<string, string>;
}

export const ui: Record<Lang, Dict> = {
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', blog: 'Blog' },
    footer: { tagline: 'Bratislava, Slovakia' },
    home: {
      roles: ['Platform Engineer', 'DevOps Engineer', 'Cloud Engineer', 'Infrastructure Engineer', 'Site Reliability Engineer', 'Software Engineer', 'Backend Engineer', 'Full-Stack Engineer', 'AI Engineer', 'ML Engineer', 'Network Engineer', 'Security Engineer', 'Frontend Engineer', 'Mobile Engineer', 'Solutions Architect', 'Systems Engineer'],
      h1a: 'Whatever the technology,',
      h1accent: 'I make it work.',
      lead: 'I work across the whole stack — infrastructure, web apps, and applied AI — I am equally at home on a mature product used by thousands or a blank repo. What I enjoy most is the early, uncertain part: researching the unknowns, proving out an approach, and turning a fuzzy idea into something that works. Right now that’s the platform behind Slovakia’s national e-government at NASES, and Logram.ai on the side.',
      ctaWork: 'View selected work', ctaAbout: 'About & CV',
      pillars: [
        { tag: 'Platform & Cloud-Native', title: 'Infrastructure behind a nation', body: 'I design and run the Kubernetes platform under slovensko.sk — Slovakia’s national e-government. Automated OpenShift provisioning on Oracle PCA and bare-metal, a 40+ component GitOps stack on ArgoCD, supply-chain-secured CI/CD, and real network engineering across F5, Fortinet and Cilium.', groups: [
          { label: 'Orchestration', tech: [{ name: 'Kubernetes', icon: 'logos:kubernetes' }, { name: 'Helm', icon: 'logos:helm' }, { name: 'Kustomize' }] },
          { label: 'GitOps & CI/CD', tech: [{ name: 'Argo CD', icon: 'logos:argo-icon' }, { name: 'GitLab', icon: 'logos:gitlab-icon' }] },
          { label: 'Networking & Security', tech: [{ name: 'Cilium', icon: 'simple-icons:cilium' }, { name: 'Vault', icon: 'logos:vault-icon' }, { name: 'cert-manager' }, { name: 'external-dns' }] },
          { label: 'Observability', tech: [{ name: 'Grafana', icon: 'logos:grafana' }, { name: 'Prometheus', icon: 'logos:prometheus' }, { name: 'Elastic', icon: 'logos:elasticsearch' }] },
        ] },
        { tag: 'Product & Architecture', title: 'From idea to scale', body: 'Seven years architecting and helping lead LiveAgent (helpdesk SaaS at scale), co-founder and technical lead of Lapz. I take products from blank repo to working reality — and have kept one growing for years — across data model, backend, frontend, mobile and the infrastructure underneath.', groups: [
          { label: 'Languages', tech: [{ name: 'TypeScript', icon: 'logos:typescript-icon' }, { name: 'JavaScript', icon: 'logos:javascript' }, { name: 'Python', icon: 'logos:python' }, { name: 'PHP', icon: 'logos:php' }, { name: 'Swift', icon: 'logos:swift' }, { name: 'Java', icon: 'logos:java' }, { name: 'Ruby', icon: 'logos:ruby' }] },
          { label: 'Databases', tech: [{ name: 'PostgreSQL', icon: 'logos:postgresql' }, { name: 'MySQL', icon: 'logos:mysql-icon' }, { name: 'Redis', icon: 'logos:redis' }, { name: 'MongoDB', icon: 'logos:mongodb-icon' }] },
          { label: 'Cloud', tech: [{ name: 'AWS', icon: 'logos:aws' }] },
        ] },
        { tag: 'Applied AI / ML', title: 'From MRI to vector graphics', body: 'Master’s thesis on 3D deep learning for subcortical brain MRI segmentation, benchmarked against clinical tooling. Today I’m building Logram.ai and fine-tuning OmniSVG for AI-native vector generation.', groups: [
          { label: 'Deep Learning', tech: [{ name: 'PyTorch', icon: 'logos:pytorch-icon' }] },
          { label: 'Fine-tuning', tech: [{ name: 'Hugging Face', icon: 'logos:hugging-face-icon' }, { name: 'OmniSVG' }, { name: 'LoRA' }] },
          { label: 'Data & Notebooks', tech: [{ name: 'NumPy', icon: 'logos:numpy' }, { name: 'Pandas', icon: 'logos:pandas-icon' }, { name: 'Jupyter', icon: 'logos:jupyter' }] },
          { label: 'Generation & Vectors', tech: [{ name: 'OpenAI', icon: 'logos:openai-icon' }, { name: 'Elasticsearch', icon: 'logos:elasticsearch' }] },
        ] },
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
      h1: 'Platform engineer who loves to explore and build — from kernel-level networking to web apps and applied AI.',
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
    sections: {
      whatIDo: 'What I do',
      about: { eyebrow: 'About', title: 'Who I am' },
      experience: { eyebrow: 'Experience', title: 'Where I’ve worked' },
      skills: { eyebrow: 'Skills', title: 'What I work with', lead: 'TL;DR — whatever the job needs. But if I get to choose: Python.' },
      projects: { eyebrow: 'Projects', title: 'Selected work' },
      contact: { eyebrow: 'Contact', title: 'Let’s talk', lead: 'Building something ambitious — or hiring for it? I’m always up for an interesting problem.' },
    },
    skillGroups: {},
  },

  sk: {
    nav: { home: 'Domov', about: 'O mne', projects: 'Projekty', blog: 'Blog' },
    footer: { tagline: 'Bratislava, Slovensko' },
    home: {
      roles: ['Platform inžinier', 'DevOps inžinier', 'Cloud inžinier', 'Infraštruktúrny inžinier', 'SRE inžinier', 'Softvérový inžinier', 'Backend inžinier', 'Full-stack inžinier', 'AI inžinier', 'ML inžinier', 'Sieťový inžinier', 'Security inžinier', 'Frontend inžinier', 'Mobilný inžinier', 'Solutions architect', 'Systémový inžinier'],
      h1a: 'Nech je technológia akákoľvek,',
      h1accent: 'rozbehnem to.',
      lead: 'Pracujem naprieč celým stackom — infraštruktúra, webové aplikácie a aplikovaná AI — rovnako doma na zrelom produkte pre tisíce používateľov ako na prázdnom repozitári. Najviac ma baví tá skorá, neistá časť: skúmať neznáme, overiť prístup a premeniť nejasný nápad na niečo, čo funguje. Práve teraz je to platforma pod slovenským e-Governmentom v NASES a Logram.ai popri tom.',
      ctaWork: 'Pozri vybrané práce', ctaAbout: 'O mne & CV',
      pillars: [
        { tag: 'Platforma & Cloud-Native', title: 'Infraštruktúra pod štátom', body: 'Navrhujem a prevádzkujem Kubernetes platformu pod slovensko.sk — portálom slovenského e-Governmentu. Automatizované nasadzovanie OpenShiftu na Oracle PCA aj holé železo, GitOps stack so 40+ komponentmi nad ArgoCD, CI/CD so zabezpečeným dodávateľským reťazcom a reálny network engineering naprieč F5, Fortinet a Cilium.', groups: [
          { label: 'Orchestrácia', tech: [{ name: 'Kubernetes', icon: 'logos:kubernetes' }, { name: 'Helm', icon: 'logos:helm' }, { name: 'Kustomize' }] },
          { label: 'GitOps & CI/CD', tech: [{ name: 'Argo CD', icon: 'logos:argo-icon' }, { name: 'GitLab', icon: 'logos:gitlab-icon' }] },
          { label: 'Sieťovanie & bezpečnosť', tech: [{ name: 'Cilium', icon: 'simple-icons:cilium' }, { name: 'Vault', icon: 'logos:vault-icon' }, { name: 'cert-manager' }, { name: 'external-dns' }] },
          { label: 'Observability', tech: [{ name: 'Grafana', icon: 'logos:grafana' }, { name: 'Prometheus', icon: 'logos:prometheus' }, { name: 'Elastic', icon: 'logos:elasticsearch' }] },
        ] },
        { tag: 'Produkt & Architektúra', title: 'Od nápadu po škálu', body: 'Sedem rokov architektúry a spoluvedenia LiveAgentu (helpdesk SaaS vo veľkom), spoluzakladateľ a technický líder Lapz. Produkty beriem od prázdneho repozitára k fungujúcej realite — a jeden som roky rozvíjal ďalej — naprieč dátovým modelom, backendom, frontendom, mobilom aj infraštruktúrou pod tým.', groups: [
          { label: 'Jazyky', tech: [{ name: 'TypeScript', icon: 'logos:typescript-icon' }, { name: 'JavaScript', icon: 'logos:javascript' }, { name: 'Python', icon: 'logos:python' }, { name: 'PHP', icon: 'logos:php' }, { name: 'Swift', icon: 'logos:swift' }, { name: 'Java', icon: 'logos:java' }, { name: 'Ruby', icon: 'logos:ruby' }] },
          { label: 'Databázy', tech: [{ name: 'PostgreSQL', icon: 'logos:postgresql' }, { name: 'MySQL', icon: 'logos:mysql-icon' }, { name: 'Redis', icon: 'logos:redis' }, { name: 'MongoDB', icon: 'logos:mongodb-icon' }] },
          { label: 'Cloud', tech: [{ name: 'AWS', icon: 'logos:aws' }] },
        ] },
        { tag: 'Aplikovaná AI / ML', title: 'Od MRI po vektorovú grafiku', body: 'Diplomová práca o 3D hlbokom učení na segmentáciu subkortikálnych štruktúr mozgu z MRI, porovnaná s klinickými nástrojmi. Dnes budujem Logram.ai a fine-tunujem OmniSVG na AI generovanie vektorovej grafiky.', groups: [
          { label: 'Deep learning', tech: [{ name: 'PyTorch', icon: 'logos:pytorch-icon' }] },
          { label: 'Fine-tuning', tech: [{ name: 'Hugging Face', icon: 'logos:hugging-face-icon' }, { name: 'OmniSVG' }, { name: 'LoRA' }] },
          { label: 'Dáta & notebooky', tech: [{ name: 'NumPy', icon: 'logos:numpy' }, { name: 'Pandas', icon: 'logos:pandas-icon' }, { name: 'Jupyter', icon: 'logos:jupyter' }] },
          { label: 'Generovanie & vektory', tech: [{ name: 'OpenAI', icon: 'logos:openai-icon' }, { name: 'Elasticsearch', icon: 'logos:elasticsearch' }] },
        ] },
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
      h1: 'Inžinier, ktorý rád skúma a stavia — od sieťovania na úrovni kernelu cez webové aplikácie až po aplikovanú AI.',
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
    sections: {
      whatIDo: 'Čo robím',
      about: { eyebrow: 'O mne', title: 'Kto som' },
      experience: { eyebrow: 'Skúsenosti', title: 'Kde som pôsobil' },
      skills: { eyebrow: 'Zručnosti', title: 'S čím pracujem', lead: 'TL;DR — čokoľvek, čo treba. Ale ak si môžem vybrať: Python.' },
      projects: { eyebrow: 'Projekty', title: 'Vybrané práce' },
      contact: { eyebrow: 'Kontakt', title: 'Ozvime sa', lead: 'Staviate niečo ambiciózne — alebo na to hľadáte človeka? Vždy si rád dám zaujímavý problém.' },
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
