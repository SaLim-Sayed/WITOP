import React, { useState } from "react";

// import Banner from '@/public/images/banner-slide.png';
import ImageWithFallback from "../Custom/image-with-fallback";
import { cn } from "@/libs/cn";
import { Image } from "@nextui-org/react";

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
          "group relative border-2  border-stone-300 cursor-grab overflow-hidden rounded-xl",
          isDrag && "cursor-grabbing",
          src && "rounded-md ",
          isLarge && "rounded-none"
        )}
      >
        <Image
        radius="md"
          src={src}
          sizes="100vw"
          style={{
            width: "400px",
            height: "500px",
          }}
        />
      </div>
    </div>
  );
}
