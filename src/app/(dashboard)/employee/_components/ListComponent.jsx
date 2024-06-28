"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import MemberImage from "./MemberImage";
import DropdownMenu from "@/components/DropDownMenu";

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

const getDaysLeftBgColor = (daysLeft) => {
  if (daysLeft === null) {
    return "bg-gray-300";
  } else if (daysLeft > 10) {
    return "bg-green-300";
  } else if (daysLeft > 5) {
    return "bg-yellow-300";
  } else {
    return "bg-red-300";
  }
};

const ListComponent = ({ project, currentUserRole, daysLeft }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewMemberOpen, setIsViewMemberOpen] = useState(false);
  const [viewMemberRole, setViewMemberRole] = useState(null);
  const modalRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditing(false);
    setIsDeleteModalOpen(false);
    setIsViewMemberOpen(false);
    setViewMemberRole("");
  };

  const handleSeeAll = (role) => {
    setViewMemberRole(role);
    setIsViewMemberOpen(true);
  };

  return (
    <div className="flex flex-wrap bg-white pt-3 pl-4 pr-3 rounded-2xl shadow-md border items-center border-gray-200 mb-4">
      <div className="text-sm text-gray-700 w-[15rem]">
        <Link
          href={`/${currentUserRole
            .replace(" ", "-")
            .toLowerCase()}/dashboard/${project.projectId}`}
          passHref
          className="text-base font-semibold"
        >
          {project?.projectName.length > 15
            ? `${project?.projectName.substring(0, 15)}...`
            : project?.projectName}
        </Link>
        <div className="mb-5">
          <Link
            href={`/${currentUserRole
              .replace(" ", "-")
              .toLowerCase()}/dashboard/${project.projectId}`}
            passHref
            className="text-green-500 text-xs"
          >
            {currentUserRole}
          </Link>
        </div>
      </div>

      <div className="text-black text-md flex flex-wrap items-center mb-4 justify-between gap-4">
        <Link
          href={`/${currentUserRole
            .replace(" ", "-")
            .toLowerCase()}/dashboard/${project.projectId}`}
          passHref
          className="text-base font-semibold"
        >
          <div className="bg-gray-100 text-black rounded-lg px-7 py-2 text-xs">
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
            {project?.attachmentCount}
          </div>
        </Link>

        <Link
          href={`/${currentUserRole.replace(" ", "-").toLowerCase()}/calendar/${
            project.projectId
          }`}
          passHref
        >
          <div
            className={`${getDaysLeftBgColor(
              daysLeft
            )} text-black w-[10em] rounded-lg px-3.5 py-2 text-xs`}
          >
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
            {daysLeft !== null
              ? daysLeft > 9
                ? `${daysLeft} days...`
                : `${daysLeft} day${daysLeft !== 1 ? "s" : ""} left`
              : "N/A"}
          </div>
        </Link>

        <div className="text-black w-[10rem] text-xs">Translation Progress</div>
        <div
          className={`text-xs text-left w-[5rem] ${getStatusTextColor(
            project.status
          )}`}
        >
          {project.status}
        </div>
        <div className="w-[15rem] bg-gray-200 rounded-full h-1">
          <div
            className={`h-full ${getStatusBgColor(
              project.status
            )} rounded-full`}
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
        <div className="">
          <div className="w-[13rem]">
            <MemberImage
              project={project}
              currentUserRole={currentUserRole}
              handleSeeAll={() => handleSeeAll(currentUserRole)}
              isViewMemberOpen={isViewMemberOpen}
              viewMemberRole={viewMemberRole}
              modalRef={modalRef}
              handleModalClose={handleModalClose}
              setViewMemberRole={setViewMemberRole}
              setIsViewMemberOpen={setIsViewMemberOpen}
            />
          </div>
        </div>
        {currentUserRole === "Project Leader" && (
          <div className="cursor-pointer ml-4">
            <DropdownMenu
              project={project}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListComponent;
