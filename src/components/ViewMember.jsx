"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalForSearch from "./ModalForSearch";

const ViewMember = () => {
  const [activeTab, setActiveTab] = useState("View Attachment");
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSearchClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="text-sm">
      <main className="flex flex-1 w-[300px]">
        <div className="bg-white overflow-hidden border rounded-xl shadow-md sm:rounded-xl ml-4 p-4 border-blue-300 border-l-0">
          <div className="flex items-center p-2 border-b">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.418 21.6663H23.8346V19.4997C23.8346 18.8243 23.6241 18.1656 23.2324 17.6154C22.8408 17.0651 22.2874 16.6505 21.6493 16.4292C21.0111 16.208 20.3199 16.191 19.6717 16.3808C19.0234 16.5705 18.4504 16.9575 18.0323 17.4879M18.418 21.6663H7.58464M18.418 21.6663V19.4997C18.418 18.789 18.2815 18.1098 18.0323 17.4879M18.0323 17.4879C17.63 16.4825 16.9357 15.6208 16.039 15.0137C15.1422 14.4067 14.0842 14.0822 13.0013 14.0822C11.9184 14.0822 10.8604 14.4067 9.96364 15.0137C9.0669 15.6208 8.3726 16.4825 7.9703 17.4879M7.58464 21.6663H2.16797V19.4997C2.16802 18.8243 2.3785 18.1656 2.77015 17.6154C3.1618 17.0651 3.71517 16.6505 4.35332 16.4292C4.99148 16.208 5.68271 16.191 6.33093 16.3808C6.97916 16.5705 7.55217 16.9575 7.9703 17.4879M7.58464 21.6663V19.4997C7.58464 18.789 7.72113 18.1098 7.9703 17.4879M16.2513 7.58301C16.2513 8.44496 15.9089 9.27161 15.2994 9.88111C14.6899 10.4906 13.8633 10.833 13.0013 10.833C12.1393 10.833 11.3127 10.4906 10.7032 9.88111C10.0937 9.27161 9.7513 8.44496 9.7513 7.58301C9.7513 6.72105 10.0937 5.8944 10.7032 5.28491C11.3127 4.67542 12.1393 4.33301 13.0013 4.33301C13.8633 4.33301 14.6899 4.67542 15.2994 5.28491C15.9089 5.8944 16.2513 6.72105 16.2513 7.58301ZM22.7513 10.833C22.7513 11.4076 22.523 11.9587 22.1167 12.3651C21.7104 12.7714 21.1593 12.9997 20.5846 12.9997C20.01 12.9997 19.4589 12.7714 19.0526 12.3651C18.6462 11.9587 18.418 11.4076 18.418 10.833C18.418 10.2584 18.6462 9.70727 19.0526 9.30094C19.4589 8.89461 20.01 8.66634 20.5846 8.66634C21.1593 8.66634 21.7104 8.89461 22.1167 9.30094C22.523 9.70727 22.7513 10.2584 22.7513 10.833ZM7.58464 10.833C7.58464 11.4076 7.35636 11.9587 6.95003 12.3651C6.5437 12.7714 5.9926 12.9997 5.41797 12.9997C4.84333 12.9997 4.29223 12.7714 3.8859 12.3651C3.47958 11.9587 3.2513 11.4076 3.2513 10.833C3.2513 10.2584 3.47958 9.70727 3.8859 9.30094C4.29223 8.89461 4.84333 8.66634 5.41797 8.66634C5.9926 8.66634 6.5437 8.89461 6.95003 9.30094C7.35636 9.70727 7.58464 10.2584 7.58464 10.833Z"
                stroke="#475568"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="pl-5 text-base  text-gray-500">35 MEMBERS</span>
            <div className="ml-auto">
              <svg
                className="w-5 h-5 text-gray-500 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleSearchClick}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6M3 10a7 7 0 1114 0 7 7 0 01-14 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="px-3 py-2">
            <div className="flex items-center">
              <span className="m-2">Project Leader</span>
            </div>
            <hr className="mt-1 border-t border-gray-300 w-[230px] ml-1" />
          </div>
          <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
            <Image
              src={"/assets/images/vandy.png"}
              alt="User"
              width={35}
              height={35}
              className="rounded-full"
            />
            <div className="ml-2">
              <div className=" text-gray-500">Robert Downey Jr</div>
            </div>
          </div>
          <div className="px-3 py-1">
            <div className="flex items-center">
              <span className="m-3 ">Translator</span>
            </div>
            <hr className="mt-1 border-t border-gray-300 w-[500px] ml-3" />
          </div>
          <div className="overflow-y-auto h-[200px] no-scrollbar">
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/lisa.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/thean.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/sokhim.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/lisa.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/sreyly.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/soklay.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="px-3 py-2">
            <div className="flex items-center">
              <span className=" m-3">Developer</span>
            </div>
            <hr className="mt-1 border-t border-gray-300 w-[500px] ml-3" />
          </div>
          <div className="overflow-y-auto h-[200px] no-scrollbar">
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/lisa.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/neath.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/sreyka.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/sokheng.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/panha.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center p-2 hover:bg-blue-100 ml-2">
              <Image
                src={"/assets/images/sokhim.png"}
                alt="User"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="ml-2">
                <div className=" text-gray-500">Robert Downey Jr</div>
              </div>
              <button className="ml-auto">
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      <ModalForSearch isVisible={isModalVisible} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold mb-4">Search Members</h2>
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleCloseModal}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Close
        </button>
      </ModalForSearch>
    </div>
  );
};

export default ViewMember;