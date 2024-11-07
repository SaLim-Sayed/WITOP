"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react"; 
import Gallery from "../Global/Custom/image-gallery";
import { Button } from "@nextui-org/react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Swipper from "../Global/Swipper";
export const productCategories = [
    {
      title: "PU Stone",
      images: [
        "/productCategories/PVC/1.PNG",
        "/productCategories/PVC/2.PNG",
        "/productCategories/PVC/3.PNG",
        "/productCategories/PVC/4.PNG",
        "/productCategories/PVC/5.PNG",
      ],
    },
    {
      title: "WPC Wall Panel",
      images: [
        "/productCategories/WPCWallPanel/1.PNG",
        "/productCategories/WPCWallPanel/2.PNG",
        "/productCategories/WPCWallPanel/3.PNG",
        "/productCategories/WPCWallPanel/4.PNG",
        "/productCategories/WPCWallPanel/5.PNG",
      ],
    },
    {
      title: "PVC Film Marble Sheet",
      images: [
        "/productCategories/PVCFilmMarbleSheet/1.PNG",
        "/productCategories/PVCFilmMarbleSheet/2.PNG",
        "/productCategories/PVCFilmMarbleSheet/3.PNG",
        "/productCategories/PVCFilmMarbleSheet/4.PNG",
        "/productCategories/PVCFilmMarbleSheet/5.PNG",
      ],
    },
    {
      title: "Gilded Marble Sheet",
      images: [
        "/productCategories/GildedMarbleSheet/1.PNG",
        "/productCategories/GildedMarbleSheet/2.PNG",
        "/productCategories/GildedMarbleSheet/3.PNG",
        "/productCategories/GildedMarbleSheet/4.PNG",
        "/productCategories/GildedMarbleSheet/5.PNG",
      ],
    },
    {
      title: "3D Print Marble Sheet",
      images: [
        "/productCategories/3DPrintMarbleSheet/1.PNG",
        "/productCategories/3DPrintMarbleSheet/2.PNG",
        "/productCategories/3DPrintMarbleSheet/3.PNG",
        "/productCategories/3DPrintMarbleSheet/4.PNG",
        "/productCategories/3DPrintMarbleSheet/5.PNG",
      ],
    },
    {
      title: "Bamboo Charcoal Wall Panel",
      images: [
        "/productCategories/BambooCharcoalWallPanel/1.PNG",
        "/productCategories/BambooCharcoalWallPanel/2.PNG",
        "/productCategories/BambooCharcoalWallPanel/3.PNG",
        "/productCategories/BambooCharcoalWallPanel/4.PNG",
        "productCategories/BambooCharcoalWallPanel/5.PNG",
      ],
    },
    {
      title: "Soft Stone",
      images: [
        "/productCategories/SoftStone/1.PNG",
        "/productCategories/SoftStone/2.PNG",
        "/productCategories/SoftStone/3.PNG",
        "/productCategories/SoftStone/4.PNG",
        "/productCategories/SoftStone/5.PNG",
      ],
    },
  ];
  
export default function CategoryDetails() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const decodedId = id ? decodeURIComponent(id) : "";
  const category = productCategories.find((category) => category.title === decodedId);

  console.log({category})
  // Handle case if category is not found
  if (!category) {
    return <div>Category not found</div>;
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      
      <div className='grid grid-cols-1 gap-1 sm:grid-cols-2  w-full md:min-h-[25vh]'>
        <div className='relative h-max w-full'>
        <div   className=" gap-4  w-[360px] md:w-full">
            <Swipper title={category?.title} images={category?.images} />
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className='relative hidden h-max w-full cursor-zoom-in sm:block'>
            
          </div>
     
          <Gallery title={category.title} images={category.images}>
            <Button
              size="md"
              className="lg:text-md absolute left-4 top-4 flex cursor-pointer items-center gap-[10px] rounded-3xl bg-lightColor-900 px-5 py-3 text-xs text-mainColor-900 hover:bg-mainColor-900 hover:text-lightColor-900 sm:text-xl lg:rounded-full lg:py-8"
            >
              <div>
                <HiOutlineSquares2X2 />
              </div>
              <div> browse_image </div>
            </Button>
          </Gallery>
     
      
      </div>
    </div>
    </div>
  );
}
