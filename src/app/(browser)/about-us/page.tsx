import React from 'react';
import { about_hero, about_shoose, hero_image } from '@/assets';
import HeroSection from '@/components/hero-section';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import Image from 'next/image';

const page = () => {
  return (
    <div className="grid grid-cols-12 gap-16 mb-16">
      <HeroSection
        title="Welcome to ProHealth Medical & Healthcare Center"
        subTitle="Your Partner in Health and Wellness"
        img={about_hero}
        className="md:flex-row-reverse"
      />
      <div className="col-span-10 col-start-2 grid grid-cols-1 gap-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-semibold text-green-600">SERVICES</h2>
            <p className="text-3xl md:text-5xl font-semibold">
              Provides Our Best Services
            </p>
          </div>
          {[
            {
              title: 'Diagnostic testing',
              desc: 'Blood tests, imaging studies, and other tests to diagnose health conditions',
            },
            {
              title: 'Rehabilitation services',
              desc: 'Physical therapy, occupational therapy, and other services to help patients recover from injurie',
            },
            {
              title: 'Preventive care',
              desc: 'Annual checkups, immunizations, and health screenings care preventive',
            },
            {
              title: 'Treatment for acute and chronic conditions',
              desc: 'Medication management, disease management, and other treatments to improve health outcomes',
            },
            {
              title: 'Mental health services',
              desc: 'Counseling, therapy, and other services to help patients manage mental health conditions',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-xl shadow-md grid gap-2"
            >
              <MdOutlineCalendarMonth className="rounded-full p-2 text-white text-4xl bg-green-600" />
              <h3 className="text-2xl font-bold text-green-600">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:gap-16">
          <Image
            src={about_shoose}
            alt="about-hero"
            width={500}
            height={500}
            className="flex-1"
          />
          <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 gap-8">
            <h2 className="col-span-full text-5xl font-semibold">
              Why Choose Us
            </h2>
            {[
              {
                icon: '',
                title: 'Experienced Medical Professionals',
                desc: 'Our team includes experienced doctors, nurses, and other healthcare professionals who are dedicated to providing the best possible care to our patients.',
              },
              {
                icon: '',
                title: 'Comprehensive Services',
                desc: 'We offer a wide range of healthcare services, from preventive care to specialized treatment for complex conditions.',
              },
              {
                icon: '',
                title: 'Patient-centered Approach',
                desc: 'We believe in treating each patient as an individual, and we take the time to understand your unique health needs and concerns.',
              },
              {
                icon: '',
                title: 'State-of-the-art Facilities',
                desc: 'Our healthcare center is equipped with the latest technology and equipment to provide our patients with the most advanced care possible.',
              },
            ].map((item, index) => (
              <div key={index} className="grid gap-2 p-4">
                <h3 className="text-2xl font-semibold text-green-600">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-full grid gap-2 place-content-center text-center">
            <h2 className="text-lg font-semibold text-green-600">Meet Our</h2>
            <p className="text-3xl font-semibold">Experts Doctor</p>
          </div>

          {Array(3)
            .fill({
              doctor: hero_image,
              name: 'Dr. John Doe',
              specialist: 'Emergency Medicine Physician',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
            })
            .map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl flex flex-col justify-center items-center gap-4 shadow-lg"
              >
                <Image
                  src={item.doctor}
                  alt="doctor"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <h3 className="text-2xl font-bold text-green-600">
                  {item.name}
                </h3>
                <p className="text-gray-700 font-semibold">{item.specialist}</p>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-full grid gap-2 place-content-center text-center">
            <h2 className="text-lg font-semibold text-green-600">AWARDS</h2>
            <p className="text-3xl font-semibold">
              Winning Awards and & <br /> Recognition
            </p>
            <p className="text-sm">
              We have been recognized for our commitment to <br />
              excellence in healthcare.
            </p>
          </div>
          {[
            'Malcolm Baldrige National Quality Award',
            'HIMSS Davies Award',
            'Healthgrades National’s Best Hospital',
            'Joint Commission Gold Seal of Approval',
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md flex items-center gap-2"
            >
              <MdOutlineCalendarMonth className="rounded-full p-2 text-white text-5xl bg-green-600" />
              <h3 className="text-xl font-medium">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
