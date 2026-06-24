import type { Lang } from '../i18n/utils';
import type { Work } from './work';
import { work } from './work';
import { workSk } from './work.sk';

// The Slovak timeline mirrors the English one entry-for-entry, so the purely
// visual metadata (icon + accent hue) lives only on the English data and is
// merged into the Slovak entries by index here.
export const getWork = (lang: Lang): Work[] =>
  lang === 'sk'
    ? workSk.map((w, i) => ({ icon: work[i]?.icon, accent: work[i]?.accent, ...w }))
    : work;

export const getLanguages = (lang: Lang) =>
  lang === 'sk'
    ? [
        { lang: 'Slovenčina', level: 'Materinský (C2)' },
        { lang: 'Angličtina', level: 'Pokročilá (C1)' },
        { lang: 'Nemčina', level: 'Základná (A2)' },
      ]
    : [
        { lang: 'Slovak', level: 'Native (C2)' },
        { lang: 'English', level: 'Advanced (C1)' },
        { lang: 'German', level: 'Elementary (A2)' },
      ];

export const getEducation = (lang: Lang) =>
  lang === 'sk'
    ? [
        {
          school: 'Slovenská technická univerzita — FIIT',
          program: 'Ing., Inteligentné softvérové systémy',
          period: '2016 — 2022',
          note: 'Diplomová práca: „Segmentácia volumetrických dát mozgu s využitím hlbokého učenia" — 3D plne konvolučné siete na segmentáciu subkortikálnych štruktúr mozgu z MRI, porovnané s klinickými nástrojmi (FreeSurfer / FSL).',
        },
      ]
    : [
        {
          school: 'Slovak University of Technology — FIIT',
          program: 'Ing. (MSc), Intelligent Software Systems',
          period: '2016 — 2022',
          note: 'Master’s thesis: “Brain volumetric segmentation using deep learning” — 3D fully-convolutional networks for subcortical brain MRI segmentation, benchmarked against clinical tools (FreeSurfer / FSL).',
        },
      ];

export const statusLabel: Record<Lang, Record<string, string>> = {
  en: { current: 'Current', shipped: 'Shipped', sunset: 'Sunset', unlaunched: 'Unlaunched', demo: 'Demo' },
  sk: { current: 'Aktuálne', shipped: 'Doručené', sunset: 'Ukončené', unlaunched: 'Nespustené', demo: 'Demo' },
};
