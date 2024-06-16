import React from "react";

const DeleteModal = ({ isOpen, onClose, onConfirm, roleToDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>
          Are you sure you want to delete this {roleToDelete.toLowerCase()}?
        </p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg mr-2"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-500 px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
