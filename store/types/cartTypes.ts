export type CartState = {
  CartAmount: number;
  TotalCartAmount: number;
  discount?:any
};

export type CartActions = {
  CartSetter: (CartAmount: number) => void;
  TotalCartSetter: (TotalCartAmount: number) => void;
  SetDiscount: (discount: number) => void;
};
