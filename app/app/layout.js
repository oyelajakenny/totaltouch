import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";


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
      </body>
    </html>
  );
}
