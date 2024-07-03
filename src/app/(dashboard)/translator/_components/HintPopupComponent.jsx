"use client";
import React, { useState } from "react";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";

const HintPopupComponent = ({ previewData }) => {
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
      </div>

      {isOpen && (
        <div className="border rounded-lg absolute right-0 mt-2 z-10">
          <div className="bg-white max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg p-3 px-5 relative">
            <h1 className="text-gray-800 text-xl font-semibold mb-5">Hints</h1>
            <div className="overflow-auto max-h-[350px] w-[24rem] mb-4 no-scrollbar">
              <table className="w-full text-left border">
                <thead>
                  <tr className="text-center">
                    <th className="pr-4 border">Key</th>
                    <th>Hint</th>
                  </tr>
                </thead>
                <tbody>
                  {previewData.map((hint, index) => (
                    <tr className="my-2" key={index}>
                      <td className="pl-4 border">{hint.key}</td>
                      <td
                        className={`pl-4 border ${
                          hint.hint === null ? "text-red-500 text-sm" : ""
                        }`}
                      >
                        {hint.hint ?? "null"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HintPopupComponent;
