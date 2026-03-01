import React from 'react'
import { HEADER_LOGO } from '../utils/constants';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className=' px-35 py-5 absolute w-full z-10 bg-black/40 shadow-2xl '>
        <div className='flex justify-between items-center'>
            <img className='w-40 hover:scale-102 transition-all duration-100 cursor-pointer' src={HEADER_LOGO} alt="netflix logo" />
             <div>
            <Link to="/login">
            <button className='bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition-all duration-100 cursor-pointer'>Log In</button>
            </Link>
        </div>
        </div>
       
    </div>
  )
}

export default Header