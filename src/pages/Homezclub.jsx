import React from "react";
import Frame1 from "../assets/Gallery/Frame1.png";
import Frame2 from "../assets/Gallery/Frame2.png";
import Frame3 from "../assets/Gallery/Frame3.png";
import Frame4 from "../assets/Gallery/Frame4.png";
import Frame5 from "../assets/Gallery/Frame5.png";

const Homezclub = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-0 mt-6 sm:mt-22 mb-6 sm:mb-11">
      <h1 className="text-xl sm:text-3xl font-semibold">Follow us @Z-Club</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {/* Left main image */}
        <div>
          <img src={Frame1} alt="Frame1" className="hidden sm:block w-full object-cover rounded-lg" />
        </div>

        {/* Right 2x2 grid */}
        <div className="grid grid-cols-2   sm:gap-4">
          <img src={Frame2} alt="Frame2" className="w-full h-full object-cover rounded-tl-lg sm:rounded-lg" />
          <img src={Frame3} alt="Frame3" className="w-full h-full object-cover rounded-tr-lg sm:rounded-lg" />
          <img src={Frame4} alt="Frame4" className="w-full h-full object-cover rounded-bl-lg sm:rounded-lg" />
          <img src={Frame5} alt="Frame5" className="w-full h-full object-cover rounded-br-lg sm:rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Homezclub;
