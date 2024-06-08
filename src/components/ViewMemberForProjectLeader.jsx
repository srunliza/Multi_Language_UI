"use client";
import React, { useState } from "react";
import Image from "next/image";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupIcon from '@mui/icons-material/Group';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import AddMemberModal from "./AddMember";

const ViewMemberProjectLeader = ({ onClose }) => {
  const [isAddMemberModalVisible, setAddMemberModalVisible] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: "Robert Downey Jr", role: "Project Leader", image: "/assets/images/vandy.png" },
    { id: 2, name: "Lisa", role: "Translator", image: "/assets/images/lisa.png" },
    { id: 3, name: "Thean", role: "Translator", image: "/assets/images/thean.png" },
    { id: 4, name: "Sokhim", role: "Translator", image: "/assets/images/sokhim.png" },
    { id: 5, name: "Sreyly", role: "Translator", image: "/assets/images/sreyly.png" },
    { id: 6, name: "Soklay", role: "Translator", image: "/assets/images/soklay.png" },
    { id: 7, name: "Neath", role: "Developer", image: "/assets/images/neath.png" },
    { id: 8, name: "Sreyka", role: "Developer", image: "/assets/images/sreyka.png" },
    { id: 9, name: "Sokheng", role: "Developer", image: "/assets/images/sokheng.png" },
    { id: 10, name: "Panha", role: "Translator", image: "/assets/images/panha.png" },
    { id: 11, name: "Soklay", role: "Developer", image: "/assets/images/soklay.png" },
    { id: 12, name: "Sokhim", role: "Developer", image: "/assets/images/sokhim.png" },
    { id: 13, name: "Sreyly", role: "Developer", image: "/assets/images/sreyly.png" }
  ]);

  const handleAddMemberClick = () => {
    setAddMemberModalVisible(true);
  };

  const handleCloseAddMemberModal = () => {
    setAddMemberModalVisible(false);
  };

  const handleAddMember = (newMember) => {
    setUsers([...users, newMember]);
    handleCloseAddMemberModal();
  };

  const handleRemoveMember = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const renderUserList = (role) => {
    return users
      .filter((user) => user.role === role)
      .map((user) => (
        <div key={user.id} className="flex items-center p-2 hover:bg-blue-100">
          <Image src={user.image} alt="User" width={35} height={35} className="rounded-full" />
          <div className="ml-2">
            <div className="text-gray-800">{user.name}</div>
          </div>
          {role !== "Project Leader" && (
            <CloseIcon
              className="ml-auto cursor-pointer text-gray-500"
              style={{ fontSize: '16px' }} // Make the CloseIcon smaller
              onClick={() => handleRemoveMember(user.id)}
            />
          )}
        </div>
      ));
  };

  return (
    <div className="text-sm">
      <main className="flex flex-1 w-[20rem]">
        <div className="bg-white overflow-hidden border rounded-xl shadow-md sm:rounded-xl ml-4 p-2 border-blue-300 w-full">
          <div className="flex items-center p-2 border-b">
            <GroupIcon className="text-gray-500" />
            <span className="pl-2 text-base text-gray-800">40 MEMBERS</span>
            <button onClick={onClose} className="ml-auto">
              <CloseIcon className="text-gray-500" />
            </button>
          </div>
          <div className="px-3 py-2 flex items-center justify-between">
            <div className="flex items-center">
              <PersonOutlineIcon className="text-gray-500 mr-2" />
              <span className="text-gray-800">Project Leader</span>
            </div>
            <button
              className="bg-blue-500 text-white p-1 rounded"
              onClick={handleAddMemberClick}
            >
              <PersonAddOutlinedIcon />
            </button>
          </div>
          <hr className="mt-1 border-t border-gray-300" />
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

      {isAddMemberModalVisible && (
        <AddMemberModal isOpen={isAddMemberModalVisible} onClose={handleCloseAddMemberModal} />
      )}
    </div>
  );
};

export default ViewMemberProjectLeader;
