"use client";
import React, { useState } from "react";
import Image from "next/image";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";

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
          className="bg-white shadow-md  rotate-180 p-2 rounded-full focus:outline-none relative"
          aria-label="Hint Button"
        >
          <WbIncandescentOutlinedIcon />
        </button>
        <span className="absolute left-1/2 z-50 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-gray-600 text-white text-sm rounded py-1 px-3">
          Hints
        </span>
      </div>

      {isOpen && (
        <div className="absolute right-0  mt-2 z-10">
          <div className="bg-white max-h-[515px] w-[350px] overflow-hidden  rounded-lg  shadow-lg p-6 relative">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/images/lisa.png"
                alt="User Avatar"
                width={50}
                g
                height={50}
                className="rounded-full mr-3"
              />
              <div>
                <h2 className="text-lg font-semibold">Srun Lisa</h2>
                <p className="text-gray-500">Project Leader</p>
              </div>
            </div>
            <div className="text-gray-700 mb-4 max-h-[410px] overflow-scroll no-scrollbar">
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
              </ul>
            </div>
            <div className="text-gray-500 text-sm">20 May 2024</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HintPopupComponent;
