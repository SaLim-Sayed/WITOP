import React, { ReactNode, useMemo, useState } from 'react';

import placeHolderImage from '@/public/images/hotelPlaceholder.jpg';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  useDisclosure,
} from '@nextui-org/react';

import ImageWithFallback from './image-with-fallback';

type Props = {
  children: ReactNode | any;
  title: string | undefined;
  images: any[] | undefined;
};

const SlideCard = ({ src, alt }: { src: string; alt: string }) => {
  const [isFallError, setIsFallError] = useState(false);
  return (
    <div className='relative h-[140px] w-[160px] overflow-hidden rounded-md sm:h-[200px] sm:w-[280px]'>
      <ImageWithFallback
        setIsFallError={() => setIsFallError(true)}
        fallbackSrc={placeHolderImage.src}
        placeholder='blur'
        blurDataURL={src}
        layout='fill'
        src={src}
        alt={alt}
      />
      {alt && !isFallError && src && (
        <div className='absolute bottom-0 left-1/2 w-full translate-x-[-50%] bg-black/10 text-center text-lightColor-900 shadow-medium backdrop-blur-[10px]'>
          {alt}
        </div>
      )}
    </div>
  );
};

export default function Gallery({ children, images, title }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const triggerButton = useMemo(
    () =>
      React.cloneElement(children, {
        onClick: onOpen,
      }),
    []
  );

  return (
    <>
      {triggerButton}
      <Modal
        classNames={{ backdrop: 'z-[400]', wrapper: 'z-[401]' }}
        backdrop='blur'
        isOpen={isOpen}
        onClose={onClose}
        size='5xl'>
        <ModalContent className='h-[600px]'>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>
                <ScrollShadow
                  className='grid h-[500px] grid-cols-2 gap-3 overflow-auto sm:grid-cols-3'
                  hideScrollBar>
                  {images?.map((target) => (
                    <SlideCard src={target.image_url} alt={target.caption} key={target.id} />
                  ))}
                </ScrollShadow>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
