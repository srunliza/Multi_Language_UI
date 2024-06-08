import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ViewMember from "@/components/ViewMember";

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

const ProjectListComponent = ({
  projects,
  handleSeeAll,
  handleEditClick,
  handleDeleteClick,
}) => {
  const [isViewMemberOpen, setIsViewMemberOpen] = React.useState(false);
  const modalRef = useRef();

  const handleModalClose = () => {
    setIsViewMemberOpen(false);
  };

  return (
    <div className="sm:h-screen lg:h-screen md:h-screen sm:pb-[22rem] md:pb-[22rem] lg:pb-[13rem] overflow-y-auto no-scrollbar">
      {projects.map((project, index) => (
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
            <div className="w-[10rem] text-sm text-green-500">
              {project.owner.length > 15
                ? `${project.owner.substring(0, 15)}...`
                : project.owner}
              <span className="text-gray-500 text-xs m-3 ">{project.role}</span>
            </div>
          </div>

          <div className="sm:-ml-1 ml-4 flex flex-wrap items-center gap-3 w-full lg:w-auto text-sm mt-4 lg:mt-0">
            <Link
              key={index}
              href={`/${project.role.replace(" ", "-").toLowerCase()}/dashboard`}
              passHref
            >
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
            </Link>

            <Link
              key={index}
              href={`/${project.role.replace(" ", "-").toLowerCase()}/calendar`}
              passHref
            >
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
            </Link>

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
                      project.status === "Completed"
                        ? "100%"
                        : project.status === "Progress"
                        ? "50%"
                        : "20%",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex mt-4 lg:ml-4 lg:mt-0">
            <button
              onClick={() => setIsViewMemberOpen(true)}
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
          </div>

          {isViewMemberOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-5 flex items-center justify-center z-50">
              <div ref={modalRef}>
                <ViewMember onClose={handleModalClose} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectListComponent;
