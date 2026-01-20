// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const getSingleFood = async (id) => {
//     try {
//         const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`, {
            
//         });
//         const data = await res.json();
//         return data.details; // Adjusted based on standard API patterns, change to data.details if needed
//     } catch (error) {
//         return null;
//     }
// }

// const FoodDetailsPage = async ({ params }) => {
//     const { id } = await params;
//     const food = await getSingleFood(id);

//     if (!food) {
//         return (
//             <div className="flex flex-col items-center justify-center min-h-[60vh]">
//                 <h2 className="text-2xl font-bold text-slate-800">Food not found</h2>
//                 <Link href="/items" className="mt-4 text-blue-600 hover:underline">Back to Menu</Link>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-6xl mx-auto px-6 py-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
//                 {/* Image Section */}
//                 <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
//                     <img 
//                         src={food.foodImg} 
//                         alt={food.title} 
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-blue-600 shadow-sm">
//                         {food.category}
//                     </div>
//                 </div>

//                 {/* Info Section */}
//                 <div className="space-y-6">
//                     <nav className="text-sm text-slate-400">
//                         <Link href="/items" className="hover:text-blue-600">Menu</Link> / {food.category}
//                     </nav>
                    
//                     <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
//                         {food.title}
//                     </h1>

//                     <div className="flex items-center gap-4">
//                         <span className="text-3xl font-bold text-blue-600">${food.price}</span>
//                         <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md uppercase">
//                             In Stock
//                         </span>
//                     </div>

//                     <p className="text-slate-600 text-lg leading-relaxed">
//                         Experience the authentic taste of our {food.title}. Prepared with premium {food.category.toLowerCase()} and hand-picked spices to ensure a gourmet dining experience at your home.
//                     </p>

//                     <div className="pt-6 flex flex-col sm:flex-row gap-4">
//                         <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
//                             Add to Cart
//                         </button>
//                         <button className="flex-1 border-2 border-slate-200 text-slate-800 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
//                             Add to Favorites
//                         </button>
//                     </div>

//                     <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
//                         <div>
//                             <p className="text-slate-400 text-sm">Delivery Time</p>
//                             <p className="font-semibold text-slate-800">20 - 35 Minutes</p>
//                         </div>
//                         <div>
//                             <p className="text-slate-400 text-sm">Product ID</p>
//                             <p className="font-semibold text-slate-800">#{food.id}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FoodDetailsPage;











import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const getSingleFood = async (id) => {
    try {
        // আপনার লোকাল এপিআই পাথ
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        
        // সব ডাটা নিয়ে এসে আইডি দিয়ে খুঁজে বের করা (অথবা আইডি দিয়ে সরাসরি এপিআই কল করা)
        const res = await fetch(`${baseUrl}/api/addfoods`, {
            cache: 'no-store'
        });
        
        const data = await res.json();
        
        if (data.success) {
            // MongoDB-তে আইডি থাকে _id নামে, তাই আমরা সেটি দিয়ে সার্চ করছি
            const singleFood = data.foods.find(item => (item._id === id || item.id == id));
            return singleFood;
        }
        return null;
    } catch (error) {
        console.error("Fetch Error:", error);
        return null;
    }
}

const FoodDetailsPage = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);

    if (!food) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <div className="bg-slate-100 p-6 rounded-full mb-4">
                    <span className="text-5xl">🚫</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Oops! Food not found</h2>
                <p className="text-slate-500 mt-2">The item you are looking for might have been removed.</p>
                <Link href="/foods" className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                    Back to Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                
                {/* Image Section */}
                <div className="relative h-[400px] md:h-[550px] rounded-[40px] overflow-hidden shadow-2xl shadow-blue-100 group">
                    <img 
                        src={food.foodImg} 
                        alt={food.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-2xl text-sm font-black text-blue-600 shadow-sm border border-white">
                        {food.category}
                    </div>
                </div>

                {/* Info Section */}
                <div className="space-y-8">
                    <nav className="flex items-center gap-2 text-sm font-bold text-slate-400">
                        <Link href="/foods" className="hover:text-blue-600 transition-colors">Menu</Link> 
                        <span>/</span>
                        <span className="text-slate-800">{food.category}</span>
                    </nav>
                    
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-4">
                            {food.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-black text-blue-600">${food.price}</span>
                            <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-black rounded-xl uppercase tracking-wider">
                                Freshly Prepared
                            </span>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                             Description
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            {food.description || `Experience the authentic taste of our ${food.title}. Prepared with premium ${food.category.toLowerCase()} and hand-picked spices to ensure a gourmet dining experience.`}
                        </p>
                    </div>

                    <div className="flex flex-col sm:row gap-4">
                        <button className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
                            Add to Cart
                        </button>
                        <button className="flex-1 border-2 border-slate-200 text-slate-800 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
                            ♡ Add to Favorites
                        </button>
                    </div>

                    {/* Meta Data */}
                    <div className="pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Delivery</p>
                            <p className="font-bold text-slate-800">20-35 Min</p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Category</p>
                            <p className="font-bold text-slate-800">{food.category}</p>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Item ID</p>
                            <p className="font-mono text-xs text-slate-500 mt-1 truncate">{food._id || food.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodDetailsPage;