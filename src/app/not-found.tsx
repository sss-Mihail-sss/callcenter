import Link from 'next/link';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { defaultLocale } from '@/config';
import { Inter } from 'next/font/google';
import Providers from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export default async function NotFound() {
  return (
    <html className="h-full" lang={defaultLocale}>
    <body className={cn(inter.className, 'flex')}>
    <Providers>
      <Sidebar locale={defaultLocale}/>
      <div className="flex flex-col w-full">
        <Navbar locale={defaultLocale}/>
        <main className="p-4">
          <div>
            <h2>Pagina nu a fost găsita.</h2>
            <p>Nu s-a putut găsi resursa solicitată.</p>
            <Link href="/">
              <button type="button">Întoarcere pe pagina principală</button>
            </Link>
          </div>
        </main>
      </div>
    </Providers>
    </body>
    </html>
  );
}
