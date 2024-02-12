import { cn } from '@/lib/utils';

export default function Badge({ text, className }: { text: string | number, className?: string }) {
  return (
    <div
      className={cn('flex justify-center items-center rounded px-1 min-w-6 text-xs bg-gray-200', className)}>{text}</div>
  );
}
