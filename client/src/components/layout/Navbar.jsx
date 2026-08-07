import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Search,
  Moon,
  Sun,
  Bell,
  Command,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';
import { useAuthStore } from '../../store/useAuthStore';

export function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme, toggleCommandPalette, sidebarOpen, notifications } = useUIStore();
  const { user } = useAuthStore();

  // Generate Breadcrumbs from current pathname
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <header
      className={`sticky top-0 z-30 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300 flex items-center justify-between px-6 ${
        sidebarOpen ? 'ml-64' : 'ml-20'
      }`}
    >
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
        <Link to="/dashboard" className="hover:text-slate-200 transition-colors">
          Home
        </Link>
        {pathSegments.map((segment, index) => {
          const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const formattedName =
            segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <React.Fragment key={url}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {isLast ? (
                <span className="text-slate-100 font-semibold">{formattedName}</span>
              ) : (
                <Link to={url} className="hover:text-slate-200 transition-colors">
                  {formattedName}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-3">
        {/* Command Palette Trigger Button */}
        <button
          onClick={toggleCommandPalette}
          className="flex items-center gap-3 px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 text-xs rounded-xl transition-all shadow-inner"
        >
          <Search className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline">Search system...</span>
          <kbd className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-400 rounded">
            <Command className="w-2.5 h-2.5" /> K
          </kbd>
        </button>

        {/* Theme Switcher Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-slate-400 hover:text-slate-100 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-400" />
          )}
        </button>

        {/* Notifications Button */}
        <button
          className="relative p-2 text-slate-400 hover:text-slate-100 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          {notifications.length > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
          )}
        </button>

        {/* User Role Badge */}
        <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-slate-800">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-300 font-medium">
            {user?.department || 'Computer Science'}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;