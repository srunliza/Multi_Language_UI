import React from "react";

const ModalComponent = ({
  isVisible,
  onClose,
  title,
  confirmText,
  children,
  onConfirm,
}) => {
  if (!isVisible) return null;

  const isDeleteAction = confirmText.toLowerCase() === "delete";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-25 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[30rem] px-[2rem]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold w-[20rem]">{title}</h3>
          <div>
            <svg
              onClick={onClose}
              className="h-10 w-10 cursor-pointer rounded-full hover:bg-gray-200 p-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          </div>
        </div>
        <div className="mt-4 break-words">{children}</div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-white text-blue-800 border border-blue-800 hover:border-blue-300 px-4 py-2 rounded-md mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded-md text-white ${
              isDeleteAction
                ? "bg-blue-800 hover:bg-red-500"
                : "bg-blue-800 hover:bg-blue-700"
            }`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
