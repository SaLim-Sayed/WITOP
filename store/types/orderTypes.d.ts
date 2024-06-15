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
    userAddress?: string;
    userCity?: string;
    userName?: string;
    userPhone?: string;
    __v?: number;
  }
  