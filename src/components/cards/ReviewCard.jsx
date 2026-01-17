"use client"

import React from "react";
import { ThumbsUp, Star } from "lucide-react";

const ReviewCard = ({ reviewData }) => {
  // ডাটা না থাকলে এরর এড়াতে এই চেকটি জরুরি
  if (!reviewData) return null;

  const { user, photo, rating, review, likes, date } = reviewData;

  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 flex flex-col h-full group">
      
      {/* Header: User Info & Star Rating */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={photo || "https://via.placeholder.com/150"}
              alt={user}
              className="w-14 h-14 rounded-full object-cover border-2 border-blue-100 group-hover:border-blue-600 transition-colors"
            />
            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full border-2 border-white">
               <Star size={10} fill="currentColor" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg leading-tight">{user}</h4>
            <p className="text-xs text-slate-400 font-medium">
              {date ? new Date(date).toLocaleDateString() : "Recent"}
            </p>
          </div>
        </div>
      </div>

      {/* Star Icons */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? "fill-blue-600 text-blue-600" : "text-slate-200"
            }`}
          />
        ))}
      </div>

      {/* Review Content */}
      <div className="flex-grow">
        <p className="text-slate-600 leading-relaxed italic text-sm md:text-base">
          "{review}"
        </p>
      </div>

      {/* Footer: Like Button & Verified Badge */}
      <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
        <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group/btn">
          <div className="p-2 rounded-xl bg-slate-50 group-hover/btn:bg-blue-50 transition-colors">
            <ThumbsUp size={18} />
          </div>
          <span className="text-sm font-bold">{likes?.length || 0} Likes</span>
        </button>
        
        <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black text-blue-700 uppercase tracking-wider">
                Verified
            </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;