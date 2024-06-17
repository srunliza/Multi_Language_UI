"use client";
import React, { useState, useRef } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupIcon from "@mui/icons-material/Group";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import AddMemberModal from "./AddMember";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const ViewMemberProjectLeader = ({ onClose, project }) => {
  const [isAddMemberModalVisible, setAddMemberModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [roleToDelete, setRoleToDelete] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null); // State for dropdown visibility

  const modalRef = useRef(null);

  const handleAddMemberClick = () => {
    setAddMemberModalVisible(true);
  };

  const handleCloseAddMemberModal = () => {
    setAddMemberModalVisible(false);
  };

  const handleAddMember = (newMember) => {
    project.members.push(newMember); // Add new member to project members
    handleCloseAddMemberModal();
  };

  const handleDelete = (id, role) => {
    setMemberToDelete(id);
    setRoleToDelete(role);
    setDeleteModalVisible(true);
    setDropdownOpen(null); // Close dropdown when delete is clicked
  };

  const confirmDelete = () => {
    const index = project.members.findIndex(
      (member) => member.userId === memberToDelete
    );
    if (index > -1) {
      project.members.splice(index, 1); // Remove member from project members
    }
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
    const index = project.members.findIndex(
      (member) => member.userId === editProject.userId
    );
    if (index > -1) {
      project.members[index] = editProject; // Update member role
    }
    setIsEditing(false);
    setEditProject(null);
  };

  const toggleDropdown = (userId) => {
    setDropdownOpen((prevState) => (prevState === userId ? null : userId));
  };

  const renderUserList = (role) => {
    return project.members
      .filter((member) => member.role.roleName === role)
      .map((member) => (
        <div
          key={member.userId}
          className="flex items-center p-2 hover:bg-blue-100"
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
          {role !== "Project Leader" && (
            <div className="flex space-x-1 ml-auto relative">
              <div
                className={`dropdown ${
                  dropdownOpen === member.userId ? "dropdown-open" : ""
                } dropdown-end`}
              >
                <div
                  tabIndex={0}
                  onClick={() => toggleDropdown(member.userId)} // Toggle dropdown visibility
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

                {dropdownOpen === member.userId && (
                  <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box absolute right-0 mt-2 w-40">
                    <li>
                      <button
                        className="text-black hover:text-blue-600 w-full text-left flex items-center"
                        onClick={() => handleEditClick(member)}
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
                        onClick={() => handleDelete(member.userId, member.role)}
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
        <div className="bg-white overflow-hidden rounded-xl shadow-md sm:rounded-xl ml-4 p-2 w-full">
          <div className="flex items-center p-2 border-b">
            <GroupIcon className="text-gray-500" />
            <span className="pl-2 text-base text-gray-800 text-md font-semibold">
              {project.memberCount}{" "}
              {project.memberCount === 1 ? "Member" : "Members"}
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
              className="bg-blue-800 hover:bg-blue-700 text-white p-1 rounded"
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
          onAddMember={handleAddMember}
        />
      )}

      {isDeleteModalVisible && (
        <DeleteModal
          isOpen={isDeleteModalVisible}
          onClose={cancelDelete}
          onConfirm={confirmDelete}
          roleToDelete={roleToDelete}
        />
      )}

      {isEditing && (
        <EditModal
          isOpen={isEditing}
          onClose={handleModalClose}
          project={editProject}
          onChange={handleEditChange}
          onSubmit={handleEditSubmit}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};

export default ViewMemberProjectLeader;
