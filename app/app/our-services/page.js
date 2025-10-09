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
        alt: "An overview of our cleaning and laundry services",
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

