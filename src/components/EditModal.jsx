import React, { useState, useEffect } from "react";
import Toast from "./ToastComponent";

const EditModal = ({
  isOpen,
  onClose,
  project,
  userId,
  onChange,
  onSubmit,
  modalRef,
}) => {
  const [roleId, setRoleId] = useState("");
  const [toast, setToast] = useState({ message: "", type: "", show: false });

  useEffect(() => {
    if (isOpen) {
      setRoleId("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    setRoleId(event.target.value);
    onChange(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!roleId) {
      setToast({
        message: "Please select a role for the user.",
        type: "error",
        show: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("projectId", project.projectId);
    formData.append("userId", userId);
    formData.append("roleId", roleId);
    await onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white p-4 rounded-lg shadow-lg w-96">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium mb-4">Change role</h3>
          <svg
            className="h-4 w-4 cursor-pointer"
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <select
            onChange={handleChange}
            value={roleId}
            className="block w-[319px] text-sm text-gray-500 transition duration-75 border py-1 mb-3 border-gray-300 rounded-lg shadow-sm h-[41px] focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none"
          >
            <option disabled value="">
              Choose role for user
            </option>
            <option value="e55c69fc-d901-4497-962a-d3ca5061a000">
              Developer
            </option>
            <option value="969a85eb-35fa-458e-8371-914f8aaee047">
              Translator
            </option>
          </select>
          <input type="hidden" name="projectId" value={project.projectId} />
          <input type="hidden" name="userId" value={userId} />
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="inline-flex btn-ghost justify-center w-full sm:w-auto px-4 py-2 bg-white text-base leading-6 font-medium text-blue-800 mr-2 border border-blue-800 rounded-md hover:border-blue-300 active:bg-transparent hover:bg-transparent focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              No
            </button>
            <button
              type="submit"
              className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Edit
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

export default EditModal;
