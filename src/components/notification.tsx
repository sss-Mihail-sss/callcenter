import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Badge from '@/components/badge';
import { PiBuildingsLight, PiFlagLight, PiSuitcaseLight, PiUserPlusLight } from 'react-icons/pi';
import { toast } from 'sonner';

interface NotificationItemProps {
  type: 'profil' | 'company' | 'job' | 'report';
  target: string;
  author?: string;
}

export function NotificationItem({ type, target, author }: NotificationItemProps) {
  let avatar, context;

  switch (type) {
    case 'profil':
      avatar = <div className="p-2 bg-cyan-700 rounded"><PiUserPlusLight size={24} color="#FFF"/></div>;
      context = <span>A creat un profil ca persoană fizică: <b>{target}</b></span>;
      break;

    case 'company':
      avatar = <div className="p-2 bg-lime-600 rounded"><PiBuildingsLight size={24} color="#FFF"/></div>;
      context = <span>A fost creat un profil ca persoană juridică: <b>{target}</b></span>;
      break;

    case 'job':
      avatar = <div className="p-2 bg-amber-400 rounded"><PiSuitcaseLight size={24} color="#FFF"/></div>;
      context = <span>A fost creat un nou job <b>{target}</b></span>;
      break;

    case 'report':
      avatar = <div className="p-2 bg-rose-400 rounded"><PiFlagLight size={24} color="#FFF"/></div>;
      context = <span>Utilizatorul <b>{author}</b> a raportat job-ul <b>{target}</b></span>;
      break;
  }

  return (
    <div className="flex items-center px-4 py-2 text-sm">
      {avatar}

      <div className="flex flex-col ml-4">
        {context}
        <span>Acum 2 ore</span>
      </div>
    </div>
  );
}

export default function Notification() {
  const handleClearNotification = async () => {
    // User id
    const id = 1;

    const response = fetch('/api/notification/clear/' + id);

    toast.promise(response, {
      loading: 'Loading...',
      success: (data) => {
        return 'Notificările au fost citite cu success';
      },
      error: 'Eroare',
      cancel: {
        label: 'Ascunde',
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shadow-none border-none p-2 hover:bg-gray-200 dark:hover:bg-gray-900">
          <IoMdNotificationsOutline size={24} className="cursor-pointer"/>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[36rem] bg-white dark:border-gray-800 dark:bg-gray-900"
        side={'bottom'} align={'end'}>
        <div className="flex justify-between items-center text-sm px-4">
          <span className="flex p-2 border-b-2 border-purple-800 font-bold">
            Toate
            <Badge text={4} className="ml-2"/>
          </span>
          <Button className="shadow-none hover:text-purple-700" onClick={handleClearNotification}>Citește toate</Button>
        </div>

        <div className="flex flex-col">
          <NotificationItem type="profil" target="Tulei Livia"/>
          <NotificationItem type="company" target="Jobber International"/>
          <NotificationItem type="job" target="UI/UX Desginer"/>
          <NotificationItem type="report" target="Software Engineer" author="Tulei Livia"/>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}