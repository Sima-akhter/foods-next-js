"use client"

import React from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative bg-slate-900 rounded-[40px] p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-100">
          
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm">Join Our Foodie Club</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Get <span className="text-blue-500">20% Off</span> Your <br /> First Order!
              </h3>
              <p className="text-slate-400 text-lg">
                Subscribe to our newsletter and stay updated with new recipes, exclusive offers, and food trends.
              </p>
              
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-4 pt-2">
                {['No Spam', 'Weekly Offers', 'Easy Unsubscribe'].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-slate-800/50 p-6 md:p-10 rounded-3xl border border-slate-700 backdrop-blur-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full bg-slate-900 border border-slate-700 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-blue-900/20">
                  Subscribe Now
                  <Send size={18} />
                </button>
                <p className="text-center text-slate-500 text-xs mt-4">
                  By subscribing, you agree to our Terms & Privacy Policy.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;