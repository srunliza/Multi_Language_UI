"use client";
import React, { useState } from "react";
import Modal from "./ModalComponent";

const DropdownMenu = ({ project, onDeleteClick }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="relative flex space-x-1">
      <div className="dropdown dropdown-end">
        <div tabIndex={0}>
          <svg
            className="h-6 w-6 text-gray-500"
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
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
          <li>
            <button
              className="text-black hover:text-blue-600"
              onClick={() => setIsEditModalOpen(true)}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </span>
              <span className="hidden md:inline-block">Edit</span>
            </button>
          </li>
          <li>
            <button
              className="text-black hover:text-red-600"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
              <span className="hidden md:inline-block" name="delete">
                Delete
              </span>
            </button>
          </li>
        </ul>
      </div>

      <Modal
        isVisible={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Do you want to delete this project?"
        confirmText="Delete"
        project={project}
        onDeleteClick={onDeleteClick}
      >
        <div className=""></div>
      </Modal>

      <Modal
        isVisible={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Project"
        confirmText="Save"
        project={project}
      >
        <form id="editForm">
          <input
            type="text"
            name="name"
            defaultValue={project.name}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="Enter your project name"
          />
        </form>
      </Modal>
    </div>
  );
};

export default DropdownMenu;
