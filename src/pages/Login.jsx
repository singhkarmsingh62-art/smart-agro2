import React, { useState } from 'react';
import { Tractor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('farmer');

  return (
    <div className="min-h-[calc(100vh-80px)] bg-neutral-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-100">
        
        <div className="bg-green-600 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center transform scale-150">
            <Tractor size={200} />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm mb-4">
              <Tractor size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              {isLogin ? 'Welcome Back' : 'Join AgriSmart'}
            </h2>
            <p className="text-green-50 font-medium mt-1">
              {isLogin ? 'Sign in to your account' : 'Create an account to get started'}
            </p>
          </div>
        </div>

        <div className="p-8">
          
          {/* Role Selector for Signup */}
          {!isLogin && (
            <div className="mb-6 flex p-1 bg-neutral-100 rounded-xl">
              <button
                className={`flex-1 py-2 font-bold text-sm rounded-lg transition-all ${
                  role === 'farmer' ? 'bg-white text-green-600 shadow-sm' : 'text-neutral-500 hover:text-neutral-800'
                }`}
                onClick={() => setRole('farmer')}
              >
                Farmer
              </button>
              <button
                className={`flex-1 py-2 font-bold text-sm rounded-lg transition-all ${
                  role === 'service' ? 'bg-white text-green-600 shadow-sm' : 'text-neutral-500 hover:text-neutral-800'
                }`}
                onClick={() => setRole('service')}
              >
                Service Provider
              </button>
            </div>
          )}

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <InputField 
                label="Full Name" 
                id="name" 
                placeholder="John Doe" 
              />
            )}
            
            <InputField 
              label="Email Address" 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
            />
            
            <InputField 
              label="Password" 
              id="password" 
              type="password" 
              placeholder="••••••••" 
            />

            <Button variant="primary" className="w-full py-3.5 text-lg shadow-green-500/30 shadow-lg mt-2 font-bold gap-2 group">
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 text-center border-t border-neutral-100 pt-6">
            <p className="text-neutral-600 font-medium text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                className="text-green-600 font-bold hover:text-green-700 ml-1"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
