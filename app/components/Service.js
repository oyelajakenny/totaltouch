"use client"
import React from "react";
import { home } from "../constants/index.js";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-10"
    >
      <div className="container mx-auto my-40 ">
        <div className="my-16 space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-600">
            Our Services
          </h2>
          <h1 className="text-5xl text-center font-semibold ">
            Your Favorite Cleaning & <br /> Laundry Partner
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {home.map((service, index) => {
            return <ServiceCard key={index} service={service} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
