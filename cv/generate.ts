#!/usr/bin/env node
// Tailored CV generator.
//   node generate.ts --profile=<name> [--no-pdf] [--browser=/path/to/chromium]
// Reads a job profile from ./profiles/<name>.json, merges it with the website's
// data (../src/data/*), and emits ./out/<name>.html (+ .pdf unless --no-pdf).

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

import { profile as identity } from '../src/data/profile.ts';
import { experience, skills, languages, education, projects } from './cv-data.ts';
import { renderCv, type CvModel } from './template.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---- args ----------------------------------------------------------------
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    return m ? [m[1], m[2] ?? true] : [a, true];
  }),
);
const profileName = (args.profile as string) || 'default';
// Output basename. Defaults to a neutral, company-free name so the file you upload
// never reveals it was tailored; override with --out=<name> if needed. The file
// lands in out/<profile>/ — the per-position subdirectory keeps applications tidy,
// and the listing name stays in the (private) directory, not on the PDF.
const outName = (args.out as string) || 'martin-civan-cv';
const wantPdf = args['no-pdf'] !== true;

// ---- load profile --------------------------------------------------------
interface JobProfile {
  targetRole?: string;
  summary?: string;
  emphasize?: string[];
  skillGroups?: string[];
  roles?: string[];
  maxBulletsPerRole?: number;
  projects?: string[];
  showProjects?: boolean;
  accent?: string;
  // Path to a headshot (relative to cv/), embedded into the HTML as a data URI.
  // Per-profile on purpose: some markets expect a photo, others discourage it.
  photo?: string;
  // Per-listing reframing: override a role's title/summary/bullets without
  // touching the shared data (so other profiles are unaffected). Keyed by company.
  roleOverrides?: Record<string, { title?: string; summary?: string; bullets?: string[] }>;
}

let job: JobProfile = {};
const profilePath = resolve(__dirname, 'profiles', `${profileName}.json`);
if (existsSync(profilePath)) {
  job = JSON.parse(readFileSync(profilePath, 'utf8'));
} else if (profileName !== 'default') {
  console.error(`✗ Profile not found: ${profilePath}`);
  process.exit(1);
}

// ---- helpers: order/filter by a name list (case-insensitive) -------------
const orderBy = <T>(items: T[], names: string[] | undefined, key: (t: T) => string): T[] => {
  if (!names || names.length === 0) return items;
  const lower = names.map((n) => n.toLowerCase());
  return items
    .filter((it) => lower.includes(key(it).toLowerCase()))
    .sort((a, b) => lower.indexOf(key(a).toLowerCase()) - lower.indexOf(key(b).toLowerCase()));
};

// ---- build model ---------------------------------------------------------
const maxBullets = job.maxBulletsPerRole ?? 4;
const selectedRoles = orderBy(experience, job.roles, (r) => r.company).map((r) => {
  const ov = job.roleOverrides?.[r.company];
  return {
    ...r,
    title: ov?.title ?? r.title,
    summary: ov?.summary ?? r.summary,
    bullets: (ov?.bullets ?? r.highlights).slice(0, maxBullets),
  };
});

// Emphasized skills lead their group — a recruiter scanning for the listing's
// keywords shouldn't have to hunt for them mid-list. Non-emphasized items keep
// their data order (sort is stable).
const emphasizeRank = (item: string) => {
  const i = (job.emphasize ?? []).findIndex((e) => e.toLowerCase() === item.toLowerCase());
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};
const selectedSkills = orderBy(skills, job.skillGroups, (g) => g.label).map((g) => ({
  ...g,
  items: [...g.items].sort((a, b) => emphasizeRank(a) - emphasizeRank(b)),
}));

const showProjects = job.showProjects ?? true;
const defaultProjects = projects.filter((p) => p.featured);
const selectedProjects = showProjects
  ? (job.projects ? orderBy(projects, job.projects, (p) => p.name) : defaultProjects).slice(0, 5)
  : [];

let photo: string | undefined;
if (job.photo) {
  const photoPath = resolve(__dirname, job.photo);
  if (!existsSync(photoPath)) {
    console.error(`✗ Photo not found: ${photoPath}`);
    process.exit(1);
  }
  const mime = photoPath.endsWith('.png') ? 'image/png' : 'image/jpeg';
  photo = `data:${mime};base64,${readFileSync(photoPath).toString('base64')}`;
}

const model: CvModel = {
  profile: identity,
  targetRole: job.targetRole ?? identity.tagline,
  summary: job.summary ?? identity.summary,
  emphasize: job.emphasize ?? [],
  skills: selectedSkills,
  languages,
  education,
  roles: selectedRoles,
  projects: selectedProjects,
  accent: job.accent ?? '#4f46e5',
  photo,
};

// ---- render --------------------------------------------------------------
const outDir = resolve(__dirname, 'out', profileName);
mkdirSync(outDir, { recursive: true });
const html = renderCv(model);
const htmlPath = resolve(outDir, `${outName}.html`);
writeFileSync(htmlPath, html);
console.log(`✓ HTML  → ${htmlPath}`);

if (!wantPdf) process.exit(0);

// ---- pdf via system Chromium (puppeteer-core, no bundled download) -------
function findBrowser(): string | null {
  if (typeof args.browser === 'string') return args.browser;
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  const candidates = [
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/brave',
    '/opt/google/chrome/chrome',
  ];
  return candidates.find((c) => existsSync(c)) ?? null;
}

const browserPath = findBrowser();
if (!browserPath) {
  console.warn('! No Chromium/Chrome found — wrote HTML only. Open it and print to PDF, or pass --browser=/path.');
  process.exit(0);
}

const { default: puppeteer } = await import('puppeteer-core');
const browser = await puppeteer.launch({
  executablePath: browserPath,
  headless: true,
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });
const pdfPath = resolve(outDir, `${outName}.pdf`);
await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`✓ PDF   → ${pdfPath}`);
