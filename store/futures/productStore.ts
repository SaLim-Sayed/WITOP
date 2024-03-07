import { Product } from '@/types/product';
import {create} from 'zustand';

 
// Define the store
interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

// Create the store
export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
