import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="">
      <div className="container mx-auto hidden  md:flex justify-between items-center p-4 ">
        <div className='flex items-center space-x-7'>
          <Image src={"/Logo.png"} alt="Logo" width={100} height={50} />
          <nav className="flex space-x-6 text-lg font-semibold">
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
        </div>

        <div className="flex space-x-4">
          <button className="bg-white py-2 px-6 font-semibold text-blue-600 rounded-lg shadow-md">
            GET QUOTE
          </button>
          <button className="bg-blue-600 py-2 px-4 font-semibold text-white rounded-lg">
            BOOK CLEANING
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar