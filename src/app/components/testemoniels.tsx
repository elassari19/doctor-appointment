'use client';

import React from 'react';
import { hero_image } from '../../assets';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Testemoniels = () => {
  return (
    <Slide>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-[40rem] mx-auto h-full bg-white rounded-xl p-8">
        <Image
          src={hero_image}
          alt="Smiling man with glasses wearing a light pink shirt"
          className="w-[10rem] h-[10rem] md:w-[40rem] md:h-[15rem] rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <div className="font-bold text-4xl text-green-600">❝</div>
          <div className="text-yellow-400 font-bold text-2xl">★★★★★</div>
          <p className="testimonial">
            "A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy".
          </p>
          <p className="font-bold text-lg">Mr. Williams</p>
          <p className="patient-info">Diabetes Patient</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-[40rem] mx-auto h-full bg-white rounded-xl p-8">
        <Image
          src={hero_image}
          alt="Smiling man with glasses wearing a light pink shirt"
          className="w-[10rem] h-[10rem] md:w-[40rem] md:h-[15rem] rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <div className="font-bold text-4xl text-green-600">❝</div>
          <div className="text-yellow-400 font-bold text-2xl">★★★★★</div>
          <p className="testimonial">
            "A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy".
          </p>
          <p className="font-bold text-lg">Mr. Williams</p>
          <p className="patient-info">Diabetes Patient</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-[40rem] mx-auto h-full bg-white rounded-xl p-8">
        <Image
          src={hero_image}
          alt="Smiling man with glasses wearing a light pink shirt"
          className="w-[10rem] h-[10rem] md:w-[40rem] md:h-[15rem] rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <div className="font-bold text-4xl text-green-600">❝</div>
          <div className="text-yellow-400 font-bold text-2xl">★★★★★</div>
          <p className="testimonial">
            "A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy".
          </p>
          <p className="font-bold text-lg">Mr. Williams</p>
          <p className="patient-info">Diabetes Patient</p>
        </div>
      </div>
    </Slide>
  );
};

export default Testemoniels;
