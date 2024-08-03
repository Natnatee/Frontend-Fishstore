// src/components/LoginRegister.tsx
"use client"
import ImageAndSwitchButton from '@/components/login&regis/ImageAndSwitchButton';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';


const LoginRegister: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen relative">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/4068638-hd_1920_1080_30fps.mp4" // Replace with your video URL
          autoPlay
          loop
          muted
          playsInline
        ></video>
      <div className={`relative w-[900px] h-[550px] bg-white shadow-lg overflow-hidden rounded-2xl`}>
        <div className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${isSignUp ? '-translate-x-full' : ''}`}>
          {/* Sign In Form */}
          <div className="absolute w-[640px] p-10 flex flex-col justify-center items-center h-full">
            <h2 className="text-2xl mb-6">Welcome back,</h2>
            <label className="w-full max-w-xs text-center mb-4">
              <span className="block text-sm text-gray-600 mb-1">Email</span>
              <input type="email" className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none" />
            </label>
            <label className="w-full max-w-xs text-center mb-4">
              <span className="block text-sm text-gray-600 mb-1">Password</span>
              <input type="password" className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none" />
            </label>
            <p className="text-sm text-gray-500 mb-4 cursor-pointer">Forgot password?</p>
            <button type="button" className="w-full max-w-xs bg-yellow-500 text-white py-2 rounded-full mb-4">Sign In</button>
            <button type="button" className="w-full max-w-xs bg-blue-700 text-white py-2 rounded-full">Connect with <span className="font-bold">Facebook</span></button>
          </div>

          {/* Sign Up Form */}
          <div className="absolute left-full w-[640px] p-10 flex flex-col justify-center items-center h-full">
            <h2 className="text-2xl mb-6">Time to feel like home,</h2>
            <label className="w-full max-w-xs text-center mb-4">
              <span className="block text-sm text-gray-600 mb-1">Name</span>
              <input type="text" className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none" />
            </label>
            <label className="w-full max-w-xs text-center mb-4">
              <span className="block text-sm text-gray-600 mb-1">Email</span>
              <input type="email" className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none" />
            </label>
            <label className="w-full max-w-xs text-center mb-4">
              <span className="block text-sm text-gray-600 mb-1">Password</span>
              <input type="password" className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none" />
            </label>
            <button type="button" className="w-full max-w-xs bg-yellow-500 text-white py-2 rounded-full mb-4">Sign Up</button>
            <button type="button" className="w-full max-w-xs bg-blue-700 text-white py-2 rounded-full">Join with <span className="font-bold">Facebook</span></button>
          </div>
        </div>
       <ImageAndSwitchButton toggleSignUp ={toggleSignUp} isSignUp = {isSignUp}/> 
      </div>
    </div>
    </>
  );
};

export default LoginRegister;
