"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import DropdownMenu from "@/components/DropDownMenu";
import MemberImages from "@/components/MemberComponent";

const getStatusTextColor = (status) => {
  switch (status) {
    case "COMPLETED":
      return "text-green-500";
    case "PROGRESS":
      return "text-yellow-500";
    case "PENDING":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

const getStatusBgColor = (status) => {
  switch (status) {
    case "COMPLETED":
      return "bg-green-500";
    case "PROGRESS":
      return "bg-yellow-500";
    case "PENDING":
      return "bg-red-500";
    default:
      return "bg-gray-200";
  }
};

const CardComponent = ({ project, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editProject, setEditProject] = useState(project);
  const [isViewMemberOpen, setIsViewMemberOpen] = useState(false);
  const [viewMemberRole, setViewMemberRole] = useState(null);
  const modalRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleEditChange = (e) => {
    setEditProject({ ...editProject, name: e.target.value });
  };

  const handleEditSubmit = () => {
    setIsEditing(false);
  };

  const handleModalClose = () => {
    setIsEditing(false);
    setIsDeleteModalOpen(false);
    setIsViewMemberOpen(false);
  };

  const handleDeleteConfirm = () => {
    setIsDeleteModalOpen(false);
  };

  const handleSeeAll = (role) => {
    setViewMemberRole(role);
    setIsViewMemberOpen(true);
  };

  return (
    <div
      key={index}
      className="bg-white p-4 rounded-2xl shadow-md border border-gray-200"
    >
      <div className="flex justify-between items-center text-sm text-gray-700">
        <h3 className="text-base font-semibold">
          {project?.projectName.length > 15
            ? `${project?.projectName.substring(0, 15)}...`
            : project?.projectName}
        </h3>
        {project?.members[0]?.role !== "Translator" &&
          project?.members[0]?.role !== "Developer" && (
            <DropdownMenu
              project={project}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
            />
          )}
      </div>

      <div className="mb-5">
        <span className="text-green-500 text-xs">
          {project.members[0].role}
        </span>
      </div>

      <div className="text-black text-md flex items-center mb-4 justify-between">
        <Link
          key={index}
          href={`/${project?.members[0].role
            .replace(" ", "-")
            .toLowerCase()}/dashboard`}
          passHref
        >
          <div className="bg-gray-200 text-black rounded-lg px-7 py-2 mr-5 text-xs">
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
        </Link>

        <Link
          key={index}
          href={`/${project?.members[0].role
            .replace(" ", "-")
            .toLowerCase()}/calendar`}
          passHref
        >
          <div className="bg-red-300 text-black rounded-lg px-3.5 py-2 text-xs">
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
            1 day left
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 items-center mb-4">
        <div className="text-black w-[10rem] text-xs">Translation Progress</div>
        <div
          className={`text-xs text-right ${getStatusTextColor(project.status)}`}
        >
          {project.status}
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1 mb-6">
        <div
          className={`h-full ${getStatusBgColor(project.status)} rounded-full`}
          style={{
            width:
              project.status === "COMPLETED"
                ? "100%"
                : project.status === "PROGRESS"
                ? "50%"
                : "20%",
          }}
        ></div>
      </div>

      <MemberImages
        project={project}
        handleSeeAll={handleSeeAll}
        isViewMemberOpen={isViewMemberOpen}
        viewMemberRole={viewMemberRole}
        modalRef={modalRef}
        handleModalClose={handleModalClose}
      />
    </div>
  );
};

export default CardComponent;
