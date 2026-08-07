import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: {
        id: 'u-1',
        name: 'Dr. Alex Vance',
        email: 'alex.vance@university.edu',
        role: 'Admin', // 'SuperAdmin' | 'Admin' | 'Faculty' | 'Student' | 'Guest'
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
        department: 'Computer Science',
      },
      token: 'jwt-mock-token-v1',
      isAuthenticated: true,

      login: (userData, token) => set({ user: userData, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
      updateUser: (partialUser) => set((state) => ({ user: { ...state.user, ...partialUser } })),
    }),
    {
      name: 'college-erp-auth-storage',
    }
  )
);
