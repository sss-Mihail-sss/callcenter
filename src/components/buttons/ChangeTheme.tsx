'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { PiMoonStarsLight } from 'react-icons/pi';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function ChangeTheme({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn('p-2 hover:bg-gray-200 dark:hover:bg-gray-900 ', className)}>
          <PiMoonStarsLight size={20}/></Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-16 bg-white dark:border-gray-800 dark:bg-gray-900" side={'bottom'} align={'end'}>
        <DropdownMenuCheckboxItem checked={'light' == theme} className="hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setTheme('light')}>
          Light
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem checked={'dark' == theme} className="hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
