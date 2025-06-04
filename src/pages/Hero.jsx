import React from "react";
import hero from "../assets/hero.jpg";
import BestSellers from "../BestSellers";
import Collection from "./Collection";
import Footer from "../Components/Footer";
import HomeZhopfest from "../Components/HomeZhopfest";
import Homezclub from "./Homezclub";
import FooterBanner from "./FooterBanner";
import Typewriter from 'typewriter-effect';



const Hero = () => {
  return (
    <div className="w-full h-full sm:overflow-hidden ">
      <div className="relative">
        <img src={hero} className="w-full sm:-mt-25 object-cover" alt="Hero" />
        <div className="absolute inset-0 flex flex-col justify-center mt-20 sm:ml-10 items-start px-4 sm:px-8 " >
          <span className="text-sm  sm:text-6xl font-light mb-4 sm:leading-20">
            <Typewriter
              options={{
                strings: ["Elegance In Simplicity"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
            <Typewriter
              options={{
                strings: ["Earth's Harmony"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </span>
          <button className="px-7 sm:px-15 py-1 sm:py-2 bg-black text-white hover:bg-red-500 hover:text-black  text-xs sm:text-2xl">
            NewIn
          </button>
        </div>
      </div>
      <BestSellers />

      <Collection />
      <HomeZhopfest />
      <FooterBanner />
      <Homezclub />
      <Footer />
    </div>
  );
};

export default Hero;
