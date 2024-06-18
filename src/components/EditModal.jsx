import React, { useState, useEffect } from "react";

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
  useEffect(() => {
    if (isOpen) {
      setRoleId(""); // Reset role selection on open
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    setRoleId(event.target.value);
    onChange(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("projectId", project.projectId);
    formData.append("userId", userId);
    formData.append("roleId", roleId);
    console.log("Form Data:", {
      projectId: project.projectId,
      userId: userId,
      roleId: roleId,
    }); // Log to ensure correct values
    await onSubmit(formData);
    onClose();
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
            <option value="">Choose role for user</option>
            <option value="82ba4f84-734c-4412-a595-2ad91419eee7">
              Developer
            </option>
            <option value="8cf765b0-9433-4763-8e58-057d07c154a7">
              Translator
            </option>
          </select>
          <input type="hidden" name="projectId" value={project.projectId} />
          <input type="hidden" name="userId" value={userId} />
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-white text-blue-500 px-4 py-2 rounded-md mr-2 border border-blue-500"
            >
              No
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
