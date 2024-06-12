"use client";
import { projectsTableData } from "@/obj/tableData";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { saveAs } from "file-saver";

const AttachmentComponent = () => {
  const initialData = projectsTableData;
  const [data, setData] = useState(initialData);
  const [statusFilter, setStatusFilter] = useState("All");
  const [showPopup, setShowPopup] = useState(false);
  const [currentPopupIndex, setCurrentPopupIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState("");
  const modalRef = useRef(null);
  const router = useRouter();

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setStatusFilter(status);

    if (status === "All") {
      setData(initialData);
    } else {
      const filteredData = initialData.filter((item) => item.status === status);
      setData(filteredData);
    }
  };

  const handleDownload = (fileType) => {
    const fileUrl = `/path/to/your/${fileType}-file.${fileType}`;
    const fileName = `your-file.${fileType}`;
    saveAs(fileUrl, fileName);
  };

  const handleDownloadClick = () => handleDownload("json");
  const handleXmlClick = () => handleDownload("xml");
  const handleStringClick = () => handleDownload("string");

  const handlePreview = (fileType) => {
    const routeMap = {
      json: "./preview-json-file",
      xml: "./preview-xml-file",
      string: "./preview-string-file",
    };
    router.push(routeMap[fileType]);
  };

  const handleJsonPreview = () => handlePreview("json");
  const handleXmlPreview = () => handlePreview("xml");
  const handleStringPreview = () => handlePreview("string");

  const handleRowClick = () => {
    router.push("./preview-page");
  };

  const togglePopup = (index) => {
    setShowPopup(!showPopup);
    setCurrentPopupIndex(index);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentPopupIndex(null);
  };

  const handleEditClick = (user) => {
    setEditUser(user);
    setIsEditing(true);
    closePopup();
  };

  const handleModalClose = () => {
    setIsEditing(false);
    setEditUser(null);
  };

  const handleEditChange = (event) => {
    setEditUser({ ...editUser, [event.target.name]: event.target.value });
  };

  const handleEditSubmit = () => {
    // Implement the logic to update the user role
    // For now, just close the modal
    setIsEditing(false);
    setEditUser(null);
  };

  const handleDeleteClick = (role) => {
    setRoleToDelete(role);
    setIsDeleteModalVisible(true);
    closePopup();
  };

  const confirmDelete = () => {
    // Implement delete logic here
    setIsDeleteModalVisible(false);
    setRoleToDelete("");
  };

  const cancelDelete = () => {
    setIsDeleteModalVisible(false);
    setRoleToDelete("");
  };

  const closeModalOnBackgroundClick = (e) => {
    if (e.target === modalRef.current) {
      cancelDelete();
    }
  };

  return (
    <div className="">
      {/* Delete confirmation modal */}
      {isDeleteModalVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
          ref={modalRef}
          onClick={closeModalOnBackgroundClick}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Are you sure you want to delete this attachment?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg mr-2"
                onClick={confirmDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-500 px-4 py-2 rounded-lg"
                onClick={cancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit modal */}
      {isEditing && editUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <form>
            <div
              ref={modalRef}
              className="bg-white p-4 rounded-lg shadow-lg w-[400px]"
            >
              <div className="flex justify-between">
                <h3 className="text-lg font-medium mb-4">Edit Attachment</h3>
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
              <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="fileName" className="text-xs mb-1">
                    Filename
                  </label>
              {editUser.status === "Pending" ? (
                
                  <input
                    type="text"
                    name="fileName"
                    value={editUser.projectName}
                    onChange={handleEditChange}
                    className="w-full h-[37.6px] px-3 text-xs py-2 border border-gray-300 rounded-lg"
                  />
               
              )
              : 
              ( 
                <input
                  type="text"
                  name="fileName"
                  value={editUser.projectName}
                  onChange={handleEditChange}
                  readOnly
                  className="w-full h-[37.6px] px-3 text-xs py-2 border border-gray-300 rounded-lg"
                />
              )}
               </div>
              
              <div className="flex flex-col w-full lg:w-auto py-2 lg:mt-0 text-xs">
                <label htmlFor="language" className="">
                  Language
                </label>
                {editUser.status === "Pending" ? (
                  
                  <select
                    name="language"
                    value={editUser.language}
                    onChange={handleEditChange}
                    className="block text-xs text-gray-500 transition duration-75 border py-1 border-gray-300 rounded-lg shadow-sm h-[41px] focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none"
                  >
                    <option value="English">English</option>
                    <option value="Korean">Korean</option>
                    <option value="Khmer">Khmer</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    name="language"
                    value={editUser.language}
                    readOnly
                    className="block text-xs text-gray-500 transition duration-75 border py-1 border-gray-300 rounded-lg shadow-sm h-[41px] focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 mt-1 bg-none"
                  />
                )}
              </div>
             
              <div className="flex flex-col lg:flex-row items-center lg:space-x-4 text-xs py-2">
                <div className="flex flex-col w-full lg:w-auto">
                  <label htmlFor="start" className="text-xs mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start"
                    name="start"
                    value={editUser.start}
                    onChange={handleEditChange}
                    className="w-full lg:w-[175px] h-[37.6px] px-3 py-2 border text-gray-600 text-xs border-gray-300 rounded-lg"
                    readOnly={editUser.status === "Completed"}
                  />
                </div>
                <div className="flex flex-col w-full lg:w-auto mt-2 lg:mt-0">
                  <label htmlFor="end" className="text-xs mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end"
                    name="end"
                    value={editUser.end}
                    onChange={handleEditChange}
                    className="w-full lg:w-[175px] h-[37.6px] px-3 py-2 border text-gray-600 border-gray-300 text-xs rounded-lg"
                    readOnly={editUser.status === "Completed"}
                  />
                </div>
              </div>
              <div className="flex justify-end py-3">
                <button
                  onClick={handleModalClose}
                  className="bg-white text-blue-500 px-4 py-2 rounded-md mr-2 border border-blue-500"
                >
                  No
                </button>
                <button
                  onClick={handleEditSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Edit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="h-full shadow-md no-scrollbar w-full rounded-lg">
        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
          <thead className="text-sm text-gray-700 z-10 overflow-y-auto font-semibold sticky top-0 bg-[#daeaff]">
            <tr>
              <th scope="col" className="px-7 py-4">
                File Name
              </th>
              <th scope="col" className="px-7 py-4">
                Language
              </th>
              <th scope="col" className="px-7 py-4">
                Status
              </th>
              <th scope="col" className="px-7 py-4">
                From
              </th>
              <th scope="col" className="px-7 py-4">
                To
              </th>
              <th scope="col" className="px-[35px] py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.projectName}
                className="bg-white border-b text-gray-900 dark:border-gray-300 cursor-pointer"
                onClick={handleRowClick}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {item.projectName}
                </th>
                <td className="px-6 py-4">{item.language}</td>
                <td
                  className={`px-6 py-4 ${
                    item.status === "Pending"
                      ? "text-red-600"
                      : item.status === "Progress"
                      ? "text-yellow-600"
                      : item.status === "Completed"
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  {item.status}
                </td>
                <td className="px-6 py-4">{item.fromDate}</td>
                <td className="px-6 py-4">{item.toDate}</td>
                <td
                  className="flex py-3 gap-1 ml-5 items-center"
                  onClick={(e) => e.stopPropagation()} // Prevent row click event
                >
                  <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="">
                      <RemoveRedEyeOutlinedIcon
                        style={{ color: "#4F81FF" }}
                        className="w-5 h-5"
                      ></RemoveRedEyeOutlinedIcon>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content absolute z-[1] left-1/2 transform -translate-x-1/2 menu p-2 shadow bg-base-100 rounded-box w-[8rem]"
                    >
                      <li>
                        <button
                          onClick={handleXmlPreview}
                          className="text-red-500 font-semibold"
                        >
                          XML File
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleJsonPreview}
                          className="text-yellow-500 font-semibold"
                        >
                          JSON File
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleStringPreview}
                          className="text-green-500 font-semibold"
                        >
                          Strings File
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown relative">
                    <button tabIndex={0} role="button" className="">
                      <FileDownloadOutlinedIcon style={{ color: "#F8C408" }} />
                    </button>
                    <ul
                      tabIndex={0}
                      className="dropdown-content absolute z-[1] left-1/2 transform -translate-x-1/2 menu p-2 shadow bg-base-100 rounded-box w-[8rem]"
                    >
                      <li>
                        <button
                          onClick={handleXmlClick}
                          className="text-red-500 font-semibold"
                        >
                          XML File
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleDownloadClick}
                          className="text-yellow-500 font-semibold"
                        >
                          JSON File
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleStringClick}
                          className="text-green-500 font-semibold"
                        >
                          Strings File
                        </button>
                      </li>
                      </ul>
                  </div>
                  <div className="relative">
                    <MoreVertIcon
                      onClick={() => togglePopup(index)}
                      className="cursor-pointer"
                    />
                    {showPopup && currentPopupIndex === index && (
                      <ul className="dropdown-content absolute z-[1] right-0 transform menu p-2 shadow bg-base-100 rounded-box w-[8rem]">
                        <li>
                          <button
                            className="text-black hover:text-blue-600"
                            onClick={() => handleEditClick(item)}
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
                            onClick={() => handleDeleteClick(item.role)}
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
                            <span className="hidden md:inline-block">
                              Delete
                            </span>
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttachmentComponent;
