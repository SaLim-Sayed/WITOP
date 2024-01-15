// Define the types for state and actions
export type HeaderState = {
  headerClosingTrigger: boolean;
};

export type HeaderActions = {
  headerClosingSetter: (headerClosingTrigger: boolean) => void;
};
