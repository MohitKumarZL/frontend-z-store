import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

import slide1 from "../assets/Swiper/slide1.png";
import slide2 from "../assets/Swiper/slide2.png";
import slide3 from "../assets/Swiper/slide3.png";
import slide4 from "../assets/Swiper/slide4.png";
import slide5 from "../assets/Swiper/slide5.png";

const HomeZhopfest = () => {
  const [favorite, setFavorite] = useState({});

  const handleFavoriteClick = (id) => {
    setFavorite((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const slides = [
    { id: 1, image: slide1, title: "Sunday" },
    { id: 2, image: slide2, title: "Monday" },
    { id: 3, image: slide3, title: "Tuesday" },
    { id: 4, image: slide2, title: "Wednesday" },
    { id: 5, image: slide5, title: "Thrusday" },
    { id: 6, image: slide1, title: "Friday" },
    { id: 7, image: slide2, title: "Saturday" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };
  return (
    <div className="max-w-7xl mx-auto my-6 sm:my-22 w-[85%]  sm:w-full  ">
      <h1 className="text-xl sm:text-3xl font-semibold">ZhopFest</h1>
      <Slider {...settings} className="mt-2 sm:mt-6 ">
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full px-1  ">
            <img src={slide.image} alt={`Slide ${slide.id}`} />
            <FaHeart
              onClick={() => handleFavoriteClick(slide.id)}
              className={`absolute sm:right-12 sm:top-6 text-xl right-4 top-4 border border-black bg-black p-1 rounded-full ${
                favorite[slide.id] ? "text-red-500" : "text-white"
              } cursor-pointer`}
            />
            <div className="pt-4  sm:pl-2 text-sm sm:text-lg font-medium">
              {slide.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeZhopfest;
