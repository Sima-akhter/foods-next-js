"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { LogOut, LogIn, Menu } from "lucide-react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // পেজ লোড হওয়ার পর চেক করবে ইউজার লগইন আছে কি না
  useEffect(() => {
    const userStatus = Cookies.get('isLoggedIn');
    if (userStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('user_email');
    Cookies.remove('isLoggedIn');
    window.location.href = '/login'; // রিফ্রেশ সহ লগইন পেজে পাঠানো
  };

  return (
    <header className="px-6 py-3 flex items-center justify-between gap-5 bg-slate-900 sticky top-0 z-50 shadow-lg shadow-slate-900/20">
      
      {/* Logo Section */}
      <Link href={"/"} className="flex items-center gap-3">
        <img src="/foodslogo.png" alt="Logo" className="w-12 h-12 rounded-full border-2 border-blue-600 p-0.5 hover:rotate-12 transition-transform duration-300"/>
        <span className="text-white font-black text-xl hidden sm:block">Taxi<span className="text-blue-500">Kitchen</span></span>
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-1 mr-4 border-r border-slate-700 pr-4">
          <Link className="px-4 py-2 text-slate-300 hover:text-white font-bold text-sm transition-colors" href={"/"}>Home</Link>
          <Link className="px-4 py-2 text-slate-300 hover:text-white font-bold text-sm transition-colors" href={"/foods"}>All Foods</Link>
          <Link className="px-4 py-2 text-slate-300 hover:text-white font-bold text-sm transition-colors" href={"/addItems"}>Add Items</Link>
        </div>

        {/* Auth Buttons */}
        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 border border-red-500/20"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        ) : (
          <Link 
            href="/login"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            <LogIn size={16} />
            <span>Login</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;