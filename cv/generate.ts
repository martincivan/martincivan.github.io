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
import { work } from '../src/data/work.ts';
import { ui } from '../src/i18n/ui.ts';
import { languages, education } from './cv-data.ts';
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
// --out=<dir>       where to write output (default: ./out). Relative paths resolve
//                   against the current working directory so a per-listing
//                   application folder can be targeted directly.
// --filename=<base> base name for the emitted files (default: the profile name).
//                   e.g. --filename="Martin-Civan-CV" → Martin-Civan-CV.{html,pdf}
const outArg = typeof args.out === 'string' ? args.out : null;
const fileBase = typeof args.filename === 'string' ? args.filename : profileName;

// ---- profile schema ------------------------------------------------------
// experience[]: which timeline entries to show as "Experience", in order, each
//   with tailored bullets. `name` matches a work.ts entry (exact, prefix or
//   substring, case-insensitive).
// projects[]:   which timeline entries to show in the compact "Selected Projects"
//   strip (name only). Omit for none.
// skillGroups:  pillar tags to include, in order. Omit for all. Tags:
//   "Platform & Cloud-Native" | "Product & Architecture" | "Applied AI / ML".
interface JobProfile {
  targetRole?: string;
  summary?: string;
  emphasize?: string[];
  skillGroups?: string[];
  // Custom skill groups for this application, used verbatim instead of the site
  // pillars — for listings where a focused, keyword-matched list beats the full stack.
  skills?: { label: string; items: string[] }[];
  experience?: { name: string; bullets?: string[] }[];
  projects?: string[];
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

// ---- helpers -------------------------------------------------------------
const findWork = (name: string) => {
  const n = name.toLowerCase();
  return (
    work.find((w) => w.name.toLowerCase() === n) ??
    work.find((w) => w.name.toLowerCase().startsWith(n)) ??
    work.find((w) => w.name.toLowerCase().includes(n))
  );
};

// ---- build model ---------------------------------------------------------
const requireWork = (name: string) => {
  const w = findWork(name);
  if (!w) {
    console.error(`✗ No work.ts entry matches "${name}"`);
    process.exit(1);
  }
  return w;
};

const selectedExperience = (job.experience ?? []).map((e) => {
  const w = requireWork(e.name);
  return {
    name: w.name,
    kind: w.kind,
    period: w.period,
    summary: w.summary,
    bullets: e.bullets ?? [],
    feature: w.feature,
  };
});

// Skill groups come from the site's i18n pillars (tag → group label, tech → items).
const pillars = ui.en.home.pillars.map((p) => ({ label: p.tag, items: p.tech.map((t) => t.name) }));
const wantedGroups = job.skillGroups?.map((g) => g.toLowerCase());
// Emphasized skills lead their group — a recruiter scanning for the listing's
// keywords shouldn't have to hunt for them mid-list. Non-emphasized items keep
// their data order (sort is stable).
const emphasizeRank = (item: string) => {
  const i = (job.emphasize ?? []).findIndex((e) => e.toLowerCase() === item.toLowerCase());
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};
const selectedSkills = (job.skills ??
  (wantedGroups
    ? wantedGroups
        .map((g) => pillars.find((p) => p.label.toLowerCase() === g))
        .filter((p): p is NonNullable<typeof p> => Boolean(p))
    : pillars)
).map((g) => ({
  ...g,
  items: [...g.items].sort((a, b) => emphasizeRank(a) - emphasizeRank(b)),
}));

const selectedProjects = (job.projects ?? []).map((name) => {
  const w = requireWork(name);
  return { name: w.name, kind: w.kind, period: w.period, summary: w.summary };
});

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
  experience: selectedExperience,
  projects: selectedProjects,
  accent: job.accent ?? '#4f46e5',
  photo,
};

// ---- render --------------------------------------------------------------
const outDir = outArg
  ? resolve(process.cwd(), outArg)
  : resolve(__dirname, 'out', profileName);
mkdirSync(outDir, { recursive: true });
const html = renderCv(model);
const htmlPath = resolve(outDir, `${fileBase}.html`);
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
// The PDF's Creator metadata is derived from the browser-level user agent —
// pass the regular Chrome UA at launch so the file reads like it was printed
// from a normal browser instead of advertising HeadlessChrome.
const chromeUa = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36';
const browser = await puppeteer.launch({
  executablePath: browserPath,
  headless: true,
  args: ['--no-sandbox', `--user-agent=${chromeUa}`],
});
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });
const pdfPath = resolve(outDir, `${fileBase}.pdf`);
await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`✓ PDF   → ${pdfPath}`);
