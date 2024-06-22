"use client";
import React, { useState } from "react";
import ListMember from "./ListMember";
import { addMemberAction } from "@/action/project-action";
import Toast from "./ToastComponent";

const AddMemberModal = ({ isOpen, onClose, project }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [toast, setToast] = useState({ message: "", type: "", show: false });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRole) {
      setToast({
        message: "Please select a role!",
        type: "error",
        show: true,
      });
      setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 2000);
      return;
    }
    
    const formData = new FormData(e.target);
    formData.append("projectId", project.projectId);
    formData.append("userIds", JSON.stringify(selectedUsers));
    formData.append("roleId", selectedRole);

    try {
      const result = await addMemberAction(formData);
      if (result.status === "OK") {
        setToast({
          message: "Member added successfully!",
          type: "success",
          show: true,
        });
        setTimeout(() => {
          setToast({ ...toast, show: false });
          onClose();
        }, 2000);
      } else {
        setToast({
          message: `User is already in the project!`,
          type: "error",
          show: true,
        });
        setTimeout(() => {
          setToast({ ...toast, show: false });
        }, 2000);
      }
    } catch (error) {
      setToast({
        message: `Failed to add member!`,
        type: "error",
        show: true,
      });
      setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 2000);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-25"
              onClick={onClose}
            ></div>
            <div className="relative z-20 bg-white w-[367px] p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-5">
                <h2 className="text-base font-bold">Add Member</h2>
                <button
                  id="closeContactForm"
                  className="text-gray-700 hover:text-red-500"
                  onClick={onClose}
                >
                  <svg
                    className="w-6 h-6"
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

              <form onSubmit={handleFormSubmit}>
                <ListMember onSelectUsers={setSelectedUsers} />
                <div className="py-3">
                  <label htmlFor="select" className="text-md font-medium">
                    Assign role
                  </label>
                  <select
                    className="block w-[319px] text-sm text-gray-50000 transition duration-75 border py-1 border-gray-300 rounded-lg shadow-sm h-[41px] focus:border-blue-800 focus:ring-1 focus:ring-inset focus:ring-blue-800 mt-1 bg-none"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="" disabled>
                      Choose role for user
                    </option>
                    <option value="63dbf948-62f0-4779-baeb-4bf88ca055ce">
                      Developer
                    </option>
                    <option value="82742e9c-7a2c-48b5-a532-395c3d2a5075">
                      Translator
                    </option>
                  </select>
                </div>
                <div className="flex gap-4 py-5 min-w-[50px] h-[75px] text-sm">
                  <input
                    className="px-2 py-2 text-center text-blue-800 border border-blue-800 rounded-lg hover:bg-blue-700 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring cursor-pointer"
                    type="reset"
                    value="Cancel"
                    onClick={onClose}
                  />
                  <input
                    className="px-3 py-2 text-center text-white bg-blue-800 border border-blue-800 rounded-lg active:text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring cursor-pointer"
                    type="submit"
                    value="Save"
                  />
                </div>
              </form>
              <Toast
                message={toast.message}
                type={toast.type}
                show={toast.show}
                onClose={() => setToast({ ...toast, show: false })}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMemberModal;
