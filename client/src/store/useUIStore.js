import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUIStore = create(
  persist(
    (set) => ({
      theme: 'dark', // 'dark' | 'light'
      toggleTheme: () => set((state) => {
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        if (nextTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return { theme: nextTheme };
      }),
      setTheme: (theme) => set(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return { theme };
      }),

      sidebarOpen: true,
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      commandPaletteOpen: false,
      setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
      toggleCommandPalette: () => set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen })),

      notifications: [],
      addNotification: (notification) => set((state) => ({
        notifications: [
          { id: Date.now().toString(), timestamp: new Date(), read: false, ...notification },
          ...state.notifications,
        ],
      })),
      dismissNotification: (id) => set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      })),
      clearNotifications: () => set({ notifications: [] }),
    }),
    {
      name: 'college-erp-ui-storage',
      partialize: (state) => ({ theme: state.theme, sidebarOpen: state.sidebarOpen }),
    }
  )
);
