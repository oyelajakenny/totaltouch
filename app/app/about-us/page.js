
import React from "react";
import Link from "next/link";
import { ShieldCheck, Leaf, Users2, ThumbsUp, Sparkles } from "lucide-react";


export const metadata = {
  title: "About Us | Total Touch Cleaning & Laundry Services",
  description:
    "Total Touch Cleaning & Laundry Services - our mission, values, and the dedicated team providing top-notch cleaning and laundry solutions in Lagos.",
};

// Optional: Organization schema for SEO
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Total Touch Cleaning & Laundry Services",
  url: "https://totaltouchcleaning.com.ng",
  logo: "https://example.com/logo.png",
  sameAs: [
    "https://www.facebook.com/yourpage",
    "https://www.instagram.com/yourpage",
    
  ],
  description:
    "Professional home, office, deep cleaning and laundry pick-up & delivery with eco-friendly products and trusted staff.",
  areaServed: "Lagos, Nigeria",
};

const metrics = [
  { label: "Years Experience", value: "7+" },
  { label: "Happy Clients", value: "3,500+" },
  { label: "Jobs Completed", value: "25k+" },
  { label: "Avg. Rating", value: "4.9/5" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Professional & Trustworthy",
    text: "Background-checked staff, insured services, and reliable scheduling you can count on.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Cleaning",
    text: "We prioritise low-tox, biodegradable products that are safer for your family and pets.",
  },
  {
    icon: ThumbsUp,
    title: "Customer-First Service",
    text: "Clear communication, transparent pricing, and a 100% satisfaction promise on every job.",
  },
];

const team = [
  {
    name: "Sulaimon Oyelaja",
    role: "Operations Lead",
    photo: "/images/coo.png",
    bio: "Coordinates crews, schedules and quality checks to keep every visit on time and on standard.",
  },
  {
    name: "Michael Babatunde",
    role: "Project Manager",
    photo: "/images/team/michael.jpg",
    bio: "Deep-clean specialist with expertise in post‑construction and move‑out restorations.",
  },
  {
    name: "Sofia Ahmed",
    role: "Laundry & Care Lead",
    photo: "/images/team/sofia.jpg",
    bio: "Ensures every fabric gets the right wash cycle, finish and packaging for a premium feel.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero */}
      <section className="text-center">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium tracking-wide text-slate-700">
          About Us
        </span>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          About Total Touch Cleaning & Laundry Services
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-slate-600">
          Welcome to Total Touch Cleaning & Laundry Services, a trusted cleaning
          and laundry company in Lagos, Nigeria, offering professional,
          affordable, and eco-friendly cleaning solutions for homes, offices,
          and commercial spaces. We provide home cleaning, office cleaning, deep
          cleaning, post-construction cleaning, fumigation, and laundry pickup
          services in Lagos, helping clients enjoy a cleaner, healthier
          environment without stress.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/booking"
            className="rounded-xl bg-[#0A58A2] px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Book a Cleaning
          </Link>

          <Link
            href="/contact-us"
            className="rounded-xl bg-white border border-slate-300 px-5 py-2.5 text-sm font-medium text-[#0A58A2] hover:bg-slate-100"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 text-center">Our Mission</h2>
          <p className="mt-2 text-sm text-slate-600 text-center">
            To redefine cleanliness in Nigeria by providing reliable and
            affordable cleaning and laundry services that make homes and
            businesses shine — while saving our clients time and effort.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 text-center">Our Vision</h2>
          <p className="mt-2 text-sm text-slate-600 text-center">
            To become the leading cleaning company in Lagos and across Nigeria,
            recognized for excellence, innovation, and customer satisfaction.
          </p>
        </div>
        {/* <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Our Values</h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            <li>• Integrity — we do what we say.</li>
            <li>• Reliability — we show up and deliver.</li>
            <li>• Respect — for your time, space, and belongings.</li>
          </ul>
        </div> */}
      </section>

      {/* Experience / Trust Row */}
      {/* <section className="mt-16 grid items-stretch gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6" />
            <h2 className="text-lg font-semibold text-slate-900">
              Experience, Professionalism & Trust
            </h2>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            From one-off deep cleans to scheduled office care and laundry
            pick-up, our trained teams follow detailed checklists, wear uniforms
            and ID, and use safe products and pro-grade tools. We’re fully
            insured and background-check all staff.
          </p>
          <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-slate-200 p-4 text-center"
              >
                <dt className="text-2xl font-semibold text-slate-900">
                  {m.value}
                </dt>
                <dd className="mt-1 text-xs text-slate-600">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Leaf className="h-6 w-6" />
            <h2 className="text-lg font-semibold text-slate-900">
              Eco‑Friendly, Health‑Conscious Cleaning
            </h2>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            We prioritise low‑tox, biodegradable detergents and microfibre
            systems to reduce water and chemical usage. Where deeper
            sanitisation is required, we select solutions that balance efficacy
            with safety and compliance.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li>• Biodegradable, low‑fragrance solutions</li>
            <li>• Colour‑coded cloths to avoid cross‑contamination</li>
            <li>• HEPA vacuum filtration</li>
            <li>• Refill & reuse containers where possible</li>
          </ul>
        </div>
      </section> */}

      {/* Values with Icons */}
      <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <v.icon className="h-6 w-6" />
              <h3 className="text-base font-semibold text-slate-900">
                {v.title}
              </h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">{v.text}</p>
          </div>
        ))}
      </section>

      {/* Team */}
      <section className="mt-16">
        <div className="text-center">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium tracking-wide text-slate-700">
            Our Team
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            People Who Care About Clean
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600 text-sm">
            Friendly faces, professional standards. Every team member is
            trained, insured and committed to great outcomes.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                {/* Replace with next/image if available */}
                <img
                  src={t.photo}
                  alt={`${t.name} — ${t.role}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {t.name}
              </h3>
              <p className="text-xs text-slate-600">{t.role}</p>
              <p className="mt-2 text-sm text-slate-600">{t.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section
        className="mt-16 overflow-hidden rounded-3xl border border-slate-200  p-6 sm:p-10 bg-[#0A58A2] "
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
                href="/contact-us"
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
      </section>
    </main>
  );
}
