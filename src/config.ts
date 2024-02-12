import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'ro', 'ru'] as const;

export const defaultLocale = 'ro';

export const pathnames = { '/': '/' } satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
