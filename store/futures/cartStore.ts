import { SetState, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartActions, CartState } from "../types/cartTypes";
import { Product } from "@/types/product";

// Define the initial state
const initialState: CartState = {
  CartAmount: 0,
};

// Define the store using Zustand's create function
export const cartStore = create<CartState & CartActions>((set) => ({
  // Initial state
  ...initialState,

  // Actions
  CartSetter: (CartAmount) => {
    set({ CartAmount });
  },
}));


 

 

interface ProductStore {
  productsCart: Product[] | undefined;
  setProductsCart: (productsCart: Product[] | undefined) => void;
}

export const useProductStore = create<ProductStore>((set: SetState<ProductStore>) => ({
  productsCart: undefined,
  setProductsCart: (productsCart) => set({ productsCart }),
}));

  
