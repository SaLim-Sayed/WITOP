import React from "react";

import Image, { StaticImageData } from "next/legacy/image";

export const ImageCover = ({
  children,
  src,
}: {
  children?: React.ReactNode;
  src: StaticImageData;
}) => {
  return (
    <Image
      alt="Mountains"
      src={src}
      placeholder="blur"
      priority
      property="true"
    />
  );
};
