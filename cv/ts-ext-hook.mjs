// Node ESM resolve hook: let extensionless relative imports (e.g. `./work`)
// resolve to `.ts` files. Astro/Vite does this for the site; Node's native TS
// runner does not. Keeps the CV tool working without touching site source.
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export async function resolve(specifier, context, next) {
  // Relative import with no matching file on disk? Try `.ts` / `/index.ts`.
  // (Checks existence rather than the suffix, so `./work.sk` → `./work.sk.ts`.)
  if (/^\.\.?\//.test(specifier) && context.parentURL) {
    const p = fileURLToPath(new URL(specifier, context.parentURL));
    if (!existsSync(p) && existsSync(p + '.ts')) return next(specifier + '.ts', context);
    if (existsSync(p + '/index.ts')) return next(specifier + '/index.ts', context);
  }
  return next(specifier, context);
}
