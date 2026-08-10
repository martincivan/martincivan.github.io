// Registers the .ts extension resolve hook, then hands off to generate.ts.
// Used via `node --import ./register.mjs generate.ts` (see package.json).
import { register } from 'node:module';
register('./ts-ext-hook.mjs', import.meta.url);
