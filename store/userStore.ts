// store/userStore.ts
import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  institution: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
  isLogged: boolean;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => {
    console.log("setUser called with:", user);
    set((state) => {
      console.log("Previous state:", state);
      console.log("Setting new user:", user);
      return { user };
    });
  },
  removeUser: () => set({ user: null }),
  isLogged: true,
}));
