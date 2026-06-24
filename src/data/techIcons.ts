// Shared lookup from a tech's display name to its Iconify icon (logos / simple-icons).
// Used to render icon chips in the experience "stack" lists. Names without an entry
// fall back to a plain text chip.
export const techIcons: Record<string, string> = {
  OpenShift: 'simple-icons:redhatopenshift',
  Terraform: 'logos:terraform-icon',
  ArgoCD: 'logos:argo-icon',
  'GitLab CI': 'logos:gitlab-icon',
  Helm: 'logos:helm',
  Go: 'logos:go',
  Cilium: 'simple-icons:cilium',
  Vault: 'logos:vault-icon',
  Kafka: 'logos:kafka-icon',
  Swift: 'logos:swift',
  visionOS: 'logos:apple',
  PHP: 'logos:php',
  JavaScript: 'logos:javascript',
  Java: 'logos:java',
  Spring: 'logos:spring-icon',
  Gradle: 'logos:gradle',
  Oracle: 'logos:oracle',
  PostgreSQL: 'logos:postgresql',
  Keycloak: 'simple-icons:keycloak',
  Prometheus: 'logos:prometheus',
  Grafana: 'logos:grafana',
  Python: 'logos:python',
  'Python (Flask)': 'logos:flask',
  ElasticSearch: 'logos:elasticsearch',
  AWS: 'logos:aws',
  Angular: 'logos:angular-icon',
  Docker: 'logos:docker-icon',
  MySQL: 'logos:mysql-icon',
  MariaDB: 'logos:mariadb-icon',
  Redis: 'logos:redis',
  Azure: 'logos:microsoft-azure',
};

// Icons that are monochrome or predominantly dark — they carry no inner colour detail,
// so we render them as a light silhouette (readable on the dark background) rather than
// trying to preserve structure. Everything else is a "rich" logo whose inner detail we
// keep at rest (greyscale) and reveal in full colour on hover.
// All `simple-icons:*` are monochrome and handled by prefix in iconTone().
const FLAT_ICONS = new Set([
  'logos:apple',
  'logos:flask',
  'logos:openai-icon',
  'logos:kafka-icon',
  'logos:gradle',
  'logos:oracle',
  'logos:symfony',
  'logos:linux-tux',
  'logos:pandas-icon',
  'logos:aws',
  'logos:astro-icon',
]);

export const iconTone = (icon: string): 'flat' | 'rich' =>
  icon.startsWith('simple-icons:') || FLAT_ICONS.has(icon) ? 'flat' : 'rich';
