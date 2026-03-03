import { ChevronRightIcon } from 'lucide-react'
import React from 'react'
import langConstants from '../utils/langConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const langKey = useSelector(store => store.appConfig.lang)
  return (
    <div className='flex justify-center items-center w-full' >
        <div className='flex w-1/2 gap-2 m-1' >
                  <input className='w-3/4 py-3 px-5 rounded-lg border border-gray-300 focus:outline-none bg-black/60 placeholder:text-gray-300 focus:text-white focus:border-white focus:ring-2 focus:ring-red-700 ' type="text" placeholder={langConstants[langKey].gptSearchPlaceholder} />
                <button className='w-1/4 py-3 px-4 bg-red-600 text-white font-lg text-xl  rounded-lg flex items-center justify-center gap-1 hover:bg-red-700 transition-all duration-300 cursor-pointer'>{langConstants[langKey].search} </button>
                </div>
    </div>
  )
}

export default GPTSearchBar