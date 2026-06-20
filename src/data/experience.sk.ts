import type { Role } from './experience';

export const experienceSk: Role[] = [
  {
    company: 'NASES',
    title: 'DevSecOps & Platform inžinier',
    period: 'okt 2024 — súčasnosť',
    location: 'Bratislava, Slovensko',
    href: 'https://www.nases.gov.sk/',
    summary:
      'Navrhujem a prevádzkujem cloud-native platformu pod slovensko.sk — portálom slovenského e-Governmentu — a modernizujem kritickú infraštruktúru v historicky rigidnom prostredí.',
    highlights: [
      'Nasadzujem OpenShift/OKD klastre plne ako kód (Terraform + GitLab CI) naprieč tromi Oracle Private Cloud Appliances a holým železom Dell cez Agent-Based Installer a iDRAC.',
      'Prevádzkujem GitOps platformu so 40+ komponentmi nad samo-spravujúcim ArgoCD: Vault, Keycloak, Strimzi Kafka, CloudNativePG a Oracle/MariaDB operátory, Rook-Ceph/ODF storage, Cilium eBPF CNI s BGP, cert-manager a kompletný observability stack Prometheus/Grafana/Loki/Tempo.',
      'Vytvoril som centrálny katalóg GitLab CI/CD komponentov pre celú organizáciu so SAST, dependency, container a secret scanningom, cosign podpisovaním images a SCA — pipeliny so zabezpečeným dodávateľským reťazcom, znovupoužívané naprieč tímami.',
      'Písal som produkčný Go (vlastné cert-manager DNS01 webhooky) a riešil network engineering naprieč F5 BIG-IP, Fortinet a Cilium BGP.',
    ],
    stack: ['OpenShift', 'Terraform', 'ArgoCD', 'GitLab CI', 'Helm', 'Go', 'Cilium', 'Vault', 'Kafka'],
  },
  {
    company: 'Lapz',
    title: 'Spoluzakladateľ & technický líder',
    period: 'jan 2024 — jan 2025',
    location: 'Remote / Praha',
    href: 'https://www.forbes.com/sites/barrycollins/2024/10/02/this-incredible-f1-app-is-the-best-reason-yet-to-buy-a-vision-pro/',
    summary:
      'Spoluzaložil som a viedol vývoj Lapz — priestorovej aplikácie k Formule 1 pre Apple Vision Pro, natívne vo Swifte. Forbes ju označil za „najlepší dôvod kúpiť si Vision Pro".',
    highlights: [
      'Vlastnil som celú real-time telemetriu: načítavanie, spracovanie, manipuláciu a prehrávanie dát poháňajúce priestorovú vizualizáciu.',
      'Viedol som malý cross-funkčný tím (UI/UX, 3D, vývoj) od konceptu po doručený, kriticky uznávaný produkt.',
      'Ukončené po cease-and-desist od F1 a po tom, čo Apple zrušil Vision Pro.',
    ],
    stack: ['Swift', 'visionOS', 'RealityKit', 'Real-time dáta'],
  },
  {
    company: 'QualityUnit',
    title: 'Full-Stack inžinier & tech líder (LiveAgent)',
    period: 'júl 2017 — dec 2023',
    location: 'Bratislava, Slovensko',
    href: 'https://www.liveagent.com/',
    summary:
      'Pomáhal som viesť vývoj LiveAgentu, helpdesk SaaS používaného desiatkami tisíc firiem — naprieč feature prácou, architektúrou a DevOps pod tým.',
    highlights: [
      'Viedol som kľúčové architektonické rozhodnutia a pokrýval celý životný cyklus: vývoj funkcií, refaktoring, testovanie a DevOps.',
      'Dva roky súčasťou vedenia tímu — mentoroval som vývojárov a viedol prijímacie pohovory.',
      'Pracoval som naprieč celým stackom aj platformou: PHP, JavaScript, Java, Python nad MySQL, ElasticSearch a ELK stackom, so Salt, Terraform, AWS (S3, KMS, DynamoDB, SQS) a GitHub Actions.',
    ],
    stack: ['PHP', 'JavaScript', 'Java', 'Python', 'ElasticSearch', 'AWS', 'Terraform'],
  },
  {
    company: 'DXC Technology',
    title: 'Vývojár',
    period: 'jún 2020 — aug 2020',
    location: 'Bratislava, Slovensko',
    summary:
      'Postavil a nasadil som internú webovú aplikáciu na organizáciu bežeckých štafiet — registrácia bežcov, zostavovanie tímov a priraďovanie k úsekom.',
    highlights: ['Dvojčlenný tím; kompletné doručenie od buildu po nasadenie.'],
    stack: ['Angular', 'Python (Flask)', 'Docker', 'MySQL', 'Azure'],
  },
];
