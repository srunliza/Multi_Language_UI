"use client";
import React, { useState } from "react";
import { ListMember } from "./ListMember";

const AddMemberModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-50"
              onClick={onClose}
            ></div>
            <div className="relative z-20 bg-white w-[367px] p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-5">
                <h2 className="text-base font-bold ">Add Member</h2>
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
                <div class="relative">
                  <input
                    class="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Search..."
                  />
                  <div class="absolute right-0 inset-y-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  <div class="absolute left-0 inset-y-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
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
                <ListMember />
                {/* select */}
                <div className="py-3">
                  <label htmlFor="select" className="text-md font-medium ">
                    Assign role
                  </label>
                  <select class="block w-[319px] text-sm text-gray-50000 transition duration-75 border py-1 border-gray-300 rounded-lg shadow-sm h-[41px] focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none">
                    <option value="language">choose role for user</option>
                    <option value="language">Developer</option>
                    <option value="khmer">Translator</option>
                  </select>
                </div>
                {/* button */}
                <div class="flex gap-4 py-5 min-w-[50px] h-[75px] text-sm">
                  <input
                    class="px-2 py-2  text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer"
                    type="reset"
                    value={"Cancel"}
                  />

                  <input
                    class="px-3 py-2 text-center text-white bg-blue-600 border border-blue-600 rounded-lg active:text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring cursor-pointer"
                    type="submit"
                    value={"Save"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMemberModal;
