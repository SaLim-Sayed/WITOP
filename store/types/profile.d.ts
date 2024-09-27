// Define the types for state and actions
export type ProfileState = {
  profileStatus: "personal" | "offers" | "allOrders" | "allReturn" | "Wallet"|"LoyaltySystem";
};

export type ProfileActions = {
  profileStatusSetter: (profileStatus: profileStatus) => void;
};
