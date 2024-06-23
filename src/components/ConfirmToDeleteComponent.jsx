import React from "react";

const ConfirmToDeleteComponent = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg sm:p-5 md:p-6 lg:p-6 shadow-lg">
        <p className="text-gray-800 mb-3">
          Are you sure you want to delete this item?
        </p>
        <div className="mt-4 flex justify-end space-x-2 items-center">
          <button
            className="block w-full md:inline-block md:w-auto px-4 py-2 md:py-2 bg-gray-50 text-gray-700 border border-gray-500 rounded-lg font-medium text-sm  md:order-1"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="block w-full md:inline-block md:w-auto px-4 py-2 md:py-2 bg-red-500 text-gray-100 rounded-lg font-medium text-sm md:ml-2 md:order-1"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmToDeleteComponent;
