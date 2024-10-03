import React from 'react'
import HeroImg from "@/public/images/hero.svg"
import Image from 'next/image'


const Hero = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] '>
      <div className='w-[100%] h-[60vh] flex flex-col items-center justify-center'>
           <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>
            {/* {content} */}
            <div>
              <h1 className='text-[28px] sm:text-[35px] lg:text-[45px]
              xl:text-[60px] text-[#05264e] leading-[3rem] lg:leading-[4rem] font-extrabold'>
                The <span className='text-blue-500'>Easiest Way</span> <br />To Get Your New Job </h1>
                <p className='text-[#4f5e64] text-[16px] md:text-[18px] mt-[1rem]'>
                Every month, over 4 million job seekers rely on our platform to find their next opportunity, resulting in more than 180,000 applications submitted daily.
                </p>
                 {/* searchBox */}
                 <div className='mt-[1.5rem]'>
              <input className="w-[60%] md:w-[70%] lg:w-[75%] px-5 py-4 outline-none rounded-l-md bg-gray-200" type="text" placeholder="Find your next job..." 
              />
              <button className='px-5 py-4 outline-none rounded-r-md bg-blue-500 text-white'>Search</button>
                 </div>
            </div>
            {/* {image} */}
            <div className='hidden lg:block'>
                <Image src={HeroImg} alt="hero"
                width={700}
                height={400}
                />
            </div>
           </div>
      </div>
    </div>
  )
}

export default Hero
