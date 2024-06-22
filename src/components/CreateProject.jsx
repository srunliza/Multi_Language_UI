"use client";
import React, { useState } from "react";
import { createProjectAction } from "@/action/project-action";
import { useRouter } from "next/navigation";
import Toast from "./ToastComponent";

const CreateProject = ({ onClose }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const result = await createProjectAction(formData);
      if (result.status === "CREATED") {
        setToastMessage(result.message || "Project created successfully!");
        setIsError(false);
        setToastVisible(true);
        setTimeout(() => {
          setToastVisible(false);
          onClose();
          router.push(`/project-leader/dashboard/${result.payload.projectId}`);
        }, 3000);
      } else {
        setToastMessage(result.detail || "Failed to create project!");
        setIsError(true);
        setToastVisible(true);
        setTimeout(() => {
          setToastVisible(false);
        }, 3000);
      }
    } catch (error) {
      setToastMessage("Failed to create project!");
      setIsError(true);
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 3000);
    }
  };

  return (
    <div className="flex items-center bg-gray-600 bg-opacity-25 justify-center fixed inset-0 z-50 w-full">
      <div className="w-full max-w-lg p-6 border bg-white rounded-lg shadow-xl space-y-6 relative h-[17rem]">
        <Toast
          message={toastMessage}
          type={isError ? "error" : "success"}
          show={toastVisible}
          onClose={() => setToastVisible(false)}
        />
        <div className="flex justify-between items-center mb-9 mt-3">
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
            className="block w-full px-4 py-4 border border-blue-800 rounded-md focus:outline-none text-gray-700"
            placeholder="Enter project name"
            required
          />
          <div className="flex justify-end space-x-4 mt-7">
            <button
              className="px-6 py-3 font-semibold text-blue-800 border border-blue-800 hover:border-blue-300 rounded-md hover:bg-purple-50 focus:outline-none"
              type="button"
              onClick={onClose}
            >
              No
            </button>
            <button
              className="px-6 py-3 font-semibold text-white bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none"
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
