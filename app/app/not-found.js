import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  p-6">
      <div>
        <Image
          src="/images/cleaner.png"
          alt="notfound"
          width={300}
          height={300}
          className="mx-auto mt-20"
        />
      </div>
      <div className="mb-0">
        <h1 className="text-9xl text-center text-[#0A58A2] font-bold">404</h1>
      </div>
      <div className="text-center space-y-2.5">
        <h3 className="text-center text-5xl font-bold text-gray-600 mt-10">
          It seems there’s nothing to clean here
        </h3>
        <p className="text-2xl">
          The page you are looking for doesn’t exist or has been moved
        </p>
      </div>
      <div className="flex justify-center gap-6 mt-10">
        <Link href={"/"}>
          <button className="bg-blue-100 text-[#0A58A2] font-semibold px-6 py-3 rounded-full hover:bg-[#0A58A2] hover:text-white transition">
            Go back
          </button>
        </Link>

        <button className="bg-[#0A58A2] text-white px-6 py-3 font-semibold rounded-full  hover:bg-blue-900 transition">
          Go home
        </button>
      </div>
    </div>
  );
}

export default Notfound