// store/userStore.ts
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

interface User {
  id: string;
  name: string;
  email: string;
  institution: string;
}

interface UserStore {
  user: User | null; // Stores user details
  notifications: any[]; // Stores user notifications
  teams: string[]; // Stores team names (as strings)
  loading: boolean; // Indicates whether the store is in a loading state
  isLogged: boolean; // Indicates if the user is logged in
  setUser: (user: User) => void; // Sets the user data
  removeUser: () => void; // Removes the user data and logs out the user
  fetchUser: (email: string) => Promise<void>; // Fetches user data based on email
  authCheck: () => void;
  setIsLogged: (data) => void;
  closed:string[];
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  closed:['sparkhack'],
  notifications: [],
  teams: [],
  isLogged: false,
  loading: true,
  setIsLogged:(data)=>{
    set({isLogged:data})
  },
  authCheck: () => {
    set({ loading: true });
    const userCookie = Cookies.get("users");
    const email = userCookie ? JSON.parse(userCookie).email : null;
    if (!get().user && email) {
      get().fetchUser(email);
    }
    if (!email){
      set({isLogged:false})
    }
    set({ loading: false });
  },
  setUser: async (data) => {
    set({ user: data });
  },

  removeUser: () => {
    set({ user: null });
    set({ isLogged: false });
  },
  fetchUser: async (email) => {
    set({ isLoading: true });
    try {
      const response = await axios.post("/api/users", { email });

      if (response.data) {
        set({
          user: {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            institution: response.data.institution,
          },
        });

        set({ notifications: response.data.notifications });
        set({ isLogged: true });
        const eventNames = response.data.teams.map(
          (team: { eventName: string }) => team.eventName.toLowerCase()
        );
        set({ teams: eventNames });
      } else {
        // User not found
        set({ loading: false });
        set({ isLogged: false });

      }
    } catch (error) {
      console.log("Error fetching user:", error);
      set({ loading: false });
      set({ isLogged: false });

    } finally {
      set({ loading: false });

    }
  },
}));
