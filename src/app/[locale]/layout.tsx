import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import Providers from '@/providers';
import { Toaster } from '@/components/ui/sonner';
import '@/app/styles.css';
import ChangeTheme from '@/components/buttons/ChangeTheme';
import ChangeLanguage from '@/components/buttons/ChangeLanguage';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata() {
  return {
    title: 'Jobber',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <html className="h-full" lang={locale}>
    <body className={cn(inter.className, 'flex')}>
    <Providers locale={locale}>
      <Sidebar/>
      <div className="flex flex-col w-full">
        <Navbar/>
        <main className="p-4">
          {children}
        </main>
      </div>

      <div className="flex flex-col absolute rounded right-4 bottom-4">
        <ChangeTheme className="rounded-t"/>
        <ChangeLanguage className="rounded-b"/>
      </div>

      <Toaster richColors  />
    </Providers>
    </body>
    </html>
  );
}
