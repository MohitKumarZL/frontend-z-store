import React from "react";
import Pic1 from "../../assets/collectionBlouse.png";
import { Link } from "react-router-dom";


const SustainbilityDropdown = () => {

  const handleClick = (link) => {
    // Handle the click event here, e.g., navigate to the link or perform an action
    console.log(`Clicked on ${link}`);
  }
  return (

    <div className="bg-white max-w-full z-20 flex justify-between mt-2 2xl:mt-13 px-[7.5vw] pt-[2.222vw] pb-[1.558vw] space-y-[3.75vw] w-full border-t border-gray-300">
      {/* <div className="grid grid-cols-3 w-1/2 ">
        <div className="space-x-5 space-y-6">
          <h1 className="text-lg  ">Sustainbility</h1>
          <div className="space-y-4 mt-4 text-[#404040] text-lg border">
            <div><Link to="/sustainability" onClick={() => handleClick("sustainability")}>Mission</Link></div>
            <div>Processing</div>
            <div>Materials</div>
            <div>Packaging</div>
            <div>Product Care</div>
            <div>Our Suppliers</div>
          </div>
        </div> */}

      <div className="grid grid-cols-3 w-1/2 ">
        <div className="space-x-5 space-y-6">
          <h1 className="text-lg  ">Sustainbility</h1>
          <div className="space-y-4 text-[#404040] text-lg">
            <div className="hover:font-semibold hover:text-black hover:underline"> <Link to="/sustainability" onClick={() => handleClick("sustainability")}>Mission</Link></div>
            <div className="hover:font-semibold hover:text-black hover:underline">Processing</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Materials</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Packaging</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Product Care</div>
            <div className="hover:font-semibold hover:text-black hover:underline">Our Suppliers</div>
          </div>
        </div>




      </div>
      <div className="flex space-x-6">
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

export default SustainbilityDropdown;
