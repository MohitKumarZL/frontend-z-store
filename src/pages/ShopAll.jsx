import React, { useState } from "react";
import best2 from "../assets/best2.png";
import best3 from "../assets/best3.png";
import seller1 from "../assets/seller1.png";
import shopAll from "../assets/shopAll.png";
import Filters from "../Components/Filters";
import { FaHeart } from "react-icons/fa";
import Footer from "../Components/Footer";

const ShopAll = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [favorite, setFavorite] = useState({});

  const handleFavoriteClick = (id) => {
    setFavorite((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const items = [
    {
      id: 1,
      name: "Item 1",
      image: seller1,
      price: "$10.00",
      title: "Tailored for you",
      color: ["Red", "Yellow", "Black"],
      fabric: ["Cotton", "Silk"],
      size: "M / US (6-10)",
      collection: "In Stock",
    },
    {
      id: 2,
      name: "Item 2",
      image: best2,
      price: "$12.00",
      title: "Tailored for you",
      color: ["Green", "Yellow", "Black"],
      fabric: ["Wool", "Linen"],
      size: "L / US (10-14)",
      collection: "In Stock",
    },
    {
      id: 3,
      name: "Item 3",
      image: best3,
      price: "$15.00",
      title: "Tailored for you",
      color: ["Blue", "Yellow", "Black"],
      fabric: ["Linen", "Silk"],
      size: "S / US (4-6)",
      collection: "Out Of Stock",
    },{
      id: 4,
      name: "Item 2",
      image: best2,
      price: "$12.00",
      title: "Tailored for you",
      color: ["Green", "Yellow", "Black"],
      fabric: ["Wool", "Linen"],
      size: "L / US (10-14)",
      collection: "In Stock",
    },
    {
      id: 5,
      name: "Item 3",
      image: best3,
      price: "$15.00",
      title: "Tailored for you",
      color: ["Blue", "Yellow", "Black"],
      fabric: ["Linen", "Silk"],
      size: "S / US (4-6)",
      collection: "Out Of Stock",
    },
  ];

  const filteredItems = items.filter((item) =>
    Object.entries(selectedFilters).every(([key, values]) => {
      const itemValue = item[key];

      if (Array.isArray(itemValue)) {
        // Match if ANY of the selected filters are in the item's array
        return values.some((val) => itemValue.includes(val));
      } else {
        // Match exact value
        return values.includes(itemValue);
      }
    })
  );

  return (
    <>
    <div>
      <img
        src={shopAll}
        alt="Plus Size"
        className="w-full h-[80%] object-cover"
      />

      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <Filters
            items={items}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>

        <div className="col-span-2 md:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="relative w-full">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto object-cover  sm:rounded-lg"
                  />
                  <FaHeart
                    onClick={() => handleFavoriteClick(item.id)}
                    className={`absolute sm:right-6 sm:top-6 right-3 top-3 text-base sm:text-2xl border border-black bg-black p-1 rounded-full ${
                      favorite[item.id] ? "text-red-500" : "text-white"
                    } cursor-pointer`}
                  />
                </div>
                <div className="mt-3">
                  <h2 className="text-base sm:text-lg font-semibold">
                    {item.name}
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">{item.title}</p>{" "}
                    <div className="">
                      {" "}
                      {item.fabric.map((Fab, idx) => (
                        <span key={idx}> {Fab}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex mt-2">
                      {item.color.map((clr, idx) => (
                        <span
                          key={idx}
                          className={`w-4 h-4 rounded-full mr-2`}
                          style={{ backgroundColor: clr.toLowerCase() }}
                          title={clr}
                        ></span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No items found.</p>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ShopAll;