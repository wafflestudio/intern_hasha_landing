import type { ReactNode } from 'react';

export const Description = ({ children }: { children: ReactNode }) => {
  return <div className="text-gray font-regular">{children}</div>;
};
