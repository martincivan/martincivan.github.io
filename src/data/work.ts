// One unified, reverse-chronological record of everything Martin has built — paid
// contracts, co-founded ventures, research and demos alike. There's no hard border
// between "employment" and "projects", so they live in a single timeline, each tagged
// by what it was rather than sorted into a bucket.
export interface Work {
  name: string;
  kind: string; // light tag: Contract / Co-founded / Research / Demo …
  period: string;
  status?: 'current' | 'shipped' | 'sunset' | 'unlaunched' | 'demo';
  featured?: boolean;
  href?: string; // link on the title (company / project site)
  summary: string;
  stack: string[];
  link?: { href: string; label: string }; // explicit call-to-action link
  icon?: string; // lucide icon name representing the project
  accent?: string; // hex hue for the project's icon tile + timeline marker
  // Press / external recognition rendered as a pull-quote card.
  feature?: { source: string; quote: string; href: string };
}

export const work: Work[] = [
  {
    name: 'NASES — National e-Government Platform',
    kind: 'Contract',
    period: '2024 — present',
    status: 'current',
    featured: true,
    href: 'https://www.nases.gov.sk/',
    summary:
      'The cloud-native foundation under slovensko.sk: multi-cluster OpenShift provisioned as code across Oracle Private Cloud Appliances and bare-metal, GitOps-driven via self-managing ArgoCD, with end-to-end observability, secrets, identity and policy on sovereign infrastructure.',
    stack: ['OpenShift', 'Terraform', 'ArgoCD', 'GitLab CI', 'Helm', 'Go', 'Java', 'Spring', 'Cilium', 'Vault', 'Keycloak', 'Kafka', 'Oracle', 'PostgreSQL', 'Prometheus', 'Grafana'],
    icon: 'lucide:landmark',
    accent: '#818cf8',
  },
  {
    name: 'Logram.ai',
    kind: 'Research · co-founded',
    period: '2026 — present',
    status: 'current',
    featured: true,
    summary:
      'An AI-native brand & logo design platform that generates editable vector identities. I work on the generative side — fine-tuning OmniSVG for controllable SVG output.',
    stack: ['Next.js', 'OmniSVG', 'Fine-tuning', 'SVG'],
    link: { href: 'https://www.logram.ai/', label: 'logram.ai' },
    icon: 'lucide:sparkles',
    accent: '#c084fc',
  },
  {
    name: 'Lapz — F1 AR for Apple Vision Pro',
    kind: 'Co-founded',
    period: '2024',
    status: 'sunset',
    featured: true,
    summary:
      'A spatial Formula 1 companion app, native in Swift for visionOS. I owned all real-time telemetry — loading, handling and playback driving the spatial visualisation. Featured by Forbes as “the best reason yet to buy a Vision Pro.” Sunset after an F1 cease-and-desist and Apple discontinuing the Vision Pro.',
    stack: ['Swift', 'Python', 'visionOS', 'RealityKit'],
    link: {
      href: 'https://www.forbes.com/sites/barrycollins/2024/10/02/this-incredible-f1-app-is-the-best-reason-yet-to-buy-a-vision-pro/',
      label: 'Forbes feature',
    },
    icon: 'lucide:gauge',
    accent: '#fb7185',
    feature: {
      source: 'Forbes',
      quote: 'The best reason yet to buy a Vision Pro.',
      href: 'https://www.forbes.com/sites/barrycollins/2024/10/02/this-incredible-f1-app-is-the-best-reason-yet-to-buy-a-vision-pro/',
    },
  },
  {
    name: 'Medical Navigator',
    kind: 'Contract',
    period: '2026',
    status: 'shipped',
    summary:
      'A multilingual healthcare directory — clinic/doctor search with faceted filtering, ranking and pricing — built on Drupal 11 and deployed to AWS ECS Fargate behind an ALB, via a multi-account Terraform setup driven by GitHub Actions.',
    stack: ['Drupal 11', 'PHP', 'AWS ECS', 'Terraform'],
    icon: 'lucide:stethoscope',
    accent: '#34d399',
  },
  {
    name: 'ViaJet',
    kind: 'Co-founded',
    period: '2025 — present',
    status: 'current',
    summary:
      'A B2B2C private-jet charter marketplace — charter companies publish empty-leg flights, customers search, compare and book. The app is essentially complete; launch is gated on the business and regulatory side of charter operations.',
    stack: ['Python', 'TypeScript', 'PostgreSQL'],
    icon: 'lucide:plane',
    accent: '#38bdf8',
  },
  {
    name: 'YardSight',
    kind: 'Demo',
    period: '2026',
    status: 'demo',
    summary:
      'A prototype “yard intelligence” platform for compound management of imported vehicles — exploring a TypeScript/Bun + PostgreSQL stack end to end.',
    stack: ['TypeScript', 'Bun', 'PostgreSQL'],
    icon: 'lucide:scan-eye',
    accent: '#fbbf24',
  },
  {
    name: 'treeplanner',
    kind: 'Demo',
    period: '2024',
    status: 'demo',
    summary:
      'A browser 3D experiment: rendering trees from Gaussian-splat and 3DS models with three.js, including a WebXR/AR mode. Built to explore real-time 3D and spatial capture on the web.',
    stack: ['three.js', 'WebGL', 'WebXR', 'Gaussian splatting'],
    link: { href: '/treeplanner/', label: 'Live demo' },
    icon: 'lucide:trees',
    accent: '#4ade80',
  },
  {
    name: 'LiveAgent',
    kind: 'Contract',
    period: '2017 — 2023',
    status: 'shipped',
    href: 'https://www.liveagent.com/',
    summary:
      'Helped lead development of LiveAgent, a help-desk SaaS used by tens of thousands of companies — across feature work, architecture and the DevOps underneath it. Part of the leadership team for two years, mentoring developers and running hiring.',
    stack: ['PHP', 'JavaScript', 'Java', 'Python', 'MariaDB', 'Redis', 'ElasticSearch', 'AWS', 'Terraform'],
    icon: 'lucide:headset',
    accent: '#60a5fa',
  },
  {
    name: 'Brain MRI Segmentation',
    kind: 'Research',
    period: '2021',
    status: 'shipped',
    summary:
      '3D fully-convolutional networks for segmenting subcortical brain structures from volumetric MRI, validated against expert annotations and benchmarked versus FreeSurfer/FSL — motivated by neurodegenerative-disease diagnosis.',
    stack: ['PyTorch', '3D FCN', 'MRI / NIfTI'],
    icon: 'lucide:brain',
    accent: '#e879f9',
  },
  {
    name: 'DXC Technology',
    kind: 'Contract',
    period: '2020',
    status: 'shipped',
    summary:
      'Built and deployed an internal web application to organise running relay races — registering racers, arranging teams and assigning runners to segments. Two-person team; full delivery from build to deployment.',
    stack: ['Angular', 'Python (Flask)', 'Docker', 'MySQL', 'Azure'],
    icon: 'lucide:network',
    accent: '#22d3ee',
  },
];
