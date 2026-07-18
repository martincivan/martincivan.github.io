# CV generator

Generates a tailored, one-page A4 CV (HTML + PDF) from the website's own data,
so each job application can foreground a different skillset — without ever
maintaining a separate copy of your CV.

**Single source of truth:** `../src/data/` — `profile.ts` (identity/contact),
`experience.ts`, `skills.ts`, `projects.ts`. Update the site, the CV follows.

## Usage

```bash
cd cv
npm install                      # once — installs puppeteer-core (uses your system Chromium, no big download)

npm run cv -- --profile=platform-engineer
npm run cv -- --profile=ai-engineer
npm run cv -- --profile=platform-engineer --no-pdf   # HTML only
```

Output lands in `cv/out/<profile>/martin-civan-cv.html` and `…/martin-civan-cv.pdf`
— one subdirectory per position, and the PDF itself carries a neutral, company-free
name so the file you upload never reveals it was tailored. Override the basename with
`--out=<name>` if you want something else.

If Chromium/Chrome isn't auto-detected, pass `--browser=/path/to/chromium`
(or set `PUPPETEER_EXECUTABLE_PATH`). Detected automatically on most Linux/macOS setups.

## Per-listing workflow

1. Copy `profiles/_template.json` to `profiles/<company-role>.json`.
2. Set `targetRole`, a tailored `summary`, and `emphasize` the skills that listing asks for.
3. Optionally reorder/trim `skillGroups`, `roles`, `projects`.
4. `npm run cv -- --profile=<company-role>` → attach `out/<company-role>/martin-civan-cv.pdf`.

`out/` is git-ignored; profiles are kept so you have a record of every tailored application.
The generated PDFs are disposable — re-run any profile to recreate its CV at any time.
