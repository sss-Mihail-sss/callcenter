'use client';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useSidebar } from '@/contexts/SidebarContext';

export default function Navbar({ locale }: { locale: string }) {
  const { isCollapsed, setIsCollapsed } = useSidebar();

  return (
    <nav className="min-h-16 w-full flex items-center justify-between shadow px-4 border-b border-gray-400">
      <RxHamburgerMenu size={24} className="cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}/>

      <div>
        <IoMdNotificationsOutline size={24} className="cursor-pointer"/>
      </div>
    </nav>
  );
}
