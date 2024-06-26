"use client";
import React, { useState } from "react";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";

const hintData = [
  {
    id: 1,
    name: "Tep Thean",
    image: "/assets/images/Thean.png",
    position: "Project Leader",
    tablehint: [
      { key: "Home", hint: "relating to the place where one lives" },
      { key: "About", hint: "information about something or someone" },
      { key: "Contact", hint: "a way of getting in touch with someone" },
      { key: "More", hint: "a way of getting in touch with someone" },
      { key: "About", hint: "information about something or someone" },
      { key: "Contact", hint: "a way of getting in touch with someone" },
      { key: "More", hint: "a way of getting in touch with someone" },
      { key: "About", hint: "information about something or someone" },
      { key: "Contact", hint: "a way of getting in touch with someone" },
      { key: "More", hint: "a way of getting in touch with someone" },
    ],
    date: "24 May 2024",
  },
];

const HintPopupComponent = ({ previewData }) => {
  console.log("popup hint: ", previewData);
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
          <div className="bg-white max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg p-3 px-5 relative">
            <h1 className="text-gray-800 text-xl font-semibold mb-5">Hint</h1>
            <div className="overflow-auto max-h-[426px] mb-4 no-scrollbar">
              {hintData.map((hint, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm px-4 py-2 border rounded-xl mb-2.5"
                >
                  <div className="flex flex-col sm:flex-row pb-2 w-[355px]">
                    <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center">
                      {/* <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={hint.image}
                        alt="profile user image"
                      /> */}
                    </div>
                    <div className="ml-0 sm:ml-3 mt-3 sm:mt-0 flex-1 relative">
                      {/* <div className="font-medium text-gray-800 mr-7 top-0 md:text-sm text-lg">
                        {hint.name}
                      </div>
                      <div className="text-gray-600 text-xs md:text-[11px] lg:text-sm">
                        {hint.position}
                      </div> */}
                      <div className="mt-3.5 text-gray-700 text-[12.8px] md:mt-[10px] ml-[-66px] mr-0 overflow-auto no-scrollbar lg:mt-5 lg:text-sm">
                        <table className="w-full text-left border">
                          <thead>
                            <tr className="text-center">
                              <th className="pr-4 border">Key</th>
                              <th>Hint</th>
                            </tr>
                          </thead>
                          <tbody>
                            {hint.tablehint.map((hintItem, hintIndex) => (
                              <tr className="my-2" key={hintIndex}>
                                <td className="pr-4 border">{hintItem.key}</td>
                                <td className="border">{hintItem.hint}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="text-gray-500 sm:text-xs md:text-sm lg:text-[15px] mt-2 ml-[-66px]">
                        {hint.date}
                      </div>
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
