export const calculateTotalAfterDiscount = (
  TotalCartAmount: number,
  discount: number,
  coupon?: string
) => {
  let totalAfterDiscount = TotalCartAmount;

  // Apply discount if there is a coupon
  if (coupon) {
    totalAfterDiscount = TotalCartAmount - (discount * TotalCartAmount) / 100;
  }

  // Apply shipping discount if totalAfterDiscount is more than 300 SAR
  if (totalAfterDiscount > 300) {
    totalAfterDiscount -= 30;
  }
  totalAfterDiscount = Math.round(totalAfterDiscount);
  return totalAfterDiscount;
};
