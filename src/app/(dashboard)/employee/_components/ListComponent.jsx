// components/ProjectListComponent.js

import React, { useState } from "react";
import Link from "next/link";
import MemberImage from "./MemberImage";
import ActionButtons from "./ActionButton";
import ViewMemberModal from "./ViewMemberModal";

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
      return "bg-gray-500";
  }
};

const ProjectListComponent = ({
  projects,
  handleSeeAll,
  handleEditClick,
  handleDeleteClick,
}) => {
  const [isViewMemberOpen, setIsViewMemberOpen] = useState(false);

  const handleModalClose = () => {
    setIsViewMemberOpen(false);
  };

  return (
    <div className="sm:h-screen lg:h-screen md:h-screen sm:pb-[22rem] md:pb-[22rem] lg:pb-[13rem] overflow-y-auto no-scrollbar">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white flex flex-wrap justify-between items-center gap-3 bg-slate-250 p-4 shadow rounded-lg border mb-4"
        >
          <div className="flex flex-col w-[14rem] ">
            <div className="text-md font-semibold text-gray-700">
              {project.name.length > 12
                ? `${project.name.substring(0, 12)}...`
                : project.name}
            </div>
            <div className="w-[14rem]">
              <span className="text-xs text-green-500">{project.role}</span>
            </div>
          </div>

          <div className="sm:-ml-1 ml-4 flex flex-wrap gap-3 lg:w-auto text-md text-black mt-4 lg:mt-0">
            <Link
              key={index}
              href={`/${project.role
                .replace(" ", "-")
                .toLowerCase()}/dashboard`}
              passHref
            >
              <div className="flex text-black items-center justify-center bg-gray-200 rounded-lg w-16 h-9 text-center text-xs">
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
            </Link>

            <Link
              key={index}
              href={`/${project.role.replace(" ", "-").toLowerCase()}/calendar`}
              passHref
            >
              <div className="flex items-center justify-center w-[7rem] bg-red-300 rounded-lg px-1 py-2 text-xs">
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
                {/* {project.daysLeft > 6
                  ? project.daysLeft + " days..."
                  : project.daysLeft +
                    (project.daysLeft > 1 ? " days left" : " day left")} */}
                1 day left
              </div>
            </Link>

            <div className="flex lg:-ml-0 flex-wrap items-center sm:ml-5 sm:-mt-1 gap-7 lg:mt-0 md:mt-3">
              <div className="w-[10rem] md:-ml-4 text-black text-xs lg:-ml-0 sm:-ml-5">
                Translation Progress
              </div>
              <div
                className={`flex items-center space-x-2 text-xs ${getStatusTextColor(
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
                      project.status === "COMPLETED"
                        ? "100%"
                        : project.status === "PROGRESS"
                        ? "50%"
                        : "20%",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex mt-4 lg:ml-4 lg:mt-0">
            <MemberImage
              image={project.image}
              onClick={() => setIsViewMemberOpen(true)}
            />
            <ActionButtons
              onEditClick={() => handleEditClick(project)}
              onDeleteClick={() => handleDeleteClick(project)}
            />
          </div>

          <ViewMemberModal
            isOpen={isViewMemberOpen}
            onClose={handleModalClose}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectListComponent;
