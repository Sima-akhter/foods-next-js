import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const getSingleFood = async (id) => {
    try {
        const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`, {
            
        });
        const data = await res.json();
        return data.details; // Adjusted based on standard API patterns, change to data.details if needed
    } catch (error) {
        return null;
    }
}

const FoodDetailsPage = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);

    if (!food) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-2xl font-bold text-slate-800">Food not found</h2>
                <Link href="/items" className="mt-4 text-blue-600 hover:underline">Back to Menu</Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Image Section */}
                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                        src={food.foodImg} 
                        alt={food.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-blue-600 shadow-sm">
                        {food.category}
                    </div>
                </div>

                {/* Info Section */}
                <div className="space-y-6">
                    <nav className="text-sm text-slate-400">
                        <Link href="/items" className="hover:text-blue-600">Menu</Link> / {food.category}
                    </nav>
                    
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                        {food.title}
                    </h1>

                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-blue-600">${food.price}</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md uppercase">
                            In Stock
                        </span>
                    </div>

                    <p className="text-slate-600 text-lg leading-relaxed">
                        Experience the authentic taste of our {food.title}. Prepared with premium {food.category.toLowerCase()} and hand-picked spices to ensure a gourmet dining experience at your home.
                    </p>

                    <div className="pt-6 flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                            Add to Cart
                        </button>
                        <button className="flex-1 border-2 border-slate-200 text-slate-800 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                            Add to Favorites
                        </button>
                    </div>

                    <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-slate-400 text-sm">Delivery Time</p>
                            <p className="font-semibold text-slate-800">20 - 35 Minutes</p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm">Product ID</p>
                            <p className="font-semibold text-slate-800">#{food.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodDetailsPage;