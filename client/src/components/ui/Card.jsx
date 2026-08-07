import React from 'react';
import { cn } from './Button';

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-xl transition-all duration-200 hover:border-slate-700/80',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function StatCard({ title, value, change, trend = 'up', icon: Icon, subtitle, className }) {
  const isPositive = trend === 'up';

  return (
    <Card className={cn('relative overflow-hidden group', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-slate-100 mt-2 font-numeric tracking-tight">
            {value}
          </h3>
        </div>
        {Icon && (
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 group-hover:scale-110 transition-transform duration-200">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      {(change || subtitle) && (
        <div className="mt-4 flex items-center gap-2 text-xs">
          {change && (
            <span
              className={cn(
                'font-bold px-1.5 py-0.5 rounded',
                isPositive ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'
              )}
            >
              {isPositive ? '+' : ''}{change}
            </span>
          )}
          {subtitle && <span className="text-slate-400">{subtitle}</span>}
        </div>
      )}

      {/* Decorative Gradient Background Glow */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/10 transition-all pointer-events-none" />
    </Card>
  );
}
