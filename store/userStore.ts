// store/userStore.ts
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from "axios";
import { create } from "zustand";

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
}

export const useUserStore = create<UserStore>((set,get) => ({
  user: null,
  notifications:[],
  teams:[],
  loading:false,
  setUser:async(data)=>{
    set({user:data})

  },
  

  
  removeUser: () => {set({ user: null })
  set({isLogged:false})
},
  isLogged: false,
  fetchUser: async(email)=>{
    set({isLoading:true})
    try {
      const response = await axios.post("/api/users", { email });

      if (response.data) {
        set({user:{
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          institution: response.data.institution,
        }});
    console.log("we have entered the fetch user : ", get().user)


        set({notifications:response.data.notifications});
        const eventNames = response.data.teams.map(
          (team: { eventName: string }) => team.eventName.toLowerCase()
        );
        set({teams:eventNames});
        set({isLogged:true})
      } else {
        // User not found
        set({loading:false})

      }
    } catch (error) {
      console.log("Error fetching user:", error);
      set({loading:false})

    } finally {
      set({loading:false})
    }
  }
}));
