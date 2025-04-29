import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';

export const ContentLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn('flex justify-center', className)}>
      <div className="m-auto flex max-w-[402px] flex-col">{children}</div>
    </section>
  );
};
