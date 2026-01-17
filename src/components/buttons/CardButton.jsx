"use client"

import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react'

const CardButton = ({food}) => {
    const [incart, setIncart] = useState(false);
    const {addToCart} = use(CartContext);

    const handleAddToCart = () =>{
      addToCart(food);
      setIncart(true)
    }

    
  return (
    <div>
        <button onClick={handleAddToCart}
        disabled={incart} 
        className="">
            {incart? "Order Complite" : " Order Now"}
           
          </button>
    </div>
  )
}

export default CardButton