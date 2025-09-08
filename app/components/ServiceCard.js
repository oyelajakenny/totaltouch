import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className="container mx-auto   ">
      <div className="flex flex-col justify-start items-start p-10 space-y-4 rounded-lg hover:shadow-lg transition-shadow duration-300 m-4 bg-blue-50 ">
       <div className="text-6xl text-blue-600 mb-4 ">{service.icon}</div>
      
        <h2 className="font-bold text-blue-600 text-left">{service.title}</h2>
        <p className="text-left">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
