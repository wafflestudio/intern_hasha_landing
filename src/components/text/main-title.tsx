import { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';

export const MainTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 text-center text-2xl font-bold',
        className
      )}
    >
      {children}
    </div>
  );
};
