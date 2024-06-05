"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { projectsData } from "@/obj/projectsData";

const getStatusColor = (status) => {
  switch (status) {
    case "Finished":
      return "bg-green-500 text-green-500";
    case "Progress":
      return "bg-yellow-500 text-yellow-500";
    case "Pending":
      return "bg-red-500 text-red-500";
    default:
      return "bg-gray-200 text-gray-500";
  }
};

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

const ProjectListComponent = () => {
  const [projects, setProjects] = useState(projectsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editProject, setEditProject] = useState({ id: null, name: "" });
  const [isViewMemberOpen, setIsViewMemberOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("name");

  const modalRef = useRef();

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

  const handleSortClick = (criteria) => {
    setSortCriteria(criteria);
    const sortedProjects = [...projects].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[criteria].localeCompare(b[criteria]);
      } else {
        return b[criteria].localeCompare(a[criteria]);
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
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex-1 rounded-xl bg-white mt-6 shadow-lg h-screen overflow-hidden border">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-700">
        My Projects
      </h2>
      <div className="flex flex-wrap items-center mb-4 ">
        <div className="flex flex-col sm:flex-row sm:gap-5 flex-wrap items-center mb-4 w-full sm:w-auto">
          <div className="flex w-full sm:w-auto">
            <span className="w-[5rem] inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-e-0 rounded-s-md">
              <p>Start</p>
            </span>
            <input
              type="date"
              className="border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
            />
          </div>
          <div className="flex w-full sm:w-auto mt-2 sm:mt-0">
            <span className="w-[5rem] inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 border-e-0 rounded-s-md">
              <p>End</p>
            </span>
            <input
              type="date"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="flex w-full sm:w-auto mt-2 sm:mt-0">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-200 border-e-0 rounded-s-md">
              <p>Status</p>
            </span>
            <select
              name="status"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-e-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

        <div className="flex z-30 flex-row justify-center sm:justify-end mt-4 sm:mt-0 sm:ml-auto ">
          <button
            className="focus:outline-none mr-2"
            name="sort"
            onClick={() => handleSortClick("name")}
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
          <Link
            className="focus:outline-none mr-2 hover:bg-gray-200 rounded-md transition-colors duration-200"
            name="sortStartDate"
            href="/employee/project-card"
          >
            <svg
              className="h-7 w-7 text-gray-500"
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
          </Link>
          <Link
            className="focus:outline-none hover:bg-gray-200 rounded-md transition-colors duration-200"
            href="project-list"
            name="list"
          >
            <svg
              className="h-7 w-7 text-black"
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
      
      {/* scroll-list */}
      <div className="h-[26.1rem] overflow-y-auto no-scrollbar">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-3 bg-slate-250 p-4 shadow rounded-lg border mb-4"
          >
            <div className="flex items-center space-x-4 w-[10rem]">
              <div className="text-base font-semibold text-gray-700">
                {`${project.name.substring(0, 13)}...`}
                <p className="text-sm text-green-500">{project.owner}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center space-x-6 w-full gap-3 lg:w-auto text-sm mt-4 lg:mt-0">
              <div className="flex items-center justify-center bg-gray-100 rounded-lg w-16 h-8 text-center text-sm ">
                <svg
                  className="h-4 w-4 text-black"
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

              <div className="flex items-center w-[8rem] justify-center bg-red-100 text-red-800 rounded-lg px-5 py-1 text-sm">
                <svg
                  className="h-4 w-4 text-red-500 mr-1"
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

              <div className="flex items-center justify-center gap-7 lg:mt-0 md:mt-3 sm:mt-3">
                <div className="text-gray-500 text-sm lg:-ml-0 md:-ml-0 sm:-ml-5">
                  Translation Progress
                </div>
                <div
                  className={`flex items-center space-x-2 text-sm ${getStatusTextColor(
                    project.status
                  )}`}
                >
                  <span>{project.status}</span>
                </div>
                <div className="flex-grow rounded-full h-2 w-full lg:w-40 mt-2 lg:mt-0 border bg-slate-200">
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
              </div>
            </div>

            <div className="flex space-x-6 mt-4 lg:ml-8  lg:mt-0">
              <div className="flex -space-x-3">
                <img
                  src="../assets/images/soklay.png"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="../assets/images/neath.png"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="../assets/images/sreyka.png"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="../assets/images/sreyly.png"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-sm border-2 border-white">
                  +2
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="focus:outline-none"
                  onClick={() => handleEditClick(project)}
                >
                  <svg
                    className="h-6 w-6 text-blue-500"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                </button>
                <button
                  className="focus:outline-none"
                  onClick={() => handleDeleteClick(project.id)}
                >
                  <svg
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      ""{" "}
      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-4 rounded-lg shadow-lg w-96"
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold mb-4">Project Name</h3>
              <svg
                className="h-4 w-4 "
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
            <input
              type="text"
              value={editProject.name}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4 "
            />
            <div className="flex justify-end">
              <button
                onClick={handleModalClose}
                className="bg-white text-blue-500 px-4 py-2 rounded-md mr-2 border border-blue-500"
              >
                No
              </button>
              <button
                onClick={handleEditSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md "
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectListComponent;
