import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartActions, CartState } from "../types/cartTypes";

// Define the initial state
const initialState: CartState = {
  CartAmount: 0,
};

// Define the store using Zustand's create function
export const cartStore = create(
  persist<CartState & CartActions>(
    (set) => ({
      // Initial state
      ...initialState,

      // Actions
      CartSetter: (CartAmount) => {
        set({ CartAmount });
      },
    }),
    {
      name: "cart-amount",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
