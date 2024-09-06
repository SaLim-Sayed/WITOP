import { create } from "zustand";
import { ProfileActions, ProfileState } from "../types/profile";

// Define the initial state
const initialState: ProfileState = {
  profileStatus: "personal",
};

// Define the store using Zustand's create function
export const useProfileStore = create<ProfileState & ProfileActions>((set) => ({
  // Initial state
  ...initialState,

  // Actions
  profileStatusSetter: (profileStatus) => set({ profileStatus }),
}));
