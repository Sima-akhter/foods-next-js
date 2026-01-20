import React from 'react'
import FoodCard from './cards/FoodCard';

// আপনার নিজের তৈরি করা API থেকে ডাটা আনার ফাংশন
const getFoods = async () => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        
        // আপনার নিজের API কল করা হচ্ছে
        const res = await fetch(`${baseUrl}/api/addfoods`, {
            next: { revalidate: 10 } // প্রতি ১০ সেকেন্ড পর ডাটা আপডেট হবে
        });

        if (!res.ok) {
            throw new Error("Failed to fetch foods");
        }

        const data = await res.json();
        
        // ডাটাবেস থেকে পাওয়া খাবারের লিস্ট রিটার্ন করা হচ্ছে
        return data.foods || [];
    } catch (error) {
        console.error("BestFoods Fetch Error:", error);
        return [];
    }
}

const BestFoods = async() => {
    
    const foods = await getFoods();
    
    return (
        <div className="container mx-auto px-4"> 
            <h2 className='text-4xl md:text-5xl text-center font-black my-12 text-slate-900'>
                Best <span className='text-blue-600 '>Foods</span> 
            </h2>

            {foods.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8 gap-8'>
                    {
                        
                        foods.slice(0, 8).map((food) => (
                            <FoodCard key={food._id || food.id} food={food} />
                        ))
                    }
                </div>
            ) : (
                <div className="text-center py-20 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 font-bold text-xl">No Best Foods available yet! 🍔</p>
                </div>
            )}
        </div>
    )
}

export default BestFoods