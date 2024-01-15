import { create } from "zustand";
import { persist } from "zustand/middleware";
import { HeaderActions, HeaderState } from "../types/headerTypes";

// Define the initial state
const initialState: HeaderState = {
  headerClosingTrigger: true,
};

// Define the store using Zustand's create function
export const useHeaderStore = create<HeaderState & HeaderActions>((set) => ({
  // Initial state
  ...initialState,

  // Actions
  headerClosingSetter: (headerClosingTrigger) => {
    set({ headerClosingTrigger });
  },
}));
