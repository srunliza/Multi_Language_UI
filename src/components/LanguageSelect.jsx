"use client";
import React, { useState } from "react";

const languages = [
  "English",
  "Khmer",
  "French",
  "Spanish",
  "German",
  "Chinese",
  "Japanese",
  "Korean",
  "Russian",
  "Italian",
  // Add more languages as needed
];

const LanguageSelect = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Khmer");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredLanguages = languages.filter((language) =>
    language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  const handleClose = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block w-64 mt-2">
      <div
        className="relative flex w-[321px] h-[37.6px] items-center justify-between border border-gray-300 rounded-lg px-3 py-2 cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span>{selectedLanguage}</span>
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
        <div className="absolute z-10 w-[321px] mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-1 border-b border-gray-200">
            <input
              type="text"
              className="text-sm focus:outline-none focus:border-none focus:ring-0 border-none"
              placeholder="type here to search ..."
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
            {filteredLanguages.map((language) => (
              <li
                key={language}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(language)}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
