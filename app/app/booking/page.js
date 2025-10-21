import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Booking | Total Touch Cleaning & Laundry Services",
  description:
    "Total Touch Cleaning & Laundry Services - book a cleaning service in Lagos, Nigeria.",
};
// Optional: Organization schema for SEO
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Total Touch Cleaning & Laundry Services",
  url: "https://totaltouchcleaning.com.ng",
  logo: "https://www.totaltouchcleaning.com.ng/_next/image?url=%2FLogo.png&w=128&q=75",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61582011002734",
    "https://www.instagram.com/totaltouch_ng",
    
  ],
  description:
    "Professional home, office, deep cleaning and laundry pick-up & delivery with eco-friendly products and trusted staff.",
  areaServed: "Lagos, Nigeria",
};

export default function BookingPage() {
  return <BookingForm />;
}
