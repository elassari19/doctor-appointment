import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Porps {
  doctor: StaticImageData;
  name: string;
  specialist: string;
  desc: string;
}

const DoctorTeam = ({ doctor, name, specialist, desc }: Porps) => {
  return (
    <Link
      href={`/doctors/${name}`}
      className="flex flex-col gap-4 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative">
        <Image src={doctor} alt="Doctor Team" className="w-full" />
        <div className="w-full absolute bottom-2 flex justify-center">
          <p className="rounded-t-xl w-[80%] text-center p-2 px-8 font-normal bg-green-500 text-white">
            {specialist}
          </p>
        </div>
      </div>
      <div className="p-8 grid gap-4">
        <h3 className="text-xl font-semibold text-green-600">{name}</h3>
        <p className="text-lg font-medium">{specialist}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </Link>
  );
};

export default DoctorTeam;
