const DeleteProjectModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[35rem]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold mb-4">
            Are you sure to delete this project?
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v2a1 1 0 11-2 0V7zm0 4a1 1 0 112 0v2a1 1 0 11-2 0v-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-white text-blue-500 px-4 py-2 rounded-md mr-2 border border-blue-500"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProjectModal;