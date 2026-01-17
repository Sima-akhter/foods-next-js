import React from 'react';
import { Utensils, Bike, PartyPopper, Briefcase } from 'lucide-react';

const services = [
  {
    title: "Dine-In Experience",
    description: "Enjoy your favorite meals in a cozy and premium environment with top-notch hospitality.",
    icon: <Utensils className="w-10 h-10" />,
    color: "bg-blue-600"
  },
  {
    title: "Express Delivery",
    description: "Get your food delivered to your doorstep within 30 minutes with our lightning-fast fleet.",
    icon: <Bike className="w-10 h-10" />,
    color: "bg-slate-900"
  },
  {
    title: "Event Catering",
    description: "From birthdays to weddings, we provide customized menus to make your events memorable.",
    icon: <PartyPopper className="w-10 h-10" />,
    color: "bg-blue-600"
  },
  {
    title: "Corporate Meals",
    description: "Daily nutritious meal subscriptions for offices and businesses to keep your team fueled.",
    icon: <Briefcase className="w-10 h-10" />,
    color: "bg-slate-900"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              We Provide The Best <span className="text-blue-600">Food Services</span> In Town
            </h3>
          </div>
          <div className="hidden md:block">
            <button className="px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-2xl hover:bg-slate-900 hover:text-white transition-all duration-300">
              Explore All Services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Background Blur */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-[3] transition-transform duration-700 opacity-50"></div>

              <div className={`relative z-10 w-20 h-20 ${service.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:-translate-y-2 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h4 className="relative z-10 text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {service.title}
              </h4>
              <p className="relative z-10 text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer group/link">
                Learn More 
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;