import React from "react";
import Pic1 from "../../assets/collectionBlouse.png";

const PlusSizeDropdown = () => {
  return (
    <div className=" bg-white max-w-full z-20 flex justify-between mt-2 2xl:mt-13 px-[7.5vw] pt-[2.222vw] pb-[1.558vw] space-y-[3.75vw] w-full border-t border-gray-300 ">
      <div className="grid grid-cols-3 w-1/2 ">
        <div className="space-x-5 space-y-6">
          <h1 className="text-lg  ">Category</h1>
          <div className="space-y-4 text-[#404040] text-lg">
            <div>Shop All</div>
            <div>Top & Blouses </div>
            <div>Tees</div>
            <div>Pants</div>
            <div> Jackets & Outwear </div>
            <div>Pullovers</div>
            <div>Dress & Jumpsuits</div>
            <div>Shots & Skirts</div>
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

export default PlusSizeDropdown;
