import { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';

export const HighlighText = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className="relative inline-block">
      <span className="text-red">{children}</span>
      <div className={cn('bg-red/30 absolute -skew-x-10', className)}></div>
    </div>
  );
};
