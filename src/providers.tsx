'use client';

import { ReactNode } from 'react';
import { SidebarProvider } from '@/contexts/SidebarContext';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
}