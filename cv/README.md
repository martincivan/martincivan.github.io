# CV generator

Generates a tailored, one-page A4 CV (HTML + PDF) from the website's own data,
so each job application can foreground a different skillset — without ever
maintaining a separate copy of your CV.

**Single source of truth:** the site's own data —
`../src/data/profile.ts` (identity/contact), `../src/data/work.ts` (the unified
reverse-chronological timeline of everything built), `../src/data/localized.ts`
(languages/education) and the skill pillars in `../src/i18n/ui.ts`. Update the
site, the CV follows. Per-role **bullets** don't live in the site (it's kept
terse) — they go in the job profile JSON, which is where tailoring lives.

## Usage

```bash
cd cv
npm install                      # once — installs puppeteer-core (uses your system Chromium, no big download)

npm run cv -- --profile=atender-software-engineer
npm run cv -- --profile=platform-engineer
npm run cv -- --profile=platform-engineer --no-pdf   # HTML only
```

Output lands in `cv/out/<profile>/martin-civan-cv.html` and `…/martin-civan-cv.pdf`
— one subdirectory per position, and the PDF itself carries a neutral, company-free
name so the file you upload never reveals it was tailored. Override the basename with
`--out=<name>` if you want something else.

Runs on Node's native TypeScript support; `register.mjs` adds a resolve hook so
the site's extensionless `.ts` imports work outside Vite. If Chromium/Chrome
isn't auto-detected, pass `--browser=/path/to/chromium` (or set
`PUPPETEER_EXECUTABLE_PATH`).

## Per-listing workflow

1. Copy `profiles/_template.json` to `profiles/<company-role>.json`.
2. Set `targetRole` and a tailored `summary`.
3. Write `skills` for this listing (see **Writing the skills section**), and trim `experience` / `projects`.
4. `npm run cv -- --profile=<company-role>` → attach `out/<company-role>/martin-civan-cv.pdf`.

`out/` is git-ignored; profiles are kept so you have a record of every tailored application.
The generated PDFs are disposable — re-run any profile to recreate its CV at any time.

## Profile schema

| field         | meaning                                                                                  |
|---------------|------------------------------------------------------------------------------------------|
| `targetRole`  | Job title shown under the name. Falls back to `profile.ts` tagline.                      |
| `summary`     | 2–3 sentence pitch. Falls back to `profile.ts` summary.                                  |
| `skills`      | Custom groups for this application, used verbatim: `[{ label, items[] }]`. The usual choice. |
| `skillGroups` | Instead of `skills`: reuse the site's own pillars, in order — `Platform & Cloud-Native` · `Product & Architecture` · `Applied AI / ML`. Omit both for all. |
| `emphasize`   | Skill names highlighted in the accent colour, and sorted to the front of their group. **Off by default** — see below. |
| `experience`  | `[{ name, bullets[] }]` — `name` matches a `work.ts` entry (ci, prefix/substring ok).    |
| `projects`    | `work.ts` names for the compact Selected Projects strip. Omit for none.                  |
| `accent`      | Accent colour (hex).                                                                     |

## Writing the skills section

Group **by kind of technology**, never by tier or by the listing's own headings.
The conventional set: `Languages` · `Mobile` · `Frameworks & Libraries` ·
`Databases & Messaging` · `Cloud, DevOps & Tools` · `AI / ML`. Backend and
frontend frameworks belong in one group — the grouping principle is "framework",
so splitting them by tier is the inconsistency.

List only things you **use**: a language, library, database, service, tool.
Nothing you **do** — `REST API design`, `Push notifications`, `Play Store
releases`, `Real-time data pipelines`, `Incident response`, `Domain-Driven
Design`. Those read as an advert's requirements copied into a skills list, and a
recruiter scans this section for tools they can verify. Put them in an
`experience` bullet instead, attached to a real product, where they carry an
outcome. Prefer the artefact over the activity: `Firebase Cloud Messaging`,
not `Push notifications`.

Leave a language or tool out when the listing has no use for it — and take it
out of the `summary` prose too, so the two don't disagree.

### Highlighting is off by default

Omit `emphasize`. Accent-colouring exactly the chips one advert asks for
announces that the CV was written for that advert — especially when the same
recruiter sees a second version. Reach for it only when neither of those is true.

