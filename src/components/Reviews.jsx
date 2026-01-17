"use client"
import React from 'react';
import { Star, Quote } from 'lucide-react';
import ReviewCard from './cards/ReviewCard';
// import ReviewCard from '../cards/ReviewCard'; // আপনার তৈরি করা রিভিউ কার্ডটি ইমপোর্ট করুন

const reviewsData = [
  {
    id: 1,
    user: "Arman Hossain",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    review: "Food was absolutely delicious! বিশেষ করে গ্রিল চিকেনটা অসাধারণ লেগেছে। মশলার ব্যালান্স এত পারফেক্ট ছিল যে খেতে খেতে মনটাই ভালো হয়ে যায়।",
    likes: ["sara@mail.com", "john@mail.com"],
    date: "2025-01-12T10:30:00Z"
  },
  {
    id: 2,
    user: "Sara Khan",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    review: "The delivery was super fast and the packaging was top-notch. Highly recommended for everyone who loves quality food!",
    likes: ["arman@mail.com"],
    date: "2025-01-14T11:20:00Z"
  },
  {
    id: 3,
    user: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    review: "Great taste and very professional service. The Beef Sunday Roast is a must-try. Will definitely order again!",
    likes: ["sara@mail.com"],
    date: "2025-01-15T09:45:00Z"
  }
];

const Reviews = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Icon */}
      <div className="absolute top-10 right-10 text-slate-200/50 -rotate-12 hidden lg:block">
        <Quote size={200} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
            Customer Reviews
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            What Our <span className="text-blue-600">Happy Foodies</span> Say
          </h3>
          <p className="text-slate-500 text-lg">
            Don't just take our word for it. Here is what our customers from all over the city are saying about our delicious meals.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((rev) => (
            <ReviewCard key={rev.id} reviewData={rev} />
          ))}
        </div>

        {/* Bottom CTA for Reviews */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  src={`https://i.pravatar.cc/150?u=${i}`} 
                  alt="user" 
                />
              ))}
            </div>
            <p className="text-slate-600 text-sm font-medium">
              Join <span className="font-bold text-slate-900">5,000+</span> satisfied customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;