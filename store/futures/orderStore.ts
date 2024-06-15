// stores/orderStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Order } from "../types/orderTypes";

// Define the initial state for the orders
interface OrderState {
  orders: Order[] | undefined;
  setOrders: (orders: Order[] | undefined) => void;
  addOrder: (order: Order) => void;
  getOrderById: (id: string) => Order | undefined;
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: undefined,
      setOrders: (orders) => set({ orders }),
      addOrder: (order) => set((state) => ({ orders: [...(state.orders || []), order] })),
      getOrderById: (id) => get().orders?.find((order) => order._id === id),
    }),
    {
      name: "order-store", // Unique name for local storage
      storage: createJSONStorage(() => localStorage), // Using localStorage
    }
  )
);
