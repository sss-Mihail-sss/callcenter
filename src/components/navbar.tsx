'use client';

import { RxHamburgerMenu } from 'react-icons/rx';
import { useSidebar } from '@/contexts/SidebarContext';
import Notification from '@/components/notification';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PiGearSixLight, PiSignOutLight } from 'react-icons/pi';

export default function Navbar() {
  const { isCollapsed, setIsCollapsed } = useSidebar();

  return (
    <nav className="min-h-16 w-full flex items-center justify-between shadow px-4 border-b border-gray-400">
      <RxHamburgerMenu size={24} className="cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}/>

      <div className="flex gap-2">
        <Notification/>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='cursor-pointer h-9 w-9'>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56 bg-white" side={'bottom'} align={'end'}>
            <DropdownMenuLabel className="flex items-center">
              <Avatar className='w-8 h-8'>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className='ml-4 text-base'>Tulei Livia</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className='bg-gray-700 mx-4'/>
            <DropdownMenuGroup className='font-medium'>
              <DropdownMenuItem className='hover:bg-gray-100'>
                <PiGearSixLight size={24}/>
                <span className='ml-2 text-base'>Setări</span>
              </DropdownMenuItem>
              <DropdownMenuItem className='hover:bg-gray-100'>
                <PiSignOutLight size={24}/>
                <span className='ml-2 text-base'>Ieșire</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
