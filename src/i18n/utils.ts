export const languages = { en: 'English', sk: 'Slovenčina' } as const;
export const defaultLang = 'en';
export type Lang = keyof typeof languages;

/** Extract the locale from a URL pathname ('/sk/...' → 'sk', else 'en'). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  return seg === 'sk' ? 'sk' : 'en';
}

/** Prefix a path with the locale ('en' → '/about/', 'sk' → '/sk/about/'). */
export function localePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '');
  return lang === 'en' ? clean : `/sk${clean === '/' ? '/' : clean}`;
}

/** Given the current URL and its locale, the path to the same page in `to`. */
export function alternatePath(url: URL, current: Lang, to: Lang): string {
  let path = url.pathname;
  if (current === 'sk') path = path.replace(/^\/sk/, '') || '/';
  return localePath(path, to);
}
