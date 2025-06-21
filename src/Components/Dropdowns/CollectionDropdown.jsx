import React from "react";
import Pic1 from "../../assets/collectionBlouse.png";
import { Link } from "react-router-dom";

const CollectionDropdown = () => {

  const handleClick = (link) => {
    // Handle the click event here, e.g., navigate to the link or perform an action
    console.log(`Clicked on ${link}`);


  }
  return (
    <div className=" bg-white z-20 flex justify-between mt-2 lg:mt-2 2xl:mt-13 px-[7.5vw] pt-[2.222vw] pb-[1.558vw] space-x-[3.75vw] w-full border-t border-gray-300">

      <div className="grid grid-cols-3 w-1/2 ">
        <div className="space-x-5 space-y-6">
          <h1 className="text-lg  ">Category</h1>
          <div className="space-y-4 text-[#404040] text-lg ">
            <div className="hover:font-semibold hover:text-black hover:underline"><Link to="/shopAll" onClick={() => handleClick("shopAll")}>Shop All</Link></div>
            <div className="hover:font-semibold hover:text-black hover:underline">Blouses & Top</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Pants</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Dress & Jumpsuits</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Outwear & Jackets</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Pullovers</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Tees</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Shots & Skirts</div>
          </div>
        </div>

        <div className="space-x-5 space-y-6">
          <h1 className="text-lg">Featured</h1>
          <div className="space-y-4 text-[#404040] text-lg">
            <div className="hover:font-semibold hover:text-black hover:underline">New In</div>
            <div className="hover:font-semibold hover:text-black hover:underline">ZhopFest</div>
            <div className="hover:font-semibold hover:text-black hover:underline"><Link to="/plussize" onClick={() => handleClick("plussize")}>Plus Size</Link></div>
            <div className="hover:font-semibold hover:text-black hover:underline">Best Seller</div>
          </div>
        </div>
        <div className="space-x-5 space-y-6">
          <h1 className="text-lg">More</h1>
          <div className="space-y-4 text-[#404040] text-lg">
            <div className="hover:font-semibold hover:text-black hover:underline">Bundles</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Ocassion Wear</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Matching Set</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Suiting</div>
          </div>
        </div>
      </div>
      <div className="flex  space-x-6">
        <div className="space-y-3">
          <img src={Pic1} /> <span className="text-[#404040] text-lg">Blouse</span>
        </div>
        <div className="space-y-3">
          <img src={Pic1} />
          <span className="text-[#404040] text-lg">Plus Size</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionDropdown;
