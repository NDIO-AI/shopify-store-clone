import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      login: async (email: string, password: string) => {
        try {
          // This would be an actual API call in a real app
          // In a real implementation, we would use the password
          console.log(`Attempting login with password: ${password.replace(/./g, '*')}`);
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock successful login
          const user = {
            id: '1',
            email,
            role: 'buyer' as const,
          };
          
          const token = 'mock-jwt-token';
          
          set({
            user,
            token,
            isAuthenticated: true,
          });
        } catch {
          throw new Error('Invalid credentials');
        }
      },
      
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
