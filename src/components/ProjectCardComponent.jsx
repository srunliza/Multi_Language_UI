"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import ViewMember from "./ViewMember";

const getStatusTextColor = (status) => {
  switch (status) {
    case "Finished":
      return "text-green-500";
    case "Progress":
      return "text-yellow-500";
    case "Pending":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

const getStatusBgColor = (status) => {
  switch (status) {
    case "Finished":
      return "bg-green-500";
    case "Progress":
      return "bg-yellow-500";
    case "Pending":
      return "bg-red-500";
    default:
      return "bg-gray-200";
  }
};

const ProjectCardComponent = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Analysis",
      owner: "Meng Soklay",
      role: "project leader",
      daysLeft: 1,
      status: "Pending",
    },
    {
      id: 2,
      name: "Android",
      owner: "Long Sreyly",
      role: "translator",
      daysLeft: 1,
      status: "Progress",
    },
    {
      id: 3,
      name: "Network",
      owner: "Tep Thean",
      role: "developer",
      daysLeft: 1,
      status: "Pending",
    },
    {
      id: 4,
      name: "Rule",
      owner: "Kosal Sreyka",
      role: "developer",
      daysLeft: 1,
      status: "Finished",
    },
    {
      id: 5,
      name: "Web Designing",
      owner: "Tan VibolPheakNeath",
      role: "developer",
      daysLeft: 1,
      status: "Pending",
    },
    {
      id: 6,
      name: "Programming",
      owner: "Kosal Sreyka",
      role: "developer",
      daysLeft: 1,
      status: "Finished",
    },
    {
      id: 7,
      name: "Studio",
      owner: "Kosal Sreyka",
      role: "developer",
      daysLeft: 1,
      status: "Finished",
    },
    {
      id: 8,
      name: "Web Designing",
      owner: "Long Sreyly",
      role: "translator",
      daysLeft: 1,
      status: "Progress",
    },
    {
      id: 9,
      name: "Interior Design",
      owner: "Long Sreyly",
      role: "translator",
      daysLeft: 1,
      status: "Progress",
    },
    {
      id: 10,
      name: "Graphic Design",
      owner: "Long Sreyly",
      role: "translator",
      daysLeft: 1,
      status: "Pending",
    },
    {
      id: 11,
      name: "Web Designing",
      owner: "Long Sreyly",
      role: "translator",
      daysLeft: 1,
      status: "Pending",
    },
    {
      id: 12,
      name: "Web Designing",
      owner: "Long Sreyly",
      role: "translator",
      daysLeft: 1,
      status: "Progress",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editProject, setEditProject] = useState({ id: null, name: "" });
  const [isViewMemberOpen, setIsViewMemberOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const modalRef = useRef();

  const router = useRouter();

  const handleSeeAll = () => {
    setIsViewMemberOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsViewMemberOpen(false);
    setIsEditing(false);
  };

  const handleEditClick = (project) => {
    setEditProject(project);
    setIsEditing(true);
    setIsModalOpen(true); // Show modal when editing
  };

  const handleEditChange = (e) => {
    setEditProject({ ...editProject, name: e.target.value });
  };

  const handleEditSubmit = () => {
    setProjects((prevProjects) =>
      prevProjects.map((proj) =>
        proj.id === editProject.id ? { ...proj, name: editProject.name } : proj
      )
    );
    setIsEditing(false);
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleDeleteClick = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
    setSelectedProject(null);
  };

  const handleSortClick = () => {
    const sortedProjects = [...projects].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setProjects(sortedProjects);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalClose();
      }
    };
    if (isViewMemberOpen || isModalOpen || isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isViewMemberOpen, isModalOpen, isEditing]);

  const filteredProjects = projects.filter((project) =>
    selectedStatus === "All" ? true : project.status === selectedStatus
  );

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex-1 bg-white rounded-xl ml-5 mt-6 shadow-lg">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-700">
        My Projects
      </h2>

      {/* ---navbar for card's flex body--- */}
      <div className="flex flex-wrap items-center mb-4">
        <div className="flex flex-col sm:flex-row sm:gap-5 flex-wrap items-center mb-4 w-full sm:w-auto">
          <div className="flex w-full sm:w-auto">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-e-0 rounded-s-md dark:text-gray-400 dark:border-gray-200">
              <p>Start</p>
            </span>
            <input
              type="date"
              className="border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex w-full sm:w-auto mt-2 sm:mt-0">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-e-0 rounded-s-md dark:text-gray-400 dark:border-gray-200">
              <p>End</p>
            </span>
            <input
              type="date"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex w-full sm:w-auto mt-2 sm:mt-0">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-200 border-e-0 rounded-s-md dark:text-gray-400">
              <p>Status</p>
            </span>

            {/* ---selected option status --- */}
            <select
              name="status"
              id=""
              className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              <option value="All">All</option>
              <option value="Pending" className="text-red-500 font-semibold">
                Pending
              </option>
              <option
                value="Progress"
                className="text-yellow-500 font-semibold"
              >
                Progress
              </option>
              <option value="Finished" className="text-green-500 font-semibold">
                Completed
              </option>
            </select>
          </div>
        </div>
        {/* --- left icon button at navbar of card --- */}
        <div className="flex flex-row justify-center sm:justify-end mt-4 sm:mt-0 sm:ml-auto">
          <button
            className="focus:outline-none mr-2"
            name="sort"
            onClick={handleSortClick}
          >
            <svg
              className="h-7 w-7 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </button>
          <button className="focus:outline-none mr-2" name="card">
            <svg
              className="h-7 w-7 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>

          {/* --- link to list's flex body --- */}
          <Link className="focus:outline-none" href="projectcard" name="list">
            <svg
              className="h-7 w-7 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* ---card's flex body--- */}
      <div className="h-full overflow-hidden">
        <div className="overflow-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-md border border-gray-200"
              >
                <div className="flex justify-between items-center mb-0 text-sm mt-2 text-gray-700">
                  <h3 className="text-base font-semibold mb-1">
                    {project.name}
                  </h3>
                  <div className="flex space-x-1">
                    {/* new dropdown */}
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0}>
                        <svg
                          className="h-6 w-6 text-gray-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </div>

                      {/* edit and delete */}
                      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                        <li>
                          <button
                            className="text-black hover:text-blue-600"
                            onClick={() => handleEditClick(project)} // directly call handleEditClick
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
                            onClick={() => handleDeleteClick(project.id)} // directly call handleDeleteClick
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
                            <span
                              className="hidden md:inline-block"
                              name="delete"
                            >
                              Delete
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mb-5 text-sm text-green-500">
                  {project.owner}
                  <span className="text-gray-500 text-xs m-3 ">
                    {project.role}
                  </span>
                </div>
                <div className="flex items-center mb-4 justify-between">
                  <div className="bg-gray-100 text-gray-800 rounded-lg px-7 py-2 mr-5 text-sm">
                    <svg
                      className="h-4 w-4 inline-block mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                    12
                  </div>
                  <div className="bg-red-100 text-gray-700 rounded-lg px-3.5 py-2 text-sm">
                    <svg
                      className="h-4 w-4 inline-block mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {project.daysLeft} Day left
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center mb-4">
                  <div className="text-gray-500 text-xs">
                    Translation Progress
                  </div>
                  <div
                    className={`text-xs text-right ${getStatusTextColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mb-6">
                  <div
                    className={`h-full ${getStatusBgColor(
                      project.status
                    )} rounded-full`}
                    style={{
                      width:
                        project.status === "Finished"
                          ? "100%"
                          : project.status === "Progress"
                          ? "50%"
                          : "20%",
                    }}
                  ></div>
                </div>
                {/* ---image's groups--- */}
                <div className="flex -space-x-2 mb-4">
                  <img
                    src="../assets/images/p4.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="../assets/images/p1.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="../assets/images/p2.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="../assets/images/p3.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-sm border-2 border-white">
                    +2
                  </div>

                  <button
                    onClick={handleSeeAll}
                    className="text-gray-600 text-right ml-auto self-end grow"
                  >
                    See All
                  </button>

                  {/* ---View Members Modal--- */}
                  {isViewMemberOpen && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-5 flex items-center justify-center z-50">
                      <div
                        ref={modalRef}
                        className="bg-white p-0 rounded-lg shadow-lg w-96"
                      >
                        <button
                          onClick={handleModalClose}
                          className="text-gray-500 px-4 py-2 rounded-md justify-end flex"
                        >
                          X
                        </button>
                        <h3 className="text-lg font-semibold mb-4">
                          40 MEMBERS
                        </h3>
                        <ViewMember />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-4 rounded-lg shadow-lg w-96"
          >
            <h3 className="text-lg font-semibold mb-4">Edit Project</h3>
            <input
              type="text"
              value={editProject.name}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4 "
            />
            <div className="flex justify-end">
              <button
                onClick={handleEditSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Save
              </button>
              <button
                onClick={handleModalClose}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCardComponent;
