// OrderDetailsSkeleton.tsx
import React from "react";
import { Skeleton } from "@nextui-org/react";

const OrderDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-4">
      {/* Order Information */}
      <div className="border z-20 sticky top-32 flex flex-col justify-between items-center md:flex-row rounded-lg mb-4 p-4 bg-white shadow-sm">
        <div className="animate-pulse w-full">
          <div className="flex justify-between items-center mb-2">
            <Skeleton className="w-2/3 h-6 bg-gray-300 rounded" />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <Skeleton className="w-1/2 h-6 bg-gray-300 rounded" />
            <Skeleton className="w-1/4 h-6 bg-gray-300 rounded" />
            <Skeleton className="w-full h-6 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
      
      {/* Product Information */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 p-4 border-gray-500 bg-gray-100/60 rounded-lg">
          {/* Product Image */}
          <Skeleton className="w-full h-48 bg-gray-300 rounded" />
          
          {/* Product Name */}
          <Skeleton className="w-3/4 h-6 bg-gray-300 rounded" />

          {/* Pricing Information */}
          <div className="flex flex-col">
            <Skeleton className="line-through w-1/2 h-6 bg-gray-300 rounded" />
            <div className="flex gap-4 items-end">
              <div className="flex gap-2">
                <Skeleton className="text-2xl text-red-700 font-bold w-1/4 h-6 bg-gray-300 rounded" />
                <Skeleton className="  radius-lg size-sm w-1/4 h-6 bg-gray-300 rounded" />
              </div>
              <Skeleton className="text-green-500 w-1/4 h-6 bg-gray-300 rounded" />
            </div>
            <Skeleton className="text-gray-400 mt-4 w-1/3 h-6 bg-gray-300 rounded" />
          </div>

          {/* Quantity */}
          <div className="flex justify-between items-center">
            <Skeleton className="text-2xl font-bold w-1/4 h-6 bg-gray-300 rounded" />
          </div>

          {/* Description */}
          <Skeleton className="text-xl text-justify w-full h-6 bg-gray-300 rounded" />
        </div>
        <div className="bg-gray-300 h-[1px] w-full"></div>
      </div>
    </div>
  );
};

export default OrderDetailsSkeleton;
