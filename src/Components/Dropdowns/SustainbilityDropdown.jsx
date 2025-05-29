import React from "react";
import Pic1 from "../../assets/collectionBlouse.png";

const SustainbilityDropdown = () => {
 return (
 
     <div className="bg-white max-w-full z-20 flex px-[7.5vw] pt-[2.222vw] pb-[3.958vw] space-y-[3.75vw] w-full border-t border-gray-300">
       <div className="grid grid-cols-3 w-1/2 ">
         <div className="space-x-5 space-y-6">
           <h1 className="text-lg  ">Sustainbility</h1>
           <div className="space-y-6 text-[#404040] text-lg">
             <div>Mission</div>
             <div>Processing</div>
             <div>Materials</div>
             <div>Packaging</div>
             <div>Product Care</div>
             <div>Our Suppliers</div>
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
