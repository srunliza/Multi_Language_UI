"use client";
import React, { useState } from "react";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";

const hintData = [
  {
    id: 1,
    name: "Tep Thean",
    image: '/assets/images/Thean.png',
    position: "Project Leader",
    comment: (
      <>
        <p>This is a hint for your project:</p>
        <ul className="list-disc pl-5">
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
          <li>Select the source language.</li>
          <li>Choose the target language for translation.</li>
          <li>Pick the language you want to translate from.</li>
        </ul>
      </>
    ),
    date: "24 May 2024",
  },
];

const HintPopupComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative p-2">
      <div className="group relative left-full -translate-x-full inline-block">
        <button
          onClick={togglePopup}
          className="bg-white shadow-md rotate-180 p-2 rounded-full focus:outline-none relative"
          aria-label="Hint Button"
        >
          <WbIncandescentOutlinedIcon />
        </button>
        <span className="absolute left-1/2 z-50 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-gray-600 text-white text-sm rounded py-1 px-3">
          Hints
        </span>
      </div>

      {isOpen && (
        
        <div className="border rounded-lg absolute right-0 mt-2 z-10">
        <div className="bg-white max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg p-3 px-7 relative">
            <h1 className="text-gray-800 text-xl font-semibold mb-5">Hint</h1>
            <div className="overflow-auto max-h-[426px] mb-4 no-scrollbar">
              {hintData.map((hint, index) => (
                <div key={index} className="bg-white shadow-sm px-4 py-2 border rounded-xl mb-2.5">
                  <div className="flex flex-col sm:flex-row pb-2">
                    <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={hint.image}
                        alt="profile user image"
                      />
                    </div>
                    <div className="ml-0 sm:ml-3 mt-3 sm:mt-0 flex-1 relative">
                      <div className="font-medium text-gray-800 mr-7 top-0 md:text-sm text-lg">{hint.name}</div>
                      <div className="text-gray-600 text-xs md:text-[11px] lg:text-sm">{hint.position}</div>
                      <div className="mt-3.5 text-gray-700 text-[12.8px] md:mt-[10px] ml-[-66px] mr-0 overflow-auto  no-scrollbar lg:mt-5 lg:text-sm">{hint.comment}</div>
                      <div className="text-gray-500 sm:text-xs md:text-sm lg:text-[15px] mt-2 ml-[-66px]">{hint.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
     
         </div>
        </div>
 
      )}
    </div>
  );
};

export default HintPopupComponent;
