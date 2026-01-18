"use client"


import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const InputSearch = () => {
    const router = useRouter();
    const params = useSearchParams()
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form= e.target;
        const value = form.search.value;

        const newParams= new URLSearchParams(params.toString());
        newParams.set("search", value);
        router.push(`?${newParams.toString()}`);

    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col md:flex-row'>
            <input name='search' className='px-1 py-3 border-2 rounded md:w-2xl' type="text" placeholder='Enter food name' />
            <button className='px-4 py-2 bg-amber-500 text-black rounded cursor-pointer'>Search</button>
        </form>
    </div>
  )
}

export default InputSearch