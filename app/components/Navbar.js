import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  
  return (
    <div className="">
      <div className="container mx-auto hidden  md:flex justify-between items-center p-4 ">
        <div className="flex items-center space-x-7">
          <Image src={"/Logo.png"} alt="Logo" width={100} height={50} />
          <nav className="flex space-x-6 text-lg font-regular text-gray-600 ">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-blue-600">
              About Us
            </Link>
            <Link href="/service" className="hover:text-blue-600">
              Our Services
            </Link>
            <Link href="/contact-us" className="hover:text-blue-600">
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex space-x-4">
          <button className="bg-white py-2 px-6 font-semibold text-blue-600 rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
            GET QUOTE
          </button>
          <button className="bg-blue-600 py-2 px-4 font-semibold text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700">
            BOOK CLEANING
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar