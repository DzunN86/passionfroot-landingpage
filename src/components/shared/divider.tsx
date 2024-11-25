import { cn } from "@/lib/utils";

interface DividerProps {
  placement?: 'horizontal' | 'vertical';
  className?: string;
}

export default function Divider({ placement = 'horizontal', className }: DividerProps) {
  return (
    // <div className='w-[2px] h-4 bg-[#f5f3ea]' />
    <div className={cn('bg-[#f5f3ea]', placement === 'horizontal' ? 'w-full h-[2px]' : 'w-[2px] h-4', className)} />
  )
}
