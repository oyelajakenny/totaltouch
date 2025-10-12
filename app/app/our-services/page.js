export const metadata = {
  title: "Our Services | Cleaning & Laundry Service in Lagos Nigeria",
  description:
    "Fumigation, home & office cleaning, deep cleans, move in/out, post-construction cleaning, and laundry pick-up .",
  keywords: [
    "fumigation",
    "home cleaning",
    "office cleaning",
    "deep cleaning",
    "laundry service",
  ],
  openGraph: {
    title: "Cleaning & Laundry Service in Lagos Nigeria",
    description:
      "Fumigation, home & office cleaning, deep cleans, move in/out, post-construction cleaning, and laundry pick-up.",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Cleaning & Laundry Service in Lagos Nigeria",
      },
    ],
  },
  alternates: {
    canonical: "https://totaltouchcleaning.com.ng/our-services",
  },
};

import ClientOurServices from "./ClientOurServices";

export default function Page() {
  return <ClientOurServices />;
}

