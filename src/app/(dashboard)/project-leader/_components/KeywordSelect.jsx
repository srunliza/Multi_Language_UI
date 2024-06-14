// components/KeywordSelect.js
"use client";
import React, { useState } from "react";

const keywords = [
  "Dashboard",
  "Home",
  "Authenticate",
  "Page",
  // Add more keywords as needed
];

const KeywordSelect = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredKeywords = keywords.filter((keyword) =>
    keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (keyword) => {
    onSelect(keyword);
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
        <span className="text-xs">Choose type of keyword</span>
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
          <div className="flex justify-between items-center px-1 border-b border-gray-200">
            <input
              type="text"
              className="text-xs focus:outline-none focus:border-none h-8 focus:ring-0 border-none w-full px-2"
              placeholder="Type here to search..."
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
            {filteredKeywords.map((keyword) => (
              <li
                key={keyword}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs"
                onClick={() => handleSelect(keyword)}
              >
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default KeywordSelect;
