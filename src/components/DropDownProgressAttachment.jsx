"use state"
import React, { useState, useEffect, useRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Toast from "./ToastComponent";
import { DatePicker } from "@nextui-org/react";
import { editProgessAttachmentAction } from "@/action/attachment-action";

const DropdownProgressAttachment = ({ attachmentId }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
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
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setDropdownVisible(false);
  };

  const handleModalClose = () => {
    setIsEditing(false);
  };

  const closeModalOnBackgroundClick = (event) => {
    if (modalRef.current && modalRef.current === event.target) {
      setIsEditing(false);
    }
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    formData.append("attachmentId", attachmentId);

    const expireDate = formData.get("expireDate");
    if (!expireDate) {
      setToast({
        message: "Please choose an end date.",
        type: "error",
        show: true,
      });
      return;
    }

    const result = await editProgessAttachmentAction(formData);
    if (result.status === "OK") {
      setToast({
        message: "Attachment updated successfully!",
        type: "success",
        show: true,
      });
      setIsEditing(false);
      setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 1000);
    } else {
      let errorMessage =
        "Expire date cannot be on or before the start date.";
      if (
        result.status === 400 &&
        result.detail === "Expire date cannot be on or before the start date."
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
      }, 1000);
    }
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
        </ul>
      )}

      {isEditing && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModalOnBackgroundClick}
        >
          <form onSubmit={handleEditSubmit}>
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
              <div className="flex flex-col w-full mt-2">
                <label htmlFor="expireDate" className="text-xs mb-1">
                  End Date
                </label>
                <DatePicker
                  type="date"
                  id="expireDate"
                  name="expireDate"
                  className="w-full border text-gray-600 text-xs rounded-xl"
                />
              </div>
              <div className="flex justify-end py-3">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="px-4 py-2 border border-blue-800 text-blue-800 rounded-md text-sm hover:border-blue-500 transition duration-150 ease-in-out mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-800 text-white rounded-md text-sm hover:bg-blue-700 transition duration-150 ease-in-out"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
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

export default DropdownProgressAttachment;
