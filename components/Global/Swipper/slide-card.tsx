import { useState } from "react";

// import Banner from '@/public/images/banner-slide.png';
import { cn } from "@/libs/cn";
import Image from "next/legacy/image";

export default function SlideCard({
  src,
  alt,
  isLarge,
}: {
  src?: string;
  alt?: string;
  isLarge?: boolean;
}) {
  const [isDrag, setIsDrag] = useState(false);
  return (
    <div>
      <div
        className={cn(
          "group relative border-1 w-full  m-0 p-0 z-50   h-full cursor-grab overflow-hidden rounded-xl",
          isDrag && "cursor-grabbing",
         
        )}
      >
        <Image className="border-2" width={800} height={500}   src={src&&src}  alt={alt}/>
      </div>
    </div>
  );
}
