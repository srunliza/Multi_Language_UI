import React, { useState, useEffect, useRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { red } from "@mui/material/colors";
import Toast from "./ToastComponent";
import { deleteAttachmentAction } from "@/action/attachment-action";

const DropdownAttachment = ({ attachmentId }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "", show: false });
  const dropdownRef = useRef(null);
  const modalRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      (!modalRef.current || !modalRef.current.contains(event.target))
    ) {
      setDropdownVisible(false);
      setIsEditing(false);
      setIsDeleteModalVisible(false);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setDropdownVisible(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalVisible(true);
    setDropdownVisible(false);
  };

  const handleModalClose = () => {
    setIsEditing(false);
    setIsDeleteModalVisible(false); // Close modal when clicking close icon
  };

  const closeModalOnBackgroundClick = (event) => {
    if (modalRef.current && modalRef.current === event.target) {
      setIsDeleteModalVisible(false);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDeleteAttachment = async (attachmentId) => {
    const result = await deleteAttachmentAction(attachmentId);
    if (result.status === "OK") {
      setToast({
        message: "Attachment deleted successfully!",
        type: "success",
        show: true,
      });
      setTimeout(() => {
        setToast({ ...toast, show: false });
        setIsDeleteModalVisible(false);
      }, 2000);
    } else {
      let errorMessage = "Failed to delete attachment.";
      if (
        result.detail === "Can only delete attachments with status 'Pending'."
      ) {
        errorMessage = result.detail;
      }

      setToast({
        message: errorMessage,
        type: "error",
        show: true,
      });
      setTimeout(() => {
        setToast({ ...toast, show: false });
        setIsDeleteModalVisible(false);
      }, 2000);
    }
  };

  const confirmDelete = (attachmentId) => {
    handleDeleteAttachment(attachmentId);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <MoreVertIcon className="cursor-pointer" onClick={toggleDropdown} />
      {isDropdownVisible && (
        <ul
          ref={dropdownRef}
          className="dropdown-content absolute z-[1] right-0 transform menu p-2 shadow bg-base-100 rounded-box w-[8rem]"
        >
          <li>
            <button
              className="text-black hover:text-blue-600"
              onClick={handleEditClick}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </span>
              <span className="hidden md:inline-block">Edit</span>
            </button>
          </li>
          <li>
            <button
              className="text-black hover:text-red-600"
              onClick={handleDeleteClick}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
              <span className="hidden md:inline-block">Delete</span>
            </button>
          </li>
        </ul>
      )}

      {isEditing && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModalOnBackgroundClick}
        >
          <form>
            <div
              ref={modalRef}
              className="bg-white p-4 rounded-lg shadow-lg w-[400px]"
            >
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold mb-4">Edit Attachment</h3>
                <svg
                  className="h-4 w-4 cursor-pointer"
                  onClick={handleModalClose}
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
              <div className="flex flex-col justify-between lg:flex-row items-center lg:space-x-4 text-xs py-2">
                <div className="flex flex-col w-full">
                  <label htmlFor="language" className="">
                    Language
                  </label>
                  <select
                    name="language"
                    className="block text-xs text-gray-500 transition duration-75 border px-2 border-gray-300 rounded-lg shadow-sm h-[41px] focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none"
                  >
                    <option value="English">English</option>
                    <option value="Korean">Korean</option>
                    <option value="Khmer">Khmer</option>
                  </select>
                </div>
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="end" className="text-xs mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end"
                    name="end"
                    className="w-full lg:w-[175px] h-[37.6px] px-3 py-5 border text-gray-600 border-gray-300 text-xs rounded-lg"
                  />
                </div>
              </div>
              <div className="flex justify-end py-3">
                <button
                  onClick={handleModalClose}
                  className="px-4 py-2 border border-blue-800 text-blue-800 rounded-md text-sm hover:border-blue-500 transition duration-150 ease-in-out mr-2"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-800 text-white rounded-md text-sm hover:bg-blue-700 transition duration-150 ease-in-out">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {isDeleteModalVisible && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModalOnBackgroundClick}
        >
          <div
            ref={modalRef}
            className="bg-white flex flex-col px-6 gap-2 pt-8 items-center text-center rounded-lg shadow-lg h-[12rem]"
          >
            <div className="flex justify-between w-full">
              <div className="text-lg font-semibold "></div>
              <svg
                className="h-4 w-4 cursor-pointer"
                onClick={handleModalClose}
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
            <p className="text-lg font-semibold">
              Do you want to delete this attachment?
            </p>
            <div className="flex pt-2">
              <button
                className="px-4 py-2 border border-blue-800 text-blue-800 rounded-md text-sm hover:border-blue-500  transition duration-150 ease-in-out mr-2"
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-800 text-white rounded-md text-sm hover:bg-red-600 transition duration-150 ease-in-out"
                onClick={() => confirmDelete(attachmentId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default DropdownAttachment;
