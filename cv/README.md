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

Output lands in `cv/out/<profile>.html` and `cv/out/<profile>.pdf`.

If Chromium/Chrome isn't auto-detected, pass `--browser=/path/to/chromium`
(or set `PUPPETEER_EXECUTABLE_PATH`). Detected automatically on most Linux/macOS setups.

## Per-listing workflow

1. Copy `profiles/_template.json` to `profiles/<company-role>.json`.
2. Set `targetRole`, a tailored `summary`, and `emphasize` the skills that listing asks for.
3. Optionally reorder/trim `skillGroups`, `roles`, `projects`.
4. `npm run cv -- --profile=<company-role>` → attach the PDF.

`out/` is git-ignored; profiles are kept so you have a record of every tailored application.
