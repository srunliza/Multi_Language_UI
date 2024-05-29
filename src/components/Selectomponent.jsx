"use client";
import React, { useState } from "react"; // Removed unused Component import
import Select from "react-select";

const language = [
  { value: 1, label: "Khmer" },
  { value: 2, label: "English" },
  { value: 3, label: "Korea" },
  { value: 4, label: "Thai" },
  { value: 5, label: "French" }, // Corrected typo
];

function SelectComponent() {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const setHandle = (e) => {
    setSelectedOptions(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
  };

  return (
    <div className="w-[321px] py-2">
      <div className="mx-auto container py-8">
        <label htmlFor="select">Translating to (target language)</label>
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          <div className="w-[321px] text-sm font-medium transition duration-75 rounded-lg border border-gray-300 h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-2 bg-none">
            <Select
              className="" // Removed inline style
              options={language}
              onChange={setHandle}
              isMulti
            />
          </div>
          <div>{selectedOptions}</div>
        </div>
      </div>
    </div>
  );
}

export default SelectComponent;
