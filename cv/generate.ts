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
import { experience } from '../src/data/experience.ts';
import { skills, languages, education } from '../src/data/skills.ts';
import { projects } from '../src/data/projects.ts';
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
const selectedRoles = orderBy(experience, job.roles, (r) => r.company).map((r) => ({
  ...r,
  bullets: r.highlights.slice(0, maxBullets),
}));

const selectedSkills = orderBy(skills, job.skillGroups, (g) => g.label);

const showProjects = job.showProjects ?? true;
const defaultProjects = projects.filter((p) => p.featured);
const selectedProjects = showProjects
  ? (job.projects ? orderBy(projects, job.projects, (p) => p.name) : defaultProjects).slice(0, 5)
  : [];

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
};

// ---- render --------------------------------------------------------------
const outDir = resolve(__dirname, 'out');
mkdirSync(outDir, { recursive: true });
const html = renderCv(model);
const htmlPath = resolve(outDir, `${profileName}.html`);
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
const pdfPath = resolve(outDir, `${profileName}.pdf`);
await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`✓ PDF   → ${pdfPath}`);
