import { Product } from "@/types/product";

// types/orderTypes.ts
export interface Order {
  _id: string;
  cartTotal: number;
  totalAfterDiscount: number;
  orderStatus: string;
  paymentWay: string;
  orderDate?: string;
  coupon?: string;
  message?: string;
  products: Product[];
  userAddress?: string;
  userCity?: string;
  userName?: string;
  userPhone?: string;
  orderID?: string;
  __v?: number;
}
