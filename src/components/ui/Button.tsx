import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

const buttonVariantsClasses = {
  primary:
    'inline-block rounded-lg bg-prime-200 px-4 py-2 font-semibold text-prime-50 capitalize hover:bg-prime-100',
  ghost:
    'inline-flex items-center justify-center rounded-md p-2 hover:bg-second-200 focus-visible:outline focus-visible:outline-prime-200 md:hidden',
  danger:
    'inline-block rounded-lg px-4 py-2 font-semibold text-prime-50 capitalize bg-prime-300 hover:bg-prime-400',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof buttonVariantsClasses;
}

export const Button = ({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariantsClasses[variant], className)}
    >
      {children}
    </button>
  );
};
