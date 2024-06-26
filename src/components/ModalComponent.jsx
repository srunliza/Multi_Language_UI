"use client";
import React, { useState } from "react";
import { deleteProjectAction } from "@/action/project-action";
import EditProjectForm from "./EditProjectForm";
import Toast from "./ToastComponent";

const Modal = ({
  isVisible,
  onClose,
  title,
  children,
  confirmText,
  project,
  onDeleteClick,
  onSubmit,
}) => {
  const [toast, setToast] = useState({ message: "", type: "", show: false });

  if (!isVisible) return null;

  const handleDelete = async () => {
    const result = await deleteProjectAction(project.projectId);
    if (result.status === "OK") {
      setToast({
        message: "Project deleted successfully!",
        type: "success",
        show: true,
      });
      setTimeout(() => {
        setToast({ ...toast, show: false });
        onClose();
        onDeleteClick();
      }, 1000);
    } else {
      setToast({
        message: "Failed to delete project.",
        type: "error",
        show: true,
      });
      setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 1000);
    }
  };

  const onConfirm = confirmText === "Delete" ? handleDelete : onSubmit;

  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-25 flex items-center justify-center z-50">
        <div className="bg-white p-4 rounded-lg shadow-lg w-96">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <svg
              className="h-4 w-4 cursor-pointer"
              onClick={onClose}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          </div>
          {confirmText !== "Delete" ? (
            <EditProjectForm
              project={project}
              onClose={onClose}
              onSubmit={onSubmit}
            />
          ) : (
            <>
              {children}
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="btn btn-outline btn-blue-800 mr-2"
                >
                  No
                </button>
                <button
                  onClick={onConfirm}
                  className={`btn ${
                    confirmText === "Delete"
                      ? "bg-red-500 hover:bg-red-700"
                      : "bg-blue-800 hover:bg-blue-700"
                  } text-white`}
                >
                  {confirmText}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </>
  );
};

export default Modal;
