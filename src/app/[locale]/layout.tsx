import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/config';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Providers from '@/providers';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations('meta');

  return {
    title: t('title'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
    <body className={cn(inter.className, 'flex')}>
    <Providers>
      <Sidebar locale={locale}/>
      <div className="flex flex-col w-full">
        <Navbar locale={locale}/>
        <main className="p-4">
          {children}
        </main>
      </div>
    </Providers>
    </body>
    </html>
  );
}
