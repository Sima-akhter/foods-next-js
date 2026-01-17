import React from "react";
import { Truck, Clock, ShieldCheck, Heart } from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description: "We deliver your favorite meals within 30 minutes, ensuring they stay fresh and hot.",
    icon: <Truck className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "24/7 Service",
    description: "Hungry at midnight? No worries! Our chefs are ready to serve you around the clock.",
    icon: <Clock className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Best Quality",
    description: "We use only premium organic ingredients to prepare every single dish with care.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Made with Love",
    description: "Every meal is crafted by expert chefs who prioritize taste and hygiene above all.",
    icon: <Heart className="w-8 h-8 text-blue-600" />,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header matched to your Slate text colors */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">
            What Makes Us <span className="text-blue-600">Special?</span>
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl hover:shadow-blue-100 transition-all duration-300"
            >
              {/* Icon Container matched to your blue-600 theme */}
              <div className="mb-6 inline-block p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300 group-hover:text-white text-blue-600">
                  {feature.icon}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;