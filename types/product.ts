export type Product= {
    _id: string;
    productName: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    sectionType: string;
    priceBeforeDiscount: number;
    discountPercentage: number;
    outOfStock: boolean;
    totalRating: any;
    images: string[];
    ratings: any[]; // You can replace 'any[]' with a specific type for ratings if needed
    relatedProducts:any;
    count:any;
  }
  