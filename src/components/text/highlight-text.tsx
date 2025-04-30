import { ReactNode, useRef } from 'react';

import { useIsVisible } from '@/shared/hooks/useIsVisible';
import { cn } from '@/shared/lib/utils';

export const HighlightText = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      className="relative inline-block"
      ref={ref}
    >
      <span className="text-red">{children}</span>
      <div
        className={cn(
          'bg-red/30 absolute bottom-[-0.1rem] left-[-0.1rem] h-4 -skew-x-10',
          isVisible ? 'animate-show-left' : 'animate-none',
          className
        )}
      ></div>
    </div>
  );
};
