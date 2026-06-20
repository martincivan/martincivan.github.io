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
      'Wrote production Go (custom cert-manager DNS01 webhooks) and handled network engineering across F5 BIG-IP, Fortinet and Cilium BGP.',
    ],
    stack: ['OpenShift', 'Terraform', 'ArgoCD', 'GitLab CI', 'Helm', 'Go', 'Cilium', 'Vault', 'Kafka'],
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
    stack: ['Swift', 'visionOS', 'RealityKit', 'Real-time data'],
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
    stack: ['PHP', 'JavaScript', 'Java', 'Python', 'ElasticSearch', 'AWS', 'Terraform'],
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
