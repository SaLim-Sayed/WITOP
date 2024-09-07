export type ReturnRequest = {
  _id: string;
  productName: string;
  message: string;
  requestDate: string;
  requestCode: string;
  phoneNumber: string;
  userID: string;
  orderID: string;
  __v: number;
};

// Type for an array of return requests
export type ReturnRequests = ReturnRequest[];
