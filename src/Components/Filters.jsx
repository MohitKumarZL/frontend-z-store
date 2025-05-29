import React, { useState } from "react";
import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const filters = {
  "Sort By": [
    "Featured",
    "Best Seller",
    "Price: Low To High",
    "Price: High To Low",
  ],
  Size: [
    "XS / US (0-4)",
    "S / US (4-6)",
    "M / US (6-10)",
    "L / US (10-14)",
    "XL / US (12-16)",
  ],
  Color: [
    "Black",
    "Red",
    "Green",
    "Yellow",
    "Dark Blue",
    "Purple",
    "Pink",
    "Light Blue",
    "Orange",
    "White",
  ],
  Collection: ["In Stock", "Out Of Stock"],
  Fabric: ["Cotton", "Linen", "Wool", "Silk", "Cashmere"],
};

const Filters = ({ items, selectedFilters, setSelectedFilters }) => {
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (category) => {
    setOpenFilter(openFilter === category ? null : category);
  };

  const toggleOption = (category, option) => {
    setSelectedFilters((prev) => {
      const prevOptions = prev[category] || [];
      const newOptions = prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option];
      return { ...prev, [category]: newOptions };
    });
  };

  const removeFilter = (category, option) => {
    setSelectedFilters((prev) => {
      const newOptions = prev[category].filter((item) => item !== option);
      if (newOptions.length === 0) {
        const { [category]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [category]: newOptions };
    });
  };

  const clearFilters = () => setSelectedFilters({});

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Applied Filters */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {Object.entries(selectedFilters).map(([category, options]) =>
          options.map((option) => (
            <span
              key={`${category}-${option}`}
              className="bg-[#748C70] text-white px-2 py-1 rounded flex items-center justify-between gap-1"
            >
              {option}
              <RxCross2
                size={14}
                className="cursor-pointer"
                onClick={() => removeFilter(category, option)}
              />
            </span>
          ))
        )}
      </div>

      {Object.keys(selectedFilters).length > 0 && (
        <div className="mb-4">
          <button
              className="w-full hover:bg-[#748C70] hover:text-white text-sm py-2 rounded bg-white text-[#748C70] border border-[#748C70] transition duration-300"
            onClick={clearFilters}
          >
            Clear All Filters
          </button>
        </div>
      )}

      {Object.entries(filters).map(([category, options]) => (
        <div key={category} className="mb-2  rounded">
          <button
              className="w-full bg-[#748C70] text-white px-4 py-2 flex justify-between items-center"
            onClick={() => toggleFilter(category)}
          >
            {category}
            {openFilter === category ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openFilter === category && (
            <div className="p-4 bg-white">
              {options.map((option) => (
                <label key={option} className="block mb-1 text-sm">
                  <input
                    type="checkbox"
                    className="mr-2 accent-[#748C70] "
                    checked={selectedFilters[category]?.includes(option) || false}
                    onChange={() => toggleOption(category, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;


