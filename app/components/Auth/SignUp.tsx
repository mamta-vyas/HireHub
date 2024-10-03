"use client";
import React from "react";
import ImageUrl from "@/public/images/chair.jpg"; 

import Image from "next/image";
import { signIn } from "next-auth/react";

const SignUp = () => { 
  return (
    <div className="overflow-hidden h-[60vh] md:h-[84vh] flex flex-col items-center justify-center">
      {/* {Image } */}
      <Image src={ImageUrl} alt="image" width={350} height={200}/>
      {/* Sign Up button */}
      <button  onClick={() => {
          signIn('google', { 
            redirect: false, // Prevent automatic redirect
            callbackUrl: process.env.NEXT_PUBLIC_URL 
          });
        }}className="px-8 py-2 mt-[1rem] md:mt-[4rem] bg-purple-700 hover:bg-purple-900 transition-all duration-300 rounded-lg text-white">Sign Up Now</button>
    </div>
  )
}
export default SignUp;
