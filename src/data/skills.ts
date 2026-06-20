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
    items: ['Go', 'Python', 'TypeScript / JavaScript', 'PHP', 'Java', 'Swift', 'Kotlin', 'Bash'],
  },
  {
    label: 'Web & Frameworks',
    items: ['Svelte', 'Vue.js', 'React', 'Astro', 'FastAPI', 'Laravel', 'Symfony', 'Spring'],
  },
  {
    label: 'Data & Messaging',
    items: ['PostgreSQL', 'MySQL', 'ElasticSearch', 'Apache Kafka', 'Apache NiFi', 'Redis'],
  },
  {
    label: 'AI / ML',
    items: ['PyTorch', 'Deep learning', '3D CNNs / segmentation', 'Model fine-tuning', 'OmniSVG'],
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
    program: 'Ing. (MSc), Intelligent Software Systems',
    period: '2016 — 2022',
    note: 'Master’s thesis: “Brain volumetric segmentation using deep learning” — 3D fully-convolutional networks for subcortical brain MRI segmentation, benchmarked against clinical tools (FreeSurfer / FSL).',
  },
];
