import React, { ReactNode, useMemo, useState } from 'react';

 
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
import SlideCard from '../Swipper/slide-card';

type Props = {
  children: ReactNode | any;
  title: string | undefined;
  images: any[] | undefined;
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
                  {images?.map((target,index) => (
                    <SlideCard
                    isLarge
                    src={target}
                    key={index}
                    alt={target}
                  />
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
