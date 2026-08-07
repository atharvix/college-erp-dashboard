import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { Navbar } from '../components/layout/Navbar';
import { CommandPalette } from '../components/layout/CommandPalette';
import { useUIStore } from '../store/useUIStore';

export default function MainLayout({ children }) {
  const { sidebarOpen } = useUIStore();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Sidebar />
      <Navbar />
      <CommandPalette />

      <main
        className={`flex-1 p-6 md:p-8 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <div className="max-w-7xl mx-auto space-y-8">{children}</div>
      </main>
    </div>
  );
}