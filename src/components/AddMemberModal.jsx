"use client";
import React, { useState } from "react";
import { ListMember } from "./ListMember";

const AddMemberModal = () => {
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center">
      <button
        id="openContactForm"
        className="flex bg-blue-800 text-sm hover:bg-blue-700 text-white shadow-md py-2.5 px-4 rounded-md"
        onClick={handleOpenModal}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 4C13.9391 4 12.9217 4.42143 12.1716 5.17157C11.4214 5.92172 11 6.93913 11 8C11 9.06087 11.4214 10.0783 12.1716 10.8284C12.9217 11.5786 13.9391 12 15 12C16.0609 12 17.0783 11.5786 17.8284 10.8284C18.5786 10.0783 19 9.06087 19 8C19 6.93913 18.5786 5.92172 17.8284 5.17157C17.0783 4.42143 16.0609 4 15 4ZM15 5.9C15.2758 5.9 15.5489 5.95432 15.8036 6.05985C16.0584 6.16539 16.2899 6.32007 16.4849 6.51508C16.6799 6.71008 16.8346 6.94158 16.9401 7.19636C17.0457 7.45115 17.1 7.72422 17.1 8C17.1 8.27578 17.0457 8.54885 16.9401 8.80364C16.8346 9.05842 16.6799 9.28992 16.4849 9.48492C16.2899 9.67993 16.0584 9.83461 15.8036 9.94015C15.5489 10.0457 15.2758 10.1 15 10.1C14.7242 10.1 14.4511 10.0457 14.1964 9.94015C13.9416 9.83461 13.7101 9.67993 13.5151 9.48492C13.3201 9.28992 13.1654 9.05842 13.0599 8.80364C12.9543 8.54885 12.9 8.27578 12.9 8C12.9 7.44305 13.1212 6.9089 13.5151 6.51508C13.9089 6.12125 14.443 5.9 15 5.9ZM4 7V10H1V12H4V15H6V12H9V10H6V7H4ZM15 13C12.33 13 7 14.33 7 17V20H23V17C23 14.33 17.67 13 15 13ZM15 14.9C17.97 14.9 21.1 16.36 21.1 17V18.1H8.9V17C8.9 16.36 12 14.9 15 14.9Z"
            fill="#F9FAFB"
          />
        </svg>
        <span className="ml-2">Add Member</span>
      </button>

      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-25"
              onClick={handleCloseModal}
            ></div>
            <div className="relative z-20 bg-white w-full max-w-sm p-6 rounded-lg shadow-lg">
              <div className="flex justify-between mb-5">
                <h2 className="text-lg font-semibold">Add Member</h2>
                <button
                  id="closeContactForm"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={handleCloseModal}
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
                <div className="relative mb-4">
                  <input
                    className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Search..."
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500"
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
                {/* ListMember component should be here */}
                <ListMember />

                <div className="py-4">
                  <label
                    htmlFor="select"
                    className="block mb-2 text-lg font-medium text-gray-700"
                  >
                    Assign role
                  </label>
                  <select className="block w-full text-sm text-gray-500 transition duration-75 border p-2 outline-0 border-gray-300 rounded-lg shadow-sm focus:border-blue-800 focus:ring-1 focus:ring-inset focus:ring-blue-800 mt-1 bg-white">
                    <option value="language">Choose role for user</option>
                    <option value="developer">Developer</option>
                    <option value="translator">Translator</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out mr-2"
                    type="button"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 transition duration-150 ease-in-out"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMemberModal;
