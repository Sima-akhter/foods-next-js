"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { PlusCircle, Utensils, DollarSign, Tag, Image as ImageIcon } from 'lucide-react';

const AddItemPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isLoggedIn = Cookies.get('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const handleAddItem = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    
    const newItem = {
      id: Date.now(),
      title: form.title.value,
      price: Number(form.price.value), 
      category: form.category.value,
      foodImg: form.foodImg.value,
      catId: 8, 
    };

    try {
      // আপনার ফোল্ডারের নাম অনুযায়ী পাথটি ঠিক করা হয়েছে
      const res = await fetch('/api/addfoods', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      });

      if (!res.ok) {
        throw new Error("Server error: " + res.status);
      }

      const data = await res.json();

      if (data.success) {
        toast.success('Food Item Added to Your MongoDB! 🍜', {
          duration: 4000,
          style: {
            borderRadius: '15px',
            background: '#1e293b',
            color: '#fff',
            fontWeight: 'bold'
          },
        });
        form.reset();
        setTimeout(() => router.push('/foods'), 2000);
      } else {
        toast.error(data.error || 'Could not add to database');
      }
    } catch (error) {
      toast.error('Submission failed! check your api path.');
      console.error("Submit Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-[40px] shadow-xl shadow-blue-100 border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-8 text-center text-white">
          <h2 className="text-3xl font-black flex items-center justify-center gap-3">
            <PlusCircle className="text-blue-500" /> Add New Item
          </h2>
          <p className="text-slate-400 mt-2 text-sm">Fill in the details to add food to MongoDB</p>
        </div>

        <form onSubmit={handleAddItem} className="p-10 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Utensils size={16} className="text-blue-600" /> Food Name
            </label>
            <input name="title" type="text" required placeholder="e.g. Spicy Pizza" className="w-full bg-slate-50 border rounded-2xl py-4 px-5 focus:border-blue-600 outline-none transition-all" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <DollarSign size={16} className="text-blue-600" /> Price ($)
              </label>
              <input name="price" type="number" required placeholder="15" className="w-full bg-slate-50 border rounded-2xl py-4 px-5 focus:border-blue-600 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Tag size={16} className="text-blue-600" /> Category
              </label>
              <select name="category" className="w-full bg-slate-50 border rounded-2xl py-4 px-5 focus:border-blue-600 outline-none appearance-none cursor-pointer">
                <option value="Fast Food">Fast Food</option>
                <option value="Main Course">Main Course</option>
                <option value="Desserts">Desserts</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <ImageIcon size={16} className="text-blue-600" /> Image URL
            </label>
            <input name="foodImg" type="url" required placeholder="https://..." className="w-full bg-slate-50 border rounded-2xl py-4 px-5 focus:border-blue-600 outline-none transition-all" />
          </div>

          <button disabled={loading} type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-5 rounded-2xl transition-all disabled:bg-slate-400 flex items-center justify-center gap-2">
            {loading ? "Saving to MongoDB..." : "Add Item to Menu"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;