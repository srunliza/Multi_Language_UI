import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { TbLogout } from "react-icons/tb";

const PopUpLogoutComponent = ({ onConfirm, onCancel }) => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };
  
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="flex justify-end -mt-3 -mr-3">
            <div
              type="button"
              onClick={onCancel}
              className="btn btn-sm btn-ghost text-gray-500 absolute right-2 top-2 focus:outline-none"
            >
              ✕
            </div>
          </div>
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 p-5 rounded-full bg-red-100 sm:mx-0 sm:h-20 sm:w-20 ">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-300 sm:h-12 sm:w-12">
                <TbLogout className="text-white w-8 h-8 ml-2" />
              </div>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-xl leading-6 font-medium text-gray-900">
                Logout
              </h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  Are you sure you want to logout?
                </p>
              </div>
            </div>
          </div>
          <div className="sm:mt-4 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full sm:w-auto rounded-md border border-transparent px-4 py-2 bg-blue-800 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={handleLogout}
              >
                Logout
              </button>
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <div
                type="button"
                onClick={onCancel}
                className="inline-flex btn-ghost justify-center w-full sm:w-auto px-4 py-2 bg-white text-base leading-6 font-medium text-blue-800 border border-blue-800 rounded-md hover:border-blue-300 active:bg-transparent hover:bg-transparent focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                No
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpLogoutComponent;
