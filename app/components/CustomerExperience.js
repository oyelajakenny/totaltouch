import Image from 'next/image'
import React from 'react'

const CustomerExperience = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-20 p-5">
      <div className=" rounded-lg h-full w-full overflow-hidden">
        <Image
          src={"/images/experience.png"}
          alt="Customer Experience"
          width={800}
          height={400}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="text-center my-10 lg:p-20 flex flex-col justify-start items-start ">
        <div className="flex flex-col justify-start items-start space-y-2  ">
          <h4 className="text-left font-semibold text-[#0A58A2] text-2xl">
            CUSTOMER EXPERIENCE
          </h4>
          <h2 className="text-5xl font-bold text-black mb-4 text-left leading-15">
            What Our Customers Are Saying
          </h2>
        </div>

        <div className="flex flex-col justify-start items-start space-y-2  ">
          <p className="text-gray-600 max-w-3xl mx-auto text-left leading-8">
            I’ve been using Sparkling Clean Services for the past six months,
            and I couldn’t be more satisfied! From the moment I booked, their
            team was incredibly professional and attentive to my needs. They
            show up on time, and the attention to detail is unmatched. My home
            has never felt so fresh, and their eco-friendly cleaning products
            are a huge bonus!
          </p>
          <div className="flex justify-start gap-3 items-center">
            <Image
              src={"/images/john.png"}
              alt="Customer 1"
              width={50}
              height={50}
              className="rounded-full mt-4 mx-auto"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#0A58A2] mt-2">
                Jane Doe
              </h3>
              <p className="text-gray-500">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerExperience