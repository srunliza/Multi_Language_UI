import React, { useState } from "react";
import { editProjectAction } from "@/action/project-action";
import Toast from "./ToastComponent";

const EditProjectForm = ({ project, onClose }) => {
  const [toast, setToast] = useState({ message: "", type: "", show: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const result = await editProjectAction(formData);
      if (result.status === "OK") {
        setToast({
          message: "Project edited successfully!",
          type: "success",
          show: true,
        });
        setTimeout(() => {
          onClose();
        }, 3000);
      } else if (result.status === 400) {
        setToast({
          message: result.detail || "Failed to edit project!",
          type: "error",
          show: true,
        });
        setTimeout(() => {}, 3000);
      } else {
        setToast({
          message: "Failed to edit project!",
          type: "error",
          show: true,
        });
        setTimeout(() => {}, 3000);
      }
    } catch (error) {
      setToast({
        message: "Failed to edit project!",
        type: "error",
        show: true,
      });
      setTimeout(() => {}, 3000);
    }
  };

  return (
    <div className="flex items-center bg-gray-600 bg-opacity-25 justify-center fixed inset-0 z-50 w-full">
      <div className="w-full max-w-md p-6 border bg-white rounded-lg shadow-xl space-y-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-600">Edit Project</h2>
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
          <input type="hidden" name="projectId" value={project.projectId} />
          <div className="mb-4">
            <label htmlFor="projectName" className="block text-gray-700">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              defaultValue={project.projectName}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 font-semibold text-blue-800 border border-blue-800 hover:border-blue-300 rounded-md focus:outline-none mr-2"
            >
              No
            </button>
            <button
              type="submit"
              className="btn px-6 bg-blue-800 hover:bg-blue-700 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default EditProjectForm;
