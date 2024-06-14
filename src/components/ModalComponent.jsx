import React from "react";
import {
  deleteProjectAction,
  editProjectAction,
} from "@/action/project-action";

const Modal = ({
  isVisible,
  onClose,
  title,
  children,
  confirmText,
  project,
  onDeleteClick,
  setPopupStyle,
}) => {
  if (!isVisible) return null;

  const handleDelete = async () => {
    const result = await deleteProjectAction(project.projectId);
    if (result.success) {
      onClose();
      onDeleteClick();
      setPopupStyle({
        message: "Project deleted successfully!",
        backgroundColor: "bg-red-500",
      });
    }
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await editProjectAction(formData);
    if (result.success) {
      onClose();
      setPopupStyle({
        message: "Project updated successfully!",
        backgroundColor: "bg-green-500",
      });
    }
  };

  const onConfirm = confirmText === "Delete" ? handleDelete : handleEditSubmit;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
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
        {children}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-white text-blue-800 px-4 py-2 rounded-md mr-2 border border-blue-800 hover:border-blue-300"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className={`bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${
              confirmText === "Delete" && "hover:bg-red-500"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
