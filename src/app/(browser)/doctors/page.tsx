import Image from 'next/image';
import React from 'react';
import { hero_image, search_hero } from '@/assets';
import Link from 'next/link';
import { cn } from '../../../lib/utils';
import DoctorTeam from '../../components/doctor-team';
import HeroSection from '../../components/hero-section';

interface Props {
  searchParams: {
    q: string;
  };
}

const page = ({ searchParams: { q } }: Props) => {
  console.log('searchParams', q);
  return (
    <div className="grid grid-cols-12 gap-8">
      <HeroSection
        title="Introduce You to Our Experts"
        subTitle="The list of certified doctors with years of professional experiences"
        img={search_hero}
        className="md:flex-row-reverse"
      />
      <div className="col-span-10 col-start-2 grid grid-cols-1 gap-8">
        <div className="flex flex-nowrap gap-4 overflow-auto">
          <p>Sort by</p>
          {[
            'All',
            'Dentist',
            'Cardiologist',
            'Neurologist',
            'Gynecologist',
            'Dermatologist',
          ].map((item, index) => (
            <button
              key={index}
              className={cn(
                'px-4 py-2 text-sm font-semibold bg-white text-gray-800 rounded-md',
                q == undefined && item == 'All'
                  ? 'bg-green-500 text-white'
                  : item.toLocaleLowerCase() == q?.toLocaleLowerCase()
                  ? 'bg-green-500 text-white'
                  : ''
              )}
            >
              <Link href={`doctors?q=${item.toLocaleLowerCase()}`}>{item}</Link>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array(10)
            .fill({
              doctor: hero_image,
              name: 'Dr. John Doe',
              specialist: 'Dentist',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
            })
            .map((item, index) => (
              <DoctorTeam key={index} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
