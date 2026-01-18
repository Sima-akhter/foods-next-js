import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Shared/Navbar";
import { Toaster } from 'react-hot-toast'; // ১. ইমপোর্ট করুন

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Foods",
  description: "Best Fastfood in kishoreganj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* টোস্টার কন্টেইনার যোগ করা হলো */}
        <Toaster position="top-center" reverseOrder={false} />

        <header>
          <Navbar />
        </header>

        <main className="px-5 py-8 min-h-[80vh]">
          {/* আপনার CartProvider এর ভেতরেই children এবং Toaster কাজ করবে */}
          <CartProvider>
            {children}
          </CartProvider>
        </main>

        <Footer />
      </body>
    </html>
  );
}