import Link from "next/link";
import Image from "next/image";
import React from "react";
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

const CardComponent = ({
  project,
  index,
  handleEditClick,
  handleDeleteClick,
  handleSeeAll,
  isViewMemberOpen,
  modalRef,
  handleModalClose,
}) => {
  return (
    <div
      key={index}
      className="bg-white p-4 rounded-2xl shadow-md border border-gray-200"
    >
      <div className="flex justify-between items-center mb-0 text-sm mt-2 text-gray-700">
        <h3 className="text-base font-semibold mb-1">
          {project.name.length > 15
            ? `${project.name.substring(0, 15)}...`
            : project.name}
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
                  onClick={() => handleEditClick(project)}
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
                  onClick={() => handleDeleteClick(project)}
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
                  <span className="hidden md:inline-block" name="delete">
                    Delete
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-5 text-sm text-green-500">
        {project.owner.length > 15
          ? `${project.owner.substring(0, 15)}...`
          : project.owner}
        <span className="text-gray-500 text-xs m-3 ">{project.role}</span>
      </div>

      <div className="flex items-center mb-4 justify-between">
        <Link
          key={index}
          href={`/${project.role.replace(" ", "-").toLowerCase()}/dashboard`}
          passHref
        >
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
        </Link>

        <Link
          key={index}
          href={`/${project.role.replace(" ", "-").toLowerCase()}/calendar`}
          passHref
        >
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
            {project.daysLeft > 7
              ? project.daysLeft + " days..."
              : project.daysLeft +
                (project.daysLeft > 1 ? " days left" : " day left")}
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 items-center mb-4">
        <div className="text-gray-500 w-[10rem] text-xs">
          Translation Progress
        </div>
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

      <div className="flex -space-x-2 mb-4">
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

        <button
          onClick={handleSeeAll}
          className="text-gray-600 text-right ml-auto self-end grow"
        >
          See All
        </button>

        {isViewMemberOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-5 flex items-center justify-center z-50">
            <div ref={modalRef}>
              <ViewMember />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
