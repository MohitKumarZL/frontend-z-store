import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { BsHeart } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import CollectionDropdown from "./Dropdowns/CollectionDropdown";
import NewinDropdown from "./Dropdowns/NewinDropdown";
import PlusSizeDropdown from "./Dropdowns/PlusSizeDropdown";
import SustainbilityDropdown from "./Dropdowns/SustainbilityDropdown";
import SearchBar from "./Dropdowns/SearchBar";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "./Menu";
import Signin from "./Signin";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import { Link } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };


  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const togglePanel = (panelName) => {
    setIsOpen((prev) => (prev === panelName ? null : panelName));
    console.log("Toggled Panel:", panelName, "State:", isOpen);

  };


  useEffect(() => {
    console.log("isOpen updated to:", isOpen);
  }, [isOpen]);

  const handleClick = (path) => {
    setIsOpen(null); // Close any open panel
    navigate(path);  // Navigate to desired route
  };

  return (
    <div className="w-full relative ">
      <header className="flex justify-center text-[2.778vw] md:text-[0.833vw] py-[0.556vw] font-semibold bg-[#748C70] text-white">
        <p>Enjoy Free Shipping On All Orders</p>
      </header>
      {/* Desktop Navbar */}
      <nav className="hidden sm:block">
        <div className="flex justify-between items-center px-[7.5vw] ">
          <div className="flex items-center cursor-pointer" onClick={() => handleClick("/")}>
            <h1 className="font-bold text-[2.222vw] text-[#404040] py-[1.111vw]">
              Z-Store
            </h1>
          </div>
          <div>
            <ul className="flex space-x-[1.667vw] text-[1.25vw] text-[#404040] justify-center">
              <li className=" relative hover:bg-[#748C70] hover:text-white rounded-xl">
                <button
                  className="px-[0.5vw]  py-[1.111vw] "
                  onMouseEnter={() => handleMouseEnter("collection")}
                  onMouseLeave={handleMouseLeave}
                >
                  Collection
                </button>
              </li>
              <li className=" relative hover:bg-[#748C70] hover:text-white rounded-xl">
                <button
                  className="px-[0.5vw]  py-[1.111vw] "
                  onMouseEnter={() => handleMouseEnter("newin")}
                  onMouseLeave={handleMouseLeave}
                >
                  New In
                </button>
              </li>
              <li className="px-[0.5vw] relative  hover:outline-2 outline-[#748C70] outline-offset-[-2px] rounded-xl py-[1.111vw]"><Link to="/zhopfest">ZhopFest</Link></li>
              <li className=" relative hover:bg-[#748C70] hover:text-white rounded-xl ">
                <button
                  className="px-[0.5vw]  py-[1.111vw] "
                  onMouseEnter={() => handleMouseEnter("plusSize")}
                  onMouseLeave={handleMouseLeave}
                >
                  Plus Size
                </button>
              </li>
              <li className=" relative hover:bg-[#748C70] hover:text-white rounded-xl ">
                <button
                  className="px-[0.5vw]  py-[1.111vw]"
                  onMouseEnter={() => handleMouseEnter("sustainability")}
                  onMouseLeave={handleMouseLeave}
                >
                  Sustainability
                </button>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-[1.667vw]">
              <li>
                <button onClick={() => togglePanel("search")} >
                  <IoSearch className="min-w-[1.667vw] h-auto" />
                </button>
              </li>
              <li>
                <button onClick={() => handleClick("/signin")}>
                  <FaRegUser className="min-w-[1.667vw] h-auto" />
                </button>
              </li>
              <li>
                <button onClick={() => handleClick("/wishlist")}>
                  <BsHeart className="min-w-[1.667vw] h-auto" />
                </button>
              </li>
              <li>
                <button onClick={() => handleClick("/cart")}>
                  <LiaShoppingBagSolid className="min-w-[1.667vw] h-auto" />
                </button>
                <div className="bg-red-500 text-white text-[0.8vw] absolute px-1 rounded-4xl right-25 top-12   ">3</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="block sm:hidden">
        <div className="flex justify-between items-center px-[7.5vw] py-[1.111vw]">
          <div>
            <ul className="flex space-x-[2.222vw] items-center">
              <li className="px-[0.5vw] flex items-center">
                <button
                  onClick={() => togglePanel("menu")}
                >
                  {isOpen === "menu" ? <AiOutlineClose className="min-w-[24px] h-auto" /> :
                    <FaBars className="min-w-[24px] h-auto" />}
                </button>
              </li>
              <li className="px-[0.5vw] flex items-center">
                <button onClick={() => togglePanel("search")}>
                  <IoSearch className="min-w-[24px] h-auto" />
                </button>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-[8.889vw] text-[#404040]" onClick={() => handleClick("/")}>Z-Store</h1>
          </div>
          <div>
            <ul className="flex space-x-[2.222vw] ">
              <li className="px-[0.5vw] flex items-center">
                <button onClick={() => handleClick("/wishlist")}>
                  <BsHeart className="min-w-[24px] h-auto" />
                </button>
              </li>
              <li className="px-[0.5vw] flex items-center">
                <button onClick={() => handleClick("/cart")}>
                  <LiaShoppingBagSolid className="min-w-[24px] h-auto" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Dropdown covering Hero Section (Desktop and Mobile) */}
      {activeDropdown === "collection" && (
        <div onMouseEnter={() => handleMouseEnter("collection")} onMouseLeave={handleMouseLeave} className="absolute top-25 left-0 w-full  z-50"
        >
          <CollectionDropdown />
        </div>
      )}

      {activeDropdown === "newin" && (
        <div onMouseEnter={() => handleMouseEnter("newin")} onMouseLeave={handleMouseLeave} className="absolute top-25 left-0 w-full z-50">
          <NewinDropdown />
        </div>
      )}
      {activeDropdown === "plusSize" && (
        <div onMouseEnter={() => handleMouseEnter("plusSize")} onMouseLeave={handleMouseLeave} className="absolute top-25 left-0 w-full z-50">
          <PlusSizeDropdown />
        </div>
      )}

      {activeDropdown === "sustainability" && (
        <div onMouseEnter={() => handleMouseEnter("sustainability")} onMouseLeave={handleMouseLeave} className="absolute top-25 left-0 w-full z-50">
          <SustainbilityDropdown />
        </div>
      )}

      {isOpen === "search" && <SearchBar />}
      {/* {isOpen === "login" && <Login />}
{isOpen === "wishlist" && <Wishlist />}
{isOpen === "cart" && <Cart />}  */}
      {isOpen === "menu" && <Menu />}

    </div>
  );
}

export default Navbar;
