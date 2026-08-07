import React from 'react';
import { cn } from './Button';

export function Badge({ children, variant = 'default', className, dot = true }) {
  const variants = {
    default: 'bg-slate-800 text-slate-300 border-slate-700/60',
    active: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    inactive: 'bg-slate-800/80 text-slate-400 border-slate-700/40',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    danger: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  };

  const dotColors = {
    default: 'bg-slate-400',
    active: 'bg-emerald-400 animate-pulse',
    inactive: 'bg-slate-500',
    warning: 'bg-amber-400',
    danger: 'bg-rose-400',
    indigo: 'bg-indigo-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full border',
        variants[variant],
        className
      )}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full', dotColors[variant])} />}
      {children}
    </span>
  );
}
