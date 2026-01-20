"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Lock, Mail, ArrowRight } from 'lucide-react';

const LoginPage = () => {
    const router = useRouter();
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email === "admin@mail.com" && password === "123456") {
            
            Cookies.set('user_email', email, { expires: 10 });
            Cookies.set('isLoggedIn', 'true', { expires: 10 });

            
            router.push('/foods'); 
        } else {
            setError('Invalid email or password! Try admin@mail.com / 123456');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
            <div className="max-w-md w-full bg-white rounded-[40px] p-10 shadow-xl shadow-blue-100 border border-slate-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome Back!</h2>
                    <p className="text-slate-500">Login to manage your kitchen</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-medium mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input 
                                name="email"
                                type="email"
                                defaultValue={"admin@mail.com"} 
                                required
                                placeholder="admin@mail.com"
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-600 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input 
                                name="password"
                                type="password"
                                defaultValue={"123456"} 
                                required
                                placeholder="••••••••"
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-600 transition-colors"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-100"
                    >
                        Sign In <ArrowRight size={20} />
                    </button>
                </form>

                <p className="text-center text-slate-400 text-sm mt-8">
                    Don't have an account? <span className="text-blue-600 font-bold cursor-pointer">Contact Admin</span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;