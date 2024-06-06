import React from "react";

const CreateProject = ({ onClose }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 fixed inset-0 z-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl space-y-6">
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
        <input
          type="text"
          id="projectName"
          name="projectName"
          className="block w-full px-4 py-2 mb-6 border border-purple-500 rounded-md focus:outline-none text-gray-700"
          placeholder="Enter project name ..."
        />
        <div className="flex justify-end space-x-4">
          <button
            className="px-6 py-2 font-semibold text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 focus:outline-none"
            onClick={onClose}
          >
            No
          </button>
          <button className="px-6 py-2 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none">
            Create project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
