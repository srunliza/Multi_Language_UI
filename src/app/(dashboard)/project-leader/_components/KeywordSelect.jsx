"use client";
import React, { useEffect, useState } from "react";

const KeywordSelect = ({ onSelect, staticKeyData }) => {
  console.log("static keys data: ", staticKeyData);

  // State to store mapped data
  const [mappedData, setMappedData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to map the static key data based on sections
  const mapDataToSections = (data) => {
    // Reduce the data array to a single object
    return data.reduce((acc, item) => {
      // Check if the section exists in the accumulator object
      if (!acc[item.section]) {
        // If not, create a new array for this section

        acc[item.section] = [];
      }
      // Push the key of the current item into the section array

      acc[item.section].push(item.key);
      // Return the updated accumulator object for the next iteration

      return acc;
    }, {});
  };

  // Use useEffect to map data when staticKeyData prop changes
  useEffect(() => {
    if (staticKeyData && staticKeyData.length > 0) {
      const mapped = mapDataToSections(staticKeyData);
      setMappedData(mapped);
      console.log("Mapped Data:", mapped);
    }
  }, [staticKeyData]);

  console.log("data section prop: ", mappedData);

  // Filter sections based on search term
  const filteredSections = Object.keys(mappedData).filter((section) =>
    section.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectSection = (section) => {
    onSelect(mappedData[section]);
    setDropdownOpen(false);
  };

  const handleClose = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block w-64 mt-2">
      <div
        className="relative flex w-full h-[37.6px] items-center justify-between border border-gray-300 rounded-lg px-3 py-2 cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="text-xs">Choose section</span>
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {dropdownOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-3 border-b border-gray-200">
            <input
              type="text"
              className="text-xs focus:outline-none focus:border-none h-8 focus:ring-0 border-none w-full px-2"
              placeholder="Search section..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleClose} className="ml-2 text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="max-h-60 overflow-auto no-scrollbar">
            {filteredSections.map((section) => (
              <li
                key={section}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs"
                onClick={() => handleSelectSection(section)}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default KeywordSelect;
