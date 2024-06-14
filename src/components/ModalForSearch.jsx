'use client'
import React from "react";
import ListMemberForSearch from "./ListMemberForSearch"; // Correctly import the default export

const ModalForSearch = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center min-h-screen">
      {/* Background blur */}
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div id="" className="fixed z-10 inset-0 overflow-y-auto text-xs">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="bg-white w-[367px] p-6 rounded-lg shadow-lg h-[500px] ">
            <div className="flex justify-between mb-5">
              <h2 className="text-base  ">Members</h2>
              <button
                id="closeContactForm"
                className="text-gray-700 hover:text-red-500"
                onClick={onClose}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <form action="" method="post">
              <div className="relative">
                <input
                  className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-blue-600 focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Search..."
                />
                {/* <div className="absolute right-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ml-1 mr-3 h-4 w-4 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div> */}

                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-5 ml-3 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              {/* list member */}
              <div className="h-[280px]">
                <ListMemberForSearch />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForSearch;
