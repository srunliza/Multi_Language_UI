"use client";
import Image from "next/image";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
const UserProfileComponent = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <dialog open className="modal">
        <div className="modal-box relative p-0">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle text-black font-bold hover:text-red-500 hover:bg-transparent btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
          </form>
          <Image
            src={user.image}
            width={300}
            height={500}
            className="w-full h-[300px] object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{user.name}</h3>
            <div className="text-gray-700 mt-3 text-sm">
              <div className="flex items-center gap-5 mb-6">
                <AccessTimeIcon className="text-gray-500" />
                <span className="flex-grow border-b border-gray-300">
                  09:22 AM local time
                </span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                <MailOutlineIcon className="text-gray-500" />
                <span className="flex-grow border-b border-gray-300">
                  {user.email || "No email provided"}
                </span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                <PhoneAndroidIcon className="text-gray-500" />
                <span className="flex-grow border-b border-gray-300">
                  {user.phone || "No phone number provided"}
                </span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                <CalendarMonthIcon className="text-gray-500" />
                <span className="flex-grow border-b border-gray-300">
                  01-02-2000
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
