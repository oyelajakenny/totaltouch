import { FaHome } from "react-icons/fa";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdLocalLaundryService } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";

export const home = [
  {
    icon: <FaHome />,
    title: "CLEANING SERVICES",
    description:
      "Professional home and general cleaning services to keep your space spotless.",
  },
  {
    icon: <RiHomeOfficeFill />,
    title: "FUMIGATION SERVICES",
    description:
      "Reliable fumigation services to ensure a pest-free and healthy environment.",
  },
  {
    icon: <MdLocalLaundryService />,
    title: "LAUNDRY SERVICES",
    description:
      "Convenient professional laundry and dry cleaning services for your everyday needs. ",
  },
  {
    icon: <LuConstruction />,
    title: "POST-CONSTRUCTION CLEANING",
    description:
      "Thorough post-construction cleaning to make your new space shine and odor free. ",
  },
];

export const services = [
  {
    id: 1,
    img: "/images/home-cleaning.png",
    title: "Cleaning Services",
    url: "/booking",
  },
  {
    id: 2,
    img: "/images/office-cleaning.png",
    title: "Fumigation Services",
    url: "/booking",
  },
  {
    id: 3,
    img: "/images/laundry-service.png",
    title: "Laundry Services",
    url: "/booking",
  },
  {
    id: 4,
    img: "/images/post-construction.png",
    title: "Post-Construction Cleaning",
    url: "/booking",
  },
];

export const about = [
  {
    name: "About Us",
    path: "/about-us",
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
    path: "/about-us",
  },
  {
    name: "Partner With Us",
    path: "/career",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
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
    path: "/our-services",
  },
  {
    name: "Office Cleaning",
    path: "/our-services",
  },
  {
    name: "Deep Cleaning",
    path: "/our-services",
  },
  {
    name: "Laundry Services",
    path: "/our-services",
  },
  {
    name: "Dry Cleaning",
    path: "/our-services",
  },
  {
    name: "Fumigation Service",
    path: "/our-services",
  },
  {
    name: "Post-Construction Cleaning",
    path: "/our-services",
  },
  {
    name: "Upholstery Cleaning",
    path: "/our-services",
  },
];

export const support = [
  {
    name: "Contact Us",
    path: "/contact-us",
  },
  {
    name: "Support",
    path: "/contact-us",
  },
  {
    name: "Feedback",
    path: "/contact-us",
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
    icon: "FiPhone",
    title: "Phone",
    heading: "08125629484",
    description: "Available 24/7",
  },
  {
    icon: "MdOutlineMail",
    title: "Email",
    heading: "totaltouchservices@gmail.com",
    description: "Response within 2 hours",
  },
  {
    icon: "CiLocationOn",
    title: "Address",
    heading: "31, Adeshina Ogunfolu St, Eyita Ikorodu, Lagos",
    description: "Lagos Only",
  },
  {
    icon: "IoMdTime",
    title: "Business Hours",
    heading: "Mon - Sat: 8:00 AM - 6:00 PM",
    description: "Closed on Sundays",
  },
];

export const ourservices = [
  {
    id: "fumigation",
    title: "Fumigation Service",
    icon: "SprayCan",
    blurb:
      "Comprehensive pest control for homes, offices, and commercial spaces using safe, eco-friendly treatments.",
    // IMPORTANT: No trailing comma inside the array to avoid JSON-like parser issues in strict tooling.
    features: [
      "Eco-safe chemicals",
      "Certified technicians",
      "Odor-minimized process",
    ],
  },
  {
    id: "home-cleaning",
    title: "Home Cleaning",
    icon: "Home",
    blurb:
      "Routine and on-demand housekeeping to keep every room fresh - kitchens, bathrooms, living areas, and bedrooms.",
    features: [
      "Dusting & surfaces",
      "Kitchen & bath detail",
      "Floors & windows",
    ],
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    icon: "Building2",
    blurb:
      "Professional cleaning for offices and shared workspaces to boost hygiene and productivity.",
    features: [
      "Desks & electronics care",
      "Restrooms & break rooms",
      "After-hours scheduling",
    ],
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    icon: "Sparkles",
    blurb:
      "Top-to-bottom detail clean targeting grime, limescale, and hidden buildup for a thorough reset.",
    features: [
      "Appliance interiors",
      "Tile & grout focus",
      "Skirting boards & vents",
    ],
  },
  {
    id: "regular-cleaning",
    title: "Regular Cleaning",
    icon: "Repeat",
    blurb:
      "Weekly, bi-weekly, or monthly plans that keep your space consistently spotless.",
    features: ["Flexible schedules", "Trusted cleaners", "Priority support"],
  },
  {
    id: "move-cleaning",
    title: "Move-In/Out Cleaning",
    icon: "MoveRight",
    blurb:
      "Landlord-ready cleaning for handover days - perfect for tenants, agents, and property managers.",
    features: [
      "Inside cabinets",
      "Inside oven & fridge",
      "Deposit-friendly finish",
    ],
  },
  {
    id: "post-construction",
    title: "Post-Construction Cleaning",
    icon: "Hammer",
    blurb:
      "Heavy-duty cleanup after renovations: dust removal, debris disposal, and fine finishing.",
    features: [
      "Dust & debris removal",
      "Paint & adhesive spot-clean",
      "Final sparkle",
    ],
  },
  {
    id: "laundry-pickup",
    title: "Laundry Pick-Up",
    icon: "Truck",
    blurb:
      "Door-to-door laundry collection and delivery - wash, dry, fold, and pressing options.",
    features: ["Same-day options", "Neat fold & pack", "SMS updates"],
  },
];
