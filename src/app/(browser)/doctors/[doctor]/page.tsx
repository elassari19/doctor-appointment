import React from 'react';
import { db } from '@/lib/db';
import HeroSection from '@/components/hero-section';
import { hero_image } from '@/assets';
import { RiCalendarScheduleFill } from 'react-icons/ri';
import { BsTelephone } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { FaClock } from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa6';
import Image from 'next/image';

interface Poprs {
  params: {
    doctor: string;
  };
}

const page = async ({ params }: Poprs) => {
  // const doctor = db.doctors.find((d) => d.slug === params.doctor);
  return (
    <div className="grid grid-col-1 md:grid-cols-12 gap-16">
      <HeroSection
        title="Dr. Sarah Lee, MD, MPH, FAPA"
        specialty="Board-certified Psychiatrist"
        subTitle="With more than 15 years of experience learning human psychology and behavior, Dr. Jones is an expert in managing mood disorders and anxiety disorders"
        // img={hero_image}
        className="md:flex-row-reverse col-span-full"
      >
        <div className="relative h-[20rem]">
          <Image
            src={hero_image}
            alt="Doctor"
            width={500}
            height={500}
            className="rounded-xl w-[20rem] md:w-[25rem] md:absolute top-16"
          />
          <div className=" flex justify-center absolute bottom-4 md:-bottom-28 left-12 md:left-20 z-10 h-10">
            <p className="bg-green-600 text-white font-semibold rounded-t-xl p-2 px-6 ">
              Specialist in Psychiatry
            </p>
          </div>
        </div>
      </HeroSection>

      <div className="col-span-full md:col-span-10 p-4 md:mb-16 md:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 md:pt-20">
            <div className="flex items-center gap-4">
              <RiCalendarScheduleFill className="text-2xl text-green-600" />
              <h3 className="font-semibold text-lg">Contact Info</h3>
            </div>
            <div className="flex items-center gap-4">
              <BsTelephone className="text-lg text-green-600" />
              <p>+123+456-7890</p>
            </div>
            <div className="flex items-center gap-4">
              <TfiEmail className="text-lg text-green-600" />
              <p>sarahlee@prohealth.com</p>
            </div>
          </div>

          <div className="space-y-4 max-w-screen-sm md:w-[80%]">
            <div className="flex items-center gap-4">
              <RiCalendarScheduleFill className="text-2xl text-green-600" />
              <h3 className="font-semibold text-lg">Appointment Schedules</h3>
            </div>
            <div className="bg-gray-100 p-8 shadow-xl rounded-xl grid gap-2">
              <p className="flex justify-between">
                <span>Monday:</span>{' '}
                <span className="flex gap-2 items-center">
                  <FaClock className="text-green-600" /> 9:00 AM - 5:00 PM
                </span>
              </p>
              <p className="flex justify-between">
                <span>Tuesday:</span>{' '}
                <span className="flex gap-2 items-center">
                  <FaClock className="text-green-600" /> 9:00 AM - 5:00 PM
                </span>
              </p>
              <p className="flex justify-between">
                <span>Wednesday:</span>{' '}
                <span className="flex gap-2 items-center">
                  <FaClock className="text-green-600" /> 9:00 AM - 5:00 PM
                </span>
              </p>
              <p className="flex justify-between">
                <span>Thursday:</span>{' '}
                <span className="flex gap-2 items-center">
                  <FaClock className="text-green-600" /> 9:00 AM - 5:00 PM
                </span>
              </p>
              <p className="flex justify-between">
                <span>Friday:</span>{' '}
                <span className="flex gap-2 items-center">
                  <FaClock className="text-green-600" /> 9:00 AM - 5:00 PM
                </span>
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-center md:justify-start">
            <button className="p-4 px-8 bg-green-600 text-white font-semibold rounded-xl">
              Book An Appointement
            </button>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <FaGraduationCap className="text-4xl text-green-600" />
                <h3 className="font-semibold text-2xl">Degrees</h3>
              </div>
              <div className="">
                <p className="font-medium text-base flex items-start gap-2">
                  <GoDotFill className="min-w-6 min-h-6 text-green-600" />{' '}
                  University of California, San Francisco.
                </p>
                <p className="ml-8 text-gray-500">Medical degree</p>
              </div>
              <div className="">
                <p className="font-medium text-base flex items-start gap-2">
                  <GoDotFill className="min-w-6 min-h-6 text-green-600" />{' '}
                  University of California, Los Angeles (UCLA) Medical Center.
                </p>
                <p className="ml-8 text-gray-500">
                  Completed residency training in psychiatry
                </p>
              </div>
              <div className="">
                <p className="font-medium text-base flex items-start gap-2">
                  <GoDotFill className="min-w-6 min-h-6 text-green-600" />{' '}
                  University of California, Berkeley.
                </p>
                <p className="ml-8 text-gray-500">
                  Master of Public Health degree
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <BsBriefcaseFill className="text-4xl text-green-600" />
                <h3 className="font-semibold text-2xl">Experiences</h3>
              </div>
              <div className="">
                <p className="font-medium text-base flex items-start gap-2">
                  <GoDotFill className="min-w-6 min-h-6 text-green-600" />{' '}
                  Worked in community mental health clinics, private practice,
                  and academic medical centers.
                </p>
              </div>
              <div className="">
                <p className="font-medium text-base flex items-start gap-2">
                  <GoDotFill className="min-w-6 min-h-6 text-green-600" />{' '}
                  Expertise in the treatment of mood disorders, anxiety
                  disorders, and psychotic disorders.
                </p>
              </div>
              <div className="">
                <p className="font-medium text-base flex items-start gap-2">
                  <GoDotFill className="min-w-6 min-h-6 text-green-600" />{' '}
                  Special interest in women's mental health and perinatal
                  psychiatry.
                </p>
              </div>
              <div className="">
                <p className="font-medium text-base flex items-start gap-2">
                  <GoDotFill className="min-w-6 min-h-6 text-green-600" />{' '}
                  Experience managing complex cases that involve both mental
                  health and medical issues.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <FaAward className="text-4xl text-green-600" />
                <h3 className="font-semibold text-2xl">Awards/Achievements</h3>
              </div>
              <div className="">
                <p className="font-medium text-base flex items-start gap-2">
                  <GoDotFill className="min-w-6 min-h-6 text-green-600" />{' '}
                  Fellow of the American Psychiatric Association (FAPA).
                </p>
              </div>
              <div className="">
                <p className="font-medium text-base flex items-start gap-2">
                  <GoDotFill className="min-w-6 min-h-6 text-green-600" />{' '}
                  Recognized for research contributions with grants from the
                  National Institute of Mental Health (NIMH) and the American
                  Foundation for Suicide Prevention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
