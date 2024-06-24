"use client";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const UserProfileComponent = ({ user, onClose }) => {
  console.log(user);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-25 z-50">
      <dialog open className="modal">
        <div className="modal-box relative p-0 w-[22rem]">
          <form method="dialog">
            <button
              className="text-2xl btn btn-sm btn-circle text-blue-800 font-bold hover:text-red-500 hover:bg-transparent btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
          </form>
          <img
            src={user.image || "../../Images/user-profile.png"}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{user.name}</h3>
            <div className="text-gray-700 mt-3 text-sm">
              <div className="flex items-center gap-5 mb-6">
                <MailOutlineIcon className="text-gray-500" />
                <span className="flex-grow border-b border-gray-300">
                  {user.email || "No email provided"}
                </span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                <PhoneAndroidIcon className="text-gray-500" />
                <span className="flex-grow border-b border-gray-300">
                  {user.contact?.phoneNumber || "No phone number provided"}
                </span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                <CalendarMonthIcon className="text-gray-500" />
                <span className="flex-grow border-b border-gray-300">
                  {user.birthDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserProfileComponent;
