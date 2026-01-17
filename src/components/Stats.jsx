import React from 'react';
import { Users, UtensilsCrossed, Truck, Star } from 'lucide-react';

const stats = [
  {
    label: "Happy Customers",
    value: "15k+",
    icon: <Users className="w-6 h-6 text-blue-600" />,
  },
  {
    label: "Expert Chefs",
    value: "50+",
    icon: <UtensilsCrossed className="w-6 h-6 text-blue-600" />,
  },
  {
    label: "Daily Deliveries",
    value: "2k+",
    icon: <Truck className="w-6 h-6 text-blue-600" />,
  },
  {
    label: "Five Star Ratings",
    value: "10k+",
    icon: <Star className="w-6 h-6 text-blue-600" />,
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decoration - matching your theme */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text and Stats Grid */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Our Success Story</h2>
              <h3 className="text-4xl md:text-5xl font-black leading-tight">
                Trusted by Thousands of <span className="text-blue-500">Food Lovers</span> Worldwide
              </h3>
              <p className="text-slate-400 text-lg max-w-md">
                We take pride in our service. From the quality of ingredients to the speed of delivery, excellence is our habit.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-slate-800/50 border border-slate-700 rounded-3xl hover:border-blue-500/50 transition-colors group">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-black mb-1">{stat.value}</h4>
                  <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Image/Banner */}
          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden border-8 border-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef cooking" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              
              {/* Floating Promotion Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-blue-600 p-6 rounded-3xl flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-bold uppercase tracking-wider">Flash Sale</p>
                  <p className="text-2xl font-black italic">Get 50% Off Today!</p>
                </div>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                  Claim Deal
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;