// Renders a print-ready, single-page A4 CV as a self-contained HTML string.
// Light / ATS-friendly by design — this is for recruiters and PDF, not the dark website.

import type { Profile } from '../src/data/profile.ts';
import type { Role } from '../src/data/experience.ts';
import type { SkillGroup } from '../src/data/skills.ts';
import type { Project } from '../src/data/projects.ts';

export interface CvModel {
  profile: Profile;
  targetRole: string;
  summary: string;
  emphasize: string[];
  skills: SkillGroup[];
  languages: { lang: string; level: string }[];
  education: { school: string; program: string; period: string; note?: string }[];
  roles: (Role & { bullets: string[] })[];
  projects: Project[];
  accent: string;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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
  :root { --accent: ${m.accent}; --ink: #1a1a22; --muted: #565663; --faint: #8a8a96; --line: #e4e4ea; --bg-soft: #f5f5f8; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page { size: A4; margin: 0; }
  html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: var(--ink); font-size: 9.4px; line-height: 1.42; }
  .page { width: 210mm; min-height: 297mm; padding: 13mm 14mm; }
  .head { border-bottom: 2px solid var(--accent); padding-bottom: 9px; margin-bottom: 12px; }
  .name { font-size: 23px; font-weight: 700; letter-spacing: -0.01em; }
  .name small { font-size: 13px; font-weight: 600; color: var(--muted); }
  .role-title { font-size: 11px; font-weight: 600; color: var(--accent); margin-top: 2px; letter-spacing: 0.01em; }
  .contact { margin-top: 7px; display: flex; flex-wrap: wrap; gap: 4px 14px; color: var(--muted); font-size: 8.8px; }
  .contact span { white-space: nowrap; }
  .cols { display: flex; gap: 16px; }
  .main { flex: 1 1 64%; min-width: 0; }
  .side { flex: 0 0 32%; }
  h2 { font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); border-bottom: 1px solid var(--line); padding-bottom: 3px; margin: 14px 0 7px; }
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
  .skills { display: flex; flex-wrap: wrap; gap: 3px; margin-bottom: 8px; }
  .skill { background: var(--bg-soft); border: 1px solid var(--line); border-radius: 3px; padding: 1.5px 5px; font-size: 8.2px; color: var(--ink); }
  .skill.hot { background: var(--accent); border-color: var(--accent); color: #fff; font-weight: 600; }
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
</style>
</head>
<body>
<div class="page">
  <header class="head">
    <div class="name">${esc(p.name)} ${p.credential ? `<small>${esc(p.credential)}</small>` : ''}</div>
    <div class="role-title">${esc(m.targetRole)}</div>
    <div class="contact">
      <span>${esc(p.email)}</span><span>${esc(p.phone)}</span><span>${esc(p.location)}</span>
      <span>${esc(p.github)}</span><span>${esc(p.linkedin)}</span>
    </div>
  </header>

  <div class="cols">
    <div class="main">
      <h2>Profile</h2>
      <p class="summary">${esc(m.summary)}</p>

      <h2>Experience</h2>
      ${m.roles.map((r) => `
      <div class="job">
        <div class="job-h">
          <div class="job-title">${esc(r.title)} · <span class="job-co">${esc(r.company)}</span></div>
          <div class="job-when">${esc(r.period)}</div>
        </div>
        <div class="job-sum">${esc(r.summary)}</div>
        <ul class="bul">${r.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      </div>`).join('')}

      ${m.projects.length ? `<h2>Selected Projects</h2>
      ${m.projects.map((pr) => `
      <div class="proj">
        <span class="pn">${esc(pr.name)}</span> <span class="pm">· ${esc(pr.role)} · ${esc(pr.year)}</span>
        <div class="pd">${esc(pr.blurb)}</div>
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
</div>
</body>
</html>`;
}
