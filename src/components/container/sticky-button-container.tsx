import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib/utils';

export const StickyButtonContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const topThreshold = 500;
  const bottomThreshold = 2500;

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    setIsSticky(scrollY > topThreshold && scrollY < bottomThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [topThreshold, bottomThreshold]);

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 z-50 w-full py-8 shadow-md transition-opacity duration-300',
        isSticky ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div className="flex justify-center">{children}</div>
    </div>
  );
};
