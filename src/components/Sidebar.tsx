'use client';

import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/Badge';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/contexts/SidebarContext';

import {
  PiArchiveBoxLight,
  PiBuildingsLight,
  PiCaretDownLight,
  PiFlagLight,
  PiFolderLight,
  PiFolderMinusLight,
  PiFolderNotchOpenLight,
  PiSquaresFourLight,
  PiSuitcaseLight,
  PiUserPlusLight,
} from 'react-icons/pi';

import { ReactNode, useState } from 'react';

const SidebarLink = ({ text, href, icon = '', badge = '', strict = false, children, className = '' }: {
  text: string,
  href: string,
  icon?: ReactNode,
  badge?: string | number,
  strict?: boolean,
  children?: ReactNode,
  className?: string
}) => {
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();

  const isActive = (link: string = '', strict: boolean = false) => {
    if (strict) {
      return pathname == link;
    }

    return pathname.startsWith(link);
  };

  if (children) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)}
          className={cn('w-full flex items-center p-2 rounded truncate', isActive(href, strict) ? 'bg-purple-50' : 'group hover:bg-purple-50')}>
          <span className="min-w-8">{icon}</span>
          <span>{text}</span>
          <PiCaretDownLight size={20} className={cn('ml-auto duration-300 transition', isOpen ? 'rotate-180' : '')}/>
        </button>

        <div
          className={cn('grid transition-[all] duration-300 group-hover/sidebar:ml-4', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]', isCollapsed ? 'ml-0' : 'ml-4')}>
          <div className="overflow-hidden space-y-0.5 text-sm">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      className={cn('flex items-center p-2 rounded truncate transition-all', isActive(href, strict) ? 'bg-purple-50' : 'group hover:bg-purple-50', className)}
      href={href}>
      {icon && <span className="min-w-8">{icon}</span>}
      <span>{text}</span>
      {
        String(badge).length > 0 && <Badge text={badge}
          className={cn('ml-auto', isActive(href, strict) ? 'bg-purple-800 text-white' : 'group-hover:bg-purple-800 group-hover:text-white')}/>
      }
    </Link>
  );
};

export default function Sidebar({ locale }: { locale: string, }) {
  const { isCollapsed } = useSidebar();

  return (
    <aside
      className={cn('group/sidebar shadow border-r border-gray-400 transition-[width] flex-shrink-0', isCollapsed ? 'hover:w-64 w-14' : 'w-64')}>
      <Link href={`/${locale}`}
        className="block shadow px-2 py-3 h-16 border-b border-gray-400 overflow-hidden">
        <Image src="/logo.webp" alt="logo image" sizes="100vw" width={140} height={0} className="h-full min-w-[140px]"/>
      </Link>

      <ul className="flex flex-col p-2 font-medium space-y-1.5">
        <li className="items-center">
          <SidebarLink href={`/${locale}`} text="Toate" badge={16} strict={true}
            icon={<PiSquaresFourLight size={24}/>}/>
        </li>

        <li className="items-center">
          <SidebarLink href={`/${locale}/individuals`} text="Persoane fizice" badge={3}
            icon={<PiUserPlusLight size={24}/>}/>
        </li>

        <li className="items-center">
          <SidebarLink href={`/${locale}/legal`} text="Persoane juridice" badge={13}
            icon={<PiBuildingsLight size={24}/>}/>
        </li>

        <li className="items-center">
          <SidebarLink href={`/${locale}/jobs`} text="Job-uri"
            badge={13} icon={<PiSuitcaseLight size={24}/>}>

            <SidebarLink className={isCollapsed ? 'pl-2.5' : 'pl-6'} href={`/${locale}/jobs/active`} text="Active"
              badge={967} icon={<PiFolderNotchOpenLight size={20}/>}/>

            <SidebarLink className={isCollapsed ? 'pl-2.5' : 'pl-6'} href={`/${locale}/jobs/inactive`} text="Incative"
              badge={124} icon={<PiFolderLight size={20}/>}/>

            <SidebarLink className={isCollapsed ? 'pl-2.5' : 'pl-6'} href={`/${locale}/jobs/archive`} text="Ahivate"
              badge={56} icon={<PiArchiveBoxLight size={20}/>}/>

            <SidebarLink className={isCollapsed ? 'pl-2.5' : 'pl-6'} href={`/${locale}/jobs/remove`} text="Șterse"
              badge={5} icon={<PiFolderMinusLight size={20}/>}/>

            <SidebarLink className={isCollapsed ? 'pl-2.5' : 'pl-6'} href={`/${locale}/jobs/reported`} text="Raportate"
              badge={121} icon={<PiFlagLight size={20}/>}/>
          </SidebarLink>
        </li>

        <li className="items-center">
          <SidebarLink href={`/${locale}/jobs/reported`} text="Job-uri raportate" badge={121}
            icon={<PiFlagLight size={24}/>}/>
        </li>
      </ul>
    </aside>
  );
}
