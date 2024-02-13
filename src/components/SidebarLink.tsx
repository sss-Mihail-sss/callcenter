import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContext';
import { cn } from '@/lib/utils';
import { PiCaretDownLight } from 'react-icons/pi';
import Link from 'next/link';
import Badge from '@/components/Badge';

export default function SidebarLink({ text, href, icon = '', badge = '', strict = false, children, className = '' }: {
  text: string,
  href: string,
  icon?: ReactNode,
  badge?: string | number,
  strict?: boolean,
  children?: ReactNode,
  className?: string
}) {
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (link: string = '', strict: boolean = false) => {
    if (strict) {
      return pathname == link;
    }

    return pathname.startsWith(link);
  };

  if (children) {
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
