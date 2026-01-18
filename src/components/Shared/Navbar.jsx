
"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { LogOut, LogIn, Menu, X } from "lucide-react"; // X (Close) icon add kora hoyeche

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const userStatus = Cookies.get('isLoggedIn');
    if (userStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('user_email');
    Cookies.remove('isLoggedIn');
    window.location.href = '/login';
  };

  return (
    <header className="bg-slate-900 sticky top-0 z-50 shadow-lg shadow-slate-900/20">
      <div className="px-6 py-3 flex items-center justify-between gap-5 max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <Link href={"/"} className="flex items-center gap-3 shrink-0">
          <img src="/foodslogo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-600 p-0.5 hover:rotate-12 transition-transform duration-300"/>
          <span className="text-white font-black text-xl">Taxi<span className="text-blue-500">Kitchen</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1 mr-4 border-r border-slate-700 pr-4">
            <Link className="px-4 py-2 text-slate-300 hover:text-white font-bold text-sm transition-colors" href={"/"}>Home</Link>
            <Link className="px-4 py-2 text-slate-300 hover:text-white font-bold text-sm transition-colors" href={"/foods"}>All Foods</Link>
            <Link className="px-4 py-2 text-slate-300 hover:text-white font-bold text-sm transition-colors" href={"/addItems"}>Add Items</Link>
          </div>

          {/* Auth Button Desktop */}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 border border-red-500/20">
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          ) : (
            <Link href="/login" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-blue-600/20">
              <LogIn size={16} />
              <span>Login</span>
            </Link>
          )}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white font-bold text-base" href={"/"}>Home</Link>
          <Link onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white font-bold text-base" href={"/foods"}>All Foods</Link>
          <Link onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white font-bold text-base" href={"/addItems"}>Add Items</Link>
          
          <div className="pt-2 border-t border-slate-800">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="flex w-full items-center justify-center gap-2 bg-red-500 text-white px-5 py-3 rounded-xl text-sm font-bold">
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            ) : (
              <Link onClick={() => setIsOpen(false)} href="/login" className="flex w-full items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-bold">
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;