"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupIcon from "@mui/icons-material/Group";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import AddMemberModal from "./AddMember";

const ViewMemberProjectLeader = ({ onClose }) => {
  const [isAddMemberModalVisible, setAddMemberModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [roleToDelete, setRoleToDelete] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null); // State for dropdown visibility
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Robert Downey Jr",
      role: "Project Leader",
      image: "/assets/images/vandy.png",
    },
    {
      id: 2,
      name: "Lisa",
      role: "Translator",
      image: "/assets/images/lisa.png",
    },
    {
      id: 3,
      name: "Thean",
      role: "Translator",
      image: "/assets/images/thean.png",
    },
    {
      id: 4,
      name: "Sokhim",
      role: "Translator",
      image: "/assets/images/sokhim.png",
    },
    {
      id: 5,
      name: "Sreyly",
      role: "Translator",
      image: "/assets/images/sreyly.png",
    },
    {
      id: 6,
      name: "Soklay",
      role: "Translator",
      image: "/assets/images/soklay.png",
    },
    {
      id: 7,
      name: "Neath",
      role: "Developer",
      image: "/assets/images/neath.png",
    },
    {
      id: 8,
      name: "Sreyka",
      role: "Developer",
      image: "/assets/images/sreyka.png",
    },
    {
      id: 9,
      name: "Sokheng",
      role: "Developer",
      image: "/assets/images/sokheng.png",
    },
    {
      id: 10,
      name: "Panha",
      role: "Translator",
      image: "/assets/images/panha.png",
    },
    {
      id: 11,
      name: "Soklay",
      role: "Developer",
      image: "/assets/images/soklay.png",
    },
    {
      id: 12,
      name: "Sokhim",
      role: "Developer",
      image: "/assets/images/sokhim.png",
    },
    {
      id: 13,
      name: "Sreyly",
      role: "Developer",
      image: "/assets/images/sreyly.png",
    },
  ]);

  const modalRef = useRef(null);

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

  const handleDelete = (id, role) => {
    setMemberToDelete(id);
    setRoleToDelete(role);
    setDeleteModalVisible(true);
    setDropdownOpen(null); // Close dropdown when delete is clicked
  };

  const confirmDelete = () => {
    setUsers(users.filter((user) => user.id !== memberToDelete));
    setDeleteModalVisible(false);
    setMemberToDelete(null);
    setRoleToDelete("");
  };

  const cancelDelete = () => {
    setDeleteModalVisible(false);
    setMemberToDelete(null);
    setRoleToDelete("");
  };

  const handleEditClick = (user) => {
    setEditProject(user);
    setIsEditing(true);
    setDropdownOpen(null); // Close dropdown when edit is clicked
  };

  const handleModalClose = () => {
    setIsEditing(false);
    setEditProject(null);
  };

  const handleEditChange = (e) => {
    setEditProject({ ...editProject, role: e.target.value });
  };

  const handleEditSubmit = () => {
    setUsers(
      users.map((user) => (user.id === editProject.id ? editProject : user))
    );
    setIsEditing(false);
    setEditProject(null);
  };

  const toggleDropdown = (userId) => {
    setDropdownOpen((prevState) => (prevState === userId ? null : userId));
  };

  const renderUserList = (role) => {
    return users
      .filter((user) => user.role === role)
      .map((user) => (
        <div key={user.id} className="flex items-center p-2 hover:bg-blue-100">
          <Image
            src={user.image}
            alt="User"
            width={35}
            height={35}
            className="rounded-full"
          />
          <div className="ml-2">
            <div className="text-gray-800">{user.name}</div>
          </div>
          {role !== "Project Leader" && (
            <div className="flex space-x-1 ml-auto relative">
              <div
                className={`dropdown ${
                  dropdownOpen === user.id ? "dropdown-open" : ""
                } dropdown-end`}
              >
                <div
                  tabIndex={0}
                  onClick={() => toggleDropdown(user.id)} // Toggle dropdown visibility
                >
                  <svg
                    className="h-5 w-5 text-gray-500 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </div>

                {dropdownOpen === user.id && (
                  <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box absolute right-0 mt-2 w-40">
                    <li>
                      <button
                        className="text-black hover:text-blue-600 w-full text-left flex items-center"
                        onClick={() => handleEditClick(user)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        className="text-black hover:text-red-600 w-full text-left flex items-center"
                        onClick={() => handleDelete(user.id, user.role)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                        Delete
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      ));
  };

  return (
    <div className="text-sm">
      <main className="flex flex-1 w-[20rem]">
        <div className="bg-white overflow-hidden border rounded-xl shadow-md sm:rounded-xl ml-4 p-2 border-blue-800 w-full">
          <div className="flex items-center p-2 border-b">
            <GroupIcon className="text-gray-500" />
            <span className="pl-2 text-base text-gray-800 text-md font-semibold">
              40 MEMBERS
            </span>
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
        <AddMemberModal
          isOpen={isAddMemberModalVisible}
          onClose={handleCloseAddMemberModal}
        />
      )}

      {isDeleteModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>
              Are you sure you want to delete this {roleToDelete.toLowerCase()}?
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg mr-2"
                onClick={confirmDelete}
              >
                Confirm
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-500 px-4 py-2 rounded-lg"
                onClick={cancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-4 rounded-lg shadow-lg w-96"
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-medium mb-4">Change role</h3>
              <svg
                className="h-4 w-4 cursor-pointer"
                onClick={handleModalClose}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
              </svg>
            </div>
            <select
              value={editProject?.role}
              onChange={handleEditChange}
              className="block w-[319px] text-sm text-gray-50000 transition duration-75 border py-1 mb-3 border-gray-300 rounded-lg shadow-sm h-[41px] focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none"
            >
              <option value="choose">Choose role for user</option>
              <option value="Developer">Developer</option>
              <option value="Translator">Translator</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleModalClose}
                className="bg-white text-blue-500 px-4 py-2 rounded-md mr-2 border border-blue-500"
              >
                No
              </button>
              <button
                onClick={handleEditSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMemberProjectLeader;
