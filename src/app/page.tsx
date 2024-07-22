import Image from 'next/image';
import Link from 'next/link';
import {
  cardiology_specialty,
  eye_specialty,
  hero_icon,
  hero_image,
  logo,
  mental_specialty,
  treatment_1,
  treatment_2,
  treatment_3,
  vaccination_specialty,
} from '../assets';
import Testemoniels from './components/testemoniels';

export default function Home() {
  return (
    <main className="w-full min-h-full grid grid-cols-12 bg-gray-100">
      {/* Main Content */}
      <div className="col-span-full mx-4 md:mx-0 flex flex-col md:flex-row md:col-span-10 md:col-start-2  gap-16 justify-center items-center py-16">
        <div className="flex items-center relative">
          <Image
            src={hero_image}
            alt="doctor"
            className="rounded-lg shadow-md w-[15rem] md:w-[24rem]"
          />
          <div className="flex items-start gap-1 text-sm bg-white rounded-lg px-4 py-2 absolute top-10 -left-20">
            <Image
              src={hero_icon}
              alt="icon"
              width={24}
              height={24}
              className="pt-1"
            />{' '}
            More than 10K <br /> Patients treated!
          </div>
        </div>
        <div className="flex flex-col gap-8 px-4 w-full md:w-1/2">
          <p className="welcome-text text-green-600 text-lg">
            Welcome to Medico Healthcare
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Journey to Better Health Starts Here
          </h1>
          <Link
            href="#"
            className="text-white py-2 bg-green-600 rounded-md hover:bg-green-700 w-fit px-8"
          >
            Discover More
          </Link>
        </div>
      </div>

      {/* services section */}
      <div className="col-span-full md:col-span-10 md:col-start-2 py-10 px-10 flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">
            Dedicated to provide best treatment.
          </h2>
          <p className="text-gray-800 text-xl md:w-[90%]">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-4">
          <div className="text-white font-semibold rounded-lg flex flex-col gap-3 relative">
            <Image
              src={treatment_1}
              alt="Pediatrician examining a baby"
              className="h-44 w-72 rounded-lg object-cover"
            />
            <div className="px-6 py-2 bg-green-600 absolute -bottom-10 left-4 rounded-xl">
              <span className=" text-white px-2 py-1 rounded-md inline-block mb-2">
                For your health
              </span>
              <h3 className="text-2xl mb-2">Pediatrician</h3>
            </div>
          </div>
          <div className="text-white font-semibold rounded-lg flex flex-col gap-3 relative">
            <Image
              src={treatment_2}
              alt="Cardiologist examining a patient"
              className="h-44 w-72 rounded-lg object-cover"
            />
            <div className="px-6 py-2 bg-green-600 absolute -bottom-10 left-4 rounded-xl">
              <span className=" text-white px-2 py-1 rounded-md inline-block mb-2">
                For your health
              </span>
              <h3 className="text-2xl mb-2">Cardiologist</h3>
            </div>
          </div>
          <div className="text-white font-semibold rounded-lg flex flex-col gap-3 relative">
            <Image
              src={treatment_3}
              alt="Dermatologist examining a patient's skin"
              className="h-44 w-72 rounded-lg object-cover"
            />
            <div className="px-6 py-2 bg-green-600 absolute -bottom-10 left-4 rounded-xl">
              <span className=" text-white px-2 py-1 rounded-md inline-block mb-2">
                For your health
              </span>
              <h3 className="text-2xl mb-2">Dermatologist</h3>
            </div>
          </div>
        </div>
      </div>

      {/* specialty section */}
      <div className="col-span-full md:col-span-10 md:col-start-2 py-10 px-10 flex flex-col gap-6">
        <div className="services-header mb-10">
          <h2 className="services-title text-green-600 text-lg font-bold uppercase mb-4">
            Services & Treatments
          </h2>
          <div className="services-cta flex flex-col md:flex-row gap-4 justify-between items-center">
            <h1 className="services-heading text-3xl font-bold text-gray-800 leading-tight">
              More than 40 specialty
              <br />
              and health care services
            </h1>
            <Link
              href="/services"
              className="see-all-button bg-green-600 text-white px-4 py-2 rounded-md hover:bg-blue-800"
            >
              See All Services
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className=" bg-white rounded-lg shadow-md p-4 flex items-start pt-4">
            <Image
              src={mental_specialty}
              alt="Mental Health Icon"
              className=" mr-4 h-10 w-10"
            />
            <div className="">
              <h3 className=" text-xl font-semibold text-gray-800 mb-2">
                Mental Health Service
              </h3>
              <p className=" text-gray-600 mb-4">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
              <div className=" flex items-center">
                <span className="arrow-icon text-gray-400 h-6 w-6 rounded-full flex justify-center items-center">
                  →
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-lg shadow-md p-4 flex items-start pt-4">
            <Image
              src={eye_specialty}
              alt="Eye Diseases Icon"
              className=" mr-4 h-10 w-10"
            />
            <div className="">
              <h3 className=" text-xl font-semibold text-gray-800 mb-2">
                Eye Diseases Service
              </h3>
              <p className=" text-gray-600 mb-4">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
              <div className=" flex items-center">
                <span className="arrow-icon text-gray-400 h-6 w-6 rounded-full flex justify-center items-center">
                  →
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-lg shadow-md p-4 flex items-start pt-4">
            <Image
              src={vaccination_specialty}
              alt="Eye Diseases Icon"
              className=" mr-4 h-10 w-10"
            />
            <div className="">
              <h3 className=" text-xl font-semibold text-gray-800 mb-2">
                Eye Diseases Service
              </h3>
              <p className=" text-gray-600 mb-4">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
              <div className=" flex items-center">
                <span className="arrow-icon text-gray-400 h-6 w-6 rounded-full flex justify-center items-center">
                  →
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-lg shadow-md p-4 flex items-start pt-4">
            <Image
              src={cardiology_specialty}
              alt="Eye Diseases Icon"
              className=" mr-4 h-10 w-10"
            />
            <div className="">
              <h3 className=" text-xl font-semibold text-gray-800 mb-2">
                Eye Diseases Service
              </h3>
              <p className=" text-gray-600 mb-4">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
              <div className=" flex items-center">
                <span className="arrow-icon text-gray-400 h-6 w-6 rounded-full flex justify-center items-center">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* choose section */}
      <div className="col-span-full md:col-span-10 md:col-start-2 py-10 px-10 flex flex-col gap-6">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="left-section">
            <div className="benefits-list">
              <h2 className="text-2xl font-semibold py-4">Why Choose Us?</h2>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <span className="benefit-text">Safety First Quality Must</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <span className="benefit-text">Patient-Centric Approach</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <span className="benefit-text">Focused Leadership</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <span className="benefit-text">Cutting-Edge Technology</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <span className="benefit-text">Transparent Pricing</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <span className="benefit-text">Coordinated Care</span>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="image-container">
              <Image
                src={hero_image}
                alt="Smiling healthcare professional speaking on the phone"
              />
              <div className="image-background"></div>
            </div>
          </div>
        </div>
        <div className="col-span-full flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Wellness, Compassion, Quality</h1>
          <p className="text-xl">
            They live in Bookmarks grove right at the coast of the Semantics, a
            large language ocean. A<br /> small river named Duden flows by their
            place and supplies it.
          </p>
          <Link href="#" className="cta-button w-fit px-6">
            Take An Appointment
          </Link>
        </div>
      </div>

      {/* testemoniels section */}
      <div className="col-span-full md:col-span-10 md:col-start-2 py-10 px-10 flex flex-col gap-6">
        <Testemoniels />
      </div>
    </main>
  );
}
