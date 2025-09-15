"use client";
import React from "react";
import { contact } from "../../constants";

const page = () => {
  return (
    <div className="conatiner mx-auto flex flex-col justify-start items-center">
      <div className="flex flex-col gap-3 justify-center items-center text-center w-full my-10">
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p>
          Ready to experience the Total Touch difference? <br></br> Contact us
          today for a free estimate or to schedule your service.
        </p>
        {/* <div className="w-full h-auto">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=192jwuPAknDQ7kl6k10TdklpmKc8aA7k&ehbc=2E312F&noprof=1"
            width="100%"
            height="480"
          ></iframe>
        </div> */}
      </div>
      <div className="container  w-full flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-start px-4 lg:px-40 ">
        <div className="w-full  lg:w-1/2 m-7 grid grid-cols-1 sm:grid-cols-2 gap-3 ">
          {contact.map((items, index) => {
            return (
              <div
                key={index}
                className="flex justify-start items-center shadow-sm rounded-sm gap-2 p-2 lg:p-5 bg-white mb-5"
              >
                <div className="p-2 w-fit rounded-lg bg-blue-200 text-blue-900">
                  {items.icon}
                </div>
                <div className="flex flex-col justify-start items-start min-w-0 w-full">
                  <h1 className="font-semibold text-xs">{items.title}</h1>
                  <h2 className="font-normal text-[12px] break-words whitespace-normal">
                    {items.heading}
                  </h2>
                  <p className="text-xs text-gray-500">{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-white p-10 rounded-md shadow-md m-5 w-full lg:w-1/2">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-md border border-gray-300 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-md border border-gray-300 w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-md border border-gray-300 w-full"
            />
            <textarea
              placeholder="Message"
              className="p-3 rounded-md border border-gray-300 w-full h-[150px]"
            />
            <button
              type="submit"
              className=" w-full bg-[#0A58A2] text-white p-3 rounded-md  mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
