import React from "react";

const NavbarComponent = () => {
  return (
    <nav class="bg-white shadow-md p-3 px-6 flex justify-between items-center border">
      <div class="flex items-center w-1/2">
        <div class="relative w-full">
          <input
            type="text"
            placeholder="Search project"
            class="border border-gray-300 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <svg
            class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M18 10.5A7.5 7.5 0 1110.5 3 7.5 7.5 0 0118 10.5z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <div class="relative">
          <button class="focus:outline-none">
            <svg
              class="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-.364-.301l-.231-.133c-.522-.3-1.167-.549-1.952-.549a4.75 4.75 0 01-4.75-4.75c0-.785.248-1.43.549-1.952l.133-.231c.088-.152.17-.273.301-.364L15 2.752V7h-3.992a6.743 6.743 0 00-.833.183c-1.26.323-2.43 1.217-3.208 2.413A8.482 8.482 0 006 14.5c0 1.254.303 2.441.834 3.5H9v3H3v-3h1.166A7.5 7.5 0 005 14.5c0-1.286-.316-2.508-.835-3.5h2.383a6.749 6.749 0 00.833-.183H9V3h6v2.752L12 7.752a3.75 3.75 0 013 3.746v.252c0 .973-.296 1.827-.75 2.451a3.718 3.718 0 01-2.45.75v.252A6.75 6.75 0 0015 17z"
              ></path>
            </svg>
          </button>

          <span class="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        <div class="flex items-center">
          <img
            src="path_to_profile_image"
            alt="Profile Image"
            class="w-10 h-10 rounded-full border-2 border-blue-600"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
