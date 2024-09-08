export type Product = {
  _id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  mainCategory?: string;
  brand: string;
  sectionType: string;
  priceBeforeDiscount: number;
  discountPercentage: number;
  outOfStock: boolean;
  totalRating: any;
  images: string[];
  ratings: any[]; // You can replace 'any[]' with a specific type for ratings if needed
  relatedProducts: any;
  count: any;
  stock: any;
};
  
  export interface ICartState {
    cartAmount: number;
    cartTotal: number;
    numberOfItem: number;
    products: Product[];
    _id: string;
    message: string;
  }