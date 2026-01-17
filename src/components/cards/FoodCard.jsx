import Link from "next/link";
import React from "react";
import CardButton from "../buttons/CardButton";

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-blue-100 transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-800 line-clamp-1">
            {title}
          </h3>
          <span className="text-xl font-black text-blue-600">${price}</span>
        </div>
        
        <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">
          Delicious {category.toLowerCase()} style {title} prepared with fresh ingredients.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <div className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors duration-200">
            <CardButton food={food}></CardButton>
          </div>
          <Link href={`/foods/${id}`} className="flex-1 items-center justify-center border border-slate-200 text-slate-700 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors duration-200">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;