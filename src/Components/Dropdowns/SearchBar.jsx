import React from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchBar = () => {
  return (
    <div className="absolute backdeop-blur-lg  max-w-full h-full z-20 flex sm:px-[7.5vw] sm:pt-[2.222vw] py-[6vw] px-[5vw] sm:pb-[4.444vw] space-y-[3.75vw] w-full border-t border-gray-300">
      <div className='flex items-center justify-center w-full border-b-2 pb-5 border-[#ADADAD]'>
      <IoSearch className="min-w-[24px] h-auto text-[#ADADAD]" />
      <input  
        type="text"
        placeholder="Search"
        className="w-[90%] sm:w-[95%] h-[3.75vw]  px-[2vw] sm:px[1.3vw] text-[#00000] text-lg focus:outline-none focus:ring-0"/>
      </div>
    </div>
  )
}

export default SearchBar
