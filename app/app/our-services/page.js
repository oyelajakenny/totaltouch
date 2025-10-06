"use client";

import Link from "next/link";
import {
  SprayCan,
  Home,
  Building2,
  Sparkles,
  Repeat,
  MoveRight,
  Hammer,
  Truck,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

// NOTE: Exported for reuse and for test visibility.
export const services = [
  {
    id: "fumigation",
    title: "Fumigation Service",
    icon: SprayCan,
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
    icon: Home,
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
    icon: Building2,
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
    icon: Sparkles,
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
    icon: Repeat,
    blurb:
      "Weekly, bi-weekly, or monthly plans that keep your space consistently spotless.",
    features: ["Flexible schedules", "Trusted cleaners", "Priority support"],
  },
  {
    id: "move-cleaning",
    title: "Move-In/Out Cleaning",
    icon: MoveRight,
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
    icon: Hammer,
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
    icon: Truck,
    blurb:
      "Door-to-door laundry collection and delivery - wash, dry, fold, and pressing options.",
    features: ["Same-day options", "Neat fold & pack", "SMS updates"],
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1], delay: 0.2 },
  },
};

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ translateY: -6 }}
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl border border-slate-200 p-3 bg-blue-50 text-[#0A58A2]">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {service.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{service.blurb}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        {service.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <Check className="mt-0.5 h-4 w-4 flex-none text-[#0A58A2]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={{ pathname: "/booking", query: { service: service.id } }}
          className="inline-flex items-center justify-center rounded-xl bg-[#0A58A2] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0A58A2]"
        >
          Book Now
        </Link>
        <Link
          href={{ pathname: "/services/" + service.id }}
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-[#0A58A2] transition hover:bg-slate-100"
        >
          Learn More
        </Link>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition group-hover:ring-slate-300" />
    </motion.article>
  );
}

export const metadata = {
  title: "Our Services | Total Touch Cleaning & Laundry",
  description:
    "Fumigation, home & office cleaning, deep cleans, move in/out, post-construction cleaning, and laundry pick-up.",
  keywords: [
        "fumigation",
    "home cleaning",
    "office cleaning",
    "deep cleaning",
    "laundry service",
  ],
  openGraph: {
    title: "Our Services | Cleaning & Laundry",
    description:
      "Fumigation, home & office cleaning, deep cleans, move in/out, post-construction cleaning, and laundry pick-up.",
    images: [
      {
        url: "/services-og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "An overview of our cleaning and laundry services"
      }
    ],
  },
  alternates: {
    canonical: "https://totaltouchcleaning.com.ng/our-services" 
  }
};
// };

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Heading */}
      <motion.section
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        viewport={{ once: true }}
      >
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium tracking-wide text-slate-700">
          Our Services
        </span>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Cleaning & Laundry Solutions, Done Right
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          From quick freshen-ups to deep, post-renovation sparkle - choose a
          service that fits your schedule and standards.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#services-grid"
            className="rounded-xl bg-[#0A58A2] px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Explore Services
          </a>
          <Link
            href="/booking"
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-[#0A58A2] bg-white hover:bg-slate-100"
          >
            Book Now
          </Link>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        id="services-grid"
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </motion.section>

      {/* CTA Banner */}
      <motion.section
        className="mt-16 overflow-hidden rounded-3xl border border-slate-200  p-6 sm:p-10 bg-[#0A58A2] "
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid items-center gap-6 sm:grid-cols-2 ">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
             Want a tailored plan?
            </h2>
            <p className="mt-2 text-white">
              Mix and match cleaning with laundry pick-up, and set a schedule
              that works for you.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-[#0A58A2] hover:bg-slate-100"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-100 hover:text-[#0A58A2]"
              >
                Talk to Us
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <dl className="grid grid-cols-2 gap-4 text-sm text-slate-700 sm:grid-cols-3">
              <div>
                <dt className="font-medium">Availability</dt>
                <dd className="mt-1 text-slate-600">Mon-Sat, 8:00-20:00</dd>
              </div>
              <div>
                <dt className="font-medium">Response Time</dt>
                <dd className="mt-1 text-slate-600">Under 30 mins</dd>
              </div>
              <div>
                <dt className="font-medium">Coverage</dt>
                <dd className="mt-1 text-slate-600">Lagos State </dd>
              </div>
            </dl>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

// // -----------------------------
// // Dev-time validation & tests
// // -----------------------------
// function assert(condition, message) {
//   if (!condition) throw new Error(message);
// }

// function isKebab(str) {
//   return /^[a-z0-9-]+$/.test(str);
// }

// function makeBookingHref(serviceId) {
//   return `/book?service=${encodeURIComponent(serviceId)}`;
// }

// export function runServiceTests() {
//   // Shape checks
//   assert(
//     Array.isArray(services) && services.length > 0,
//     "services must be a non-empty array"
//   );
//   for (const s of services) {
//     assert(
//       typeof s.id === "string" && s.id,
//       `service.id missing for ${s.title || "<unknown>"}`
//     );
//     assert(isKebab(s.id), `service.id must be kebab-case: ${s.id}`);
//     assert(
//       typeof s.title === "string" && s.title.length >= 3,
//       `Invalid title for ${s.id}`
//     );
//     assert(typeof s.icon === "function", `Icon missing/invalid for ${s.id}`);
//     assert(
//       typeof s.blurb === "string" && s.blurb.length >= 10,
//       `Invalid blurb for ${s.id}`
//     );
//     assert(
//       Array.isArray(s.features) && s.features.length >= 3,
//       `Need >=3 features for ${s.id}`
//     );
//     for (const f of s.features) {
//       assert(
//         typeof f === "string" && f.trim().length > 0,
//         `Empty feature in ${s.id}`
//       );
//       assert(!/[\s\t]$/.test(f), `Feature has trailing whitespace in ${s.id}`);
//     }
//   }

//   // Functional checks (URLs)
//   assert(
//     makeBookingHref("fumigation") === "/book?service=fumigation",
//     "Booking href incorrect for fumigation"
//   );
//   assert(
//     makeBookingHref("post-construction") === "/book?service=post-construction",
//     "Booking href incorrect for post-construction"
//   );
//   assert(
//     makeBookingHref("laundry-pickup") === "/book?service=laundry-pickup",
//     "Booking href incorrect for laundry-pickup"
//   );

//   // Presence check
//   const ids = new Set(services.map((s) => s.id));
//   for (const must of [
//     "fumigation",
//     "home-cleaning",
//     "office-cleaning",
//     "deep-cleaning",
//     "regular-cleaning",
//     "move-cleaning",
//     "post-construction",
//     "laundry-pickup",
//   ]) {
//     assert(ids.has(must), `Missing service id: ${must}`);
//   }

//   return true;
// }

// if (
//   typeof process !== "undefined" &&
//   process.env &&
//   process.env.NODE_ENV !== "production"
// ) {
//   try {
//     runServiceTests();
//     // eslint-disable-next-line no-console
//     console.debug("[services/page] Dev tests passed");
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error("[services/page] Dev tests failed:", err);
//   }
// }
