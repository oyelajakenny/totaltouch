import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metadata = {
  title: {
    default:
      "Total Touch Cleaning - Cleaning & Laundry Services in Lagos, Nigeria",
    template: "%s | Total Touch Cleaning and Laundry Services",
  },
  description:
    "Cleaning and laundry company in Lagos, Nigeria. Designed for busy people like you. From one-time deep cleaning to recurring laundry pickups, we make life easier and cleaner.",
  keywords: [
    "Cleaning services Lagos, Nigeria",
    "Laundry services Lagos, Nigeria",
    "Home cleaning Lagos, Nigeria",
    "Office cleaning Nigeria",
    "Professional cleaners Lagos, Nigeria",
    "Affordable cleaning services, Nigeria",
    "Eco-friendly cleaning Lagos",
    "Deep cleaning services Lagos, Nigeria",
    "Move-in/move-out cleaning Lagos, Nigeria",
    "Carpet cleaning Nigeria",
    "Upholstery cleaning Nigeria",
    "Window cleaning Nigeria",
    "Post-construction cleaning Nigeria",
    "Same-day laundry service Nigeria",
    "Dry cleaning pickup Lagos, Nigeria",
    "Deep cleaning services Lagos, Nigeria",
    "Cleaning and laundry services Ikorodu Lagos, Nigeria",
    "Home cleaning services Ikorodu Lagos Nigeria",
    "Cleaning services Ikorodu Lagos, Nigeria",
    "Laundry services Ikorodu Lagos, Nigeria",
    "Home cleaning Ikorodu Lagos, Nigeria",
    "Office cleaning Ikorodu Lagos, Nigeria",
    "Professional cleaners Ikorodu Lagos, Nigeria",
    "Affordable cleaning services Ikorodu Lagos, Nigeria",
    "Eco-friendly cleaning Ikorodu Lagos, Nigeria",
    "Deep cleaning services Ikorodu Lagos, Nigeria",
    "Move-in/move-out cleaning Ikorodu Lagos, Nigeria",
    "Carpet cleaning Ikorodu Lagos, Nigeria",
    "Upholstery cleaning Ikorodu Lagos, Nigeria",
    "Window cleaning ikorodu Lagos, Nigeria",
    "Post-construction Ikorodu Lagos cleaning Nigeria",
    "Same-day laundry Ikorodu, Lagos service Nigeria",
    "Dry cleaning pickup Ikorodu Lagos, Nigeria",
    "Deep cleaning services Ikorodu Lagos, Nigeria",
    "Cleaning and laundry services Ikorodu Lagos, Nigeria",
    "Home cleaning services Ikorodu Lagos, Nigeria",
  ],
  authors: [{ name: "Total Touch Cleaning and Laundry Services" }],
  creator: "Total Touch Cleaning and Laundry Services",
  publisher: "Total Touch Cleaning and Laundry Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_UK", //
    url: "https://www.totaltouchcleaning.com.ng/",
    title: "Total Touch Cleaning and Laundry Services",
    description: "Professional Cleaning & Laundry Services in Lagos, Nigeria",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Total Touch Cleaning and Laundry Services",
      },
    ],
    siteName: "Total Touch Cleaning and Laundry Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Touch Cleaning and Laundry Services",
    description: "Professional Cleaning & Laundry Services in Lagos, Nigeria",
    images: ["/hero.png"],
  },
  alternates: {
    canonical: "https://www.totaltouchcleaning.com.ng/",
  },
  other: {
    "theme-color": "#0A58A2",
    "msapplication-TileColor": "#0A58A2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.totaltouchcleaning.com.ng/#organization",
            name: "Total Touch Cleaning and Laundry Services",
            url: "https://www.totaltouchcleaning.com.ng/",
            logo: {
              "@type": "ImageObject",
              url: "https://yourdomain.com/logo.png",
              width: 800,
              height: 600,
            },
            description:
              "Cleaning and laundry company in Lagos, Nigeria. Designed for busy people like you. From one-time deep cleaning to recurring laundry pickups, we make life easier and cleaner.",
            foundingDate: "2024", 
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              value: "5-10", 
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ikorodu",
              addressRegion: "Lagos State",
              addressCountry: "Nigeria",
            },
            areaServed: [
              {
                "@type": "Place",
                name: "Ikorodu, Lagos State, Nigeria",
              },
              {
                "@type": "Place",
                name: "Lagos, Nigeria",
              },
            ],
            serviceType: ["Home Cleaning", "Office Cleaning", "Laundry Services", "Deep Cleaning", "Carpet Cleaning", "Upholstery Cleaning", "Dry Cleaning", "Window Cleaning"],
          }),
        }}
      />
      <body className=" bg-gradient-to-b from-blue-100 via-blue-50 to-white min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="Dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />

          <Footer />
        </ThemeProvider>
        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="aaaon8"
          strategy="lazyOnload"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LSMC5FB1D1"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LSMC5FB1D1');
      `}
        </Script>
      </body>
    </html>
  );
}
