"use client";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const UserProfileComponent = ({ user, onClose }) => {
  console.log(user);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-25 z-50">
      <dialog open className="modal">
        <div className="modal-box relative p-0 w-[25rem] h-[42rem]">
          <form method="dialog">
            <button
              className="text-lg btn btn-sm btn-circle text-red-400 font-bold hover:text-red-500 hover:bg-transparent btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
          </form>
          <img
            src={user.image || "../../Images/user-profile.png"}
            className="w-full h-[300px] object-cover"
          />
          <div className="p-4 mt-3">
            <h3 className="font-semibold text-xl mb-5">
              {user.username ? (
                user.username
              ) : (
                <span className="text-red-600 text-sm">
                  Username not provided
                </span>
              )}
            </h3>
            <div className="text-gray-700 mt-3 text-sm">
              <div className="flex items-center gap-5 mb-6">
                <MailOutlineIcon className="text-gray-500" />
                <span
                  className={`flex-grow border-b border-gray-300 ${
                    !user.email && "text-red-600 text-sm"
                  }`}
                >
                  {user.email || "No email provided"}
                </span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                {user.gender === "Female" ? (
                  <FemaleOutlinedIcon className="text-gray-500" />
                ) : (
                  <MaleOutlinedIcon className="text-gray-500" />
                )}
                <span
                  className={`flex-grow border-b border-gray-300 ${
                    !user.gender && "text-red-600 text-sm"
                  }`}
                >
                  {user.gender || "No gender provided"}
                </span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                <PhoneAndroidIcon className="text-gray-500" />
                <span
                  className={`flex-grow border-b border-gray-300 ${
                    !user.contact?.phoneNumber && "text-red-600 text-sm"
                  }`}
                >
                  {user.contact?.phoneNumber || "No phone number provided"}
                </span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                <FacebookOutlinedIcon className="text-gray-500" />
                <span
                  className={`flex-grow border-b border-gray-300 ${
                    !user.contact?.facebook && "text-red-600 text-sm"
                  }`}
                >
                  {user.contact?.facebook || "No facebook account provided"}
                </span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                <CakeOutlinedIcon className="text-gray-500" />
                <span
                  className={`flex-grow border-b border-gray-300 ${
                    !user.birthDate && "text-red-600 text-sm"
                  }`}
                >
                  {user.birthDate || "No birth date provided"}
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
