import React from "react";
import HeroSection from "../components/HeroSection";
import Service from "../components/Service";
import BookService from "../components/BookService";
import CustomerExperience from "../components/CustomerExperience";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Service />
      <BookService />
      <CustomerExperience />
      <CTA/>
    </div>
  );
}
