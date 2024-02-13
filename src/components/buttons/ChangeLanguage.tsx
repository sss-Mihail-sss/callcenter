'use client';

import { PiTranslateLight } from 'react-icons/pi';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import { locales } from '@/config';

export default function ChangeLanguage({ className = '' }: { className?: string }) {
  const locale = useCurrentLocale();
  const changeLanguage = useChangeLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn('p-2 hover:bg-gray-200 dark:hover:bg-gray-900', className)}>
          <PiTranslateLight size={20}/>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-16 bg-white dark:border-gray-800 dark:bg-gray-900" side={'bottom'} align={'end'}>
        {
          locales.map(lang => (
            <DropdownMenuCheckboxItem className="hover:bg-gray-100 dark:hover:bg-gray-800" key={lang}
              // @ts-ignore
              checked={locale == lang} disabled={locale == lang} onClick={() => changeLanguage(lang)}>
              <Link href={lang}>{lang}</Link>
            </DropdownMenuCheckboxItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
