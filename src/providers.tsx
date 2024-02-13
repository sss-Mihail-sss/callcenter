'use client';

import { ReactNode } from 'react';
import { SidebarProvider } from '@/contexts/SidebarContext';
import { I18nProviderClient } from '@/locales/client';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children, locale }: { children: ReactNode, locale: string }) {
  return (
    <I18nProviderClient locale={locale}>
      <ThemeProvider themes={['light', 'dark']} defaultTheme="dark" attribute="class">
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </ThemeProvider>
    </I18nProviderClient>
  );
}
