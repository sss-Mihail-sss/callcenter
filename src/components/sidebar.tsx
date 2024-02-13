'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';

import {
  PiArchiveBoxLight,
  PiBuildingsLight,
  PiFlagLight,
  PiFolderLight,
  PiFolderMinusLight,
  PiFolderNotchOpenLight,
  PiFoldersLight,
  PiSquaresFourLight,
  PiSuitcaseLight,
  PiUserPlusLight,
} from 'react-icons/pi';
import SidebarLink from '@/components/sidebarLink';
import { useSidebar } from '@/contexts/SidebarContext';

export default function Sidebar() {
  const { isCollapsed } = useSidebar();
  const scopedT = useScopedI18n('sidebar');
  const locale = useCurrentLocale();

  return (
    <aside
      className={cn('group/sidebar shadow border-r border-gray-400 transition-[width] flex-shrink-0 w-0 overflow-hidden', isCollapsed ? 'md:hover:w-64 md:w-14' : 'w-64')}>
      <Link href={`/${locale}`}
        className="block shadow px-2 py-3 h-16 border-b border-gray-400 overflow-hidden">
        <Image src="/logo.webp" alt="logo image" sizes="100vw" width={140} height={0} className="h-full min-w-[140px]"
          priority={true}/>
      </Link>

      <ul className="flex flex-col p-2 font-medium space-y-1.5">
        <li className="items-center">
          <SidebarLink href={`/${locale}`} text={scopedT('all')} badge={16} strict={true}
            icon={<PiSquaresFourLight size={24}/>}/>
        </li>

        <li className="items-center">
          <SidebarLink href={`/${locale}/individuals`} text={scopedT('individuals')} badge={3}
            icon={<PiUserPlusLight size={24}/>}/>
        </li>

        <li className="items-center">
          <SidebarLink href={`/${locale}/legal`} text={scopedT('legal')} badge={13}
            icon={<PiBuildingsLight size={24}/>}/>
        </li>

        <li className="items-center">
          <SidebarLink href={`/${locale}/jobs`} text={scopedT('jobs')}
            icon={<PiSuitcaseLight size={24}/>}>

            <SidebarLink className={cn(isCollapsed ? 'pl-2.5' : 'pl-6')} href={`/${locale}/jobs/all`}
              text="Toate"
              badge={1273} icon={<PiFoldersLight size={20}/>}/>

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

        {/*<li className="items-center">*/}
        {/*  <SidebarLink href={`/${locale}/jobs/reported`} text="Job-uri raportate" badge={121}*/}
        {/*    icon={<PiFlagLight size={24}/>}/>*/}
        {/*</li>*/}
      </ul>
    </aside>
  );
}
