export type CartState = {
  CartAmount: number;
};

export type CartActions = {
  CartSetter: (CartAmount: number) => void;
};
