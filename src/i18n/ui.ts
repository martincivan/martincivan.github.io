import type { Lang } from './utils';

interface Tech { name: string; icon: string }
interface Pillar { tag: string; tech: Tech[] }

export interface Dict {
  nav: { home: string; about: string; projects: string; blog: string };
  footer: { tagline: string };
  home: {
    roles: string[]; h1a: string; h1accent: string; lead: string;
    ctaWork: string; ctaAbout: string;
    pillars: Pillar[];
  };
  about: {
    bio: string[];
    education: string;
    languagesTitle: string; beyond: string;
  };
  projects: { intro: string };
  blog: { kicker: string; h1: string; intro: string; empty: string; all: string; min: string; readMin: string };
  sections: {
    about: { eyebrow: string; title: string };
    skills: { eyebrow: string; title: string; lead: string };
    projects: { eyebrow: string; title: string };
    contact: { eyebrow: string; title: string; lead: string };
  };
}

export const ui: Record<Lang, Dict> = {
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Work', blog: 'Blog' },
    footer: { tagline: 'Bratislava, Slovakia' },
    home: {
      roles: ['Platform Engineer', 'DevOps Engineer', 'Cloud Engineer', 'Infrastructure Engineer', 'Site Reliability Engineer', 'Software Engineer', 'Backend Engineer', 'Full-Stack Engineer', 'AI Engineer', 'ML Engineer', 'Network Engineer', 'Security Engineer', 'Frontend Engineer', 'Mobile Engineer', 'Solutions Architect', 'Systems Engineer'],
      h1a: 'Whatever the technology,',
      h1accent: 'I make it work.',
      lead: 'I work across the whole stack — infrastructure, web apps, and applied AI — I am equally at home on a mature product used by thousands or a blank repo. What I enjoy most is the early, uncertain part: researching the unknowns, proving out an approach, and turning a fuzzy idea into something that works. Right now that’s the platform behind Slovakia’s national e-government at NASES, and Logram.ai on the side.',
      ctaWork: 'View selected work', ctaAbout: 'About & CV',
      pillars: [
        { tag: 'Platform & Cloud-Native', tech: [
          { name: 'Kubernetes', icon: 'logos:kubernetes' },
          { name: 'OpenShift', icon: 'simple-icons:redhatopenshift' },
          { name: 'Helm', icon: 'logos:helm' },
          { name: 'Terraform', icon: 'logos:terraform-icon' },
          { name: 'OpenTofu', icon: 'simple-icons:opentofu' },
          { name: 'Argo CD', icon: 'logos:argo-icon' },
          { name: 'GitLab CI', icon: 'logos:gitlab-icon' },
          { name: 'GitHub Actions', icon: 'logos:github-actions' },
          { name: 'Docker', icon: 'logos:docker-icon' },
          { name: 'Cilium', icon: 'simple-icons:cilium' },
          { name: 'Vault', icon: 'logos:vault-icon' },
          { name: 'Keycloak', icon: 'simple-icons:keycloak' },
          { name: 'Prometheus', icon: 'logos:prometheus' },
          { name: 'Grafana', icon: 'logos:grafana' },
          { name: 'OpenTelemetry', icon: 'logos:opentelemetry-icon' },
          { name: 'Elastic', icon: 'logos:elasticsearch' },
          { name: 'Kafka', icon: 'logos:kafka-icon' },
          { name: 'Apache NiFi', icon: 'simple-icons:apachenifi' },
          { name: 'Ceph', icon: 'simple-icons:ceph' },
          { name: 'AWS', icon: 'logos:aws' },
          { name: 'Oracle Cloud', icon: 'logos:oracle' },
          { name: 'Fortinet', icon: 'simple-icons:fortinet' },
          { name: 'Linux', icon: 'logos:linux-tux' },
        ] },
        { tag: 'Product & Architecture', tech: [
          { name: 'TypeScript', icon: 'logos:typescript-icon' },
          { name: 'JavaScript', icon: 'logos:javascript' },
          { name: 'Python', icon: 'logos:python' },
          { name: 'PHP', icon: 'logos:php' },
          { name: 'Java', icon: 'logos:java' },
          { name: 'Kotlin', icon: 'logos:kotlin-icon' },
          { name: 'Swift', icon: 'logos:swift' },
          { name: 'Ruby', icon: 'logos:ruby' },
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'React', icon: 'logos:react' },
          { name: 'Next.js', icon: 'logos:nextjs-icon' },
          { name: 'Vue.js', icon: 'logos:vue' },
          { name: 'Svelte', icon: 'logos:svelte-icon' },
          { name: 'Astro', icon: 'logos:astro-icon' },
          { name: 'Laravel', icon: 'logos:laravel' },
          { name: 'Symfony', icon: 'logos:symfony' },
          { name: 'Spring', icon: 'logos:spring-icon' },
          { name: 'FastAPI', icon: 'logos:fastapi-icon' },
          { name: 'Drupal', icon: 'logos:drupal-icon' },
          { name: 'Android', icon: 'logos:android-icon' },
          { name: 'PostgreSQL', icon: 'logos:postgresql' },
          { name: 'MySQL', icon: 'logos:mysql-icon' },
          { name: 'MariaDB', icon: 'logos:mariadb-icon' },
          { name: 'Redis', icon: 'logos:redis' },
        ] },
        { tag: 'Applied AI / ML', tech: [
          { name: 'Python', icon: 'logos:python' },
          { name: 'PyTorch', icon: 'logos:pytorch-icon' },
          { name: 'Hugging Face', icon: 'logos:hugging-face-icon' },
          { name: 'NumPy', icon: 'logos:numpy' },
          { name: 'Pandas', icon: 'logos:pandas-icon' },
          { name: 'Jupyter', icon: 'logos:jupyter' },
        ] },
      ],
    },
    about: {
      bio: [
        'I’m Martin, a Bratislava-based engineer. By day I design and run the Kubernetes platform behind slovensko.sk, Slovakia’s national e-government — provisioning clusters as code, building the GitOps and security underneath, and dragging critical infrastructure into a modern, automated way of working.',
        'Before that I spent years leading and building product: architecting a help-desk SaaS at scale, and co-founding Lapz, a Vision Pro app Forbes called “the best reason yet to buy a Vision Pro.” On the side I build products and stay close to AI — from a deep-learning master’s thesis in medical imaging to fine-tuning generative models for Logram.ai today.',
      ],
      education: 'Education',
      languagesTitle: 'Languages',
      beyond: 'Mountain biking in the Little Carpathians, skiing, and motorcycles. Most of my “rest” still ends up being a side project.',
    },
    projects: {
      intro: 'A lot of my best work lives on private and on-prem GitLab rather than public GitHub — so this is the honest tour, labelled by what each thing actually is.',
    },
    blog: {
      kicker: 'Blog', h1: 'Notes on platform engineering, DevOps & AI.',
      intro: 'Occasional writing about the systems I build and the lessons that don’t fit in a commit message.',
      empty: 'No posts yet — coming soon.', all: '← all posts', min: 'min', readMin: 'min read',
    },
    sections: {
      about: { eyebrow: 'About', title: 'Who I am' },
      skills: { eyebrow: 'Skills', title: 'What I work with', lead: 'TL;DR — whatever the job needs. But if I get to choose: Python.' },
      projects: { eyebrow: 'Work', title: 'Selected work' },
      contact: { eyebrow: 'Contact', title: 'Let’s talk', lead: 'Building something ambitious — or hiring for it? I’m always up for an interesting problem.' },
    },
  },

  sk: {
    nav: { home: 'Domov', about: 'O mne', projects: 'Práca', blog: 'Blog' },
    footer: { tagline: 'Bratislava, Slovensko' },
    home: {
      roles: ['Platform inžinier', 'DevOps inžinier', 'Cloud inžinier', 'Infraštruktúrny inžinier', 'SRE inžinier', 'Softvérový inžinier', 'Backend inžinier', 'Full-stack inžinier', 'AI inžinier', 'ML inžinier', 'Sieťový inžinier', 'Security inžinier', 'Frontend inžinier', 'Mobilný inžinier', 'Solutions architect', 'Systémový inžinier'],
      h1a: 'Nech je technológia akákoľvek,',
      h1accent: 'rozbehnem to.',
      lead: 'Pracujem naprieč celým stackom — infraštruktúra, webové aplikácie a aplikovaná AI — rovnako doma na zrelom produkte pre tisíce používateľov ako na prázdnom repozitári. Najviac ma baví tá skorá, neistá časť: skúmať neznáme, overiť prístup a premeniť nejasný nápad na niečo, čo funguje. Práve teraz je to platforma pod slovenským e-Governmentom v NASES a Logram.ai popri tom.',
      ctaWork: 'Pozri vybrané práce', ctaAbout: 'O mne & CV',
      pillars: [
        { tag: 'Platforma & Cloud-Native', tech: [
          { name: 'Kubernetes', icon: 'logos:kubernetes' },
          { name: 'OpenShift', icon: 'simple-icons:redhatopenshift' },
          { name: 'Helm', icon: 'logos:helm' },
          { name: 'Terraform', icon: 'logos:terraform-icon' },
          { name: 'OpenTofu', icon: 'simple-icons:opentofu' },
          { name: 'Argo CD', icon: 'logos:argo-icon' },
          { name: 'GitLab CI', icon: 'logos:gitlab-icon' },
          { name: 'GitHub Actions', icon: 'logos:github-actions' },
          { name: 'Docker', icon: 'logos:docker-icon' },
          { name: 'Cilium', icon: 'simple-icons:cilium' },
          { name: 'Vault', icon: 'logos:vault-icon' },
          { name: 'Keycloak', icon: 'simple-icons:keycloak' },
          { name: 'Prometheus', icon: 'logos:prometheus' },
          { name: 'Grafana', icon: 'logos:grafana' },
          { name: 'OpenTelemetry', icon: 'logos:opentelemetry-icon' },
          { name: 'Elastic', icon: 'logos:elasticsearch' },
          { name: 'Kafka', icon: 'logos:kafka-icon' },
          { name: 'Apache NiFi', icon: 'simple-icons:apachenifi' },
          { name: 'Ceph', icon: 'simple-icons:ceph' },
          { name: 'AWS', icon: 'logos:aws' },
          { name: 'Oracle Cloud', icon: 'logos:oracle' },
          { name: 'Fortinet', icon: 'simple-icons:fortinet' },
          { name: 'Linux', icon: 'logos:linux-tux' },
        ] },
        { tag: 'Produkt & Architektúra', tech: [
          { name: 'TypeScript', icon: 'logos:typescript-icon' },
          { name: 'JavaScript', icon: 'logos:javascript' },
          { name: 'Python', icon: 'logos:python' },
          { name: 'PHP', icon: 'logos:php' },
          { name: 'Java', icon: 'logos:java' },
          { name: 'Kotlin', icon: 'logos:kotlin-icon' },
          { name: 'Swift', icon: 'logos:swift' },
          { name: 'Ruby', icon: 'logos:ruby' },
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'React', icon: 'logos:react' },
          { name: 'Next.js', icon: 'logos:nextjs-icon' },
          { name: 'Vue.js', icon: 'logos:vue' },
          { name: 'Svelte', icon: 'logos:svelte-icon' },
          { name: 'Astro', icon: 'logos:astro-icon' },
          { name: 'Laravel', icon: 'logos:laravel' },
          { name: 'Symfony', icon: 'logos:symfony' },
          { name: 'Spring', icon: 'logos:spring-icon' },
          { name: 'FastAPI', icon: 'logos:fastapi-icon' },
          { name: 'Drupal', icon: 'logos:drupal-icon' },
          { name: 'Android', icon: 'logos:android-icon' },
          { name: 'PostgreSQL', icon: 'logos:postgresql' },
          { name: 'MySQL', icon: 'logos:mysql-icon' },
          { name: 'MariaDB', icon: 'logos:mariadb-icon' },
          { name: 'Redis', icon: 'logos:redis' },
        ] },
        { tag: 'Aplikovaná AI / ML', tech: [
          { name: 'Python', icon: 'logos:python' },
          { name: 'PyTorch', icon: 'logos:pytorch-icon' },
          { name: 'Hugging Face', icon: 'logos:hugging-face-icon' },
          { name: 'NumPy', icon: 'logos:numpy' },
          { name: 'Pandas', icon: 'logos:pandas-icon' },
          { name: 'Jupyter', icon: 'logos:jupyter' },
        ] },
      ],
    },
    about: {
      bio: [
        'Som Martin, inžinier z Bratislavy. Cez deň navrhujem a prevádzkujem Kubernetes platformu pod slovensko.sk, portálom slovenského e-Governmentu — nasadzujem klastre ako kód, staviam GitOps a bezpečnosť pod tým a ťahám kritickú infraštruktúru do moderného, automatizovaného sveta.',
        'Predtým som roky viedol a staval produkty: architektúra helpdesk SaaS vo veľkom a spoluzaloženie Lapz, aplikácie pre Vision Pro, ktorú Forbes nazval „najlepším dôvodom kúpiť si Vision Pro". Popri tom stavám produkty a držím sa blízko AI — od diplomovej práce o hlbokom učení v medicínskom zobrazovaní po fine-tuning generatívnych modelov pre Logram.ai.',
      ],
      education: 'Vzdelanie',
      languagesTitle: 'Jazyky',
      beyond: 'Horská cyklistika v Malých Karpatoch, lyžovanie a motorky. Väčšina môjho „oddychu" aj tak skončí ako vedľajší projekt.',
    },
    projects: {
      intro: 'Veľa mojej najlepšej práce žije na súkromnom a on-prem GitLabe, nie na verejnom GitHube — toto je teda úprimná prehliadka, kde je každá vec označená podľa toho, čím naozaj je.',
    },
    blog: {
      kicker: 'Blog', h1: 'Poznámky o platform engineeringu, DevOps a AI.',
      intro: 'Občasné písanie o systémoch, ktoré stavám, a o ponaučeniach, ktoré sa nezmestia do commit message.',
      empty: 'Zatiaľ žiadne príspevky — už čoskoro.', all: '← všetky príspevky', min: 'min', readMin: 'min čítania',
    },
    sections: {
      about: { eyebrow: 'O mne', title: 'Kto som' },
      skills: { eyebrow: 'Zručnosti', title: 'S čím pracujem', lead: 'TL;DR — čokoľvek, čo treba. Ale ak si môžem vybrať: Python.' },
      projects: { eyebrow: 'Práca', title: 'Vybrané práce' },
      contact: { eyebrow: 'Kontakt', title: 'Ozvime sa', lead: 'Staviate niečo ambiciózne — alebo na to hľadáte človeka? Vždy si rád dám zaujímavý problém.' },
    },
  },
};

export const useTranslations = (lang: Lang): Dict => ui[lang];
