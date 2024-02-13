import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import('./en.json'),
  ru: () => import('./ru.json'),
  ro: () => import('./ro.json'),
});
