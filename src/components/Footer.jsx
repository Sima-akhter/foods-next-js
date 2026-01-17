"use client"

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <span className="bg-blue-600 p-1.5 rounded-lg text-white">Taxi</span>
              <span className="text-white">Kitchen</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Savor the art of fine dining at home. We deliver premium quality meals prepared by master chefs directly to your doorstep.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="p-2.5 bg-slate-800 rounded-xl hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 text-slate-300 hover:text-white">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['Home', 'Food Menu', 'Special Offers', 'Our Chefs', 'Reviews'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-blue-500 hover:translate-x-1 transition-all inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3">Contact Us</h4>
            <ul className="space-y-5 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-600 shrink-0" size={18} />
                <span>123 Foodie Street, Culinary District, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-600 shrink-0" size={18} />
                <span>+880 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600 shrink-0" size={18} />
                <span>support@taxikitchen.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter inside Footer */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to get latest updates and offers.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-blue-600 transition-colors"
              />
              <button className="absolute right-1.5 top-1.5 bg-blue-600 p-1.5 rounded-lg hover:bg-blue-700 transition-colors">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {currentYear} <span className="text-blue-500 font-bold">Taxi Kitchen</span>. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;