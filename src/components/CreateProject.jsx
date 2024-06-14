import React from "react";
import { createProjectAction } from "@/action/project-action";

const CreateProject = ({ onClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await createProjectAction(formData);
    if (result.success) {
      const popup = document.getElementById("successPopup");
      popup.style.display = "block";
      setTimeout(() => {
        popup.style.display = "none";
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center bg-black  bg-opacity-50 fixed inset-0 z-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl space-y-6 relative">
        <div
          id="successPopup"
          className="hidden absolute mt-[3rem] left-1/2 transform -translate-x-1/2 p-6 bg-green-500 text-white rounded-md shadow-lg w-11/12 max-w-lg z-60"
        >
          Project created successfully!
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-600">Create Project</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4"
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
            </div>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="projectName"
            name="projectName"
            className="block w-full px-4 py-2 mb-2 border border-blue-800 rounded-md focus:outline-none text-gray-700"
            placeholder="Enter project name"
            required
          />
          <div className="flex justify-end space-x-4">
            <button
              className="px-6 py-2 font-semibold text-blue-800 border border-blue-800 hover:border-blue-300 rounded-md hover:bg-purple-50 focus:outline-none"
              type="button"
              onClick={onClose}
            >
              No
            </button>
            <button
              className="px-6 py-2 font-semibold text-white bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Create project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
