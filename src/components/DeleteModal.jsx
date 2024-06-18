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
            className="inline-flex btn-ghost justify-center w-full sm:w-auto px-4 py-2 bg-white text-base leading-6 font-medium text-blue-800 border border-blue-800 rounded-md hover:border-blue-300 active:bg-transparent hover:bg-transparent focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm mr-2 sm:leading-5"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="inline-flex justify-center w-full sm:w-auto rounded-md border border-transparent px-4 py-2 bg-blue-800 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
