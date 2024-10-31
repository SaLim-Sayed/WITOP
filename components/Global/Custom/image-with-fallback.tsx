import React, { useEffect, useState } from 'react';

import { ImageProps } from 'next/image';
import Image from 'next/legacy/image';

const ImageWithFallback = (props: ImageProps | any) => {
  const { src, fallbackSrc, setIsFallError, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
        setIsFallError && setIsFallError();
      }}
      sizes='100vw'
      style={{
        width: '100%',
        height: 'max-content',
      }}
    />
  );
};

export default ImageWithFallback;
