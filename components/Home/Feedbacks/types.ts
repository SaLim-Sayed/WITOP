// Define the User type
export type User = {
  _id: string;
  userName: string;
};

// Define the Feedback type
export type Feedback = {
  _id: string;
  userID: User;
  comment: string;
  isVisible: boolean;
  rating: number;
  __v: number;
};

// Define an array of Feedback objects
export type FeedbacksType = Feedback[];
