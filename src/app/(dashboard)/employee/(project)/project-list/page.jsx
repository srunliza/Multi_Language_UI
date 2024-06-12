"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { projectsData } from "@/obj/projects";
import ProjectListComponent from "../../_components/ListComponent";
import DeleteProjectModal from "@/components/DeleteProjectModal";
import ViewMember from "@/components/ViewMember"; 
import SortComponent from "@/components/SortComponent";

const ProjectListPage = () => {
  const [projects, setProjects] = useState(projectsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editProject, setEditProject] = useState({ id: null, name: "" });
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("name");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewMemberOpen, setIsViewMemberOpen] = useState(false); // State for ViewMember

  const modalRef = useRef();

  const handleSeeAll = () => {
    // Implement logic if needed
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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
    if (isModalOpen || isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, isEditing]);

  const filteredProjects = projects.filter((project) =>
    selectedStatus === "All" ? true : project.status === selectedStatus
  );

  return (
    <div className="p-4 lg:mr-0 xl:mr-0 md:mr-10 sm:p-6 md:p-8 lg:p-10 flex-1 rounded-xl bg-white shadow-lg h-screen overflow-hidden border">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-700">
        My Projects
      </h2>
      <div className="flex flex-wrap items-center mb-4">
        <SortComponent
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

      <ProjectListComponent
        projects={filteredProjects}
        handleSeeAll={handleSeeAll}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />

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
      {/* View Member */}
      {isViewMemberOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <ViewMember onClose={() => setIsViewMemberOpen(false)} />
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
