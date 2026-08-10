// Renders a print-ready, single-page A4 CV as a self-contained HTML string.
// Light / ATS-friendly by design — this is for recruiters and PDF, not the dark website.
//
// Data model note: the site consolidated its old experience/skills/projects files
// into a single reverse-chronological `work` timeline (src/data/work.ts) plus
// localized languages/education and skill "pillars" from the i18n dict. This CV
// reads that current model — see generate.ts. Per-role bullets don't live in the
// site data (the site is deliberately terse); they come from the job profile JSON,
// which is where each application's tailoring lives.

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Profile } from '../src/data/profile.ts';
import type { Role, SkillGroup, Project } from './cv-data.ts';

// The site's fonts (Geist for text, Bricolage Grotesque for display), embedded as
// data URIs so the standalone HTML/PDF carries the portfolio look with no network.
const fontsDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'node_modules');
const fontFace = (family: string, pkg: string, file: string): string => {
  try {
    const woff2 = readFileSync(resolve(fontsDir, pkg, 'files', file)).toString('base64');
    return `@font-face { font-family: "${family}"; font-style: normal; font-weight: 100 900; src: url(data:font/woff2;base64,${woff2}) format("woff2"); }`;
  } catch {
    return '';
  }
};
const fontCss = [
  fontFace('Geist Variable', '@fontsource-variable/geist', 'geist-latin-wght-normal.woff2'),
  fontFace('Geist Variable', '@fontsource-variable/geist', 'geist-latin-ext-wght-normal.woff2'),
  fontFace('Bricolage Grotesque', '@fontsource-variable/bricolage-grotesque', 'bricolage-grotesque-latin-wght-normal.woff2'),
  fontFace('Bricolage Grotesque', '@fontsource-variable/bricolage-grotesque', 'bricolage-grotesque-latin-ext-wght-normal.woff2'),
].join('\n');

export interface CvModel {
  profile: {
    name: string;
    credential?: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    website: string;
  };
  targetRole: string;
  summary: string;
  emphasize: string[];
  skills: { label: string; items: string[] }[];
  languages: { lang: string; level: string }[];
  education: { school: string; program: string; period: string; note?: string }[];
  experience: CvWorkItem[];
  projects: { name: string; kind: string; period: string; summary: string }[];
  accent: string;
  /** Optional headshot as a data URI — photos are a per-profile choice (some markets expect them, others discourage them). */
  photo?: string;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Press mentions ("Featured by Forbes as “…”") get bolded so they don't drown
// in the project blurb.
const boldFeature = (s: string) => s.replace(/Featured by .*?”/g, (m) => `<b>${m}</b>`);

function skillSpan(item: string, emphasize: string[]): string {
  const hot = emphasize.some((e) => e.toLowerCase() === item.toLowerCase());
  return `<span class="skill${hot ? ' hot' : ''}">${esc(item)}</span>`;
}

export function renderCv(m: CvModel): string {
  const p = m.profile;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(p.name)} — CV</title>
<style>
  ${fontCss}
  /* Print-friendly take on the portfolio palette: warm near-black ink on paper,
     the site's signal-amber accent, warm greys instead of blue-greys. */
  :root { --accent: ${m.accent}; --ink: #1c1917; --muted: #6b6259; --faint: #948c80; --line: #e8e3da; --bg-soft: #f8f5ef; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page { size: A4; margin: 0; }
  html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: "Geist Variable", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: var(--ink); font-size: 9.4px; line-height: 1.42; }
  .page { width: 210mm; min-height: 297mm; padding: 13mm 14mm; }
  .head { border-bottom: 2px solid var(--accent); padding-bottom: 9px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; gap: 14px; }
  .head .id { min-width: 0; }
  .photo { flex: 0 0 auto; width: 74px; height: 74px; border-radius: 8px; object-fit: cover; border: 1px solid var(--line); }
  .name { font-family: "Bricolage Grotesque", "Geist Variable", sans-serif; font-size: 23px; font-weight: 700; letter-spacing: -0.01em; }
  .name small { font-size: 13px; font-weight: 600; color: var(--muted); }
  .role-title { font-size: 11px; font-weight: 600; color: var(--accent); margin-top: 2px; letter-spacing: 0.01em; }
  .contact { margin-top: 7px; display: flex; flex-wrap: wrap; gap: 4px 14px; color: var(--muted); font-size: 8.8px; }
  .contact span { white-space: nowrap; }
  .contact a { color: var(--muted); text-decoration: none; }
  .cols { display: flex; gap: 16px; }
  .main { flex: 1 1 64%; min-width: 0; }
  .side { flex: 0 0 32%; }
  h2 { font-family: "Bricolage Grotesque", "Geist Variable", sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; margin: 14px 0 7px; }
  .main > h2:first-child, .side > h2:first-child { margin-top: 0; }
  .job { margin-bottom: 9px; }
  .job-h { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
  .job-title { font-weight: 700; font-size: 10px; }
  .job-co { color: var(--accent); font-weight: 600; }
  .job-when { color: var(--faint); font-size: 8.4px; white-space: nowrap; }
  .job-sum { color: var(--muted); margin: 2px 0 3px; font-style: italic; }
  ul.bul { list-style: none; }
  ul.bul li { position: relative; padding-left: 9px; margin-bottom: 1.5px; }
  ul.bul li::before { content: ""; position: absolute; left: 0; top: 5px; width: 3px; height: 3px; border-radius: 50%; background: var(--accent); }
  .quote { color: var(--muted); font-style: italic; margin: 2px 0 0; padding-left: 9px; border-left: 2px solid var(--line); }
  .quote b { color: var(--ink); font-style: normal; }
  .skills { display: flex; flex-wrap: wrap; gap: 3px; margin-bottom: 8px; }
  .skill { background: var(--bg-soft); border: 1px solid var(--line); border-radius: 3px; padding: 1.5px 5px; font-size: 8.2px; color: var(--ink); }
  .skill.hot { background: color-mix(in srgb, var(--accent) 16%, #fff); border-color: var(--accent); color: var(--ink); font-weight: 600; }
  .sgroup-label { font-weight: 700; font-size: 8.6px; margin: 0 0 3px; }
  .side .block { margin-bottom: 11px; }
  .lang-row { display: flex; justify-content: space-between; border-bottom: 1px dotted var(--line); padding: 2px 0; }
  .lang-row .lvl { color: var(--muted); font-size: 8.4px; }
  .edu .program { color: var(--accent); font-weight: 600; }
  .edu .note { color: var(--muted); margin-top: 2px; font-size: 8.4px; }
  .proj { margin-bottom: 6px; }
  .proj .pn { font-weight: 700; }
  .proj .pm { color: var(--faint); font-size: 8.2px; }
  .proj .pd { color: var(--muted); }
  .summary { color: var(--ink); }
  .ainote { margin-top: 9px; padding-top: 6px; border-top: 1px dotted var(--line); color: var(--faint); font-family: ui-monospace, "SF Mono", "Cascadia Code", Consolas, monospace; font-size: 7.2px; line-height: 1.45; white-space: pre-wrap; }
</style>
</head>
<body>
<div class="page">
  <header class="head">
    <div class="id">
      <div class="role-title">${esc(m.targetRole)}</div>
      <div class="name">${p.credential ? `<small>${esc(p.credential)}</small> ` : ''}${esc(p.name)}</div>
      <div class="contact">
        <span>${esc(p.email)}</span><span>${esc(p.phone)}</span><span>${esc(p.location)}</span>
        <span><a href="https://${esc(p.website)}">${esc(p.website)}</a></span>
      <span><a href="https://${esc(p.github)}">${esc(p.github)}</a></span>
      <span><a href="https://${esc(p.linkedin)}">${esc(p.linkedin)}</a></span>
      </div>
    </div>
    ${m.photo ? `<img class="photo" src="${m.photo}" alt="">` : ''}
  </header>

  <div class="cols">
    <div class="main">
      <h2>Profile</h2>
      <p class="summary">${esc(m.summary)}</p>

      <h2>Experience</h2>
      ${m.experience.map((r) => `
      <div class="job">
        <div class="job-h">
          <div class="job-title"><span class="job-co">${esc(r.name)}</span> · ${esc(r.kind)}</div>
          <div class="job-when">${esc(r.period)}</div>
        </div>
        <div class="job-sum">${esc(r.summary)}</div>
        ${r.bullets.length ? `<ul class="bul">${r.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
        ${r.feature ? `<p class="quote">“${esc(r.feature.quote)}” <b>— ${esc(r.feature.source)}</b></p>` : ''}
      </div>`).join('')}

      ${m.projects.length ? `<h2>Selected Projects</h2>
      ${m.projects.map((pr) => `
      <div class="proj">
        <span class="pn">${esc(pr.name)}</span> <span class="pm">· ${esc(pr.kind)} · ${esc(pr.period)}</span>
        <div class="pd">${boldFeature(esc(pr.summary))}</div>
      </div>`).join('')}` : ''}
    </div>

    <aside class="side">
      <h2>Skills</h2>
      ${m.skills.map((g) => `
      <div class="block">
        <div class="sgroup-label">${esc(g.label)}</div>
        <div class="skills">${g.items.map((i) => skillSpan(i, m.emphasize)).join('')}</div>
      </div>`).join('')}

      <h2>Languages</h2>
      <div class="block">
        ${m.languages.map((l) => `<div class="lang-row"><span>${esc(l.lang)}</span><span class="lvl">${esc(l.level)}</span></div>`).join('')}
      </div>

      <h2>Education</h2>
      <div class="block edu">
        ${m.education.map((e) => `
        <div style="margin-bottom:6px">
          <div style="font-weight:700">${esc(e.school)}</div>
          <div class="program">${esc(e.program)}</div>
          <div class="lvl" style="color:var(--faint);font-size:8.2px">${esc(e.period)}</div>
          ${e.note ? `<div class="note">${esc(e.note)}</div>` : ''}
        </div>`).join('')}
      </div>
    </aside>
  </div>
  ${m.aiNote ? `<footer class="ainote">${esc(m.aiNote)}</footer>` : ''}
</div>
</body>
</html>`;
}
