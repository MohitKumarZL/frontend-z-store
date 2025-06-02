// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import best1 from "./assets/best1.png";
// import best2 from "./assets/best2.png";
// import best3 from "./assets/best3.png";
// import seller1 from "./assets/seller1.png";
// import { FaHeart } from "react-icons/fa";

// const BestSellers = () => {
//   const [favorite, setFavorite] = useState({});

//   const handleFavoriteClick = (id) => {
//     setFavorite((prevFavorites) => ({
//       ...prevFavorites,
//       [id]: !prevFavorites[id],
//     }));
//   };

// try {
//   const items= https://dummyjson.com/products

// }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 2,
//     slidesToScroll: 1,
    
//   };


//   return (
//     <div className="flex flex-col mx-auto px-5 sm:px-0 mt-6 sm:mt-22 mb-10 max-w-7xl">
//       <div className="flex justify-between items-center text-xl sm:text-3xl font-semibold">
//         <h1>Best Sellers</h1>
//         <button className="text-sm sm:text-base text-[#5A6D57] underline hidden sm:block">View All</button>
//       </div>

//       <div className="w-full mt-4 sm:mt-6 hidden sm:block">
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {items.map((item) => (
//             <div key={item.id} className="relative w-full">
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-auto object-cover rounded-lg"
//                 />
//                 <FaHeart
//                   onClick={() => handleFavoriteClick(item.id)}
//                   className={`absolute sm:right-6 sm:top-6 right-3 top-3 text-base sm:text-2xl border border-black bg-black p-1 rounded-full ${
//                     favorite[item.id] ? "text-red-500" : "text-white"
//                   } cursor-pointer`}
//                 />
//               </div>
//               <div className="mt-3">
//                 <h2 className="text-base sm:text-lg font-semibold">{item.name}</h2>
//                 <p className="text-sm text-gray-500">{item.title}</p>
//                 <div className="flex items-center justify-between mt-2">
//                   <div className="flex">
//                     {item.color.map((color, index) => (
//                       <div
//                         key={index}
//                         className={`w-4 h-4 rounded-full mr-2 ${color}`}
//                       />
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-600">{item.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="sm:hidden">
//       <Slider {...settings} className="mt-2 sm:mt-6  ">
//         {items.map((item) => (
//           <div key={item.id} className="relative w-full px-1  ">
//             <img src={item.image} alt={`item ${item.id}`} />
//             <FaHeart
//               onClick={() => handleFavoriteClick(item.id)}
//               className={`absolute sm:right-12 sm:top-6 text-xl right-4 top-4 border border-black bg-black p-1 rounded-full ${
//                 favorite[item.id] ? "text-red-500" : "text-white"
//               } cursor-pointer`}
//             />
//             <div className="mt-3">
//                 <h2 className="text-base sm:text-lg font-semibold">{item.name}</h2>
//                 <p className="text-sm text-gray-500">{item.title}</p>
//                 <div className="flex items-center justify-between mt-2">
//                   <div className="flex">
//                     {item.color.map((color, index) => (
//                       <div
//                         key={index}
//                         className={`w-4 h-4 rounded-full mr-2 ${color}`}
//                       />
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-600">{item.price}</p>
//                 </div>
//               </div>
//           </div>
//         ))}
//       </Slider>
//       </div>
//     </div>
//   );
// };

// export default BestSellers;


import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart } from "react-icons/fa";

const BestSellers = () => {
  const [favorite, setFavorite] = useState({});
  const [items, setItems] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        const products = data.products.slice(0, 6); // limit to 6 for display
        const formatted = products.map((product) => ({
          id: product.id,
          name: product.title,
          title: product.brand,
          image: product.thumbnail,
          price: `$${product.price}`,
          color: ["bg-red-500", "bg-green-500", "bg-blue-500"], // mock colors
        }));
        setItems(formatted);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchItems();
  }, []);

  const handleFavoriteClick = (id) => {
    setFavorite((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col mx-auto px-5 sm:px-0 mt-6 sm:mt-22 mb-10 max-w-7xl">
      <div className="flex justify-between items-center text-xl sm:text-3xl font-semibold">
        <h1>Best Sellers</h1>
        <button className="text-sm sm:text-base text-[#5A6D57] underline hidden sm:block">
          View All
        </button>
      </div>

      <div className="w-full mt-4 sm:mt-6 hidden sm:block">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="relative w-full">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <FaHeart
                  onClick={() => handleFavoriteClick(item.id)}
                  className={`absolute sm:right-6 sm:top-6 right-3 top-3 text-base sm:text-2xl border border-black bg-black p-1 rounded-full ${
                    favorite[item.id] ? "text-red-500" : "text-white"
                  } cursor-pointer`}
                />
              </div>
              <div className="mt-3">
                <h2 className="text-base sm:text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.title}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex">
                    {item.color.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full mr-2 ${color}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:hidden">
        <Slider {...settings} className="mt-2 sm:mt-6">
          {items.map((item) => (
            <div key={item.id} className="relative w-full px-1">
              <img src={item.image} alt={`item ${item.id}`} className="h-48 w-full object-cover rounded-lg" />
              <FaHeart
                onClick={() => handleFavoriteClick(item.id)}
                className={`absolute sm:right-12 sm:top-6 text-xl right-4 top-4 border border-black bg-black p-1 rounded-full ${
                  favorite[item.id] ? "text-red-500" : "text-white"
                } cursor-pointer`}
              />
              <div className="mt-3">
                <h2 className="text-base sm:text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.title}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex">
                    {item.color.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full mr-2 ${color}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSellers;

