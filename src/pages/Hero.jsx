import React from "react";
import hero from "../assets/hero.jpg";
import BestSellers from "../BestSellers";
import Collection from "./Collection";
import Footer from "../Components/Footer";
import HomeZhopfest from "../Components/HomeZhopfest";
import Homezclub from "./Homezclub";
import FooterBanner from "./FooterBanner";


const Hero = () => {
  return (
    <div className="w-full h-full sm:overflow-hidden ">
      <img src={hero}  className="w-full "/>
      <BestSellers />

      <Collection />
      <HomeZhopfest/>
      <FooterBanner/>
      <Homezclub/>
      <Footer />
    </div>
  );
};

export default Hero;
