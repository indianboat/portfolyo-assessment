import { create } from "zustand";
import { BASE_API_URL } from "../utils/constant";

// Define types for your state
type UserData = {
  user: {
    about: {
      name: string
    };
    social_handles: any[];
    timeline: any[];
    skills: any[];
    youtube: any[];
    testimonials: any[];
    projects: any[];
    services: any[];
  };
};

type UserStore = {
  data: UserData | null;
  isLoading: boolean;
  fetchUserDetails: (userId: string) => Promise<void>;
};


type UserAboutStore = {
  data: {
    name: string,
    phone: string,
    email: string,
    role: string
  } | null
  isLoading: boolean;
  fetchUserDetails: (userId: string) => Promise<void>;
};


const getUser = create<UserStore>()((set) => ({
  data: null,
  isLoading: true,
  fetchUserDetails: async (userId: string) => {
    try {
      const res = await fetch(`${BASE_API_URL}/api/v1/get/user/${userId}`);
      const data = await res.json();
      if (data) {
        set({ data: data });
      }
    } catch (error) {
      console.log(error);
    }
    finally {
      set({ isLoading: false })
    }
  }

}))

const getUserAbout = create<UserAboutStore>()((set) => ({
  data: null,
  isLoading: true,
  fetchUserDetails: async (userId: string) => {
    try {
      const res = await fetch(`${BASE_API_URL}/api/v1/get/user/${userId}`);
      const data = await res.json();
      if (data) {
        set({ data: { name: data.user.about.name, email: data.user.email, role: data.user.role, phone: data.user.about.phoneNumber } });
      }
    } catch (error) {
      console.log(error);
    }
    finally {
      set({ isLoading: false })
    }
  }

}))

export { getUser, getUserAbout };