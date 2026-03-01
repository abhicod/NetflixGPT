import React from 'react'
import { BODY_BG_IMG } from '../utils/constants';
import { ChevronRightIcon } from 'lucide-react';
const Body = () => {
  return (
    <div>
        <div className='relative'>
            <img className='w-full h-screen object-cover' src={BODY_BG_IMG} alt="body background" />
            <div className='w-full h-screen absolute top-0 left-0 bg-black/70'>
             <div className='flex flex-col justify-center items-center h-full gap-4 w-full'>
                <h1 className='text-white font-extrabold text-6xl text-center w-1/2 leading-[1.2]'>Unlimited movies, TV shows, and more</h1>  
                <p className='text-white text-xl w-1/2 text-center font-semibold mb-8'>Starts at EUR 6.99. Cancel anytime.</p>
                <p className='text-white text-md w-1/2 text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='flex w-1/2 gap-2 m-1' >
                  <input className='w-3/4 py-3 px-5 rounded-lg border border-gray-300 focus:outline-none bg-black/40 placeholder:text-gray-300 focus:text-white focus:border-white focus:ring-2 focus:ring-red-700 ' type="text" placeholder='Enter your email' />
                <button className='w-1/4 py-3 px-5 bg-red-600 text-white font-lg text-xl  rounded-lg flex items-center justify-center gap-1 hover:bg-red-700 transition-all duration-300 cursor-pointer'>Get Started <ChevronRightIcon  size={22}/></button>
                </div>
                
            </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default Body