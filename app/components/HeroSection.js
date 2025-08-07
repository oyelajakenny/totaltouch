import Image from 'next/image'
import React from 'react'


const HeroSection = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-20 px-8 ">
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2  justify-center space-y-10 pr-16">
        <h1 className="text-left font-bold leading-20 text-7xl mb-4">
          Spotless <span className="text-[#0A58A2]">Homes</span> &{" "}
          <span className="text-[#0A58A2]">Offices</span>  Cleaning and Fresh <span className="text-[#0A58A2]">Laundry</span>
        </h1>
        <p className="text-lg text-left mb-8">
          Enjoy the Comfort of a Fresh, Clean Home, Office and Wardrobe <br></br> with Our
          Expert Services.
        </p>
        <div>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md mr-4">
            Get Quote
          </button>
          <button className="bg-white text-blue-600 py-2 px-6 rounded-lg shadow-md">
            Book Cleaning
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center ">
        <Image
          src={"/hero-image.png"}
          alt="Total Touch Cleaning and Laundry Services"
          loading='lazy'
          width={1000 }
          height={300}
        />
      </div>
    </div>
  );
}

export default HeroSection