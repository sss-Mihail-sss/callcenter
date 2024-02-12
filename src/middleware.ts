import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './config';

export default createMiddleware({
  defaultLocale,
  locales,
});

export const config = {
  matcher: [
    '/',
    '/(ro|ru|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
