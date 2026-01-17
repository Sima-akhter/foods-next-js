// "use client";

// import ReviewCard from '@/components/cards/ReviewCard';
// import React, { useEffect, useState } from 'react'


// const ReviewsPage = () => {
//     const [reviews, setReviews] = useState([]);
//     useEffect(()=>{
//         fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
//         .then((res)=> res.json())
//         .then((data) => setReviews(data.reviews || []));
//     },[])
//   return (
//     <div>
//         <h1 className='text-4xl font-bold'>Total <span className='text-yellow-500'>{reviews.length}</span> Reviews</h1>

//         <div className='grid my-5 grid-cols-3 gap-5'>
//             {
//                 reviews.map((rev)=>(<ReviewCard key={rev.id} reveiw={rev}></ReviewCard>))
//             }

//         </div>
//     </div>
//   )
// }

// export default ReviewsPage


import React from 'react'

const AddItems = () => {
  return (
    <div>AddItems</div>
  )
}

export default AddItems