import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logo } from '../../assets';

const Footer = () => {
  return (
    <footer className="grid grid-cols-12 gap-4 p-8 bg-green-600">
      <div className="col-span-10 col-start-2 grid grid-cols-11 gap-y-6 text-white font-semibold">
        <div className="col-span-full md:col-span-3 flex flex-col gap-4">
          <div className="logo flex gap-2">
            <Image src={logo} alt="Medico logo" width="40" height="40" />
            Medico
          </div>
          <div className="buttons">
            <Link href="#" className="button">
              Take an Appointment
            </Link>
            <Link href="#" className="button">
              Connect on Whatsapp
            </Link>
          </div>
        </div>
        <div className="col-span-full md:col-span-2">
          <h3 className="mb-4 font-bold">SERVICES</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Pathology</Link>
            </li>
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Ambulance</Link>
            </li>
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Radiology</Link>
            </li>
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Pharmacy</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-full md:col-span-2">
          <h3 className="mb-4 font-bold">HEALTH CHECKUP</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Woman Health</Link>
            </li>
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Cancer Screening</Link>
            </li>
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Cardiac Health</Link>
            </li>
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">MRI Checkup</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-full md:col-span-2">
          <h3 className="mb-4 font-bold">DEPARTMENTS</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">General</Link>
            </li>
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Dermatology</Link>
            </li>
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Cardiology</Link>
            </li>
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Cancer</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-full md:col-span-2">
          <h3 className="mb-4 font-bold">QUICK LINKS</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">License</Link>
            </li>
            <li className="ml-4 hover:underline hover:font-extrabold">
              <Link href="#">Changelog</Link>
            </li>
          </ul>
          <div className="social-icons">
            <Link href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" aria-label="Pinterest">
              <i className="fab fa-pinterest-p"></i>
            </Link>
            <Link href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
