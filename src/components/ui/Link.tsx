import { memo, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type LinkProps = {
  children: ReactNode;
  to?: string;
  className?: string;
};

export const Link = memo(({ children, to = '', className = '' }: LinkProps) => {
  return (
    <a href={to} className={cn('inline-block h-full w-full', className)}>
      {children}
    </a>
  );
});
