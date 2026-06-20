import type { Lang } from '../i18n/utils';
import { experience } from './experience';
import { experienceSk } from './experience.sk';
import { projects, type ProjectCategory } from './projects';
import { projectsSk } from './projects.sk';
import { languages as languagesEn, education as educationEn } from './skills';

export const getExperience = (lang: Lang) => (lang === 'sk' ? experienceSk : experience);
export const getProjects = (lang: Lang) => (lang === 'sk' ? projectsSk : projects);

export const getLanguages = (lang: Lang) =>
  lang === 'sk'
    ? [
        { lang: 'Slovenčina', level: 'Materinský (C2)' },
        { lang: 'Angličtina', level: 'Pokročilá (C1)' },
        { lang: 'Nemčina', level: 'Základná (A2)' },
      ]
    : languagesEn;

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
    : educationEn;

export const categoryLabel: Record<Lang, Record<ProjectCategory, string>> = {
  en: {
    'Platform & Infrastructure': 'Platform & Infrastructure',
    'Products': 'Products',
    'AI / ML': 'AI / ML',
    'Demos & Experiments': 'Demos & Experiments',
  },
  sk: {
    'Platform & Infrastructure': 'Platforma & Infraštruktúra',
    'Products': 'Produkty',
    'AI / ML': 'AI / ML',
    'Demos & Experiments': 'Demá & Experimenty',
  },
};

export const statusLabel: Record<Lang, Record<string, string>> = {
  en: { current: 'Current', shipped: 'Shipped', sunset: 'Sunset', unlaunched: 'Unlaunched', demo: 'Demo' },
  sk: { current: 'Aktuálne', shipped: 'Doručené', sunset: 'Ukončené', unlaunched: 'Nespustené', demo: 'Demo' },
};
