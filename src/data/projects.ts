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
    stack: ['OpenShift', 'Terraform', 'ArgoCD', 'Cilium', 'Vault', 'Go'],
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
    year: '2025 — present',
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
    year: '2025',
    status: 'shipped',
    blurb:
      'A multilingual healthcare directory — clinic/doctor search with faceted filtering, ranking and pricing — built on Drupal 11 and deployed to AWS ECS Fargate behind an ALB, via a multi-account Terraform setup driven by GitHub Actions.',
    stack: ['Drupal 11', 'PHP', 'AWS ECS', 'Terraform'],
  },
  {
    name: 'ViaJet',
    category: 'Products',
    role: 'Solo side project',
    year: '2025',
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
    year: '2025',
    status: 'demo',
    blurb:
      'A prototype “yard intelligence” platform for compound management of imported vehicles — exploring a TypeScript/Bun + PostgreSQL stack end to end.',
    stack: ['TypeScript', 'Bun', 'PostgreSQL'],
  },
];
