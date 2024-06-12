import DropdownMenu from "@/components/DropDownMenu";
import MemberImages from "@/components/MemberComponent";
import Link from "next/link";
import React, { useRef, useState } from "react";

const getStatusTextColor = (status) => {
  switch (status) {
    case "Completed":
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
    case "Completed":
      return "bg-green-500";
    case "Progress":
      return "bg-yellow-500";
    case "Pending":
      return "bg-red-500";
    default:
      return "bg-gray-200";
  }
};

const CardComponent = ({
  project,
  index,
  handleEditClick,
  handleDeleteClick,
}) => {
  const [isViewMemberOpen, setIsViewMemberOpen] = useState(false);
  const [viewMemberRole, setViewMemberRole] = useState(null);
  const modalRef = useRef(null);

  const handleSeeAll = () => {
    setViewMemberRole(project.role.toLowerCase());
    setIsViewMemberOpen(true);
  };

  const handleModalClose = () => {
    setIsViewMemberOpen(false);
    setViewMemberRole(null);
  };

  return (
    <div
      key={index}
      className="bg-white p-4 rounded-2xl shadow-md border border-gray-200"
    >
      <div className="flex justify-between items-center text-sm mt-2 text-gray-700">
        <h3 className="text-base font-semibold mb-1">
          {project.name.length > 15
            ? `${project.name.substring(0, 15)}...`
            : project.name}
        </h3>
        <DropdownMenu
          project={project}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      </div>

      <div className="mb-5">
        <span className="text-green-500 text-xs">{project.role}</span>
      </div>

      <div className="text-black text-md flex items-center mb-4 justify-between">
        <Link
          key={index}
          href={`/${project.role.replace(" ", "-").toLowerCase()}/dashboard`}
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
          href={`/${project.role.replace(" ", "-").toLowerCase()}/calendar`}
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
            {project.daysLeft > 7
              ? project.daysLeft + " days..."
              : project.daysLeft +
                (project.daysLeft > 1 ? " days left" : " day left")}
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
              project.status === "Completed"
                ? "100%"
                : project.status === "Progress"
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
