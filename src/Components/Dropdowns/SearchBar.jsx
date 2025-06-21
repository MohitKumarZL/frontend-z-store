import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(true); // Open initially

  // Close the search bar
  const handleClose = () => {
    setIsOpen(false);
    console.log('Search bar closed');
  };

  if (!isOpen) return null; // Don't render if closed

  return (
    <div className="absolute top-0 bg-white max-w-full h-full z-20 flex sm:px-[7.5vw] sm:pt-[2.222vw] pt-5 py-[8vw] px-[5vw] sm:pb-[4.444vw] space-y-[3.75vw] w-full border-t border-gray-300">
      <div className="flex items-center justify-center w-full border-b-2 pb-5 border-[#ADADAD]">
        <IoSearch className="min-w-[24px] h-auto text-[#ADADAD]" />
        <input
          type="text"
          placeholder="Search"
          className="w-[90%] sm:w-[95%] h-[3.75vw] px-[2vw] sm:px-[1.3vw] text-black text-lg focus:outline-none focus:ring-0"
        />
        <button
          className="text-[#ADADAD] text-lg font-semibold ml-2"
          onClick={handleClose}
        >
          <AiOutlineClose className="min-w-[24px] h-auto" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
