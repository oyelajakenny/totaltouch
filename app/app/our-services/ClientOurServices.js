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
  Armchair,
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../../constants/services";

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
  // `service.icon` is a string key that maps to a lucide-react component.
  const ICONS = {
    SprayCan,
    Home,
    Building2,
    Sparkles,
    Repeat,
    MoveRight,
    Hammer,
    Truck,
    Armchair,
  };
  const Icon = ICONS[service.icon] || Check;

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

export default function ClientOurServices() {
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
