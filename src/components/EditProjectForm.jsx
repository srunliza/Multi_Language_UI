import React, { useState } from "react";
import { editProjectAction } from "@/action/project-action";

const EditProjectForm = ({ project, onClose }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const result = await editProjectAction(formData);
      if (result.success) {
        setToastMessage("Project edited successfully!");
        setIsError(false);
        setToastVisible(true);
        setTimeout(() => {
          setToastVisible(false);
          onClose();
        }, 2000);
      } else {
        setToastMessage("Failed to edit project!");
        setIsError(true);
        setToastVisible(true);
        setTimeout(() => {
          setToastVisible(false);
        }, 2000);
      }
    } catch (error) {
      setToastMessage("Failed to edit project!");
      setIsError(true);
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 2000);
    }
  };

  return (
    <div className="flex items-center bg-gray-600 bg-opacity-25 justify-center fixed inset-0 z-50 w-full">
      <div className="w-full max-w-md p-6 border bg-white rounded-lg shadow-xl space-y-6 relative">
        {toastVisible && (
          <div className="fixed top-0 right-4 m-4 z-50">
            <div
              className={`alert text-white ${
                isError ? "alert-error" : "alert-success"
              }`}
            >
              <span>{toastMessage}</span>
            </div>
          </div>
        )}
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
              className="btn btn-outline btn-blue-800 mr-2"
            >
              No
            </button>
            <button
              type="submit"
              className="btn bg-blue-800 hover:bg-blue-700 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectForm;
