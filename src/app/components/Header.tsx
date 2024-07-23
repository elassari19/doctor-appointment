import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logo } from '../../assets';

const Header = () => {
  return (
    <header className="bg-gray-100 flex flex-col">
      {/* Topbar */}
      <div className="col-span-full bg-green-600 text-white flex flex-col gap-6 md:flex-row justify-between items-center py-6 px-10">
        <div className="topbar-left flex flex-col md:flex-row md:space-x-4">
          <div className="topbar-item"> 90919 Madie run Apt. 790</div>
          <div className="topbar-item">✉️ medico@health.care</div>
        </div>
        <div className="topbar-right">
          <Link
            href="https://wa.me/212601674860"
            className="text-white px-4 py-2 bg-green-500 rounded-md"
          >
            Connect on Whatsapp
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="col-span-full flex flex-col md:flex-row justify-between items-center gap-4 p-4 md:px-16">
        <Link href="/" className="logo flex items-center gap-2">
          <Image
            src={logo}
            alt="Medico logo"
            width={30}
            height={30}
            className="w-full h-full"
          />
          Medico
        </Link>
        <div className="col-span-full flex justify-between items-center gap-4 font-bold text-green-600">
          {['Home', 'About Us', 'Doctors', 'Sign In', 'Sign Up'].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-800 hover:text-green-700 text-xs md:text-base"
              >
                {item}
              </Link>
            )
          )}
        </div>
        <Link
          href="https://wa.me/212601674860"
          className="text-white px-4 py-2 bg-green-600 rounded-md hover:bg-green-800"
        >
          1005-346-272
        </Link>
      </nav>
    </header>
  );
};

export default Header;
