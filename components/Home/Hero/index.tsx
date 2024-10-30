'use client';

import { useTranslations } from 'next-intl';

import Title from './hero-title';

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <div className='relative h-max bg-gradient-to-b from-linearColor-300 to-linearColor-400 py-[50px] sm:min-h-[818px]'>
      <div className='flex w-full flex-col items-center gap-[30px] sm:gap-[100px]'>
        <Title  data={["Witop Decor", 'Creating WPC Walls for Green Stylish Living']} />
      </div>
    </div>
  );
}
