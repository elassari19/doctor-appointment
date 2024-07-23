import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { cn } from '../../lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  img?: StaticImageData;
  title: string;
  specialty?: string;
  subTitle: string;
}

const HeroSection = ({
  img,
  title,
  specialty,
  subTitle,
  children,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        'col-span-full flex items-center gap-4 md:gap-20 p-4 md:px-24 flex-col-reverse md:flex-row bg-gradient-to-r from-green-300 to-green-700',
        className
      )}
    >
      <div className="flex-1 flex flex-col gap-4 p-4">
        <h1 className="text-4xl font-semibold md:w-[22rem]">{title}</h1>
        <p className="font-semibold">{specialty}</p>
        <p className="text-lg md:w-[30rem]">{subTitle}</p>
      </div>
      <div className="flex-1 relative">
        {img && (
          <Image src={img} alt="Search Hero" className="w-[30rem] h-[22rem]" />
        )}
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
