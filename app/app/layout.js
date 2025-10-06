import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metadata = {
  title: "Total Touch Cleaning and Laundry Services",
  description: "Cleaning and Laundry Services in Lagos, Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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
