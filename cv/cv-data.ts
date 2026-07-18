// Self-contained CV data for the generator.
//
// The website timeline (../src/data/work.ts) was consolidated into a single,
// lean list (summary + stack, no per-role bullets) that's great for the site but
// too thin for a strong CV. This module keeps the richer, bullet-level record the
// CV needs — experience, grouped skills, languages, education and projects —
// reconciled with the latest facts on the site. Identity/contact still comes from
// ../src/data/profile.ts so that stays single-source.

export interface Role {
  company: string;
  title: string;
  period: string;
  location?: string;
  href?: string;
  summary: string;
  highlights: string[];
  stack?: string[];
}

export const experience: Role[] = [
  {
    company: 'NASES',
    title: 'DevSecOps & Platform Engineer',
    period: 'Oct 2024 — present',
    location: 'Bratislava, Slovakia',
    href: 'https://www.nases.gov.sk/',
    summary:
      'Designing and operating the cloud-native platform behind slovensko.sk — Slovakia’s national e-government — modernising critical infrastructure in a historically rigid environment.',
    highlights: [
      'Provision OpenShift/OKD clusters fully as code (Terraform + GitLab CI) across three Oracle Private Cloud Appliances and bare-metal Dell hardware via the Agent-Based Installer and iDRAC.',
      'Run a 40+ component GitOps platform on self-managing ArgoCD: Vault, Keycloak, Strimzi Kafka, CloudNativePG and Oracle/MariaDB operators, Rook-Ceph/ODF storage, Cilium eBPF CNI with BGP, cert-manager, and a full Prometheus/Grafana/Loki/Tempo observability stack.',
      'Authored the organisation’s central GitLab CI/CD component catalog with SAST, dependency, container and secret scanning, cosign image signing and SCA — supply-chain-secured pipelines reused across teams.',
      'Built custom cert-manager DNS01 webhook integrations and handled network engineering across F5 BIG-IP, Fortinet and Cilium BGP.',
    ],
    stack: ['OpenShift', 'Terraform', 'ArgoCD', 'GitLab CI', 'Helm', 'Java', 'Spring', 'Gradle', 'Cilium', 'Vault', 'Keycloak', 'Kafka', 'Oracle', 'PostgreSQL', 'Prometheus', 'Grafana'],
  },
  {
    company: 'Lapz',
    title: 'Co-founder & Technical Lead',
    period: 'Jan 2024 — Jan 2025',
    location: 'Remote / Prague',
    href: 'https://www.forbes.com/sites/barrycollins/2024/10/02/this-incredible-f1-app-is-the-best-reason-yet-to-buy-a-vision-pro/',
    summary:
      'Co-founded and led engineering on Lapz — a spatial Formula 1 companion app for Apple Vision Pro, built natively in Swift. Featured by Forbes as “the best reason yet to buy a Vision Pro.”',
    highlights: [
      'Owned all real-time telemetry: data loading, handling, manipulation and playback driving the spatial visualisation.',
      'Led a small cross-functional team (UI/UX, 3D, engineering) from concept to a shipped, critically-acclaimed product.',
      'Sunset after an F1 cease-and-desist and Apple discontinuing the Vision Pro.',
    ],
    stack: ['Swift', 'Python', 'visionOS', 'RealityKit', 'Real-time data'],
  },
  {
    company: 'QualityUnit',
    title: 'Full-Stack Engineer & Tech Lead (LiveAgent)',
    period: 'Jul 2017 — Dec 2023',
    location: 'Bratislava, Slovakia',
    href: 'https://www.liveagent.com/',
    summary:
      'Helped lead development of LiveAgent, a help-desk SaaS used by tens of thousands of companies — across feature work, architecture, and the DevOps underneath it.',
    highlights: [
      'Drove key software-architecture decisions and supported the full lifecycle: feature development, refactoring, testing and DevOps.',
      'Part of the leadership team for two years — mentored developers and ran hiring interviews.',
      'Worked across the stack and the platform: PHP, JavaScript, Java, Python on MySQL, ElasticSearch and the ELK stack, with Salt, Terraform, AWS (S3, KMS, DynamoDB, SQS) and GitHub Actions.',
    ],
    stack: ['PHP', 'JavaScript', 'Java', 'Python', 'MariaDB', 'Redis', 'ElasticSearch', 'AWS', 'Terraform'],
  },
  {
    company: 'DXC Technology',
    title: 'Developer',
    period: 'Jun 2020 — Aug 2020',
    location: 'Bratislava, Slovakia',
    summary:
      'Built and deployed an internal web application to organise running relay races — registering racers, arranging teams and assigning runners to segments.',
    highlights: ['Two-person team; full delivery from build to deployment.'],
    stack: ['Angular', 'Python (Flask)', 'Docker', 'MySQL', 'Azure'],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'Platform & Infrastructure',
    items: ['Kubernetes', 'OpenShift / OKD', 'Terraform / OpenTofu', 'ArgoCD (GitOps)', 'Helm', 'GitLab CI/CD', 'GitHub Actions', 'Docker', 'Vault', 'Cilium', 'F5 BIG-IP'],
  },
  {
    label: 'Cloud & Observability',
    items: ['AWS', 'Oracle Cloud / PCA', 'Azure', 'Prometheus', 'Grafana', 'Loki / Tempo', 'OpenTelemetry', 'Keycloak'],
  },
  {
    label: 'Languages',
    items: ['Python', 'TypeScript / JavaScript', 'PHP', 'Java', 'Swift', 'Kotlin', 'Ruby'],
  },
  {
    label: 'Web & Frameworks',
    items: ['Svelte', 'Vue.js', 'React', 'Astro', 'FastAPI', 'Laravel', 'Symfony', 'Spring', 'Rails', 'Django'],
  },
  {
    label: 'Data & Messaging',
    items: ['PostgreSQL', 'MySQL / MariaDB', 'ElasticSearch', 'Apache Kafka', 'Apache NiFi', 'Redis'],
  },
  {
    label: 'AI / ML',
    items: ['Generative AI / LLMs', 'Model fine-tuning', 'Agentic development', 'Claude Code', 'Cursor', 'Windsurf', 'OmniSVG', 'PyTorch', 'Deep learning', '3D CNNs / segmentation'],
  },
];

export const languages = [
  { lang: 'Slovak', level: 'Native (C2)' },
  { lang: 'English', level: 'Advanced (C1)' },
  { lang: 'German', level: 'Elementary (A2)' },
];

export const education = [
  {
    school: 'Slovak University of Technology — FIIT',
    program: 'Ing., Intelligent Software Systems',
    period: '2016 — 2022',
    note: 'Master’s thesis: “Brain volumetric segmentation using deep learning” — 3D fully-convolutional networks for subcortical brain MRI segmentation, benchmarked against clinical tools (FreeSurfer / FSL).',
  },
];

export type ProjectCategory = 'Platform & Infrastructure' | 'Products' | 'AI / ML' | 'Demos & Experiments';

export interface Project {
  name: string;
  category: ProjectCategory;
  role: string;
  year: string;
  blurb: string;
  stack: string[];
  link?: { href: string; label: string };
  status?: 'current' | 'shipped' | 'sunset' | 'unlaunched' | 'demo';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'NASES — National e-Government Platform',
    category: 'Platform & Infrastructure',
    role: 'DevSecOps & Platform Engineer',
    year: '2024 — present',
    status: 'current',
    featured: true,
    blurb:
      'The cloud-native foundation under slovensko.sk: multi-cluster OpenShift provisioned as code across Oracle Private Cloud Appliances and bare-metal, GitOps-driven via self-managing ArgoCD, with end-to-end observability, secrets, identity and policy on sovereign infrastructure.',
    stack: ['OpenShift', 'Terraform', 'ArgoCD', 'Cilium', 'Vault'],
  },
  {
    name: 'Lapz — F1 AR for Apple Vision Pro',
    category: 'Products',
    role: 'Co-founder & Tech Lead',
    year: '2024',
    status: 'sunset',
    featured: true,
    blurb:
      'A spatial Formula 1 companion app, native in Swift for visionOS. Featured by Forbes as “the best reason yet to buy a Vision Pro.” Sunset after an F1 cease-and-desist and Apple discontinuing the Vision Pro.',
    stack: ['Swift', 'visionOS', 'RealityKit'],
    link: {
      href: 'https://www.forbes.com/sites/barrycollins/2024/10/02/this-incredible-f1-app-is-the-best-reason-yet-to-buy-a-vision-pro/',
      label: 'Forbes feature',
    },
  },
  {
    name: 'Logram.ai',
    category: 'AI / ML',
    role: 'Co-builder',
    year: '2026 — present',
    status: 'current',
    featured: true,
    blurb:
      'An AI-native brand & logo design platform that generates editable vector identities. I work on the generative side — fine-tuning OmniSVG for controllable SVG output.',
    stack: ['Next.js', 'OmniSVG', 'Fine-tuning', 'SVG'],
    link: { href: 'https://www.logram.ai/', label: 'logram.ai' },
  },
  {
    name: 'Medical Navigator',
    category: 'Products',
    role: 'Engineer (client project)',
    year: '2026',
    status: 'shipped',
    blurb:
      'A multilingual healthcare directory — clinic/doctor search with faceted filtering, ranking and pricing — built on Drupal 11 and deployed to AWS ECS Fargate behind an ALB, via a multi-account Terraform setup driven by GitHub Actions.',
    stack: ['Drupal 11', 'PHP', 'AWS ECS', 'Terraform'],
  },
  {
    name: 'ViaJet',
    category: 'Products',
    role: 'Solo side project',
    year: '2025 — present',
    status: 'unlaunched',
    blurb:
      'A B2B2C private-jet charter marketplace — charter companies publish empty-leg flights, customers search, compare and book. The app is essentially complete; launch is gated on the business and regulatory side of charter operations.',
    stack: ['Python', 'TypeScript', 'PostgreSQL'],
  },
  {
    name: 'Brain MRI Segmentation',
    category: 'AI / ML',
    role: 'Master’s thesis',
    year: '2021',
    status: 'shipped',
    blurb:
      '3D fully-convolutional networks for segmenting subcortical brain structures from volumetric MRI, validated against expert annotations and benchmarked versus FreeSurfer/FSL — motivated by neurodegenerative-disease diagnosis.',
    stack: ['PyTorch', '3D FCN', 'MRI / NIfTI'],
  },
  {
    name: 'treeplanner',
    category: 'Demos & Experiments',
    role: 'WebGL demo',
    year: '2024',
    status: 'demo',
    blurb:
      'A browser 3D experiment: rendering trees from Gaussian-splat and 3DS models with three.js, including a WebXR/AR mode. Built to explore real-time 3D and spatial capture on the web.',
    stack: ['three.js', 'WebGL', 'WebXR', 'Gaussian splatting'],
    link: { href: '/treeplanner/', label: 'Live demo' },
  },
  {
    name: 'YardSight',
    category: 'Demos & Experiments',
    role: 'Prototype',
    year: '2026',
    status: 'demo',
    blurb:
      'A prototype “yard intelligence” platform for compound management of imported vehicles — exploring a TypeScript/Bun + PostgreSQL stack end to end.',
    stack: ['TypeScript', 'Bun', 'PostgreSQL'],
  },
];
