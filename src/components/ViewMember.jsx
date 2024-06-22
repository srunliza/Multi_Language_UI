"use client";
import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupIcon from "@mui/icons-material/Group";
import CloseIcon from "@mui/icons-material/Close";
import UserProfileComponent from "./UserProfileComponent"; // Ensure the path is correct

const ViewMember = ({ onClose, project }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseUserProfile = () => {
    setSelectedUser(null);
  };

  const renderUserList = (role) => {
    return project.members
      .filter((member) => member.role.roleName === role)
      .map((member) => (
        <div
          key={member.userId}
          className="flex items-center p-2 hover:bg-blue-100 cursor-pointer"
          onClick={() => handleUserClick(member)}
        >
          <img
            src={member.image ? member.image : "../../Images/user-profile.png"}
            alt="User"
            width={30}
            height={28}
            className="rounded-full h-8 w-8"
          />
          <div className="ml-2">
            <div className="text-gray-800">{member.fullName}</div>
          </div>
        </div>
      ));
  };

  return (
    <div className="text-sm">
      <main className="flex flex-1 w-[20rem]">
        <div className="bg-white overflow-hidden rounded-xl shadow-md sm:rounded-xl ml-4 p-2 w-full">
          <div className="flex items-center p-2 border-b">
            <GroupIcon className="text-gray-500" />
            <span className="pl-2 text-base text-gray-800 text-md font-semibold">
              {project.members.length}{" "}
              {project.members.length === 1 ? "Member" : "Members"}
            </span>
            <button onClick={onClose} className="ml-auto">
              <CloseIcon className="text-gray-500" />
            </button>
          </div>
          <div className="px-3 py-2">
            <div className="flex items-center">
              <PersonOutlineIcon className="text-gray-500 mr-2" />
              <span className="text-gray-800">Project Leader</span>
            </div>
            <hr className="mt-1 border-t border-gray-300" />
          </div>
          {renderUserList("Project Leader")}
          <div className="px-3 py-2">
            <div className="flex items-center">
              <PersonOutlineIcon className="text-gray-500 mr-2" />
              <span className="text-gray-800">Translator</span>
            </div>
            <hr className="mt-1 border-t border-gray-300" />
          </div>
          <div className="overflow-y-auto h-[210px] no-scrollbar">
            {renderUserList("Translator")}
          </div>
          <div className="px-3 py-2">
            <div className="flex items-center">
              <PersonOutlineIcon className="text-gray-500 mr-2" />
              <span className="text-gray-800">Developer</span>
            </div>
            <hr className="mt-1 border-t border-gray-300" />
          </div>
          <div className="overflow-y-auto h-[200px] no-scrollbar">
            {renderUserList("Developer")}
          </div>
        </div>
      </main>

      {selectedUser && (
        <UserProfileComponent
          user={selectedUser}
          onClose={handleCloseUserProfile}
        />
      )}
    </div>
  );
};

export default ViewMember;
