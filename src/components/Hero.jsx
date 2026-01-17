
import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 lg:pr-12 space-y-8 text-center md:text-left">
          {/* Badge color matched to Card Category Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold tracking-wide animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
            Free Delivery on orders over $50
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
            Deliciousness <br />
            Delivered To <span className="text-blue-600 underline decoration-blue-100 decoration-4 underline-offset-8">Your Door.</span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Experience the finest local ingredients and gourmet recipes prepared by our master chefs. Healthy, fresh, and always on time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            {/* Primary Button matched to Slate-900 (Card Button Style) */}
            <Link 
              href={"/foods"} 
              className="group bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all shadow-xl shadow-blue-100"
            >
              Order Now 
              <ShoppingBag className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {/* Secondary Link matched to Slate text */}
            <Link 
              href="/about" 
              className="flex items-center gap-2 text-slate-700 font-bold text-lg hover:text-blue-600 transition-colors"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 flex items-center justify-center md:justify-start gap-8 opacity-70">
            <div>
              <p className="text-2xl font-bold text-slate-900">10k+</p>
              <p className="text-sm text-slate-500">Happy Customers</p>
            </div>
            <div className="h-10 w-[1px] bg-slate-200"></div>
            <div>
              <p className="text-2xl font-bold text-slate-900">4.9/5</p>
              <p className="text-sm text-slate-500">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
          {/* Decorative Background Elements matched to Blue palette */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop" 
              alt="Fresh healthy salad bowl" 
              className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover rounded-full border-[16px] border-white shadow-2xl transition-transform duration-700 group-hover:rotate-6"
            />
            
            {/* Floating Card matched to White/Blue style */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-blue-50 p-2 rounded-full text-blue-600">
                <Star className="fill-current w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Top Rated</p>
                <p className="text-xs text-slate-500">Delicious Meals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;