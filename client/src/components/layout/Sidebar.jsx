import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Building2,
  CalendarCheck,
  ShieldAlert,
  Settings,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  School,
} from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';
import { useAuthStore } from '../../store/useAuthStore';

export function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useUIStore();
  const { user } = useAuthStore();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Students', href: '/students', icon: Users, badge: 'Active' },
    { name: 'Faculty', href: '/faculty', icon: GraduationCap },
    { name: 'Departments', href: '/departments', icon: Building2 },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Attendance', href: '/attendance', icon: CalendarCheck },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-slate-950 border-r border-slate-800/80 transition-all duration-300 flex flex-col justify-between ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Sidebar Header & Brand Logo */}
      <div>
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30 flex-shrink-0 shadow-lg shadow-indigo-500/10">
              <School className="w-5 h-5" />
            </div>
            {sidebarOpen && (
              <div className="flex flex-col">
                <span className="font-bold text-slate-100 text-sm tracking-tight flex items-center gap-1.5">
                  NexusERP <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                </span>
                <span className="text-[10px] text-slate-500 font-mono">v2.4 Enterprise</span>
              </div>
            )}
          </div>

          <button
            onClick={toggleSidebar}
            className="p-1.5 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 flex flex-col gap-1 mt-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 group relative ${
                    isActive
                      ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                  }`
                }
              >
                <Icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                {sidebarOpen && (
                  <div className="flex items-center justify-between w-full">
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer User Info */}
      <div className="p-3 border-t border-slate-800/80">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
          <img
            src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256'}
            alt={user?.name}
            className="w-8 h-8 rounded-lg object-cover flex-shrink-0 border border-slate-700"
          />
          {sidebarOpen && (
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs font-semibold text-slate-200 truncate">
                {user?.name || 'Dr. Alex Vance'}
              </span>
              <span className="text-[10px] text-indigo-400 font-mono font-medium">
                {user?.role || 'SuperAdmin'}
              </span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;