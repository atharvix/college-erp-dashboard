import React, { useEffect } from 'react';
import { Command } from 'cmdk';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Plus,
  Moon,
  Sun,
  LogOut,
  Search,
  BookOpen,
  Settings,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUIStore } from '../../store/useUIStore';

export function CommandPalette() {
  const navigate = useNavigate();
  const { commandPaletteOpen, setCommandPaletteOpen, theme, toggleTheme } = useUIStore();

  // Keyboard listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [commandPaletteOpen, setCommandPaletteOpen]);

  if (!commandPaletteOpen) return null;

  const handleSelect = (action) => {
    action();
    setCommandPaletteOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-start justify-center pt-24 p-4"
      onClick={() => setCommandPaletteOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="w-full">
          <div className="flex items-center border-b border-slate-800 px-4 py-3 gap-2 text-slate-400">
            <Search className="w-5 h-5 text-indigo-400" />
            <Command.Input
              placeholder="Type a command or search..."
              className="w-full bg-transparent text-slate-100 placeholder:text-slate-500 focus:outline-none text-sm"
              autoFocus
            />
            <kbd className="px-2 py-0.5 text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-400 rounded">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2 text-sm text-slate-200">
            <Command.Empty className="p-4 text-center text-xs text-slate-500">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="px-2 py-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <Command.Item
                onSelect={() => handleSelect(() => navigate('/dashboard'))}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-800 aria-selected:bg-indigo-600/20 aria-selected:text-indigo-400 transition-colors"
              >
                <LayoutDashboard className="w-4 h-4 text-slate-400" />
                <span>Dashboard</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(() => navigate('/students'))}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-800 aria-selected:bg-indigo-600/20 aria-selected:text-indigo-400 transition-colors"
              >
                <Users className="w-4 h-4 text-slate-400" />
                <span>Students Directory</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(() => navigate('/faculty'))}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-800 aria-selected:bg-indigo-600/20 aria-selected:text-indigo-400 transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-slate-400" />
                <span>Faculty Directory</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Quick Actions" className="px-2 py-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-2">
              <Command.Item
                onSelect={() => handleSelect(() => navigate('/students/add'))}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-800 aria-selected:bg-indigo-600/20 aria-selected:text-indigo-400 transition-colors"
              >
                <Plus className="w-4 h-4 text-emerald-400" />
                <span>Add New Student</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(() => navigate('/faculty/add'))}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-800 aria-selected:bg-indigo-600/20 aria-selected:text-indigo-400 transition-colors"
              >
                <Plus className="w-4 h-4 text-emerald-400" />
                <span>Add New Faculty Member</span>
              </Command.Item>

              <Command.Item
                onSelect={() => handleSelect(toggleTheme)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-800 aria-selected:bg-indigo-600/20 aria-selected:text-indigo-400 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
                <span>Toggle Theme ({theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'})</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="border-t border-slate-800 px-4 py-2 flex items-center justify-between text-[11px] text-slate-500 bg-slate-950/50">
            <span>Use ↑ ↓ to navigate</span>
            <span>press ↵ to select</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
