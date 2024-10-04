import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#111111]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
            {/* 1st part of footer */}
            <div>
                <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>Hirehub</h1>
                 <p className='text-[14px] text-white text-opacity-70'>
                 At HireHub, we are dedicated to connecting talent with opportunity. Our mission is to simplify the job search process for both job seekers and employers.
                 </p>
                 {/* social icons */}
                 <div className='mt-[1.5rem] flex items-center space-x-3'>
                 <div className='w-[2.4rem] h-[2.4rem] bg-blue-700 
                 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 rounded-full flex items-center justify-center flex-col'>
                        <FaLinkedin className='text-white'/>
                    </div>
                    <div className='w-[2.4rem] h-[2.4rem] bg-red-500 
                     cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 rounded-full flex items-center justify-center flex-col'>
                        <FaInstagram className='text-white'/>
                    </div>
                    <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 
                     cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300
                     rounded-full flex items-center justify-center flex-col'>
                        <FaFacebook className='text-white'/>
                    </div>
                    <div className='w-[2.4rem] h-[2.4rem] bg-sky-400 
                     cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 rounded-full flex items-center justify-center flex-col'>
                        <FaTwitter className='text-white'/>
                    </div>
                    <div className='w-[2.4rem] h-[2.4rem] bg-red-800
                     cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300
                     rounded-full flex items-center justify-center flex-col'>
                        <FaYoutube className='text-white'/>
                    </div>
                   
                 </div>
            </div>
            {/* 2nd part of footer */}
        <div>
        <h1 className='text-[22px] w-fit text-white font-semiboldb mb-[1.5rem]'>
                     About Us
                    </h1>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            Job Listings
            </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            Resources
            </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            Blog
            </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            Contact Us
            </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            Privacy Policy
            </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            Terms of Service
            </p>
           </div>
           <div>
           <h1 className='text-[22px] w-fit text-white font-semiboldb 
            mb-[1.5rem]'>
            Quick Link
           </h1>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            All Jobs
            </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            Job details
            </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            how To Apply
            </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            Upload Resume
            </p>
        </div>
        {/* 4th part of footer */}
        <div>
           <h1 className='text-[22px] w-fit text-white font-semiboldb 
            mb-[1.5rem]'>
            Get In Touch
           </h1>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
             +91 8290065784
            </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
            hirehub@gmail.com
            </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
           Banglore, Karnataka India
            </p>
          </div>
        </div>
        <h1 className='mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50'>Copyright by HireHub © 2024. All rights reserved.</h1>
     </div>
  )
}

export default Footer
