import React from "react";
import { home } from "../constants/index.js";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="container mx-auto my-40">
      <div className="my-16 space-y-4">
        
        <h2 className="text-3xl font-bold text-center text-gray-600">Our Services</h2>
        <h1 className="text-5xl text-center font-semibold ">
          Your Favorite Cleaning & <br/> Laundry Partner
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {home.map((service, index) => {
          return <ServiceCard key={index} service={service} />;
        })}
      </div>
    </div>
  );
};

export default Service;
