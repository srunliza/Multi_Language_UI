"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { projectsData } from "@/obj/projects";
import SortProjectCardList from "@/components/SortProjectCardListComponent";
import DeleteProjectModal from "@/components/DeleteProjectModal";
import ViewMember from "@/components/ViewMember";

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

const ProjectListPage = () => {
  const [projects, setProjects] = useState(projectsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editProject, setEditProject] = useState({ id: null, name: "" });
  const [isViewMemberOpen, setIsViewMemberOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("name");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const modalRef = useRef();

  const handleSeeAll = () => {
    setIsViewMemberOpen(true);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
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

  const handleDeleteClick = (project) => {
    setSelectedProject(project);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== selectedProject.id)
    );
    setIsDeleteModalOpen(false);
    setSelectedProject(null);
  };

  const handleSortClick = (criteria) => {
    setSortCriteria(criteria);
    const sortedProjects = [...projects].sort((a, b) => {
      if (criteria === "startDate" || criteria === "endDate") {
        const dateA = new Date(a[criteria]);
        const dateB = new Date(b[criteria]);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        return sortOrder === "asc"
          ? a[criteria].localeCompare(b[criteria])
          : b[criteria].localeCompare(a[criteria]);
      }
    });
    setProjects(sortedProjects);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
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
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex-1 rounded-xl w-full bg-white shadow-lg h-screen overflow-hidden border">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-700">
        My Projects
      </h2>
      <div className="flex flex-wrap items-center mb-4">
        <SortProjectCardList
          selectedStatus={selectedStatus}
          handleStatusChange={handleStatusChange}
          handleSortClick={handleSortClick}
        />
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
            href="/employee/project-list"
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
      <div className="sm:h-full lg:h-full md:h-full sm:pb-[18rem] md:pb-[18rem]  lg:pb-[12rem] overflow-y-auto no-scrollbar">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between items-center gap-3 bg-slate-250 p-4 shadow rounded-lg border mb-4"
          >
            <div className="flex flex-col w-[10rem]">
              <div className="text-base font-semibold text-gray-700">
                {project.name.length > 15
                  ? `${project.name.substring(0, 15)}...`
                  : project.name}
              </div>
              <div className="w-[12rem] text-sm text-green-500">
                {project.owner.length > 15
                  ? `${project.owner.substring(0, 15)}...`
                  : project.owner}
                <span className="text-gray-500 text-xs m-3 ">
                  {project.role}
                </span>
              </div>
            </div>

            <Link
              key={index}
              href={`/${project.role.replace(" ", "-").toLowerCase()}/project`}
              passHref
            >
              <div className="ml-4 flex flex-wrap items-center gap-3 w-full lg:w-auto text-sm mt-4 lg:mt-0">
                <div className="flex items-center justify-center bg-gray-100 rounded-lg w-16 h-9 text-center text-sm ">
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

                <div className="flex items-center justify-center w-[10rem] bg-red-100 rounded-lg px-5 py-2 text-sm">
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
                  {project.daysLeft > 6
                    ? project.daysLeft + " days..."
                    : project.daysLeft +
                      (project.daysLeft > 1 ? " days left" : " day left")}
                </div>

                <div className="flex lg:-ml-0 flex-wrap items-center sm:ml-5 sm:-mt-1 gap-7 lg:mt-0 md:mt-3">
                  <div className="w-[10rem] md:-ml-4 text-gray-500 text-sm lg:-ml-0 sm:-ml-5">
                    Translation Progress
                  </div>
                  <div
                    className={`flex items-center space-x-2 text-sm ${getStatusTextColor(
                      project.status
                    )}`}
                  >
                    <span>{project.status}</span>
                  </div>
                  <div className="flex-grow sm:-ml-4 sm:-mt-4 rounded-full h-2 w-full lg:w-40 mt-2 lg:mt-0 border bg-slate-200">
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
            </Link>

            <div className="flex mt-4 lg:ml-4 lg:mt-0">
              <button
                onClick={handleSeeAll}
                className="text-gray-600 text-right ml-auto self-end grow"
              >
                <div className="flex -space-x-3">
                  <Image
                    src={`/assets/images/${project.image}`}
                    alt={project.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <Image
                    src={`/assets/images/${project.image}`}
                    alt={project.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <Image
                    src={`/assets/images/${project.image}`}
                    alt={project.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <Image
                    src={`/assets/images/${project.image}`}
                    alt={project.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-sm border-2 border-white">
                    +2
                  </div>
                </div>
              </button>

              <div className="flex space-x-1 ml-5">
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
                  onClick={() => handleDeleteClick(project)}
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

              {/* ---View Members Modal--- */}
              {isViewMemberOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-5 flex items-center justify-center z-50">
                  <div
                    ref={modalRef}
                    className="bg-white p-0 rounded-lg shadow-lg w-96"
                  >
                    <div className="flex justify-between mt-5 px-4 pt-[6.5rem]">
                      <div className="flex">
                        <svg
                          className="mr-4"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.418 21.6663H23.8346V19.4997C23.8346 18.8243 23.6241 18.1656 23.2324 17.6154C22.8408 17.0651 22.2874 16.6505 21.6493 16.4292C21.0111 16.208 20.3199 16.191 19.6717 16.3808C19.0234 16.5705 18.4504 16.9575 18.0323 17.4879M18.418 21.6663H7.58464M18.418 21.6663V19.4997C18.418 18.789 18.2815 18.1098 18.0323 17.4879M18.0323 17.4879C17.63 16.4825 16.9357 15.6208 16.039 15.0137C15.1422 14.4067 14.0842 14.0822 13.0013 14.0822C11.9184 14.0822 10.8604 14.4067 9.96364 15.0137C9.0669 15.6208 8.3726 16.4825 7.9703 17.4879M7.58464 21.6663H2.16797V19.4997C2.16802 18.8243 2.3785 18.1656 2.77015 17.6154C3.1618 17.0651 3.71517 16.6505 4.35332 16.4292C4.99148 16.208 5.68271 16.191 6.33093 16.3808C6.97916 16.5705 7.55217 16.9575 7.9703 17.4879M7.58464 21.6663V19.4997C7.58464 18.789 7.72113 18.1098 7.9703 17.4879M16.2513 7.58301C16.2513 8.44496 15.9089 9.27161 15.2994 9.88111C14.6899 10.4906 13.8633 10.833 13.0013 10.833C12.1393 10.833 11.3127 10.4906 10.7032 9.88111C10.0937 9.27161 9.7513 8.44496 9.7513 7.58301C9.7513 6.72105 10.0937 5.8944 10.7032 5.28491C11.3127 4.67542 12.1393 4.33301 13.0013 4.33301C13.8633 4.33301 14.6899 4.67542 15.2994 5.28491C15.9089 5.8944 16.2513 6.72105 16.2513 7.58301ZM22.7513 10.833C22.7513 11.4076 22.523 11.9587 22.1167 12.3651C21.7104 12.7714 21.1593 12.9997 20.5846 12.9997C20.01 12.9997 19.4589 12.7714 19.0526 12.3651C18.6462 11.9587 18.418 11.4076 18.418 10.833C18.418 10.2584 18.6462 9.70727 19.0526 9.30094C19.4589 8.89461 20.01 8.66634 20.5846 8.66634C21.1593 8.66634 21.7104 8.89461 22.1167 9.30094C22.523 9.70727 22.7513 10.2584 22.7513 10.833ZM7.58464 10.833C7.58464 11.4076 7.35636 11.9587 6.95003 12.3651C6.5437 12.7714 5.9926 12.9997 5.41797 12.9997C4.84333 12.9997 4.29223 12.7714 3.8859 12.3651C3.47958 11.9587 3.2513 11.4076 3.2513 10.833C3.2513 10.2584 3.47958 9.70727 3.8859 9.30094C4.29223 8.89461 4.84333 8.66634 5.41797 8.66634C5.9926 8.66634 6.5437 8.89461 6.95003 9.30094C7.35636 9.70727 7.58464 10.2584 7.58464 10.833Z"
                            stroke="#475568"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h3 className="text-lg font-semibold mb-4">
                          40 MEMBERS
                        </h3>
                      </div>

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
                    <ViewMember />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

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
      {/* Delete Modal */}
      <DeleteProjectModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ProjectListPage;
