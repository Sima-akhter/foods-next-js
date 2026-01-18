
import React from 'react'
import FoodCard from './cards/FoodCard';



const getFoods = async () => {
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
        {next: {revalidate: 10}}
    );
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data.foods || [];
}

const BestFoods = async() => {
    
    const foods = await getFoods();
    
  return (
    <div> 
        <h2 className='text-4xl md:text-5xl text-center font-bold my-10'>Best <span className='text-blue-600'>Foods</span> </h2>

       <div className='flex gap-5'>
         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-5  gap-5'>
            {
                foods.slice(0, 8).map((food)=>(<FoodCard key={food.id} food={food}></FoodCard>))
            }

        </div>
        
       </div>
    </div>
  )
}

export default BestFoods