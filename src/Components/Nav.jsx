import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { BsHeart } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="w-full relative">
      <header className="flex justify-center text-[2.778vw] md:text-[0.833vw] py-[0.556vw] font-semibold bg-[#748C70] text-white">
        <p>Enjoy Free Shipping On All Orders</p>
      </header>

      {/* Desktop Navbar */}
      <nav className="hidden sm:block">
        <div className="flex justify-between items-center px-[7.5vw]">
          <div className="flex items-center">
            <h1 className="font-bold text-[2.222vw] text-[#404040] py-[1.111vw]">
              <Link to="/">Z-Store</Link>
            </h1>
          </div>
          <div>
            <ul className="flex space-x-[1.667vw] text-[1.25vw] text-[#404040] justify-center">
              <li className="relative hover:bg-[#748C70] hover:text-white rounded-xl">
                <Link
                  to="/collection"
                  className="block px-[0.5vw] py-[1.111vw]"
                >
                  Collection
                </Link>
              </li>
              <li className="relative hover:bg-[#748C70] hover:text-white rounded-xl">
                <Link
                  to="/newin"
                  className="block px-[0.5vw] py-[1.111vw]"
                >
                  New In
                </Link>
              </li>
              <li className="relative hover:bg-[#748C70] hover:text-white rounded-xl">
                <Link
                  to="/zhopfest"
                  className="block px-[0.5vw] py-[1.111vw]"
                >
                  ZhopFest
                </Link>
              </li>
              <li className="relative hover:bg-[#748C70] hover:text-white rounded-xl">
                <Link
                  to="/plussize"
                  className="block px-[0.5vw] py-[1.111vw]"
                >
                  Plus Size
                </Link>
              </li>
              <li className="relative hover:bg-[#748C70] hover:text-white rounded-xl">
                <Link
                  to="/sustainability"
                  className="block px-[0.5vw] py-[1.111vw]"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-[1.667vw]">
              <li>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="px-[0.5vw] py-[1.111vw]"
                >
                  {isSearchOpen ? (
                    <AiOutlineClose className="min-w-[1.667vw] h-auto" />
                  ) : (
                    <IoSearch className="min-w-[1.667vw] h-auto" />
                  )}
                </button>
              </li>
              <li>
                <Link to="/login" className="block px-[0.5vw] py-[1.111vw]">
                  <FaRegUser className="min-w-[1.667vw] h-auto" />
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="block px-[0.5vw] py-[1.111vw]">
                  <BsHeart className="min-w-[1.667vw] h-auto" />
                </Link>
              </li>
              <li>
                <Link to="/cart" className="block px-[0.5vw] py-[1.111vw]">
                  <LiaShoppingBagSolid className="min-w-[1.667vw] h-auto" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="block sm:hidden">
        <div className="flex justify-between items-center px-[7.5vw] py-[1.111vw]">
          <div>
            <ul className="flex space-x-[2.222vw]">
              <li className="px-[0.5vw]">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? (
                    <AiOutlineClose className="min-w-[24px] h-auto" />
                  ) : (
                    <FaBars className="min-w-[24px] h-auto" />
                  )}
                </button>
              </li>
              <li className="px-[0.5vw]">
                <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  {isSearchOpen ? (
                    <AiOutlineClose className="min-w-[24px] h-auto" />
                  ) : (
                    <IoSearch className="min-w-[24px] h-auto" />
                  )}
                </button>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-[8.889vw] text-[#404040]">
              <Link to="/">Z-Store</Link>
            </h1>
          </div>
          <div>
            <ul className="flex space-x-[2.222vw]">
              <li className="px-[0.5vw]">
                <Link to="/wishlist">
                  <BsHeart className="min-w-[24px] h-auto" />
                </Link>
              </li>
              <li className="px-[0.5vw]">
                <Link to="/cart">
                  <LiaShoppingBagSolid className="min-w-[24px] h-auto" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    
    </div>
  );
};

export default Navbar;