import React from "react";
import AddMemberModal from "./AddMemberModal";
import MemberComponent from "./MemberComponent";
import Link from "next/link";
import SelectComponent from "./Selectomponent";
const ProjectLeaderUploadFile = () => {
  return (
    <div className="ml-5 mt-5">
      {/* Upload file */}
      <div className="flex justify-between">
        <h2 className="text-xl text-color-text-black font-bold">
          Project Name
        </h2>

        {/*Modal */}
        <AddMemberModal />
      </div>
      <div className="flex">
        <div className="w-[900px] h-screen bg-red-100 border border-blue-300  rounded-t-lg  ">
          {/* Header */}
          <div className="w-full h-14 bg-white border-b border-blue-300 rounded-t-lg  flex">
            <div
              class="hidden md:flex md:items-center md:w-auto w-full "
              id="menu"
            >
              <nav>
                <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                  <li>
                    <Link
                      class="md:p-4 py-3 px-0 block text-blue-700"
                      href="/developerDashboard"
                    >
                      Upload
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="md:p-4 py-3 px-0 block"
                      href="/developerDashboard/viewAttactment"
                    >
                      View Attactment
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="md:p-4 py-3 px-0 block"
                      href="/developerDashboard/calendar"
                    >
                      Calendar
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* text */}

          {/* contain  */}
          <div className="ml-10 mt-3">
            <p className="text-color-text-black font-medium mb-3">
              Upload Your Files
            </p>
            <div class="border border-dashed border-color-text-grey bg-gray-50 p-4 rounded-xl shadow-md w-28 mb-5">
              <label
                for="upload"
                class="flex flex-col items-center gap-2 cursor-pointer"
              >
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 17V8.85L10.4 11.45L9 10L14 5L19 10L17.6 11.45L15 8.85V17H13ZM8 21C7.45 21 6.97933 20.8043 6.588 20.413C6.19667 20.0217 6.00067 19.5507 6 19V16H8V19H20V16H22V19C22 19.55 21.8043 20.021 21.413 20.413C21.0217 20.805 20.5507 21.0007 20 21H8Z"
                    fill="black"
                  />
                </svg>

                <span class="text-gray-600 text-xs  text-center">
                  Upload your files here
                </span>
              </label>
              <input id="upload" type="file" class="hidden" />
            </div>
            <div className="w-[815px]   border-b-2 border-gray-400"></div>
            <div className="w-[321px] py-2">
              <label htmlFor="select">Translating from (base, source language)</label>
              <select class="block w-[321px] text-sm font-medium transition duration-75 border py-2 border-gray-400 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-2 bg-none">
                <option value="language">Choose Language</option>
                <option value="khmer">Khmer</option>
                <option value="english">English</option>
                <option value="korea">Korea</option>
                <option value="spain">Spain</option>
              </select>
            </div>
            <SelectComponent/>
          </div>
        </div>
        <MemberComponent />
      </div>
    </div>
  );
};

export default ProjectLeaderUploadFile;
