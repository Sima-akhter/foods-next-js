
import FoodCard from '@/components/cards/FoodCard';
import React from 'react';
import CartItems from './cartItems';
import InputSearch from '@/components/InputSearch';

const getFoods = async (search) => {
    try {
        
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        
        const res = await fetch(`${baseUrl}/api/addfoods`, {
            cache: 'no-store' 
        });

        if (!res.ok) {
            throw new Error("Failed to fetch foods");
        }

        const data = await res.json();
        
        let allFoods = data.foods || [];

        if (search) {
            allFoods = allFoods.filter(food => 
                food.title.toLowerCase().includes(search.toLowerCase()) ||
                food.category.toLowerCase().includes(search.toLowerCase())
            );
        }

        return allFoods;
    } catch (error) {
        console.error("Fetch Error:", error);
        return [];
    }
}

const FoodsPage = async({searchParams}) => {
    
    const params = await searchParams;
    const search = params.search || "";
    
    const foods = await getFoods(search);
    
    return (
        <div className="container mx-auto p-4"> 
            <h1 className='text-4xl font-bold'>
                Total <span className='text-yellow-500'>{foods.length}</span> Items Found
            </h1>
            
            <div className='my-6'>
                <InputSearch />
            </div>

            <div className='md:flex gap-6'>
               
                <div className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        foods.length > 0 ? (
                            foods.map((food) => (
                                <FoodCard key={food._id || food.id} food={food} />
                            ))
                        ) : (
                            <p className="text-slate-500 font-medium">No food items found in your database.</p>
                        )
                    }
                </div>

                
                <div className='w-full md:w-1/4 h-fit border-2 border-slate-100 rounded-[30px] p-6 bg-white shadow-sm'>
                    <h2 className='text-2xl font-bold mb-4'>Cart Items</h2> 
                    <hr className="mb-4" />
                    <CartItems />
                </div>
            </div>
        </div>
    )
}

export default FoodsPage;