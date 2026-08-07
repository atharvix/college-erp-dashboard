import React from 'react';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = React.forwardRef(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-lg';

    const variants = {
      primary:
        'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 active:scale-[0.98]',
      secondary:
        'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/60 shadow-sm active:scale-[0.98] dark:bg-slate-800 dark:border-slate-700',
      outline:
        'border border-slate-700/60 hover:bg-slate-800/50 text-slate-200 active:scale-[0.98]',
      ghost:
        'hover:bg-slate-800/60 text-slate-300 hover:text-white active:scale-[0.98]',
      danger:
        'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20 active:scale-[0.98]',
      emerald:
        'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 active:scale-[0.98]',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2 gap-2',
      lg: 'text-base px-5 py-2.5 gap-2.5',
      icon: 'p-2 aspect-square',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
