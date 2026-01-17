import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Shared/Navbar";

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

        <header className="">
          <Navbar></Navbar>

        </header>
        

        <main className="px-5 py-8">
         <CartProvider>{children}</CartProvider>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
