import React from "react";

const SidebarComponent = () => {
  return (
    <div class="bg-blue-600 w-64 p-6 flex flex-col text-white">
      <div class="flex items-center justify-center mb-8">
        <img src="path_to_logo" alt="LangNet Logo" class="h-12" />
      </div>

      <button class="bg-white text-blue-600 rounded-lg py-2 mb-4 w-full">
        New Project
      </button>

      <nav class="flex-grow">
        <a
          href="#"
          class="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg mb-2"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7h18M3 12h18m-9 5h9"
            ></path>
          </svg>
          Dashboard
        </a>
        <a
          href="#"
          class="flex items-center py-2 px-4 bg-blue-700 rounded-lg mb-2"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A9.954 9.954 0 0112 15c2.761 0 5.261 1.13 7.121 2.804m-14.242 0A9.954 9.954 0 0112 9c2.761 0 5.261 1.13 7.121 2.804M5.121 17.804l-.707-.707M18.293 5.293l-.707-.707m-.707.707L16.88 4.88M16.88 4.88A7.003 7.003 0 009 15h.007"
            ></path>
          </svg>
          Profile
        </a>
        <a
          href="#"
          class="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg mb-2"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3M8 3a4 4 0 100 8V3zm8 8v4m0-4a4 4 0 010-8v8zm0 0H8m0 0a4 4 0 108 8H8a4 4 0 110-8h8z"
            ></path>
          </svg>
          Calendar
        </a>
        <a
          href="#"
          class="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg mb-2"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Project
        </a>
      </nav>
      <div class="mt-auto">
        <a
          href="#"
          class="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg mb-2"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 2.75a2.75 2.75 0 10-5.5 0v18.5a2.75 2.75 0 105.5 0v-18.5zM21 8.75A3.25 3.25 0 0117.75 5h-3.5A3.25 3.25 0 0111 8.25v.5A3.25 3.25 0 0114.25 12h3.5A3.25 3.25 0 0121 8.75v-.5z"
            ></path>
          </svg>
          Setting
        </a>
        <a
          href="#"
          class="flex items-center py-2 px-4 hover:bg-blue-700 rounded-lg"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H3"
            ></path>
          </svg>
          Logout
        </a>
      </div>
    </div>
  );
};

export default SidebarComponent;
