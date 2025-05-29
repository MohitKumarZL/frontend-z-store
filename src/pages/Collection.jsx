import React from "react";
import Boluses from "../assets/Boluses.png";
import Dresses from "../assets/dresses.png";
import Outwear from "../assets/outwear.png";
import Pants from "../assets/pants.jpg";
import Navbar from "../Components/Navbar";

const Collection = () => {
  return (
    <>   
        <div className="max-w-7xl  mx-auto px-5 sm:px-0 mt-6 sm:mt-22 mb-6 sm:mb-11">

        <div className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6">
    <h1>Collection</h1>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Left column */}
    <div className="flex flex-col gap-4">
      <img
        src={Boluses}
        alt="Boluses"
        className="w-full h-auto object-cover sm:rounded-tl-xl"
      />
      <img
        src={Dresses}
        alt="Dresses"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Right column */}
    <div className="flex flex-col justify-between gap-4 sm:gap-0">
      <img
        src={Pants}
        alt="Pants"
        className="w-full h-auto object-cover"
      />
      <img
        src={Outwear}
        alt="Outwear"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
    </div>
    </>

  );
};

export default Collection;
