import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartActions, CartState } from "../types/cartTypes";
import { Product } from "@/types/product";

// Define the initial state for the cart
const initialCartState: CartState = {
  CartAmount: 0,
};

// Define the Cart Store
export const cartStore = create<CartState & CartActions>((set) => ({
  ...initialCartState,
  CartSetter: (CartAmount) => set({ CartAmount }),
}));

// Define the Product Store with Zustand
interface ProductStore {
  productsCart: Product[] | undefined;
  setProductsCart: (productsCart: Product[] | undefined) => void;
  getProductById: (id: any) => Product | undefined;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      productsCart: undefined,
      setProductsCart: (productsCart) => set({ productsCart }),
      getProductById: (id) => {
        const state = get();
        return state.productsCart?.find((product) => product._id === id);
      },
    }),
    {
      name: "product-store", // Unique name for local storage
      storage: createJSONStorage(() => localStorage), // Using localStorage
    }
  )
);
