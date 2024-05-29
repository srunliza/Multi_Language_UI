import React from "react";
import AddMemberModal from "./AddMemberModal";
import MemberComponent from "./MemberComponent";
import ProjectLeaderUploadFile from "./ProjectLeaderUploadFile";
import Link from "next/link";

const DashboardDeveloperComponent = () => {
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
                    <Link class="md:p-4 py-3 px-0 block text-blue-700" href="/developerDashboard">
                      Upload
                    </Link>
                  </li>
                  <li>
                    <Link class="md:p-4 py-3 px-0 block" href="/developerDashboard/viewAttactment">
                      View Attactment
                    </Link>
                  </li>
                  <li>
                    <Link class="md:p-4 py-3 px-0 block" href="/developerDashboard/calendar">
                      Calendar
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* text */}
          <div className="mt-10">
            <p className="text-xl font-bold text-center">
              {" "}
              Ready to add content?
            </p>
            <p className="text-sm text-center py-10">
              There are two ways to add content to your project - choose the
              most suitable opton for you.{" "}
            </p>
          </div>
          {/* file upload */}
          <div className="flex">
            <div class="py-16  px-20">
              <div class="max-w-md rounded-lg overflow-hidden md:max-w-xl">
                <div class="md:flex">
                  <div class="w-['393px']  ">
                  <Link href={'/developerDashboard/upload'}>
                    <div class="relative  h-60  rounded-2xl  border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                      <div class="absolute">
                        <h1 className="ml-10 -mt-8 text-md font-medium leading-loose mb-2 ">File Upload</h1>
                        <hr class="w-[393px] mb-3" />
                        <div class="flex flex-col items-center">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M32.1602 46.0003C31.0668 46.0003 30.1602 45.0937 30.1602 44.0003V30.667C30.1602 29.5737 31.0668 28.667 32.1602 28.667C33.2535 28.667 34.1602 29.5737 34.1602 30.667V44.0003C34.1602 45.0937 33.2535 46.0003 32.1602 46.0003Z"
                              fill="#1E63F2"
                            />
                            <path
                              d="M38.6654 39.333H25.332C24.2387 39.333 23.332 38.4263 23.332 37.333C23.332 36.2397 24.2387 35.333 25.332 35.333H38.6654C39.7587 35.333 40.6654 36.2397 40.6654 37.333C40.6654 38.4263 39.7587 39.333 38.6654 39.333Z"
                              fill="#1E63F2"
                            />
                            <path
                              d="M45.332 60.6663H18.6654C6.90536 60.6663 3.33203 57.093 3.33203 45.333V18.6663C3.33203 6.90634 6.90536 3.33301 18.6654 3.33301H22.6654C27.332 3.33301 28.7987 4.85301 30.6654 7.33301L34.6654 12.6663C35.5454 13.8397 35.6787 13.9997 37.332 13.9997H45.332C57.092 13.9997 60.6654 17.573 60.6654 29.333V45.333C60.6654 57.093 57.092 60.6663 45.332 60.6663ZM18.6654 7.33301C9.14536 7.33301 7.33203 9.14634 7.33203 18.6663V45.333C7.33203 54.853 9.14536 56.6663 18.6654 56.6663H45.332C54.852 56.6663 56.6654 54.853 56.6654 45.333V29.333C56.6654 19.813 54.852 17.9997 45.332 17.9997H37.332C33.9187 17.9997 32.7987 16.8263 31.4654 15.0663L27.4654 9.73301C26.0787 7.89301 25.6787 7.33301 22.6654 7.33301H18.6654Z"
                              fill="#1E63F2"
                            />
                          </svg>
                          <p className=" text-xl py-2 text-blue-700">
                            Select a File Upload
                          </p>
                          <span class="block text-sm text-gray-400 font-normal">
                            Or Drag and Drop It here
                          </span>
                        </div>
                      </div>

                      <input
                        type="file"
                        class="h-full w-full opacity-0"
                        name=""
                      />
                    </div>
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
            {/* file upload */}

            <div class="py-16  ">
              <div class="max-w-md rounded-lg overflow-hidden md:max-w-xl">
                <div class="md:flex">
                  <div class="w-['393px'] ">
                    <Link href={'/developerDashboard/viewAttactment'}>
                    <div class="relative  h-60 rounded-2xl border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                      <div class="absolute">
                      <h1 className="ml-10 -mt-8 text-md font-medium leading-loose mb-2">Add keys manually</h1>
                        <hr class="w-[393px] mb-3" />
                        <div class="flex flex-col items-center">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M32.1602 46.0003C31.0668 46.0003 30.1602 45.0937 30.1602 44.0003V30.667C30.1602 29.5737 31.0668 28.667 32.1602 28.667C33.2535 28.667 34.1602 29.5737 34.1602 30.667V44.0003C34.1602 45.0937 33.2535 46.0003 32.1602 46.0003Z"
                              fill="#1E63F2"
                            />
                            <path
                              d="M38.6654 39.333H25.332C24.2387 39.333 23.332 38.4263 23.332 37.333C23.332 36.2397 24.2387 35.333 25.332 35.333H38.6654C39.7587 35.333 40.6654 36.2397 40.6654 37.333C40.6654 38.4263 39.7587 39.333 38.6654 39.333Z"
                              fill="#1E63F2"
                            />
                            <path
                              d="M45.332 60.6663H18.6654C6.90536 60.6663 3.33203 57.093 3.33203 45.333V18.6663C3.33203 6.90634 6.90536 3.33301 18.6654 3.33301H22.6654C27.332 3.33301 28.7987 4.85301 30.6654 7.33301L34.6654 12.6663C35.5454 13.8397 35.6787 13.9997 37.332 13.9997H45.332C57.092 13.9997 60.6654 17.573 60.6654 29.333V45.333C60.6654 57.093 57.092 60.6663 45.332 60.6663ZM18.6654 7.33301C9.14536 7.33301 7.33203 9.14634 7.33203 18.6663V45.333C7.33203 54.853 9.14536 56.6663 18.6654 56.6663H45.332C54.852 56.6663 56.6654 54.853 56.6654 45.333V29.333C56.6654 19.813 54.852 17.9997 45.332 17.9997H37.332C33.9187 17.9997 32.7987 16.8263 31.4654 15.0663L27.4654 9.73301C26.0787 7.89301 25.6787 7.33301 22.6654 7.33301H18.6654Z"
                              fill="#1E63F2"
                            />
                          </svg>
                          <p className=" text-xl py-2 text-blue-700">
                            Add keys and Value
                          </p>
                          <span class="block text-sm text-gray-400 font-normal">
                            Or Drag and Drop It here
                          </span>
                        </div>
                      </div>

                      <input
                        type="file"
                        class="h-full w-full opacity-0"
                        name=""
                      />
                      
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MemberComponent/>
      </div>
    </div>
  );
};

export default DashboardDeveloperComponent;
