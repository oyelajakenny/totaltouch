"use client";
import { FaHome } from "react-icons/fa";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdLocalLaundryService } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FiPhone } from "react-icons/fi";

import path from "path";

export const home = [
  {
    icon: <FaHome />,
    title: "HOME CLEANING",
    description:
      "Professional home cleaning services to keep your space spotless.",
  },
  {
    icon: <RiHomeOfficeFill />,
    title: "OFFICE CLEANING",
    description:
      "Reliable office cleaning services for a productive work environment.",
  },
  {
    icon: <MdLocalLaundryService />,
    title: "LAUNDRY SERVICES",
    description:
      "Convenient laundry services to take care of your clothes with care.",
  },
  {
    icon: <LuConstruction />,
    title: "POST-CONSTRUCTION CLEANING",
    description:
      "Thorough post-construction cleaning to make your new space shine.",
  },
];

export const services = [
  {
    id: 1,
    img: "images/home-cleaning.png",
    title: "Home Cleaning",
    url: "/home-cleaning",
  },
  {
    id: 2,
    img: "images/office-cleaning.png",
    title: "Office Cleaning",
    url: "/office-cleaning",
  },
  {
    id: 3,
    img: "images/laundry-service.png",
    title: "Laundry Services",
    url: "/laundry-services",
  },
  {
    id: 4,
    img: "images/post-construction.png",
    title: "Post-Construction Cleaning",
    url: "/post-construction-cleaning",
  },
];

export const about = [
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Career",
    path: "/career",
  },
  {
    name: "Terms Of Service",
    path: "/terms",
  },
];

export const company = [
  {
    name: "Why Us",
    path: "/about",
  },
  {
    name: "Partner With Us",
    path: "/career",
  },
  {
    name: "Privacy Policy",
    path: "/terms",
  },
  {
    name: "FAQ",
    path: "/terms",
  },
  {
    name: "Blog",
    path: "/terms",
  },
];

export const service = [
  {
    name: "Home Cleaning",
    path: "/home-cleaning",
  },
  {
    name: "Office Cleaning",
    path: "/office-cleaning",
  },
  {
    name: "Deep Cleaning",
    path: "/deep-cleaning",
  },
  {
    name: "Laundry Services",
    path: "/laundry-services",
  },
  {
    name: "Dry Cleaning",
    path: "/dry-cleaning",
  },
  {
    name: "Post-Construction Cleaning",
    path: "/post-construction-cleaning",
  },
];

export const support = [
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "Support",
    path: "/support",
  },
  {
    name: "Feedback",
    path: "/feedback",
  },
  {
    name: "Refund Policy",
    path: "/refund-policy",
  },
  {
    name: "Terms of Service",
    path: "/terms-of-service",
  },
];

export const contact = [
  {
    icon: <FiPhone />,
    title: "Phone",
    heading: "08149562597",
    description: "Available 24/7",
  },
  {
    icon: <MdOutlineMail />,
    title: "Email",
    heading: "totaltouchservices@gmail.com",
    description: "Response within 2 hours",
  },
  {
    icon: <CiLocationOn />,
    title: "Address",
    heading: "31, Adeshina Ogunfolu St, Eyita Ikorodu, Lagos",
    description: "Lagos Only",
  },
  {
    icon: <IoMdTime />,
    title: "Business Hours",
    heading: "Mon - Sat: 8:00 AM - 6:00 PM",
    description: "Closed on Sundays",
  },
];
